import { type NextApiRequest } from "next";

import connectDB from "@/config/database";

export async function GET(request: NextApiRequest) {
	try {
		await connectDB();

		return new Response("Hello world", { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response("Sometrhing went wrong", { status: 500 });
	}
}
