import BtnProduct from "../BtnProduct/BtnProduct";
import CardHomePage from "../CardHomePage/CardHomePage";

function CardHomeWrapper({ imgCard1, imgCard2 }) {
	return (
		<section className="mt-20 container">
			<div className="flex max-md:flex-col gap-5 justify-center items-center">
				<CardHomePage srcImg={imgCard1} cover={`hidden`} />
				<CardHomePage srcImg={imgCard2} />
				<div className=" *:mt-10 xl:block hidden">
					<h2 className="text-2xl text-secondary font-iransans-medium tracking-tight">
						جدید ترین محصولات
					</h2>
					<p className="text-base max-w-100 text-natural tracking-tight font-iransans-demibold">
						جدید ترین محصولات با ارسال رایگان تهیه کنید و در سریع ترین زمان درب
						منزل تحویل بگیرید
					</p>
					<BtnProduct
						text={"مشاهده همه محصولات"}
						className={`bg-primary w-60`}
						link='/products'
					/>
				</div>
			</div>
		</section>
	);
}
export default CardHomeWrapper;
