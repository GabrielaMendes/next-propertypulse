"use client";

import { useParams } from "next/navigation";

function PropertyPage() {
	const { id } = useParams();

	return (
		<div>
			Propery Page <span>{id}</span>
		</div>
	);
}

export default PropertyPage;
