import Link from "next/link";
import React from "react";
import { GoHome, GoSun } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { LiaCommentsSolid } from "react-icons/lia";
import { HiUsers } from "react-icons/hi";
import { IoBagOutline } from "react-icons/io5";
import { PiSealPercent } from "react-icons/pi";
import { GoBell } from "react-icons/go";
import { BiMoon, BiSun } from "react-icons/bi";
export default function Sidebar({ children }) {
	const links = [
		{
			id: 1,
			title: "صفحه اصلی",
			href: "/wp-admin/",
			icon: <GoHome className="size-5" />,
		},
		{
			id: 12,
			title: "محصولات",
			href: "/wp-admin/products",
			icon: <AiOutlineProduct className="size-5" />,
		},
		{
			id: 14,
			title: "کامنت ها",
			href: "/wp-admin/comments",
			icon: <LiaCommentsSolid className="size-5" />,
		},
		{
			id: 15,
			title: "کاربران",
			href: "/wp-admin/users",
			icon: <HiUsers className="size-5" />,
		},
		{
			id: 17,
			title: "سفارشات",
			href: "/wp-admin/orders",
			icon: <IoBagOutline className="size-5" />,
		},
		{
			id: 11,
			title: "تخفیف ها",
			href: "/wp-admin/offs",
			icon: <PiSealPercent className="size-5" />,
		},
	];
	return (
		<div className="flex min-h-screen h-full">
			<aside className="bg-amber-500 sticky top-0 flex-1 text-white">
				<div className="border-b-2 py-4 px-2">
					<h2 className="font-iransans-bold tracking-tight">
						به داشبورد ادمین خوش آمدید
					</h2>
				</div>
				<div className="">
					<ul className="space-y-8">
						{links.map((link) => (
							<li key={link.id}>
								<Link
									href={link.href}
									className="flex items-center gap-1 p-2 hover:bg-zinc-900/80 transition-colors font-iransans-medium text-lg"
								>
									{link.icon}
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</aside>
			<div className="flex-5 px-5 py-2 bg-gray-100">
				{/* header */}
				<div className="flex items-center justify-between">
					{/* right */}
					<div>
						<div className="size-15 rounded-full overflow-hidden shadow-light shadow-amber-500">
							<img
								className="object-cover"
								src="/img/admin-profile/amirakl.png"
								alt=""
							/>
						</div>
					</div>
					{/* left */}
					<div className="flex items-center gap-x-4">
						<div className="text-black flex items-center px-2 bg-white h-12 w-80 shadow rounded-lg font-iransans-medium">
							<input
								className="outline-none w-full h-full"
								type="search"
								placeholder="جستجو کنید ..."
							/>
							<button className="w-35 py-1 px-2 rounded-xl bg-amber-500 text-white cursor-pointer hover:bg-amber-600 transition-colors">
								جستجو
							</button>
						</div>
						<div className="flex gap-x-2">
							<button className="w-10 p-1.5 flex justify-center items-center rounded-xl text-white bg-amber-500 cursor-pointer hover:bg-amber-600 transition-colors">
								<GoBell className="size-5" />
							</button>
							<button className="w-10 p-1.5 flex justify-center items-center rounded-xl text-white bg-amber-500 cursor-pointer hover:bg-amber-600 transition-colors">
								<BiSun className="size-5 dark:block hidden" />
								<BiMoon className="size-5 dark:hidden block" />
							</button>
						</div>
					</div>
				</div>
				{children}
			</div>
		</div>
	);
}
