import { type NextApiRequest } from "next";
import { NextResponse } from "next/server";

import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/:id
export async function GET(
	req: NextApiRequest,
	{ params }: { params: { id: string } }
) {
	try {
		await connectDB();

		const property = await Property.findById(params.id);
		if (!property) {
			return new NextResponse("Property not found", { status: 404 });
		}

		return new NextResponse(JSON.stringify(property), { status: 200 });
	} catch (error) {
		console.log(error);
		return new NextResponse("Something went wrong", { status: 500 });
	}
}
