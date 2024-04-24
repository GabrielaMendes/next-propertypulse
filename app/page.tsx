import Link from "next/link";

function HomePage() {
	return (
		<div>
			<h1 className="text-3xl">Welcom</h1>
			<Link href="/properties">Show Properties</Link>
		</div>
	);
}

export default HomePage;
