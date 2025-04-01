import { useState } from "react";
import prankImage from "./assets/prank.png"; // Add your prank image in assets
import ss from "./assets/ss.png";

export default function App() {
	const [step, setStep] = useState(0);
	const [buttonPos, setButtonPos] = useState({ top: "50%", left: "50%" });

	const moveButton = () => {
		setButtonPos({
			top: `${Math.random() * 80 + 10}%`,
			left: `${Math.random() * 80 + 10}%`,
		});
	};

	return (
		<div className="flex items-center justify-center h-screen bg-gray-900 text-white">
			{step === 0 && (
				<button
					className="text-3xl p-4 bg-blue-500 rounded-lg"
					onClick={() => setStep(1)}
				>
					Hey Shantanu
				</button>
			)}
			{step === 1 && (
				<div className="text-center">
					<p className="text-2xl">
						SRM Salesforce AIML Shreya has a message for you
					</p>
					<img
						src={prankImage}
						alt="prank"
						className="mx-auto mt-4 w-64 h-64"
					/>
					<button
						className="mt-4 p-2 bg-green-500 rounded"
						onClick={() => setStep(2)}
					>
						Show Message
					</button>
				</div>
			)}
			{step === 2 && (
				<div className="text-center">
					<p className="text-2xl p-4">
						She got April fooled by a KID this morning
					</p>
					<div className="flex gap-10 text-align justify-center">
						<img
							src={ss}
							alt=""
							className="w-80 "
						/>
						<button
							className="mt-4 h-10 p-2 bg-purple-500 rounded"
							onClick={() => setStep(3)}
						>
							Next ➡️
						</button>
					</div>
				</div>
			)}
			{step === 3 && (
				<div className="text-center relative h-screen flex flex-col items-center justify-center">
					<p className="text-2xl  mt-50">
						But so did{" "}
						<span
							className="cursor-pointer underline cursor-pointer"
							onClick={() => setStep(4)}
						>
							YOU
						</span>
						!
					</p>
					<div className="relative w-full h-full">
						<button
							className="absolute p-2 h-20 w-20 text-xl bg-red-500 rounded"
							style={{ top: buttonPos.top, left: buttonPos.left }}
							onMouseEnter={moveButton}
						>
							But, how?
						</button>
						<p className="absolute bottom-4 right-4 text-sm">
							Click on <span className="underline ">U</span>
						</p>
					</div>
				</div>
			)}
			{step === 4 && (
				<div className="text-center">
					<p className="text-3xl font-bold">I AM NOT GOING HOME ON 11TH</p>
					<p className="text-2xl mt-2">APRIL FOOLS TO YOU TOO HAHA</p>
				</div>
			)}
		</div>
	);
}
