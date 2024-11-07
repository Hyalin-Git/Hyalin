import styles from "@/styles/components/hero.module.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Hero() {
	return (
		<div className={styles.container}>
			<Image
				className={styles.background}
				src={"/images/hero-banner.png"}
				alt="hero-banner"
				fill
				sizes="100vw"
				priority
				quality={100}
			/>
			<div className={styles.header}>
				<span>HYALIN</span>
			</div>
			<div className={styles.content}>
				<div className={styles.name}>
					<span>TOMBAL</span>
					<span>NICOLAS</span>
				</div>
				<div className={styles.job}>
					<h1>Développeur web full-stack</h1>
				</div>
			</div>
			<div className={styles.down}>
				<FontAwesomeIcon icon={faChevronDown} />
				<FontAwesomeIcon icon={faChevronDown} />
			</div>
			<div className={styles.social}>
				<ul>
					<li>
						<Image
							src={"./twitter.svg"}
							alt="Twitter-icon"
							width={40}
							height={40}
						/>
					</li>
					<li>
						<Image
							src={"./linkedIn.svg"}
							alt="LinkedIn-icon"
							width={40}
							height={40}
						/>
					</li>
					<li>
						<Image
							src={"./github.svg"}
							alt="GitHub-icon"
							width={40}
							height={40}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
}
