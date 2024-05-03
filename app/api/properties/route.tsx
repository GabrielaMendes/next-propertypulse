import { type NextApiRequest } from "next";

import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties
export async function GET(request: NextApiRequest) {
	try {
		await connectDB();

		const properties = await Property.find({});

		return new Response(JSON.stringify(properties), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response("Sometrhing went wrong", { status: 500 });
	}
}
