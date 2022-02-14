import React from "react";
import offerImageOne from "../image/offer-img-1.png";
import offerImageTwo from "../image/offer-img-2.png";
import SectionTitle from "./SectionTitle";
import SingleOffer from "./SingleOffer";
export default function Offer() {
	return (
		<div className="bg-[#F8F8F8]">
			<div className="container mx-auto pb-10">
				<SectionTitle title="Unbeatable Offers" />

				<div className="flex">
					<SingleOffer imgSrc={offerImageOne} />
					<SingleOffer imgSrc={offerImageTwo} />
				</div>
			</div>
		</div>
	);
}
