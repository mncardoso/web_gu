import "../styles/globals.css";
import { SEO } from "../components/seo";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<SEO />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
