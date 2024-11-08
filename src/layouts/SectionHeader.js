import styles from "@/styles/layouts/sectionHeader.module.css";

export default function ({ title, subtitle }) {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h2>{title}</h2>
			</div>
			<div className={styles.subtitle}>
				<h3>{subtitle}</h3>
			</div>
		</div>
	);
}
