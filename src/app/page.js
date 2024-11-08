"use client";
import Header from "@/layouts/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { useState } from "react";

export default function Home() {
	const [link, setLink] = useState("");
	return (
		<div>
			<Header link={link} setLink={setLink} />
			<Hero setLink={setLink} />
			<main>
				<About setLink={setLink} />
				<Projects setLink={setLink} />
				<Services setLink={setLink} />
				<Contact setLink={setLink} />
			</main>
			<footer></footer>
		</div>
	);
}
