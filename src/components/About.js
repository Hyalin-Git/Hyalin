"use client";
import styles from "@/styles/components/about.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
	const options = {
		root: document.querySelector("#about"),
		rootMargin: "0px",
		threshold: 0.5,
	};
	const callback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				imageRef.current.classList.add(styles.drop);
			} else {
				imageRef.current.classList.remove(styles.drop);
			}
		});
	};
	const observer = new IntersectionObserver(callback, options);
	const aboutRef = useRef("");
	const imageRef = useRef("");

	useEffect(() => {
		observer.observe(aboutRef.current);
		imageRef.current.addEventListener("animationend", () => {
			imageRef.current.classList.add(styles.balance);
		});
	}, [observer, aboutRef]);
	const list = [
		"/html.svg",
		"/css.svg",
		"/sass.svg",
		"/bootstrap.svg",
		"/styled-components.svg",
		"/javascript.svg",
		"/typescript.svg",
		"/react.svg",
		"/next.svg",
		"/redux.svg",
		"/nodeJs.svg",
		"/expressJs.svg",
		"/mySQL.svg",
		"/mongoDB.svg",
	];
	return (
		<div className={styles.container} id="about" ref={aboutRef}>
			<div className={styles.left}>
				<div className={styles.card}>
					<ul className={styles.list}>
						{list?.map((elt, idx) => {
							return (
								<li key={idx}>
									<Image src={elt} alt="icon" width={30} height={30} />
								</li>
							);
						})}
					</ul>
					<p className={styles.bio}>
						Le développeur web sympa du quartier, passionné depuis toujours par
						l'informatique le développement web a été pour moi un véritable coup
						de coeur d'abord diplômé du BAC Pro Commerce, je me suis finalement
						orienté vers le déveleppement web et validé une formation d'état de
						niveau BAC +2 qui m'a permis d'acquérir une solide base technique.
						J'ai de suite été pris de passion pour le développement web, j'adore
						la créativité et la liberté que dégage cette profession. Aujourd'hui
						où j'en suis ? Je continue d'apprendre par moi-même, de progresser
						en créant des projets personnels afin de renforcer mes connaissances
						sur les langages déjà maîtrisé et d'apprendre de nouveaux langages.
					</p>
				</div>
				<div className={styles.button}>
					<button>Télécharger mon CV</button>
				</div>
			</div>
			<div className={styles.right}>
				<Image
					src={"/images/spider-man-upside-down.png"}
					alt="spidey"
					width={600}
					height={600}
					ref={imageRef}
				/>
			</div>
		</div>
	);
}
