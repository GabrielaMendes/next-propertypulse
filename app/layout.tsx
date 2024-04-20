import "@/assets/styles/globals.css";

export const metadata = {
	title: "PropertyPulse | Find The Perfect Rental",
	description: "Find your dream rental property",
	keywords: "rental, find rentals, find properties",
};

function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<div>{children}</div>
			</body>
		</html>
	);
}

export default MainLayout;
