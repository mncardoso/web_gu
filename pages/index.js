import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { WebGL } from "../components/webGL";

export default function Home() {
	return (
		<div>
			<Image
				src="/type.svg"
				alt="Graphically Undefined"
				className={styles.type}
				layout="fill"
			/>
			<WebGL />
		</div>
	);
}
