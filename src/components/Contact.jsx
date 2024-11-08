import SectionHeader from "@/layouts/SectionHeader";
import { montserrat } from "@/libs/font";
import styles from "@/styles/components/contact.module.css";

export default function Contact() {
	return (
		<div className={styles.container} id="contact">
			<SectionHeader
				title={"Entrons en contact"}
				subtitle={
					"Vous avez besoin d'un site web ? Vous voulez collaborer ou simplement	besoin d'informations ? Toutes les raisons sont bonnes !"
				}
			/>

			<div className={styles.wrapper}>
				<div className={styles.phone}>
					<div>
						<span>Me contacter par téléphone</span>
					</div>
					<div>
						<br />
						<span>07 81 95 30 66</span>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.title}>
						<span>Me contacter par e-mail</span>
					</div>
					<form action="" className={styles.form}>
						<div className={styles.form__names}>
							<input
								type="text"
								id="lastname"
								name="lastname"
								placeholder="Nom"
								className={montserrat.className}
							/>
							<input
								type="text"
								id="lastname"
								name="lastname"
								placeholder="Prénom"
								className={montserrat.className}
							/>
						</div>
						<div className={styles.form__text}>
							<textarea
								name="message"
								id="message"
								placeholder="Message"
								className={montserrat.className}></textarea>
						</div>
						<div className={styles.form__button}>
							<button className={montserrat.className}>Envoyer</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
