import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";

import { type Property } from "./properties/page";
import { fetchProperties } from "@/utils/requests";

async function HomePage() {
	const properties: Property[] = await fetchProperties();

	return (
		<>
			<Hero />
			<InfoBoxes />
			<HomeProperties properties={properties} />
		</>
	);
}

export default HomePage;
