export const dynamic = "force-dynamic";
import React from "react";
import AddBtnCart from "@/components/AddBtnCart/AddBtnCart";
import { formatNumber } from "@/utils/formatNumber";
import { IoStar } from "react-icons/io5";
export default async function Page({ params }) {
	const { id } = await params;
	const result = await fetch(
		`https://fitland-3tiu.onrender.com/api/products/men/${id}`
	);
	const data = await result.json();
	return (
		<div className="container">
			<div className="flex flex-col lg:flex-row shadow-md rounded-2xl overflow-hidden mt-8 bg-white">
				{/* تصویر محصول */}
				<div className="relative flex items-center justify-center  p-10 rounded-2xl">
					<img
						src={data.img}
						alt={data.title}
						className="max-h-[450px] object-contain rounded-xl drop-shadow-xl transition-transform duration-500 hover:scale-105 hover:rotate-1"
					/>

					{/* سایه نرم زیر عکس */}
					<div className="absolute bottom-6 w-2/3 h-6 bg-black/10 blur-2xl rounded-full"></div>
				</div>

				{/* جزئیات محصول */}
				<div className="flex-1 flex flex-col max-lg:items-center justify-between p-10 space-y-8">
					{/* عنوان و امتیاز */}
					<div>
						<h1 className="font-iransans-bold text-3xl mb-4">{data.title}</h1>
						<div className="flex items-center gap-1 text-amber-400">
							{[...Array(5)].map((_, i) => (
								<IoStar
									key={i}
									className={i < 4 ? "text-amber-400" : "text-gray-300"}
								/>
							))}
							<span className="text-sm text-gray-500 ml-2">4.3/5</span>
						</div>
					</div>

					{/* قیمت */}
					<div>
						<h2 className="font-iransans-bold text-3xl text-green-600">
							{formatNumber(data.price)}{" "}
							<span className="text-lg text-gray-600">تومان</span>
						</h2>
						<p className="text-gray-500 text-sm mt-1">
							مالیات و هزینه ارسال محاسبه می‌شود
						</p>
					</div>

					{/* سایز */}
					<div>
						<p className="font-iransans-medium text-lg mb-2">انتخاب سایز:</p>
						<div className="flex gap-2">
							{data.size?.split(",").map((s, i) => (
								<button
									key={i}
									className="px-4 py-2 border rounded-lg text-gray-700 hover:border-black transition"
								>
									{s}
								</button>
							))}
						</div>
					</div>

					{/* افزودن به سبد */}
					<div className="">
						<AddBtnCart id={id} category="men" />
					</div>
				</div>
			</div>
		</div>
	);
}
