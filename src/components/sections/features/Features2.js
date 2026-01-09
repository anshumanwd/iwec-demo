import FeatureCard2 from "@/components/shared/cards/FeatureCard2";

const Features2 = () => {
	const features = [
		{
			id: 1,
			title: "Visibility",
			icon: "tji-innovative",
			desc: "Recognize successful women business owners on a global scale.",
		},
		{
			id: 2,
			title: "Education",
			icon: "tji-award",
			desc: "Provide education to support and further advance women-owned business growth through shared business knowledge and resources.",
		},
		{
			id: 3,
			title: "Connections",
			icon: "tji-team",
			desc: "Create a global network and enable female entrepreneurs to connect locally, nationally, and internationally.",
		},
		{
			id: 4,
			title: "Market Intelligence",
			icon: "tji-support",
			desc: "",
			desc: "Provide data and insights to drive global economic growth. ",
		},
	];
	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Choose the Best
							</span>
							<h2 className="sec-title title-anim">
								Empowering Women Entrepreneurs Through Expertise
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features?.length
						? features?.map((feature, idx) => (
								<div key={idx} className="col-xl-3 col-md-6">
									<FeatureCard2 feature={feature} idx={idx} />
								</div>
						))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Features2;
