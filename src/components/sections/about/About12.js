import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About12 = () => {
	return (
		<section className="tj-history section-gap">
			<div className="container">
				<div className="row rg-30 justify-content-between">
					<div className="col-xl-5">
						<div className="sec-heading mb-0">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s" suppressHydrationWarning>
								<i className="tji-box"></i> Our Mission
							</span>
							<h2 className="sec-title text-anim">
								Discover How We Have Evolved Our Company’s on{" "}
								<span suppressHydrationWarning>Legacy.</span>
							</h2>
						</div>
					</div>
					<div className="col-xl-5 text-justify">
						<div className="desc wow fadeInUp" data-wow-delay="0.3s" suppressHydrationWarning>
							<p>
								Our mission is to connect, support, and advance a global network of accomplished women business owners through strategic partnerships with international chambers of commerce and women’s business organizations. Headquartered in New York City, the IWEC Foundation serves women who are actively engaged in the global marketplace and seeking to scale internationally, as well as those well-positioned to enter international markets.
							</p>
							<p>
								Our ecosystem includes more than 48 chambers of commerce and women’s business organizations worldwide. To date, we have recognized 501 distinguished Awardees—honored annually at our global conference and nominated by our partner organizations—representing women-owned businesses from across the world. Collectively, the IWEC Foundation’s constituents reflect some of the most influential businesswomen operating in both emerging and established markets globally.
							</p>
						</div>
						<div
							className="history-btn mt-30 wow fadeInUp"
							data-wow-delay="0.5s"
							suppressHydrationWarning
						>
							<ButtonPrimary text={"Learn More"} url={"/about"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About12;
