import styles from "@/styles/components/project.module.css";
import Image from "next/image";

export default function Project({ project }) {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.title}>
					<span>{project?.title}</span>
				</div>
				<div className={styles.description}>
					<p>{project?.description}</p>
				</div>
			</div>
			<div className={styles.right}>
				<Image
					src={"/images/spider-man-web.png"}
					width={400}
					height={400}
					alt="spider"
				/>
			</div>
		</div>
	);
}
