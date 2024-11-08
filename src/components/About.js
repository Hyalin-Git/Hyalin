"use client";
import styles from "@/styles/components/about.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { montserrat } from "@/libs/font";
import SectionHeader from "@/layouts/SectionHeader";

export default function About({ setLink }) {
	const [spideyDrop, setSpideyDrop] = useState(false);

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

	const { ref, inView, entry } = useInView({
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView) {
			setLink("about");

			setSpideyDrop(true);
		}
	}, [inView]);

	return (
		<section className={styles.container} id="about" ref={ref}>
			<SectionHeader title={"À propos de moi"} subtitle={"Des faits divers"} />
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<div className={styles.card}>
						<ul className={styles.list}>
							{list?.map((elt, idx) => (
								<li key={idx}>
									<Image src={elt} alt="icon" width={30} height={30} />
								</li>
							))}
						</ul>
						<p className={styles.bio}>
							Le développeur web sympa du quartier, passionné depuis toujours
							par l'informatique le développement web a été pour moi un
							véritable coup de coeur d'abord diplômé du BAC Pro Commerce, je me
							suis finalement orienté vers le déveleppement web et validé une
							formation d'état de niveau BAC +2 qui m'a permis d'acquérir une
							solide base technique. J'ai de suite été pris de passion pour le
							développement web, j'adore la créativité et la liberté que dégage
							cette profession. Aujourd'hui où j'en suis ? Je continue
							d'apprendre par moi-même, de progresser en créant des projets
							personnels afin de renforcer mes connaissances sur les langages
							déjà maîtrisé et d'apprendre de nouveaux langages.
						</p>
					</div>
					<div className={styles.button}>
						<button className={montserrat.className}>Télécharger mon CV</button>
					</div>
				</div>
				<div className={styles.right}>
					<Image
						src={"/images/spider-man-upside-down.png"}
						alt="spidey"
						width={600}
						height={600}
						className={spideyDrop ? styles.drop : ""}
						onAnimationEnd={(e) => {
							e.target.classList.add(styles.balance);
						}}
					/>
				</div>
			</div>
		</section>
	);
}
