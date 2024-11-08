"use client";
import styles from "@/styles/layouts/header.module.css";
import { useEffect, useState } from "react";

export default function Header({ link, setLink }) {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (window.scrollY > 10) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		});
	}, [scroll]);

	function scrollIntoView(anchor) {
		document?.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
		setLink(anchor);
	}
	return (
		<header>
			<div className={styles.container} data-scroll={scroll}>
				<nav className={styles.nav}>
					<ul className={styles.links}>
						<li
							data-active={link === "hero"}
							onClick={(e) => {
								e.preventDefault();
								scrollIntoView("hero");
							}}>
							Accueil
						</li>
						<li
							data-active={link === "about"}
							onClick={(e) => {
								e.preventDefault();
								scrollIntoView("about");
							}}>
							À propos de moi
						</li>
						<li
							data-active={link === "projects"}
							onClick={(e) => {
								e.preventDefault();
								scrollIntoView("projects");
							}}>
							Réalisations
						</li>
						<li
							data-active={link === "services"}
							onClick={(e) => {
								e.preventDefault();
								scrollIntoView("services");
							}}>
							Services
						</li>
						<li
							data-active={link === "contact"}
							onClick={(e) => {
								e.preventDefault();
								scrollIntoView("contact");
							}}>
							Contact
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
