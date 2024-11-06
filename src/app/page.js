import Header from "@/layouts/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<main>
				<About />
				<Projects />
			</main>
			<footer></footer>
		</div>
	);
}
