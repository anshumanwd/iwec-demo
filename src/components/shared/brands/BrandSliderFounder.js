"use client";

import getBrandFound from "@/libs/getBrandFound";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSliderFounder = ({ className }) => {
	const brands = getBrandFound();
	const goto = (link) => () => {
		if (link) {
			window.open(link, "_blank");
		}
	};
	return (
		<Swiper
			slidesPerView="auto"
			spaceBetween={0}
			freeMode={true}
			centeredSlides={true}
			loop={true}
			speed={5000}
			allowTouchMove={false}
			autoplay={{
				delay: 1,
				disableOnInteraction: false,
			}}
			className={`client-slider ${className ? className : "client-slider-1"}`}
			modules={[Autoplay]}
		>
			{brands?.length
				? brands?.map(({ img, text, link }, idx) => (
						<SwiperSlide key={idx} className="client-item">
							<div className="client-logo-1" onClick={goto(link)}>
								<img
									src={img ? img : "/images/brands/brand-1.webp"}
									alt="Brand"
								/>
							{ text ? <p>{text}</p> : '' }
							</div>
						</SwiperSlide>
				))
				: ""}
		</Swiper>
	);
};

export default BrandSliderFounder;
