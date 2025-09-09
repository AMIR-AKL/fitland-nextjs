import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
export default function Product({ cardImg, cardName, cardSize, cardPrice }) {
	return (
		<div className="max-w-2xs rounded-2xl overflow-hidden bg-gray-50 cols-3 cursor-pointer mx-auto shadow-sm">
			<div className="relative w-full h-64 md:h-80 lg:h-96">
				<Image
					src={cardImg}
					alt="card"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
					fill
					quality={80}
				/>
			</div>
			<div className="py-6 px-4 space-y-4">
				{/* name & rate */}
				<div className="flex justify-between">
					{/* card name */}
					<h3 className="font-iransans-medium tracking-tight">{cardName}</h3>
					{/* rate */}
					<div className="flex">
						<IoStar className="text-gray-400" />
						<IoStar className="text-gray-400" />
						<IoStar className="text-amber-300" />
						<IoStar className="text-amber-300" />
						<IoStar className="text-amber-300" />
					</div>
				</div>
				{/* card size */}
				<div>
					<p className="text-xs font-iransans-regular tracking-tight">
						{cardSize}
					</p>
				</div>
				{/* card price */}
				<div>
					<span className="font-iransans-medium text-sm tracking-tight">
						{cardPrice} تومان
					</span>
				</div>
				{/* card colors */}
				<div className="pr-5">
					<div className="relative">
						<span
							className={`bg-[#334B4F] size-4 rounded-full block absolute`}
						></span>
						<span
							className={`bg-[#515549] size-4 rounded-full block absolute -right-2`}
						></span>
						<span
							className={`bg-[#F00000] size-4 rounded-full block absolute -right-4`}
						></span>
					</div>
				</div>
			</div>
		</div>
	);
}
