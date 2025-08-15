import BtnProduct from "../BtnProduct/BtnProduct";
import InfoItem from "./InfoItem";
import { BsShop } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { PiCalendarDotsLight } from "react-icons/pi";

function IntroSite() {
	return (
		<section className="sm:container max-sm:px-2 flex max-md:flex-col items-center justify-between mt-10 relative">
			{/* intro info text */}
			<div className="*:mt-5 flex  flex-col max-md:items-center max-sm:text-center z-10">
				<h3 className="text-natural tracking-tight text-base font-iransans-medium">
					راحت و مطمئن خرید کنید!
				</h3>
				<h1 className="sm:text-2xl lg:text-3xl text-secondary font-iransans-demibold tracking-tight">
					همراه تو در مسیر سلامتی
				</h1>
				<h1 className="sm:text-2xl lg:text-3xl text-primary font-iransans-demibold tracking-tight">
					سهم بزرگ خودتان را امروز بگیرید! 
				</h1>
				<h4 className="text-xs sm:text-sm lg:text-base text-natural font-iransans-medium">
					بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه تخفیف شگفت
					انگیز بخر!
				</h4>
				<BtnProduct
					text={"مشاهده محصولات"}
					className={`bg-secondary !w-40 !h-8  text-xs`}
				/>
			</div>
			{/* img sport man */}

			<div className="md:w-4/5 max-md:w-full  h-auto px-3.5 py-3.5 z-20">
				<img className="w-full" src="/img/sport.png" alt="" />
			</div>
			{/* <div className="md:w-150 h-auto px-3.5 py-3.5 z-20">
				<img className="w-full" src="/img/sport.png" alt="" />
			</div> */}

			{/* info box */}
			<div className="hidden md:block *:mt-5 w-100">
				<InfoItem icon={<BsShop />} title={"300+"} text={"محصولات متنوع"} />
				<InfoItem icon={<AiOutlineLike />} title={"95%"} text={"رضایت مشتری"} />
				<InfoItem
					icon={<PiCalendarDotsLight />}
					title={"4 روز"}
					text={"از خرید تا دریافت"}
				/>
			</div>
		</section>
	);
}
export default IntroSite;
