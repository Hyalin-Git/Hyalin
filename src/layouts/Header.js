"use client";
import styles from "@/styles/layouts/header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
	const [scroll, setScroll] = useState(false);
	const [anchor, setAnchor] = useState("");

	useEffect(() => {
		window.addEventListener("hashchange", (e) => {
			console.log("ma teub");
			setAnchor(window.location.hash);
		});
	}, []);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (window.scrollY > 10) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		});
	}, [scroll]);
	return (
		<header>
			<div className={styles.container} data-scroll={scroll}>
				<nav className={styles.nav}>
					<ul className={styles.links}>
						<li data-active={anchor === "#" || anchor === ""}>
							<a href="#">Accueil</a>
						</li>
						<li data-active={anchor === "#about"}>
							<a href="#about">À propos de moi</a>
						</li>
						<li data-active={anchor === "#projects"}>
							<a href="#projects">Réalisations</a>
						</li>
						<li data-active={anchor === "#services"}>
							<a href="#services">Services</a>
						</li>
						<li>Contact</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
