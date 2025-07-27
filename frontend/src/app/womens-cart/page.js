import React from "react";
import { LuSettings2 } from "react-icons/lu";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Card from "@/components/Card/Card";
import { useShoppingContext } from "@/context/fitlandShoppingContext";
import { formatNumber } from "@/utils/formatNumber";
import Link from "next/link";
import LayoutApp from "@/components/LayoutApp/LayoutApp";
export default async function WomenCart() {
	const result = await fetch("https://fitland-api-1.onrender.com/women");
	const data = await result.json();

	return (
		<LayoutApp>
			<div className="container mt-5">
				{/* filter & sorted */}
				<div className="flex justify-between">
					{/* filters logo */}
					<div className="flex items-center gap-x-0.5">
						<LuSettings2 className="size-6" />
						<span>فیلترها</span>
					</div>
					{/* sorted logo */}
					<div className="flex items-center gap-x-0.5">
						<IoFilterOutline className="size-6 mt-1" />
						<span>مرتب سازی بر اساس</span>
					</div>{" "}
				</div>
				{/* products & filter section in desktop */}
				<div className="flex mt-10">
					{/* right side :filter section in desktop*/}
					<div className="hidden lg:block lg:w-1/3 max-h-52 sticky right-0 top-16 m-5">
						<div className="border border-gray-200 rounded-2xl p-5 space-y-4">
							{/* heade */}
							<div className="flex justify-between">
								<h3>فیلترها</h3>
								<button>حذف فیلترها</button>
							</div>
							{/* main */}
							<div className="space-y-4">
								{/* Available products */}
								<div className="flex justify-between">
									<h3>محصولات موجود</h3>
									<label className="relative inline-flex items-center cursor-pointer">
										<input type="checkbox" className="sr-only peer" />
										<div className="group peer bg-white rounded-full duration-300 w-16 h-8 ring-2 ring-gray-300 after:duration-300 after:bg-gray-300 peer-checked:after:bg-green-500 peer-checked:ring-green-500 after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"></div>
									</label>
								</div>
								{/* Discounted products */}
								<div className="flex justify-between">
									<h3>محصولات تخفیف دار </h3>
									<label className="relative inline-flex items-center cursor-pointer">
										<input type="checkbox" className="sr-only peer" />
										<div className="group peer bg-white rounded-full duration-300 w-16 h-8 ring-2 ring-gray-300 after:duration-300 after:bg-gray-300 peer-checked:after:bg-green-500 peer-checked:ring-green-500 after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"></div>
									</label>
								</div>
							</div>
							{/* filter select */}
							<div className="space-y-4">
								{/* price */}
								<div className="flex flex-col">
									<div className="flex items-end cursor-pointer">
										<h3 className=" select-none">قیمت</h3>
										<IoIosArrowDown />
									</div>
									{/* filter price */}
									<div className="space-y-4 mt-5 hidden">
										{/* max */}
										<div className="flex items-center justify-between">
											<h3>بیشترین</h3>
											<div className="flex items-center p-2 bg-gray-200 rounded-xl">
												<input
													type="text"
													placeholder="وارد کنید"
													className="outline-none w-full h-full px-2"
												/>
											</div>
										</div>
										{/* min */}
										<div className="flex items-center justify-between">
											<h3>کمترین</h3>
											<div className="flex items-center p-2 bg-gray-200 rounded-xl">
												<input
													type="text"
													placeholder="وارد کنید"
													className="outline-none w-full h-full px-2"
												/>
											</div>
										</div>
										{/* select price */}
										<div className="flex items-center justify-between">
											<input
												min={100000}
												max={500000}
												type="range"
												className="w-full h-2 bg-gray-300 text-secondary rounded-lg  cursor-pointer"
											/>
										</div>
									</div>
								</div>
								{/* color */}
								<div className="flex flex-col">
									<div className="flex items-end cursor-pointer">
										<h3 className=" select-none">رنگ</h3>
										<IoIosArrowDown />
									</div>
									{/* filter color */}
									<div className="hidden">
										<div className="mt-8 gap-2 *:cursor-pointer flex">
											<span className="size-6 bg-[#FF208B] rounded-full block"></span>
											<span className="size-6 bg-[#FA541C] rounded-full block"></span>
											<span className="size-6 bg-[#403CFB] rounded-full block"></span>
											<span className="size-6 bg-[#FB3C3C] rounded-full block"></span>
											<span className="size-6 bg-[#FBF43C] rounded-full block"></span>
											<span className="size-6 bg-[#3FCC88] rounded-full block"></span>
											<span className="size-6 bg-[#032340] rounded-full block"></span>
										</div>
									</div>
								</div>
								{/* size */}
								<div className="flex flex-col">
									<div className="flex items-end cursor-pointer">
										<h3 className=" select-none">سایز</h3>
										<IoIosArrowDown />
									</div>
									{/* select size */}
									<div className="mt-5 hidden">
										<div className="flex flex-wrap gap-2">
											<span className="w-20 h-6 flex items-center justify-center rounded-sm bg-gray-200 hover:text-sky-300 transition-colors cursor-pointer">
												L
											</span>
											<span className="w-20 h-6 flex items-center justify-center rounded-sm bg-gray-200 hover:text-sky-300 transition-colors cursor-pointer">
												M
											</span>
											<span className="w-20 h-6 flex items-center justify-center rounded-sm bg-gray-200 hover:text-sky-300 transition-colors cursor-pointer">
												S
											</span>
											<span className="w-20 h-6 flex items-center justify-center rounded-sm bg-gray-200 hover:text-sky-300 transition-colors cursor-pointer">
												XXL
											</span>
											<span className="w-20 h-6 flex items-center justify-center rounded-sm bg-gray-200 hover:text-sky-300 transition-colors cursor-pointer">
												XL
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* left side:products */}
					<div className="lg:w-2/3 grid sm:grid-cols-2 md:grid-cols-3 mx-auto gap-5">
						{data.map((item) => (
							<Link key={item.id} href={`/womens-cart/${item.id}`}>
								<Card
									cardImg={item.src}
									cardName={item.title}
									cardSize={item.size}
									cardPrice={formatNumber(item.price)}
								/>
							</Link>
						))}
					</div>
				</div>
			</div>
		</LayoutApp>
	);
}
