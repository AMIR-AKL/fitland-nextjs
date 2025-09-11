import Banner1 from "@/components/Banner/Banner";
import CardHomeWrapper from "@/components/CardHomeWrapper/CardHomeWrapper";
import IntroSite from "@/components/IntroSite/IntroSite";
import News from "@/components/News/News";
import Offer from "@/components/Offer/Offer";

export default function Home() {
	return (
		<>
			<IntroSite />
			<CardHomeWrapper
				imgCard1={`img/cardhm/whiteShirt.png`}
				imgCard2={`img/cardhm/greenShirt.png`}
			/>
			<Banner1
				className={`bg-banner1`}
				title1={`برای حال خوب`}
				title2={`لوازم ایروبیک و تناسب اندام بگیر`}
			/>
			<Offer
				className={`bg-primary-black`}
				srcImg1={`./img/cardProduct/women1.png`}
				srcImg2={`./img/cardProduct/women.png`}
				srcImg3={`./img/cardProduct/shoes.png`}
				srcImg4={`./img/shoes/shoes3.png`}
				srcImg5={`./img/shoes/shoes2.png`}
				srcImg6={`./img/shoes/shoes1.jpg`}
				offerBgPrimary={`bg-primary`}
				offerBgBlu={`bg-sky-600`}
				offerName1={`سویشرت نایک مدل AO-14`}
				offerPrice1={`۳۰۰,۰۰۰ تومان`}
				offerSize1={`از سایز L تا XXL`}
				offerName2={`ست نایک مدل S-2000`}
				offerPrice2={`۲۰۰۰۰۰ تومان`}
				offerSize2={`از سایز L تا XXL`}
				offerName3={`کفش نایک مدل S-2000`}
				offerPrice3={`۲۰۰۰۰۰ تومان`}
				offerSize3={`از سایز L تا XXL`}
				offerName4={`کفش نایک مدل S-2000`}
				offerPrice4={`۲۰۰۰۰۰ تومان`}
				offerSize4={`از سایز ۳۶ تا ۴۳`}
				offerName5={`کفش نایک مدل S-2000`}
				offerPrice5={`۲۰۰۰۰۰ تومان`}
				offerSize5={`از سایز ۳۶ تا ۴۳`}
				offerName6={`کفش نایک مدل S-2000`}
				offerPrice6={`۲۰۰۰۰۰ تومان`}
				offerSize6={`از سایز ۳۶ تا ۴۳`}
			/>
			<Banner1
				className={`bg-banner2`}
				title1={`برای لذت بردن از مسیر `}
				title2={`دوچرخه، اسکیت و  اسکوتر بگیر`}
			/>
			<Offer
				className={`bg-secondary-light`}
				srcImg1={`./img/cycles/bycycle3.jpg`}
				srcImg2={`./img/cycles/bycycle2.jpg`}
				srcImg3={`./img/cycles/bycycle1.jpg`}
				visibility={`hidden`}
				offerName1={`اسکوتر مدل A-155`}
				offerPrice1={`۳,000,000 تومان`}
				offerSize1={`از سایز 10 تا 14`}
				offerName2={`دوچرخه مدل S-2000`}
				offerPrice2={`2,000,000 تومان`}
				offerSize2={`از سایز 10 تا 14`}
				offerName3={`دوچرخه مدل AO-14`}
				offerPrice3={`4,500,000 تومان`}
				offerSize3={`از سایز 10 تا 14`}
				offerBgPrimary={`bg-primary`}
			/>
			<CardHomeWrapper
				imgCard1={`img/cardhm2/cardwomen1.png`}
				imgCard2={`img/cardhm2/cardwomen2.png`}
			/>
			<Banner1
				className={`bg-banner3`}
				title1={`بزودی کامل ترین مجموعه از لوازم کمپ در فیت لند از سفر لذت ببر`}
				visibility={`hidden`}
				classTitle1={`text-white max-w-50 md:max-w-80 lg:max-w-100`}
			/>
			<News />
		</>
	);
}
