import styles from "@/styles/components/hero.module.css";
import {
	faCaretDown,
	faChevronDown,
	faLadderWater,
} from "@fortawesome/free-solid-svg-icons";
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
		</div>
	);
}
