import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8000;
export const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || "";
