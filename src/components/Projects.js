"use client";
import { useState } from "react";
import styles from "@/styles/components/projects.module.css";
import data from "@/libs/data.json";
import Project from "./Project";

export default function Projects() {
	const [count, setCount] = useState(2);
	const projects = data;
	const filteredProjects = projects?.slice(0, count);

	return (
		<div className={styles.container} id="projects">
			<div className={styles.wrapper}>
				{filteredProjects?.map((project) => {
					return <Project key={project?.id} project={project} />;
				})}
			</div>
			{count !== projects?.length && (
				<div className={styles.more}>
					<button onClick={(e) => setCount(projects?.length)}>
						Voir plus de projet
					</button>
				</div>
			)}
		</div>
	);
}
