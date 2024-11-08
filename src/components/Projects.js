"use client";
import styles from "@/styles/components/projects.module.css";
import data from "@/libs/data.json";
import Project from "./Project";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import SectionHeader from "@/layouts/SectionHeader";

export default function Projects({ setLink }) {
	const [count, setCount] = useState(2);
	const projects = data;
	const filteredProjects = projects?.slice(0, count);

	const { ref, inView, entry } = useInView({
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView) {
			setLink("projects");
		}
	}, [inView]);
	return (
		<section className={styles.container} ref={ref} id="projects">
			<SectionHeader
				title={"Mes réalisations"}
				subtitle={
					"À travers ces réalisations, découvrez mon parcours professionnel et les compétences que j’ai développées."
				}
			/>
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
		</section>
	);
}
