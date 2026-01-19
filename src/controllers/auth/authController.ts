import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { currentWIBDate } from "./../../utils/helpers";
import { satria } from "../../config/db";
import errorLogService from "../../services/errorLogService";
import activityLogService from "../../services/activityLogService";

// Muat file .env
dotenv.config();

// Secret key untuk JWT
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
	throw new Error("JWT_SECRET is not defined in the environment variables");
}

// Register user baru
export const registerUser = async (req: Request, res: Response) => {
	const { email, username, password, emailSf, department, division, companyName, personalNumber } =
		req.body;

	try {
		// Cek apakah email sudah ada di database
		const existingUser = await satria.user.findFirst({
			where: {
				email: email,
			},
		});

		if (existingUser) {
			res.status(400).json({ success: false, message: "Email already exists" });
			return;
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Insert user baru ke dalam database
		const newUser = await satria.user.create({
			data: {
				email: email,
				name: username,
				password: hashedPassword,
				email_sf: emailSf,
				department: department,
				division: division,
				company_name: companyName,
				personal_number: personalNumber,
				is_active: 1,
				created_at: currentWIBDate(),
				updated_at: currentWIBDate(),
			},
		});

		res.status(201).json({
			success: true,
			message: "User registered successfully",
			data: { newUser },
		});
	} catch (err: any) {
		console.error(err);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};

// Login user
export const loginUser = async (req: Request, res: Response): Promise<void> => {
	const { email, password } = req.body;

	try {
		// Get user by email
		const user = await satria.user.findFirst({
			where: { email },
		});

		// If user not found
		if (!user) {
			res.status(401).json({ success: false, message: "Invalid credentials" });
			return;
		}

		// Password verification
		const isValidPassword = await bcrypt.compare(password, user.password);

		// If password is invalid
		if (!isValidPassword) {
			res.status(401).json({ success: false, message: "Invalid credentials" });
			return;
		}

		// Generate JWT token
		const token = jwt.sign(
			{
				id: user.id,
				name: user.name,
				email: user.email,
				email_sf: user.email_sf,
				department: user.department,
				division: user.division,
				company_name: user.company_name,
				personal_number: user.personal_number,
			},
			JWT_SECRET,
			{
				expiresIn: "24h",
			}
		);

		// Log Activity
		await activityLogService.createActivityLog(
			req,
			"Login",
			`User ${user.name} logged in successfully`
		);

		res.json({
			success: true,
			message: "Login successful",
			data: { user, access_token: token, token_type: "Bearer" },
		});
	} catch (err) {
		await errorLogService.createErrorLog(err, req);
		console.error(err);
		res.status(500).json({ success: false, error: "Error during login" });
	}
};

// Get user profile
export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
	try {
		const userId = req.user?.id;

		// Get user by ID
		const user = await satria.user.findUnique({
			where: { id: userId },
		});

		if (!user) {
			res.status(404).json({ success: false, message: "User not found" });
			return;
		}

		res.json({
			success: true,
			message: "User profile retrieved successfully",
			data: user,
		});
	} catch (err) {
		await errorLogService.createErrorLog(err, req);
		console.error(err);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};
