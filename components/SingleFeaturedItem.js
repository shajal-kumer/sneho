import Image from "next/image";
import React from "react";
import arrowRight from "../image/arrow-right.png";

export default function SingleFeaturedItem({ imgAlt, imgSrc, title }) {
	return (
		<div className="flex gap-4 basis-1/4 items-center">
			<div>
				<Image src={imgSrc} alt={imgAlt} />
			</div>
			<div className="flex flex-col ">
				<h3 className="text-2xl">{title}</h3>
				<div className="flex items-center">
					<span className="text-xl">Shop Now</span>
					<div className="mt-1.5 ml-3">
						<Image src={arrowRight} alt="arrow icon" />
					</div>
				</div>
			</div>
		</div>
	);
}
