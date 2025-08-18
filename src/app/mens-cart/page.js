export const dynamic = "force-dynamic";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import Card from "@/components/Card/Card";
import { formatNumber } from "@/utils/formatNumber";
import LayoutApp from "@/components/LayoutApp/LayoutApp";
import EmptyError from "@/components/EmptyError/EmptyError";
import Filtred from "@/components/Filtred/Filtred";
import PaginationApp from "@/components/Pagination/Pagination";

export default async function MensCart() {
	const result = await fetch(
		"https://fitland-gtmr.onrender.com/api/products/category/men"
	);
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
					{data.length ? <Filtred /> : ""}

					{/* left side:products */}
					{data.length ? (
						<PaginationApp data={data} />
					) : (
						// <div className="lg:w-2/3 grid sm:grid-cols-2 md:grid-cols-3 mx-auto gap-5">
						// 	{data.map((item) => (
								// <Link key={item._id} href={`/mens-cart/${item._id}`}>
								// 	<Card
								// 		cardImg={item.img}
								// 		cardName={item.title}
								// 		cardSize={item.size}
								// 		cardPrice={formatNumber(item.price)}
								// 	/>
								// </Link>
						// 	))}
						// </div>
						<EmptyError />
					)}
				</div>
			</div>
		</LayoutApp>
	);
}
