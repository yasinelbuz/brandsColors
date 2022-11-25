import React, { useEffect, useState } from "react";
import BrandsJSON from "./../brands.json";
import getContrast from "./../helper/contrast.js";

export default function Brands() {
	const BrandsJSONArray = [];
	Object.keys(BrandsJSON).map((key) => {
		BrandsJSONArray.push(BrandsJSON[key]);
	});

	const [brands, setBrands] = useState(BrandsJSONArray);
	const [selected, setSelected] = useState([]);

	const clickHandle = (brand) => {
		if (selected.includes(brand)) {
			setSelected(selected.filter((b) => b.slug !== brand.slug));
		} else {
			setSelected([...selected, brand]);
		}
	};

	useEffect(() => {
		console.log(selected);
	}, [selected]);

	return (
		<div className="p-4 bg-gray-200 h-full">
			{brands.map((brand, key) => (
				<div
					className={`border-b p-2 mb-2 bg-white ${
						selected.includes(brand) === true ? "selected" : ""
					}`}
					onClick={() => clickHandle(brand)}
					key={key}
				>
					<h2 className="font-bold mb-2">{brand.title}</h2>
					<div className="flex flex-wrap items-center">
						{brand.colors.map((color, index) => (
							<span
								className="flex justify-center items-center h-12 px-4"
								style={{
									backgroundColor: `#${color}`,
									color: `${getContrast(color)}`,
									border: `1px solid #000`,
								}}
								key={index}
							>
								{color}
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
