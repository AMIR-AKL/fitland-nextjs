"use client";
import React, { useEffect, useState } from "react";
import { formatNumber } from "@/utils/formatNumber";
import { IoStar } from "react-icons/io5";
import AddBtnCart from "../AddBtnCart/AddBtnCart";
import axios from "axios";

export default function CartItems({ id, category }) {
	const [data, setData] = useState();
	useEffect(() => {
		axios(`https://fitland-gtmr.onrender.com/api/products/${category}/${id}`).then((res) =>
			setData(res.data)
		);
	}, []);
	// console.log(data);

	return (
		<div className="flex flex-col shadow mt-5 rounded-lg overflow-hidden">
			<div className="relative">
				<img className="object-cover w-full bg-cover bg-center" src={data?.img} alt="card1" />
				<div className=" absolute right-5 top-2">
					<span
						className={`bg-[#334B4F] size-4 rounded-full block absolute top-2`}
					></span>
					<span
						className={`bg-[#515549] size-4 rounded-full block absolute -right-2 top-2`}
					></span>
					<span
						className={`bg-[#F00000] size-4 rounded-full block absolute -right-4 top-2`}
					></span>
				</div>
			</div>
			<div className=" flex flex-col justify-around space-y-6 pt-2 pb-8 px-4">
				{/* name & rate */}
				<div>
					{/* card name */}
					<h3 className="font-iransans-medium text-2xl tracking-tight">
						{data?.title}
					</h3>
					{/* rate */}
					<div className="flex mt-4">
						<IoStar className="text-gray-400" />
						<IoStar className="text-gray-400" />
						<IoStar className="text-amber-300" />
						<IoStar className="text-amber-300" />
						<IoStar className="text-amber-300" />
					</div>
				</div>
				{/* card size */}
				<div>
					<p className="text-xl font-iransans-medium tracking-tight">
						{data?.size}
					</p>
				</div>
				{/* card price */}
				<div>
					<h3 className="font-iransans-bold text-xl tracking-tight flex gap-2 items-center">
						{formatNumber(data?.price || 0)}
						<span className="text-sm font-iransans-medium">تومان</span>
					</h3>
				</div>
				<AddBtnCart id={id} category={category} />
			</div>
		</div>
	);
}
