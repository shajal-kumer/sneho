import Link from "next/link";
import React from "react";

export default function Navigation() {
	return (
		<div className="bg-orange-300 text-white">
			<div className="container mx-auto text-2xl py-5">
				<nav className="flex">
					<span className="mr-6">All Categories</span>

					<ul className="flex gap-5 ">
						<li>
							<Link href="">Mens Care</Link>
						</li>
						<li>
							<Link href="">Mens Care</Link>
						</li>
						<li>
							<Link href="">Mens Care</Link>
						</li>
						<li>
							<Link href="">Mens Care</Link>
						</li>
						<li>
							<Link href="">Mens Care</Link>
						</li>
						<li>
							<Link href="">Mens Care</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
