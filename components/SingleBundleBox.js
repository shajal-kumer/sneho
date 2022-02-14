import Image from "next/image";
import React from "react";

export default function SingleBundleBox({ imgSrc, imgAlt, title, NoOfProducts }) {
	return (
		<div className="flex gap-4 basis-1/4">
			<div>
				<Image src={imgSrc} alt={imgAlt} />
			</div>
			<div className="flex flex-col">
				<h3 className="text-2xl -mt-2">{title}</h3>
				<p className="text-xl">{NoOfProducts} products</p>
			</div>
		</div>
	);
}
