import { type ReactNode } from "react";

type InfoBoxProps = {
	heading: string;
	backgroundColor?: string;
	textColor?: string;
	buttonInfo: {
		link: string;
		backgroundColor: string;
		text: string;
	};
	children: ReactNode;
};

function InfoBox({
	heading,
	backgroundColor = "bg-gray-100",
	textColor = "text-gray-800",
	buttonInfo,
	children,
}: InfoBoxProps) {
	return (
		<div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
			<h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
			<p className={`${textColor} mt-2 mb-4`}>{children}</p>
			<a
				href={buttonInfo.link}
				className={`${buttonInfo.backgroundColor} inline-block text-white rounded-lg px-4 py-2 hover:opacity-80`}
			>
				{buttonInfo.text}
			</a>
		</div>
	);
}

export default InfoBox;
