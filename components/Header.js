import Image from "next/image";
import Link from "next/link";
import React from "react";
import cart from "../image/cart.png";
import logo from "../image/logo.png";
import user from "../image/user.png";
export default function Header() {
	return (
		<div className="container mx-auto py-10">
			<div className="flex items-center gap-12">
				<div className="grow-0">
					<Image src={logo} alt="logo" />
				</div>
				<div className="border-2 grow border-orange-300 h-16 px-4 relative after:content-[''] after:absolute after:right-14 after:top-0 after:h-full after:w-0.5 after:bg-red-300">
					<input type="text" className="w-full h-full focus:outline-none" />
					<button className="absolute text-2xl top-4 right-4">
						<i className="ri-search-line"></i>
					</button>
				</div>
				<div className="grow-0 flex space-x-10">
					<div className="relative flex space-x-8 items-center after:content-[''] after:absolute after:right-16 after:top-3 after:h-14 after:w-0.5 after:bg-gray-300">
						<Image src={user} alt="User " />
						<div>
							<Link href={""}>Sign In</Link>
							<p>to free</p>
						</div>
					</div>
					<div className="flex relative space-x-5 items-center after:content-[''] after:absolute after:right-14 after:top-3 after:h-14 after:w-0.5 after:bg-gray-300">
						<Image src={cart} alt="Cart " />
						<div>
							<Link href={""}>Sign In</Link>
							<p>to free</p>
						</div>
					</div>
					<button className="bg-orange-300 rounded text-white py-2 px-10 text-left">
						Create <br />
						<span className="text-2xl">Package</span>
					</button>
				</div>
			</div>
		</div>
	);
}
