import { Request } from "express";
import { prompt } from "../config/db";
import { currentWIBDate } from "../utils/helpers";

const createActivityLog = async (
	req: Request,
	action: string,
	description: string
): Promise<void> => {
	try {
		await prompt.activity_logs.create({
			data: {
				user_id: req?.user?.id || null,
				action: action,
				description: description,
				ip_address: req.ip,
				user_agent: req.headers["user-agent"] || "",
				created_at: currentWIBDate(),
			},
		});
	} catch (err) {
		console.log("Failed to insert log error:", err);
	}
};

const activityLogService = {
	createActivityLog,
};

export default activityLogService;
