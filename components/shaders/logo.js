import * as THREE from "three";
import { Glow, Sparkles } from "@react-three/drei";

// Scale
let s = 0.01;

// Origin
let x = 0;
let y = -0.75;
let z = -(24 * s) / 2;

const logo = new THREE.Shape();

logo.moveTo((x += 50 * s), (y += 0 * s));
logo.lineTo((x += -53 * s), (y += 0 * s));
logo.lineTo((x += -47 * s), (y += 47 * s));
logo.lineTo((x += 0 * s), (y += 53 * s));
// logo.lineTo((x += 100 * s), (y += 0 * s));
logo.bezierCurveTo(
	(x += 0 * s),
	(y += 0 * s),
	(x += 0 * s),
	(y += 50 * s),
	(x += 50 * s),
	(y += 0 * s)
);
logo.bezierCurveTo(
	(x += 0 * s),
	(y += 0 * s),
	(x += 50 * s),
	(y += 0 * s),
	(x += 0 * s),
	(y += -50 * s)
);
logo.lineTo((x += 0 * s), (y += -100 * s)); // Z

const logoHole = new THREE.Path();

logoHole.moveTo((x += -24 * s), (y += 24 * s));
logoHole.lineTo((x += 0 * s), (y += 76 * s));
logoHole.bezierCurveTo(
	(x += 0 * s),
	(y += 0 * s),
	(x += 0 * s),
	(y += 26 * s),
	(x += -26 * s),
	(y += 0 * s)
);
logoHole.bezierCurveTo(
	(x += 0 * s),
	(y += 0 * s),
	(x += -26 * s),
	(y += 0 * s),
	(x += 0 * s),
	(y += -26 * s)
);

logoHole.lineTo((x += 0 * s), (y += -43 * s));
logoHole.lineTo((x += 33 * s), (y += -33 * s));
logoHole.lineTo((x += 19 * s), (y += 0 * s));

logo.holes.push(logoHole);

const extrudeSettings = {
	curveSegments: 64,
	steps: 2,
	depth: 24 * s,
	bevelEnabled: true,
	bevelThickness: 0.02,
	bevelSize: 0.02,
	bevelOffset: 0,
	bevelSegments: 8,
};

export let Box = () => {
	return (
		<mesh position={[0, 0, z]}>
			<extrudeBufferGeometry attach="geometry" args={[logo, extrudeSettings]} />
			<meshMatcapMaterial
				attach="material"
				color="#F2099F"
				shadowSide={THREE.DoubleSide}
				flatShading={true}
			/>
			{/* <Sparkles
				count={50}
				speed={1}
				opacity={1}
				color={[0xf2059f]}
				size={4}
				scale={2}
				noise={0.1}
			/> */}
		</mesh>
	);
};
