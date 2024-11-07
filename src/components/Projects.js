import styles from "@/styles/components/projects.module.css";
import Image from "next/image";
import data from "@/libs/data.json";
import Project from "./Project";

export default function Projects() {
	const projects = data.slice(0, 2);

	return (
		<div className={styles.container} id="projects">
			<div className={styles.wrapper}>
				{projects?.map((project) => {
					return <Project key={project?.id} project={project} />;
				})}
			</div>

			<div className={styles.more}>
				<button>Voir plus de projet</button>
			</div>
		</div>
	);
}
