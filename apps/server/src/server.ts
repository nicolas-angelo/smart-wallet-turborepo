import express from "express";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ThirdwebAuth } from "@thirdweb-dev/auth/express";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import { PORT, WALLET_PRIVATE_KEY } from "./constants";

const app = express();
const server = http.createServer(app);

app.use(cookieParser());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { authRouter, authMiddleware, getUser } = ThirdwebAuth({
	domain: "localhost:8000",
	wallet: new PrivateKeyWallet(WALLET_PRIVATE_KEY),
});

app.use("/auth", authRouter);
app.use(authMiddleware);

app.get("/", (_req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/secret", async (req, res) => {
	const user = await getUser(req);

	if (!user) {
		return res.status(401).json({ message: "Not authorized." });
	}

	return res.status(200).json({
		message: "This is a secret... don't tell anyone.",
	});
});

server.listen(PORT, () =>
	console.log(`⚡️[server]: running at http://localhost:${PORT} 🚀`)
);
