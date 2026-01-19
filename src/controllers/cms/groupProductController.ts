import { Request, Response } from "express";
import { prompt } from "../../config/db";
import { currentWIBDate } from "../../utils/helpers";
import errorLogService from "../../services/errorLogService";
import activityLogService from "../../services/activityLogService";
import {
	createGroupProductSchema,
	updateGroupProductSchema,
} from "../../schemas/groupProductSchemas";

const paging = async (req: Request, res: Response): Promise<void> => {
	try {
		const { page, limit, search = "", sort = "id", order = "asc" } = req.query;

		// Define parameters
		const pageNumber = parseInt((page as string) || "1", 10);
		const pageSize = parseInt((limit as string) || "10", 10);
		const skip = (pageNumber - 1) * pageSize;
		const take = pageSize;
		const validSortFields = ["id", "group_product_name", "created_at"];
		const sortBy = validSortFields.includes(sort as string) ? (sort as string) : "id";
		const sortOrder = (order as string).toLowerCase() === "asc" ? "asc" : "desc";

		// Define where clause
		const whereClause = {
			group_product_name: { contains: search as string },
		};

		// Get data
		const groupProducts = await prompt.ms_group_products.findMany({
			where: whereClause,
			orderBy: {
				[sortBy]: sortOrder,
			},
			skip,
			take,
		});

		// Get total data
		const totalData = await prompt.ms_group_products.count({
			where: whereClause,
		});

		// Log activity
		await activityLogService.createActivityLog(req, "Read", "Viewed group product list");

		res.status(200).json({
			success: true,
			message: "Get group product successfully",
			data: {
				currentPage: pageNumber,
				totalPages: Math.ceil(totalData / pageSize),
				totalItems: totalData,
				data: groupProducts,
			},
		});
	} catch (err) {
		await errorLogService.createErrorLog(err, req);
		console.log(err);
		if (err instanceof Error) {
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}
};

const create = async (req: Request, res: Response): Promise<void> => {
	try {
		// Validate request
		const validation = createGroupProductSchema.safeParse({
			body: req.body,
		});
		if (!validation.success) {
			const errors = validation.error.issues.map((err: any) => err.message);
			res.status(400).json({ success: false, message: errors.join(", ") });
			return;
		}
		const { groupProductName, description } = validation.data.body;

		// Check if group product name already exists
		const existingGroupProduct = await prompt.ms_group_products.findFirst({
			where: { group_product_name: groupProductName },
		});
		if (existingGroupProduct) {
			res.status(400).json({ success: false, message: "Group product name already exists" });
			return;
		}

		// Create group product
		const newGroupProduct = await prompt.ms_group_products.create({
			data: {
				group_product_name: groupProductName,
				group_product_description: description,
				created_by: req.user?.id,
				created_at: currentWIBDate(),
				updated_by: req.user?.id,
				updated_at: currentWIBDate(),
			},
		});

		// Log activity
		await activityLogService.createActivityLog(
			req,
			"Create",
			`Created group product ${groupProductName}`
		);

		res.status(201).json({
			success: true,
			message: "Group product created successfully",
			data: newGroupProduct,
		});
	} catch (err) {
		await errorLogService.createErrorLog(err, req);
		console.log(err);
		if (err instanceof Error) {
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}
};

const show = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;

		if (!id || isNaN(parseInt(id, 10))) {
			res.status(400).json({ success: false, message: "Group product ID is required" });
		}

		// Get group product by ID
		const groupProduct = await prompt.ms_group_products.findUnique({
			where: { id: parseInt(id, 10) },
		});
		if (!groupProduct) {
			res.status(404).json({ success: false, message: "Group product not found" });
			return;
		}

		// Log activity
		await activityLogService.createActivityLog(req, "Read", `Viewed group product ${id}`);

		res.status(200).json({
			success: true,
			message: "Get group product successfully",
			data: groupProduct,
		});
	} catch (err) {
		await errorLogService.createErrorLog(err, req);
		console.log(err);
		if (err instanceof Error) {
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}
};

const update = async (req: Request, res: Response): Promise<void> => {
	try {
		// Validate request
		const validation = updateGroupProductSchema.safeParse({
			params: req.params,
			body: req.body,
		});
		if (!validation.success) {
			const errors = validation.error.issues.map((err) => err.message);
			res.status(400).json({ success: false, message: errors.join(", ") });
			return;
		}
		const { id } = validation.data.params;
		const { groupProductName, description } = validation.data.body;

		// Check if group product exists
		const existingGroupProduct = await prompt.ms_group_products.findUnique({
			where: { id },
		});
		if (!existingGroupProduct) {
			res.status(404).json({ success: false, message: "Group product not found" });
			return;
		}

		// Check if group product name already exists
		const duplicateGroupProduct = await prompt.ms_group_products.findFirst({
			where: {
				id: { not: id },
				group_product_name: groupProductName,
			},
		});
		if (duplicateGroupProduct) {
			res.status(400).json({ success: false, message: "Group product name already exists" });
			return;
		}

		// Update group product
		const updatedGroupProduct = await prompt.ms_group_products.update({
			where: { id },
			data: {
				group_product_name: groupProductName,
				group_product_description: description,
				updated_by: req.user?.id,
				updated_at: currentWIBDate(),
			},
		});

		// Log activity
		await activityLogService.createActivityLog(
			req,
			"Update",
			`Updated group product ${groupProductName}`
		);

		res.status(200).json({
			success: true,
			message: "Group product updated successfully",
			data: updatedGroupProduct,
		});
	} catch (err) {
		await errorLogService.createErrorLog(err, req);
		console.log(err);
		if (err instanceof Error) {
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}
};

const destroy = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;

		// Validate request
		if (!id || isNaN(parseInt(id, 10))) {
			res.status(400).json({ success: false, message: "Group product ID is required" });
			return;
		}

		// Check if group product exists
		const existingGroupProduct = await prompt.ms_group_products.findUnique({
			where: { id: parseInt(id, 10) },
		});
		if (!existingGroupProduct) {
			res.status(404).json({ success: false, message: "Group product not found" });
			return;
		}

		// Soft delete group product
		const deletedGroupProduct = await prompt.ms_group_products.update({
			where: { id: parseInt(id, 10) },
			data: {
				deleted_by: req.user?.id,
				deleted_at: currentWIBDate(),
			},
		});

		// Log activity
		await activityLogService.createActivityLog(
			req,
			"Delete",
			`Deleted group product ${existingGroupProduct.group_product_name}`
		);

		res.status(200).json({
			success: true,
			message: "Group product deleted successfully",
			data: deletedGroupProduct,
		});
	} catch (err) {
		await errorLogService.createErrorLog(err, req);
		console.log(err);
		if (err instanceof Error) {
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}
};

const restore = async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;

		// Validate request
		if (!id || isNaN(parseInt(id, 10))) {
			res.status(400).json({ success: false, message: "Group product ID is required" });
			return;
		}

		// Check if group product exists
		const existingGroupProduct = await prompt.ms_group_products.findUnique({
			where: { id: parseInt(id, 10) },
		});
		if (!existingGroupProduct) {
			res.status(404).json({ success: false, message: "Group product not found" });
			return;
		}
		if (!existingGroupProduct.deleted_at) {
			res.status(400).json({ success: false, message: "Group product is not deleted" });
			return;
		}

		// Restore group product
		const restoredGroupProduct = await prompt.ms_group_products.update({
			where: { id: parseInt(id, 10) },
			data: {
				deleted_by: null,
				deleted_at: null,
				updated_by: req.user?.id,
				updated_at: currentWIBDate(),
			},
		});

		// Log activity
		await activityLogService.createActivityLog(
			req,
			"Restore",
			`Restored group product ${existingGroupProduct.group_product_name}`
		);

		res.status(200).json({
			success: true,
			message: "Group product restored successfully",
			data: restoredGroupProduct,
		});
	} catch (err) {
		await errorLogService.createErrorLog(err, req);
		console.log(err);
		if (err instanceof Error) {
			res.status(500).json({ success: false, message: "Internal server error" });
		}
	}
};

const groupProductController = {
	paging,
	create,
	show,
	update,
	destroy,
	restore,
};

export default groupProductController;
