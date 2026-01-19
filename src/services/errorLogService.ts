import { Request } from "express";
import { prompt } from "../config/db";
import { currentWIBDate } from "../utils/helpers";

const createErrorLog = async (err: any, req: Request): Promise<void> => {
	try {
		await prompt.error_logs.create({
			data: {
				message: err.message,
				stack_trace: err.stack || "",
				code: err?.status || "500",
				method: req.method,
				url: req.originalUrl,
				params: JSON.stringify(req.params) || "",
				query: JSON.stringify(req.query) || "",
				body: JSON.stringify(req.body) || "",
				headers: JSON.stringify({ "user-agent": req.headers["user-agent"] }) || "",
				user_id: req.user?.id || null,
				ip_address: req.ip,
				created_at: currentWIBDate(),
			},
		});
	} catch (err) {
		console.log("Failed to insert log error:", err);
	}
};

const errorLogService = {
	createErrorLog,
};

export default errorLogService;
