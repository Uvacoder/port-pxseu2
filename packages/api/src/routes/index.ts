import { Router } from "express";
import { router as v2 } from "./v2";

export const router = Router();

router.use("/v2", v2);

router.use((_, res) => {
	res.api(404, {
		message: "Not Found",
	});
});