import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/requests";

export type Property = {
	_id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	type: string;
	description?: string;
	location: {
		street?: string;
		city?: string;
		state: string;
		zipcode?: string;
	};
	beds: number;
	baths: number;
	square_feet: number;
	amenities: string[];
	rates: {
		nightly?: number;
		weekly?: number;
		monthly?: number;
	};
	seller_info: {
		name?: string;
		email?: string;
		phone?: string;
	};
	images: string[];
	is_featured?: boolean;
};

async function PropertiesPage() {
	const properties: Property[] = await fetchProperties();

	// Sort properties by date
	properties.sort(
		(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
	);

	return (
		<section className="px-4 py-6">
			<div className="container-xl lg:container m-auto px-4 py-6">
				{properties.length === 0 ? (
					<p>No properties found</p>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{properties.map((property) => (
							<PropertyCard key={property._id} property={property} />
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export default PropertiesPage;
