import React from "react";
import Brands from "./Brands";

export default function Content() {
	return (
		<main className="">
			<div className="border-b h-14 flex items-center sticky top-0">
				<input
					type="text"
					placeholder="Search Brands"
					className="h-full outline-none px-4 w-full"
				/>
			</div>
			<Brands />
		</main>
	);
}
