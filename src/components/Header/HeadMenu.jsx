"use client";
import { useShoppingContext } from "@/context/fitlandShoppingContext";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { HiMiniXMark, HiOutlineShoppingBag } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
function HeadMenu() {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	// const openMobileMenu = (e) => {
	// 	const mobileMenuEl = document.getElementById("mobile-menu");
	// 	const coverEl = document.querySelector("#cover");
	// 	mobileMenuEl.classList.add("left-0");
	// 	mobileMenuEl.classList.remove("-left-50");
	// 	coverEl.classList.remove("hidden");
	// };
	// const closeMobileMenu = () => {
	// 	const mobileMenuEl = document.getElementById("mobile-menu");
	// 	const coverEl = document.querySelector("#cover");
	// 	mobileMenuEl.classList.remove("left-0");
	// 	mobileMenuEl.classList.add("-left-50");
	// 	coverEl.classList.add("hidden");
	// };
	const { totalQtyCarts } = useShoppingContext();
	return (
		<div className="flex max-sm:flex-col max-sm:items-start sm:justify-between sm:items-center mt-8 gap-5 ">
			{/* logo */}
			<div className="flex sm:flex-col max-sm:w-full max-sm:justify-between items-center sm:gap-2">
				<Link href={"/"}>
					<img className="max-sm:size-24" src="/img/logo/fitland.svg" alt="" />
				</Link>
				<p className="md:block hidden font-iransans-medium text-xs tracking-normal">
					فروشگاه لوازم ورزشی فیت‌لند
				</p>
				<HiBars3
					onClick={() => setOpenMobileMenu(true)}
					className="size-8 sm:hidden"
				/>
				{/* mobile menu */}
				<div
					id="mobile-menu"
					className={`flex flex-col transition-all duration-200 ease-linear gap-10 w-50 h-full bg-white fixed  top-0 bottom-0 p-5 z-80 ${
						openMobileMenu ? "left-0" : "-left-50"
					}`}
				>
					{/* heads mobile menu */}
					<div className="flex items-center justify-between">
						<img
							className="max-sm:size-22"
							src="/img/logo/fitland.svg"
							alt=""
						/>
						<HiMiniXMark
							onClick={() => setOpenMobileMenu(false)}
							className="size-6"
						/>
					</div>
					{/* links mobile menu */}
					<ul className="flex flex-col *:flex gap-10 *:text-sm *:font-iransans-medium">
						<li>
							<Link href="./mens-cart">مردانه</Link>
						</li>
						<li>
							<Link href="/womens-cart">زنانه</Link>
						</li>
						<li>
							<Link href="/children-cart">بچگانه</Link>
						</li>
						<li>
							<Link href="/sports-equipment">لوازم ورزشی</Link>
						</li>
						<li>
							<Link href="/shaker">شیکر و جاگ</Link>
						</li>
					</ul>
					<ul className="flex flex-col *:flex *:items-center *:gap-x-2 gap-10 *:text-sm *:font-iransans-medium">
						<li>
							{/* <FaRegStar className="text-primary" /> */}
							<a href="#">جدیدترین محصولات</a>
						</li>
						<li>
							{/* <BsLightningCharge className="text-primary" /> */}
							<a href="#">تخفیفات ویژه</a>
						</li>
						<li>
							{/* <BiMedal className="text-primary" /> */}
							<a href="#">پرفروش ترین ها</a>
						</li>
					</ul>
				</div>
			</div>
			{/* search box */}
			<div className="border border-gray-300 bg-gray-50 flex rounded-xl items-center justify-between p-2 w-1/3 lg:w-1/2  max-sm:w-full  h-12">
				<div className="flex items-center">
					<CiSearch className="text-orange-500 size-6" />
					{/* <span className="text-xs font-iransans-medium text-gray-400">
            جستجو
          </span> */}
				</div>
				<input
					type="search"
					placeholder="جستجو"
					className="border-0 font-iransans-medium text-xs md:text-sm outline-0 w-full caret-amber-500"
				/>
			</div>
			{/* login */}
			<div className="flex max-sm:hidden items-center gap-x-4">
				<div className="flex items-center gap-x-1 shadow-2xl bg-white p-2 rounded-xl">
					<h3 className="text-xs font-iransans-demibold">
						<Link href={"/sign-up"}>ثبت نام </Link>|{" "}
						<Link href={"/login"}>ورود</Link>
					</h3>
					<FiUser className="size-5" />
				</div>
				<Link href={"/cart"}>
					<div className="bg-primary p-2 rounded-sm relative">
						<HiOutlineShoppingBag />
						{/* count cart of basket */}
						{totalQtyCarts ? (
							<span className="absolute bg-sky-600 size-5 text-xs text-white rounded-full flex items-center justify-center -top-3 -right-3">
								{totalQtyCarts}
							</span>
						) : (
							""
						)}
					</div>
				</Link>
			</div>
			{/* cover */}
			<div
				id="cover"
				className={`fixed left-0 right-0 z-50 top-0 h-full bottom-0  bg-black/40  transition-all ${
					openMobileMenu ? "block" : "hidden"
				}`}
			></div>
		</div>
	);
}
export default HeadMenu;
