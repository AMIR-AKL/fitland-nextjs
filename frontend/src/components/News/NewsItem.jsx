import React from "react";
import BtnProduct from "../BtnProduct/BtnProduct";

export default function NewsItem({ srcImg, title1, title2 }) {
	return (
		<div className="mx-auto sm:max-w-141 rounded-2xl overflow-hidden flex flex-col justify-between bg-neutral-100 border border-gray-200 pb-10">
			<img className="max-h-76.75" src={srcImg} alt="" />
			<div className="p-5 space-y-5">
				<h3 className=" md:text-2xl font-iransans-demibold text-secondary tracking-tight">
					{title1}
				</h3>
				<h3 className="text-sm md:text-base font-iransans-medium tracking-tight line-clamp-2">
					{title2}
				</h3>
				<BtnProduct text={`مشاهده خبر`} className={`bg-primary !w-40`} />
			</div>
		</div>
	);
}
