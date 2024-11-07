import Header from "@/layouts/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<main>
				<About />
				<Projects />
				<Services />
				<Contact />
			</main>
			<footer></footer>
		</div>
	);
}
