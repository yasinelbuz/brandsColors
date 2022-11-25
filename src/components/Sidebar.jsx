import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		width: "50%",
		padding: "50px",
		border: 0,
		boxShadow: "0 10px 60px rgb(0 0 0 / 10%)",
		position: "relative",
	},
};

export default function Sidebar() {
	const [modelIsOpen, setIsOpen] = useState(false);

	const toggleModel = () => {
		setIsOpen(!modelIsOpen);
	};

	return (
		<>
			<aside className="w-1/4 h-full p-8 border-r sticky top-0">
				<div className="text-2xl mb-4">
					Brands<b>Colors</b>
				</div>
				<div className="mb-4 text-gray-500">
					The biggest collection of official brand color codes around.
					Curated by @brandcolors and friends.
				</div>
				<div className="flex flex-col gap-1 mt-12">
					<a className="font-bold cursor-pointer">Suggest a Brand</a>
					<a
						className="font-bold cursor-pointer"
						onClick={toggleModel}
					>
						About BrandColors
					</a>
				</div>
			</aside>

			<Modal
				isOpen={modelIsOpen}
				onRequestClose={toggleModel}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<button
					onClick={toggleModel}
					className="absolute right-6 top-6 bg-gray-200 p-2"
				>
					close
				</button>
				<h1 className="font-bold m-4 text-2xl">About BrandColors</h1>
				<p className="text-gray-800 leading-7 mx-4 mb-4">
					BrandColors was created by <b>DesignBombs</b>. The goal was
					to create a helpful reference for the brand color codes that
					are needed most often.
				</p>
				<p className="text-gray-800 leading-7 mx-4">
					It's been featured by Smashing Magazine, CSS-Tricks, Web
					Design Depot, Tuts+, and over <b>2 million pageviews.</b>{" "}
					There are now over <b>600 brands</b> with <b>1600 colors</b>{" "}
					and the collection is always growing.
				</p>
			</Modal>
		</>
	);
}
