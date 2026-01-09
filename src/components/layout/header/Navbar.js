import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();
	const homeNav = makeActiveLink(navItems[0]);
	const pagesNav = makeActiveLink(navItems[1]);
	const serviceNav = makeActiveLink(navItems[2]);
	const portfolioNav = makeActiveLink(navItems[3]);
	const blogNav = makeActiveLink(navItems[4]);
	const contactNav = makeActiveLink(navItems[5]);

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					<li
						className={` ${
							homeNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={homeNav?.path ? homeNav?.path : "#"}>
							{homeNav?.name}
						</Link>
					</li>
					<li
						className={` ${
							pagesNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={pagesNav?.path}>{pagesNav?.name}</Link>
					</li>
					<li
						className={`has-dropdown ${
							serviceNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={serviceNav?.path ? serviceNav?.path : "#"}>
							{serviceNav?.name}
						</Link>
						<ul className="sub-menu  mega-menu-service">
							{serviceNav?.submenu?.length
								? serviceNav?.submenu?.map((item, idx) => (
										<li key={idx}>
											<Link className="mega-menu-service-single"
												href={item?.path ? item?.path : "/"}>
												{item?.name}
											</Link>
										</li>
								))
								: ""}
						</ul>
					</li>
					<li
						className={`has-dropdown ${
							portfolioNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={portfolioNav?.path ? portfolioNav?.path : "#"}>
							{portfolioNav?.name}
						</Link>
						<ul className="sub-menu">
							{portfolioNav?.submenu?.length
								? portfolioNav?.submenu?.map((item, idx) => (
										<li
											key={idx}
											className={item?.isActive ? "current-menu-item" : ""}
										>
											<Link href={item?.path ? item?.path : "/portfolios"}>
												{item?.name ? item?.name : "Portfolio"}
											</Link>
										</li>
								  ))
								: ""}
						</ul>
					</li>
					<li
						className={`has-dropdown ${
							blogNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={blogNav?.path ? blogNav?.path : "#"}>
							{blogNav?.name}
						</Link>
						<ul className="sub-menu">
							{blogNav?.submenu?.length
								? blogNav?.submenu?.map((item, idx) => (
										<li
											key={idx}
											className={item?.isActive ? "current-menu-item" : ""}
										>
											<Link href={item?.path ? item?.path : "/portfolios"}>
												{item?.name ? item?.name : "Portfolio"}
											</Link>
										</li>
								  ))
								: ""}
						</ul>
					</li>
					<li className={contactNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={contactNav?.path ? contactNav?.path : "#"}>
							{contactNav?.name ? contactNav?.name : "Contact"}
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
