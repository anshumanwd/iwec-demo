import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const Hero5 = () => {
	return (
		<section className="h5-banner-section section-gap-x">
			<div
				className="banner-bg"
				style={{ backgroundImage: "url('/images/hero/bg.jpg')" }}
			></div>
			<div className="h5-banner-area">
				<div className="h5-banner-content">
					<h1 className="banner-title text-anim" suppressHydrationWarning>
						Empowering Women Entrepreneurs Globally
					</h1>
					<div className="btn-area wow fadeInUp" data-wow-delay=".8s" suppressHydrationWarning>
						<ButtonPrimary text={"Contact Us Now"} url={"#"} />
					</div>
				</div>
				<div className="solution-box">
					<span className="list-icon">
						<i className="tji-list"></i>
					</span>
					<p className="desc">
						Our mission is to connect, support, and grow a global network of women business owners.
					</p>
					<FunfactSingle
						type={2}
						currentValue={125}
						symbol={
							<>
								K<sup>+</sup>
							</>
						}
					/>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
			<div className="banner-scroll wow fadeInDown" data-wow-delay="1.5s" suppressHydrationWarning>
				<button data-target="#choose" className="scroll-down tj-scroll-btn">
					<span>
						<i className="tji-arrow-down-long"></i>
					</span>
					Scroll Down
				</button>
			</div>
		</section>
	);
};

export default Hero5;
