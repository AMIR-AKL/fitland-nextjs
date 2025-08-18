"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import { formatNumber } from "@/utils/formatNumber";
import Card from "@/components/Card/Card";

export default function PaginationApp({ data }) {
	return (
		<>
			<Swiper
				spaceBetween={10}
				loop={true}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				modules={[Navigation, Autoplay]}
				className="mySwiper w-3/4"
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					640: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
					reverseDirection: true,
				}}
			>
				{data.map((slide) => (
					<SwiperSlide key={slide._id}>
						<Link href={`/mens-cart/${slide._id}`}>
							<Card
								cardImg={slide.img}
								cardName={slide.title}
								cardSize={slide.size}
								cardPrice={formatNumber(slide.price)}
							/>
						</Link>
					</SwiperSlide>
				))}

				{/* دکمه های navigation */}
				<div className="swiper-button-prev !hidden sm:!flex"></div>
				<div className="swiper-button-next !hidden sm:!flex"></div>
			</Swiper>
		</>
	);
}
