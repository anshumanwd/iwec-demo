import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import AnimatedText from "@/components/shared/wrappers/AnimatedText";
import Image from "next/image";
import Link from "next/link";
const About12 = () => {
	return (
		<section className="tj-history section-gap">
			<div className="container">
				<div className="row  justify-content-between">
					<div className="col-xl-6">
						<div className="sec-heading mb-0">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s" suppressHydrationWarning>
								<i className="tji-box"></i> Our Mission
							</span>
							<div className="blog-thumb wow fadeInRight" data-wow-delay="0.7s" suppressHydrationWarning>
								<Image
									src="/images/blog/women.png"
									alt="Images"
									width={800}
									height={494}
									className="attachment-full size-full wp-post-image"
									style={{height:"auto"}}
								/>
							</div>
						</div>
					</div>
					<div className="col-xl-6 text-justify">
						<div className="desc wow fadeInUp" data-wow-delay="0.3s" suppressHydrationWarning>
							<p className="mt-5">
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
							<ButtonPrimary text={"Learn More"} url={"#"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About12;
