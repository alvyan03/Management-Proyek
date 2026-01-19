import { PrismaClient as SatriaClient } from "../../prisma/generated/satria-client";
import { PrismaClient as SatriaPromptClient } from "../../prisma/generated/satria-prompt-client";

export const satria = new SatriaClient({
	log: ["warn", "error"],
});

export const prompt = new SatriaPromptClient({
	log: ["warn", "error"],
});
