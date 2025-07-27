export const dynamic = "force-dynamic";
import React from "react";
import AddBtnCart from "@/components/AddBtnCart/AddBtnCart";
import { formatNumber } from "@/utils/formatNumber";
import { IoStar } from "react-icons/io5";
import LayoutApp from "@/components/LayoutApp/LayoutApp";
export default async function page({ params }) {
	const { id } = await params;
	const result = await fetch(`https://fitland-api-1.onrender.com/child/${id}`);
	const data = await result.json();
	return (
		<LayoutApp>
			<div>
				<div className="container">
					<div className="grid grid-cols-10 max-md:flex flex-col shadow mt-5 rounded-lg overflow-hidden gap-5">
						<div className="relative col-span-4 lg:col-span-3">
							<img className="" src={data.src} alt="card1" />
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
						<div className="col-span-6 lg:col-span-7 flex flex-col justify-around space-y-6 pt-2 pb-8 px-4">
							{/* name & rate */}
							<div>
								{/* card name */}
								<h3 className="font-iransans-medium text-2xl tracking-tight">
									{data.title}
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
									{data.size}
								</p>
							</div>
							{/* card price */}
							<div>
								<h3 className="font-iransans-bold text-xl tracking-tight flex gap-2 items-center">
									{formatNumber(data.price)}
									<span className="text-sm font-iransans-medium">تومان</span>
								</h3>
							</div>
							{/* card colors */}

							<AddBtnCart id={id} category={"child"} />
						</div>
					</div>
				</div>
			</div>
		</LayoutApp>
	);
}
