"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<Image
					src={
						(headerType === 2 ||
							headerType === 5 ||
							headerType === 7 ||
							headerType === 9) &&
						!isStickyHeader
							? "/images/logos/logo.svg"
							: "/images/logos/logo.svg"
					}
					alt=""
					width={120}
					height={120}
					style={{ height: "auto", maxWidth: "60%" }}
				/>
			</Link>
		</div>
	);
};

export default Logo;
