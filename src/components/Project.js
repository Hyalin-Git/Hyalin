"use client";
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
					</div>
					<div className={styles.web}>
						<Image
							src={"/images/spider-man-web.png"}
							width={400}
							height={400}
							alt="spider"
							className={inView ? styles.grow : ""}
						/>
					</div>
				</div>
			)}
		</InView>
	);
}
