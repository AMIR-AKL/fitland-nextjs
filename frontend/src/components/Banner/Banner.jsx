import React from "react";
import BtnProduct from "../BtnProduct/BtnProduct";

export default function Banner1({
	className: bgBanner,
	title1,
	title2,
	visibility,
	classTitle1,
}) {
	return (
		<section
			className={`${bgBanner} h-80 md:h-100 my-20 overflow-hidden relative`}
		>
			<div className=" absolute bg-black/30 top-0 bottom-0 left-0 right-0 h-full w-full"></div>
			<div className="container *:mt-3 flex flex-col justify-center text-white h-full w-full items-start z-50 relative">
				<h3
					className={`text-sm md:text-2xl font-iransans-regular tracking-tight ${classTitle1}`}
				>
					{title1}
				</h3>
				<h3 className="text-sm md:text-2xl font-iransans-demibold tracking-tight">
					{title2}
				</h3>
				<BtnProduct
					text={"مشاهده همه محصولات"}
					className={`bg-secondary p-0 max-sm:!h-8 max-sm:!w-50 max-sm:text-xs w-60 ${visibility}`}
				/>
			</div>
		</section>
	);
}
