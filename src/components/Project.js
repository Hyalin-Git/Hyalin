"use client";
import { montserrat } from "@/libs/font";
import styles from "@/styles/components/project.module.css";
import Image from "next/image";
import { InView } from "react-intersection-observer";

export default function Project({ project }) {
	return (
		<InView threshold={1} triggerOnce>
			{({ inView, ref, entry }) => (
				<div className={styles.container} ref={ref} data-inview={inView}>
					<div className={styles.left}>
						<div className={styles.title}>
							<span>{project?.title}</span>{" "}
							<span className={styles.name}>{project?.name}</span>
						</div>
						<div className={styles.description}>
							<p>{project?.description}</p>
						</div>
						<div className={styles.underline}></div>
						<div className={styles.skills}>
							<ul>
								{project?.skills.map((skill, idx) => {
									return (
										<li key={idx}>
											<Image
												src={skill}
												alt="skill-icon"
												width={30}
												height={30}
											/>
										</li>
									);
								})}
							</ul>
						</div>
						<div className={styles.buttons}>
							<button className={montserrat.className}>Voir le projet</button>
							<button className={montserrat.className}>Voir le code</button>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.web} data-grow={inView}>
							<Image
								src={"/images/spider-man-web.png"}
								width={400}
								height={400}
								alt="spider"
							/>
							{/* {project.images} */}
						</div>
					</div>
				</div>
			)}
		</InView>
	);
}
