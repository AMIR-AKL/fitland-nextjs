'use client'
import FooterMenu from "./FooterMenu";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
	const moreTextHandler = (e) => {
		const textBoxEl = document.querySelector("#text-box");
		const coverEl = document.querySelector("#cover-text");
		// let moreBtn = e.target.innerHTML;
		textBoxEl.classList.toggle("max-h-none");
		coverEl.classList.toggle("hidden");
		if (textBoxEl.classList.contains("max-h-none")) {
			e.nativeEvent.target.innerHTML = "مشاهده کمتر";
			// console.log(e.nativeEvent.target.innerHTML);
		} else {
			e.nativeEvent.target.innerHTML = "مشاهده بیشتر";
		}
	};
	return (
		<footer className="bg-secondary-dark py-10">
			<div className="container flex flex-col">
				{/* head footer */}
				<div className="flex sm:block lg:flex items-center justify-center md:justify-between">
					<div className="lg:flex hidden items-center gap-10">
						<FooterMenu
							title={`محبوب‌ترین‌ها`}
							link1={`لباس مردانه`}
							link2={`کفش فوتبال`}
							link3={`دوچرخه`}
							link4={`لباس زنانه`}
						/>
						<FooterMenu
							title={`خدمات مشتریان`}
							link1={`سوالات متداول`}
							link2={`حریم خصوصی`}
							link3={`گزارش ایراد در سایت`}
							link4={`شرایط بازگرداندن محصول`}
						/>
						<FooterMenu
							title={`راهنمای خرید`}
							link1={`راهنمای ثبت سفارش`}
							link2={`شیوه های پرداخت`}
							link3={`نحوه ارسال سفارش ها`}
							link4={`نحوه پیگیری محصول`}
						/>
						<FooterMenu
							title={`اطلاعات تماس`}
							link1={`نشانی  تهران - تجریش - خیابان سالور`}
							link2={`شماره تماس  3456789-021`}
							link3={`پست الکترونیک  info@fitland.com`}
							link4={`ساعت کاری  شنبه تا چهارشنبه 9 تا 17`}
						/>
					</div>
					<div className="sm:flex lg:block max-lg:items-end max-lg:justify-between">
						<div className="text-white">
							<h2 className="text-sm tracking-tight font-iransans-demibold">
								برای دریافت تخفیف های بیشتر ما را دنبال کنید!
							</h2>
							<div className="mt-5 flex items-center justify-between">
								<a href="#">
									<FaYoutube className="size-6" />
								</a>
								<a href="#">
									<FaWhatsapp className="size-6" />
								</a>
								<a href="#">
									<FaTelegramPlane className="size-6" />
								</a>
								<a href="#">
									<FaInstagram className="size-6" />
								</a>
							</div>
						</div>
						<form className="text-white mt-10">
							<h2 className="text-sm tracking-tight font-iransans-demibold">
								خبرنامه فیت‌لند
							</h2>
							<div className="flex gap-x-2 mt-5 items-center">
								<HiOutlineMail className="size-6" />
								<input
									type="email"
									placeholder="ایمیل خود را وارد کنید..."
									className="text-xs tracking-tight text-neutral-400 font-iransans-medium outline-0 border-0"
								/>
								<input
									type="submit"
									value="ثبت نام"
									className="text-xs tracking-tight font-iransans-medium bg-primary p-1 rounded-sm cursor-pointer"
								/>
							</div>
						</form>
					</div>
				</div>
				{/* main footer */}
				<div className="flex flex-col md:flex-row justify-between items-center mt-15 gap-12">
					{/* right main footer */}
					<div
						id="text-box"
						className="text-white max-w-100 lg:max-w-162 max-h-30 md:max-h-none overflow-hidden relative"
					>
						<h1 className="text-sm tracking-tight font-iransans-demibold">
							فروشگاه اینترنتی فیت‌لند
						</h1>
						<p className="text-xs tracking-tight font-iransans-medium mt-5 p-2.5">
							فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای
							آغاز کرد و با هدف ارائه جدیدترین محصولات ورزشی از قبیل لوازم
							فوتبال، فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و
							تجهیزات سفر، از برند های معتبر دنیا در محیطی کاربرپسند، قابل
							اطمینان و با مجربترین مشاوران و کارشناسان ورزشی فعالیت می کند.
							فروشگاه فیت‌لند دارای نماد اعتماد از وزارت صنعت معدن و تجارت می
							باشد و تمامی محصولات خود را با 7 روز ضمانت بازگشت همراه با گارانتی
							اصالت و سلامت فیزیکی، با سریع ترین روش های ارسال به سراسر ایران در
							اختیار مشتریان خود قرار می دهد.
						</p>
						<div
							id="cover-text"
							className="absolute md:hidden bottom-0 left-0 right-0 h-15 bg-gradiant"
						></div>
					</div>
					<button
						onClick={moreTextHandler}
						className="border md:hidden p-2 rounded-sm text-sm tracking-tight font-iransans-medium  block text-white"
					>
						مشاهده بیشتر
					</button>
					{/* left main footer */}
					<div className="max-md:text-center">
						<div className="flex items-center gap-5">
							<img
								className="size-15 rounded-sm"
								src="/img/etemad/etemad1.jpg"
								alt=""
							/>
							<img
								className="size-15 rounded-sm"
								src="/img/etemad/etemad2.jpg"
								alt=""
							/>
							<img
								className="size-15 rounded-sm"
								src="/img/etemad/etemad3.jpg"
								alt=""
							/>
						</div>
						<h3 className="text-sm text-white tracking-tight font-iransans-medium mt-5">
							یک هفته ضمانت بازگشت ✍
						</h3>
					</div>
				</div>
				{/* copyright */}
				<div className="flex flex-col md:flex-row text-center max-md:*:not-last:border-b *:mt-5 *:p-2 items-center justify-between text-white *:text-xs tracking-tight font-iransans-medium mt-10">
					<h3>
						تمامی حقوق مادی و معنوی این وب‌سایت برای مجموعه فیت‌لند محفوظ
						می‌باشد.
					</h3>
					<h3>طراحی شده با 🧡 در فیت‌لند</h3>
				</div>
			</div>
		</footer>
	);
}
