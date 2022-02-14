import React from "react";
import productImg from "../image/baby-product.png";
import SingleFeaturedItem from "./SingleFeaturedItem";

const totalProduct = [1, 2, 3, 4, 5, 6];

export default function FeaturedItemSection() {
	return (
		<div className="container mx-auto py-12 grid grid-cols-6 gap-5">
			{totalProduct.map((el) => (
				<SingleFeaturedItem key={el} imgSrc={productImg} imgAlt="Thai Pant Diaper" title="Thai Pant Diaper" />
			))}
		</div>
	);
}
