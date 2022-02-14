import React from "react";
import productImg from "../image/product.png";
import SectionTitle from "./SectionTitle";
import SingleBundleBox from "./SingleBundleBox";

const totalBundleBox = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function BundleBox() {
	return (
		<div className="bg-[#F8F8F8]">
			<div className="container mx-auto  py-12">
				<SectionTitle title={"Sneho Bundle Box"} />
				<div className="p-12 bg-white grid grid-cols-4 gap-11">
					{totalBundleBox.map((el) => (
						<SingleBundleBox
							key={el}
							imgSrc={productImg}
							imgAlt="Image Alter Text"
							title="Sneho Winter Box"
							NoOfProducts="10"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
