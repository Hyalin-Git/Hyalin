"use client";
import styles from "@/styles/layouts/header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
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
	return (
		<header>
			<div className={styles.container} data-scroll={scroll}>
				<nav className={styles.nav}>
					<ul className={styles.links}>
						<li>Accueil</li>
						<li>À propos de moi</li>
						<li>Réalisations</li>
						<li>Services</li>
						<li>Contact</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
