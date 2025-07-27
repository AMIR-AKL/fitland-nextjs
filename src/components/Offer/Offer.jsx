import React from "react";
import OfferItem from "./OfferItem";
import BtnProduct from "../BtnProduct/BtnProduct";

export default function Offer({
	className: bg,
	srcImg1,
	srcImg2,
	srcImg3,
	srcImg4,
	srcImg5,
	srcImg6,
	offerBgBlu,
	offerBgPrimary,
	offerName1,
	offerName2,
	offerName3,
	offerName4,
	offerName5,
	offerName6,
	offerPrice1,
	offerPrice2,
	offerPrice3,
	offerPrice4,
	offerPrice5,
	offerPrice6,
	offerSize1,
	offerSize2,
	offerSize3,
	offerSize4,
	offerSize5,
	offerSize6,
	visibility,
}) {
	return (
		<>
			<section className={`relative my-20 py-10 ${bg}`}>
				<BtnProduct
					text={"مشاهده همه"}
					className={`absolute hidden md:flex top-5 left-10 hover:shadow-none text-secondary hover:text-natural transition-all`}
				/>

				<svg className="absolute left-0 -top-10.5 right-0  rotate-180 text-gray-50 outline-0 mx-auto">
					<use href="#curvel"></use>
				</svg>
				<p className="absolute top-0 right-24 md:right-18 left-0 mx-auto w-50 font-iransans-demibold text-xl md:text-2xl tracking-tight">
					تخفیفات ویژه
				</p>
				{/* <div className="h-100 relative"></div> */}
				<div className="container py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					<OfferItem
						srcImg={srcImg1}
						offer2={offerBgPrimary}
						offerText2={"VIP"}
						cardName={offerName1}
						cardPrice={offerPrice1}
						cardSize={offerSize1}
						className={`xl:w-91.5 sm:w-60 w-80 md:w-70 mx-auto  rounded-2xl overflow-hidden border border-gray-200 relative bg-gray-50`}
					/>
					<OfferItem
						srcImg={srcImg2}
						offer2={offerBgBlu}
						offerText2={"24%"}
						cardName={offerName2}
						cardPrice={offerPrice2}
						cardSize={offerSize2}
						className={`xl:w-91.5 sm:w-60 w-80 md:w-70 mx-auto  rounded-2xl overflow-hidden border border-gray-200 relative bg-gray-50`}
						offerVisibility={visibility}
					/>
					<OfferItem
						srcImg={srcImg3}
						offer2={`bg-sky-600`}
						offerText2={"24%"}
						cardName={offerName3}
						cardPrice={offerPrice3}
						cardSize={offerSize3}
						className={`xl:w-91.5 hidden w-70 mx-auto md:block rounded-2xl overflow-hidden border border-gray-200 relative bg-gray-50`}
						offerVisibility={visibility}
					/>
				</div>
			</section>
			<section className={`flex flex-col items-center ${visibility}`}>
				<h2 className="my-5 text-2xl font-iransans-demibold text-secondary">
					جدید ترین کفش های ورزشی{" "}
				</h2>
				<div
					className={`container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10`}
				>
					<OfferItem
						classImg={`max-h-70`}
						srcImg={srcImg4}
						offerText2={`24%`}
						offerText1={`VIP`}
						offer2={"bg-secondary"}
						offer1={"bg-primary"}
						cardName={offerName4}
						cardPrice={offerPrice4}
						cardSize={offerSize4}
						className={`xl:w-91.5 sm:w-60 w-80 md:w-70 mx-auto flex flex-col justify-between rounded-2xl overflow-hidden border border-gray-200 relative bg-gray-50`}
					/>
					<OfferItem
						classImg={`max-h-70`}
						srcImg={srcImg5}
						cardName={offerName5}
						cardPrice={offerPrice5}
						cardSize={offerSize5}
						className={`xl:w-91.5 sm:w-60 w-80 md:w-70 mx-auto flex flex-col justify-between rounded-2xl overflow-hidden border border-gray-200 relative bg-gray-50`}
						offerVisibility={`opacity-0`}
					/>
					<OfferItem
						classImg={`max-h-70`}
						srcImg={srcImg6}
						offerText2={`24%`}
						offer2={"bg-secondary"}
						cardName={offerName6}
						cardPrice={offerPrice6}
						cardSize={offerSize6}
						className={`xl:w-91.5 sm:w-60 w-80 md:w-70 mx-auto  flex flex-col justify-between rounded-2xl overflow-hidden border border-gray-200 relative bg-gray-50`}
					/>
				</div>
			</section>
		</>
	);
}
