import { z } from "zod";

export const createGroupProductSchema = z.object({
	body: z.object({
		groupProductName: z
			.string({ message: "Group product name is required" })
			.trim()
			.min(3, { message: "Group product name is required" }),
		description: z
			.string({ message: "Description is required" })
			.trim()
			.min(3, { message: "Description is required" }),
	}),
});

export const updateGroupProductSchema = z.object({
	params: z.object({
		id: z.coerce.number({ message: "Group product ID is required" }).int().positive({
			message: "Group product ID is required",
		}),
	}),
	body: z.object({
		groupProductName: z
			.string({ message: "Group product name is required" })
			.trim()
			.min(3, { message: "Group product name is required" }),
		description: z
			.string({ message: "Description is required" })
			.trim()
			.min(3, { message: "Description is required" }),
	}),
});

export type ICreateGroupProductSchema = z.infer<typeof createGroupProductSchema>;
export type IUpdateGroupProductSchema = z.infer<typeof updateGroupProductSchema>;
