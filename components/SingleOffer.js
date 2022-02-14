import Image from "next/image";
import React from "react";

export default function SingleOffer({ imgSrc }) {
	return <Image src={imgSrc} alt="Offer Image One" />;
}
