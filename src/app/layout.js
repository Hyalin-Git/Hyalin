import { montserrat } from "@/libs/font";
import "@/styles/globals.css";

export const metadata = {
	title: "Hyalin | Développeur web full-stack",
	description: "Le développeur web sympa du quartier, je tisse vos page web.",
	keywords: [
		"Développeur web full-stack",
		"Front-end",
		"Back-end",
		"Full-stack",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
