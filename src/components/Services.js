"use client";
import styles from "@/styles/components/services.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SectionHeader from "@/layouts/SectionHeader";

export default function Services({ setLink }) {
	const { ref, inView, entry } = useInView({
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView) {
			setLink("services");
		}
	}, [inView]);

	const subtitle = `En tant que développeur full-stack, je prends en charge chaque étape
						de votre projet, de la conception au développement de l'interface
						utilisateur à la gestion des bases de données et à la mise en ligne
						de l’application.`;

	return (
		<section className={styles.container} id="services" ref={ref}>
			<SectionHeader title={"Une solution pour tous"} subtitle={subtitle} />

			<div className={styles.cards}>
				<div className={styles.card}>
					<Image
						src={"/images/black_suit_spider_man.webp"}
						alt="black-spider-man"
						fill
						quality={100}
						className={styles.background}
					/>
					<div className={styles.card__content}>
						<div className={styles.card__title}>
							<h3>Back-end</h3>
						</div>
						<div className={styles.card__description}>
							<p>
								Je tisse des API fiables, sécurise vos données et gère
								efficacement l'authentification.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<Image
						src={"/images/spider_man_full_stack.webp"}
						alt="black-spider-man"
						fill
						quality={100}
						className={styles.background}
					/>
					<div className={styles.card__content}>
						<div className={styles.card__title}>
							<h3>Full-stack</h3>
						</div>
						<div className={styles.card__description}>
							<p>
								Je gère l'ensemble du cycle de développement de votre
								application web, de la conception à la mise en production.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<Image
						src={"/images/spider_man_front_end.webp"}
						alt="black-spider-man"
						fill
						quality={100}
						className={styles.background}
					/>
					<div className={styles.card__content}>
						<div className={styles.card__title}>
							<h3>Front-end</h3>
						</div>
						<div className={styles.card__description}>
							<p>
								Je crée des interfaces intuitives et responsive grâce à des
								designs soignés et des interactions dynamiques.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
