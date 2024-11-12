"use client";
import styles from "@/styles/components/about.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { anton, montserrat } from "@/libs/font";
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
				<div className={`${styles.left} ${anton.className}`}>
					<div className={styles.card}>
						<div className={styles.pages}>
							<div className={styles.page}>
								<div className={styles.page__title}>
									<span>New clues Foreshadow</span>
									<span>SPIDEY GOBLIN IN ATTACK</span>
								</div>
								<div className={styles.page__number}>
									<span>page 3</span>
								</div>
							</div>
							<div className={styles.page}>
								<div className={styles.page__title}>
									<span>Police: New leads in Solving</span>
									<span>SPIDER MAN CRIMES SPREE</span>
								</div>
								<div className={styles.page__number}>
									<span>page 3</span>
								</div>
							</div>
						</div>
						<div className={`${styles.text} ${montserrat.className}`}>
							<span>New york's Favorite Newspaper Since 1932</span>
						</div>
						<div className={styles.logo}>
							<Image
								src={"/images/daily-bugle.JPG"}
								alt="daily-bugle"
								sizes="100vw"
								width={0}
								height={0}
								style={{
									width: "100%",
									height: "auto",
									marginBottom: "-8px",
								}}
								quality={100}
							/>
						</div>
						<div className={`${styles.text} ${montserrat.className}`}>
							<span>MORNING EDITION/Partly Cloudy/Weather; Page 28</span>
						</div>
						<div className={styles.title}>
							<span>WANTED!</span>
						</div>
						<div
							className={`${styles.article__content} ${montserrat.className}`}>
							{/* left */}
							<div className={styles.content__left}>
								{/* description */}
								<div className={styles.left__description}>
									<p>
										Le développeur web sympa du quartier, passionné depuis
										toujours par l'informatique le développement web a été pour
										moi un véritable coup de coeur d'abord diplômé du BAC Pro
										Commerce, je me suis finalement orienté vers le
										déveleppement web et validé une formation d'état de niveau
										BAC +2 qui m'a permis d'acquérir une solide base technique.
										J'ai de suite été pris de passion pour le développement web,
										j'adore la créativité et la liberté que dégage cette
										profession. Aujourd'hui où j'en suis ? Je continue
										d'apprendre par moi-même, de progresser en créant des
										projets personnels afin de renforcer mes connaissances sur
										les langages déjà maîtrisé et d'apprendre de nouveaux
										langages.
									</p>
								</div>
								{/* skills */}
								<div className={styles.left__skills}></div>
							</div>
							{/* right */}
							<div className={styles.content__right}>
								<Image
									src={"/images/daily-bugle-spidey.webp"}
									alt="daily-bugle"
									sizes="100vw"
									width={0}
									height={0}
									style={{
										width: "100%",
										height: "auto",
										marginBottom: "-5px",
									}}
									quality={100}
								/>
							</div>
						</div>
					</div>
					{/* <div className={styles.button}>
						<button className={montserrat.className}>Télécharger mon CV</button>
					</div> */}
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
