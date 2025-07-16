import { PiArrowSquareUpLeft } from "react-icons/pi";
function CardHomePage({ srcImg, cover }) {
	return (
		<>
			<div className="w-80 border border-gray-100 relative rounded-xl overflow-hidden ">
				<div
					className={`absolute bg-black/50 backdrop-blur-xs top-0 bottom-0 left-0 right-0 ${cover} flex xl:hidden flex-col justify-center items-center`}
				>
					<h3 className="text-neutral-200 tracking-tight font-iransans-medium text-xs">
						فقط با یک کلیک وارد دنیای محصولات جدید شوید
					</h3>
					<a
						className="flex items-center gap-1 mt-5 text-neutral-200 tracking-tight font-iransans-medium border p-2 rounded-sm text-sm"
						href="#"
					>
						<PiArrowSquareUpLeft className="size-5" />
						جدید ترین محصولات
					</a>
				</div>
				<div className=" relative">
					<img className="w-full h-94" src={srcImg} alt="" />
					<img
						alt="pic"
						loading="lazy"
						width={100}
						height={50}
						decoding="async"
						data-nimg={1}
						className="w-full absolute bottom-0 object-cover text-secondary transform scale-x-[-1] space-x-reverse"
						src="./img/vector.svg"
					/>
					<div className=" absolute bottom-0 w-full p-4 text-center">
						<h3 className="font-iransans-medium tracking-tight text-sm text-neutral-300">
							جدید ترین تخفیفات فصل برند پوما
						</h3>
						<h3 className="font-iransans-medium tracking-tight text-sm text-neutral-300">
							<span className="text-amber-500">۵۰ ٪</span> تخفیف روی تمام
							محصولات
						</h3>
					</div>
				</div>
				{/* <div className="w-full h-20 bg-secondary rounded-tl-2xl relative flex flex-col px-5 rounded-b-2xl ">
					<div className="w-0 h-0 rounded-t-2xl border-r-17 absolute -top-12.5 lg:-top-11.5 right-0  border-l-transparent border-r-secondary border-b-secondary border-l-288 border-b-51 lg:border-b-47"></div>
					<h3 className="font-iransans-medium tracking-tight text-sm text-neutral-300">
						جدید ترین تخفیفات فصل برند پوما
					</h3>
					<h3 className="font-iransans-medium tracking-tight text-sm text-neutral-300">
						<span className="text-amber-500">۵۰ ٪</span> تخفیف روی تمام محصولات
					</h3>
				</div> */}
			</div>
		</>
	);
}
export default CardHomePage;
