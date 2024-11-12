import { Montserrat, Anton } from "next/font/google";

export const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const anton = Anton({
	subsets: ["latin"],
	weight: ["400"],
});
