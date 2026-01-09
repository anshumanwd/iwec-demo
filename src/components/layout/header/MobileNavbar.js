import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();
	const homeNav = navItems[0];
	const pagesNav = navItems[1];
	const serviceNav = navItems[2];
	const portfolioNav = navItems[3];
	const blogNav = navItems[4];
	const contactNav = navItems[5];
	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							<li >
								<Link href={homeNav?.path ? homeNav?.path : "#"}>{homeNav?.name}</Link>
							</li>
							<li >
								<Link href={pagesNav?.path ? pagesNav?.path : "#"}>{pagesNav?.name}</Link>
							</li>
							<MobileMenuItem
								text={serviceNav?.name}
								url={serviceNav?.path ? serviceNav?.path : "#"}
							>
								{serviceNav?.submenu?.length
									? serviceNav?.submenu?.map((item, idx) => (
										<li
											key={idx}
											className={item?.isActive ? "current-menu-item" : ""}
										>
											<Link href={item?.path ? item?.path : "/services"}>
												{item?.name ? item?.name : "Service"}
											</Link>
										</li>
									))
									: ""}
							</MobileMenuItem>
							<MobileMenuItem
								text={portfolioNav?.name}
								url={portfolioNav?.path ? portfolioNav?.path : "#"}
							>
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
							</MobileMenuItem>
							<MobileMenuItem
								text={blogNav?.name}
								url={blogNav?.path ? blogNav?.path : "#"}
							>
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
							</MobileMenuItem>
							<li className="mean-last">
								<Link href={contactNav?.path ? contactNav?.path : "#"}>
									{" "}
									{contactNav?.name ? contactNav?.name : "Contact"}
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
