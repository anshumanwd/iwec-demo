"use client";

import getBrands from "@/libs/getBrands";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider1 = ({ className }) => {
	const brands = getBrands();
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
							<div className="client-logo" onClick={goto(link)}>
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

export default BrandSlider1;
