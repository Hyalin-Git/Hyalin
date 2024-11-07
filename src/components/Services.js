import styles from "@/styles/components/services.module.css";
import Image from "next/image";

export default function Services() {
	return (
		<div className={styles.container} id="services">
			<div className={styles.header}>
				<div className={styles.title}>
					<h2>Une solution pour tous</h2>
				</div>
				<div className={styles.description}>
					<p>
						En tant que développeur full-stack, je prends en charge chaque étape
						de votre projet, de la conception au développement de l'interface
						utilisateur à la gestion des bases de données et à la mise en ligne
						de l’application.
					</p>
				</div>
			</div>
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
		</div>
	);
}
