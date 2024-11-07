import styles from "@/styles/components/services.module.css";

export default function Services() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.title}>
					<span>
						Développeur web full-stack oui, mais concrétement ça veut dire quoi
						?
					</span>
				</div>
				<div className={styles.description}>
					<p>
						En tant que développeur web full-stack, je vous accompagne dans la
						réalisation complète de votre site ou application web, de la
						conception à la mise en ligne. Je maîtrise aussi bien le "front-end"
						— la partie visible et interactive du site pour les utilisateurs —
						que le "back-end", où sont gérées les données et la logique
						technique. Cette double compétence me permet de prendre en charge
						l'ensemble d'un projet web, du design et de l'expérience utilisateur
						à l'intégration et à la gestion des données en arrière-plan.
					</p>
				</div>
			</div>
			<div className={styles.cards}>
				<div className={styles.wrapper}>
					<div className={styles.cards__title}>
						<span>Back-end</span>
					</div>
					<div>
						<p></p>
					</div>
					<div></div>
				</div>
				<div className={styles.wrapper}>
					<div className={styles.cards__title}>
						<span>Full-stack</span>
					</div>
				</div>
				<div className={styles.wrapper}>
					<div className={styles.cards__title}>
						<span>Front-end</span>
					</div>
				</div>
			</div>
		</div>
	);
}
