export const dynamic = "force-dynamic";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import Card from "@/components/Card/Card";
import { formatNumber } from "@/utils/formatNumber";
import EmptyError from "@/components/EmptyError/EmptyError";
import Filtred from "@/components/Filtred/Filtred";
import PaginationApp from "@/components/Pagination/Pagination";

export default async function MensCart() {
	const result = await fetch(
		"https://fitland-3tiu.onrender.com/api/products/category/men"
	);
	const data = await result.json();

	console.log("mens cart");

	return (
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
				{data.length ? <Filtred /> : ""}

				{/* left side:products */}
				{data.length ? (
					<PaginationApp data={data} href={"mens-cart"} />
				) : (
					<EmptyError />
				)}
			</div>
		</div>
	);
}
