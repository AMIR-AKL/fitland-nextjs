"use client";
import React, { useReducer } from "react";
import { IoIosArrowDown } from "react-icons/io";
const initialState = {
	price: false,
	color: false,
	size: false,
};
const reducer = (state, action) => {
	switch (action.type) {
		case "price":
			return { ...state, price: !state.price };
		case "color":
			return { ...state, color: !state.color };
		case "size":
			return { ...state, size: !state.size };

		default:
			throw new Error("unknown action");
	}
};

export default function Filtred() {
	const [state, dispath] = useReducer(reducer, initialState);
	const { price, color, size } = state;
	const openHandler = (action) => {
		dispath({ type: action });
	};

	return (
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
						<div
							onClick={() => openHandler("price")}
							className="flex items-end cursor-pointer"
						>
							<h3 className="select-none">قیمت</h3>
							<IoIosArrowDown />
						</div>
						{/* filter price */}
						<div className={`space-y-4 mt-5 ${price ? "block" : "hidden"}`}>
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
						<div
							onClick={() => openHandler("color")}
							className="flex items-end cursor-pointer"
						>
							<h3 className=" select-none">رنگ</h3>
							<IoIosArrowDown />
						</div>
						{/* filter color */}
						<div className={`${color ? "block" : "hidden"}`}>
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
						<div
							onClick={() => openHandler("size")}
							className="flex items-end cursor-pointer"
						>
							<h3 className=" select-none">سایز</h3>
							<IoIosArrowDown />
						</div>
						{/* select size */}
						<div className={`mt-5 ${size ? "block" : "hidden"}`}>
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
	);
}
