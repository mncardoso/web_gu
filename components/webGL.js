import dynamic from "next/dynamic";
import { Box } from "../components/shaders/logo";
import { OrbitControls, Stars, Cloud } from "@react-three/drei";
let Canvas = dynamic(
	() => import("@react-three/fiber").then((mod) => mod.Canvas),
	{
		ssr: false,
	}
);

export let WebGL = () => {
	return (
		<div>
			<Canvas colorManagement camera={{ position: [0, 0, 2] }}>
				<OrbitControls />
				<Stars
					radius={100}
					depth={50}
					count={5000}
					factor={4}
					saturation={0}
					fade
					speed={10}
				/>
				<ambientLight intensity={0.1} />
				<directionalLight position={[40, 10, 5]} intensity={0.2} />
				<directionalLight
					castShadow
					position={[10, 420, 100]}
					intensity={1.3}
					shadow-mapSize-width={1024}
					shadow-mapSize-height={1024}
					shadow-camera-far={10}
					shadow-camera-left={-30}
					shadow-camera-right={10}
					shadow-camera-top={40}
					shadow-camera-bottom={-10}
				/>
				<spotLight intensity={0.5} position={[90, 100, 50]} castShadow />

				<Box />
			</Canvas>
		</div>
	);
};
