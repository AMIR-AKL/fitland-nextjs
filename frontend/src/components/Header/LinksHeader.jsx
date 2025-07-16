"use client";
import { useShoppingContext } from "@/context/fitlandShoppingContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function LinksHeader() {
	const pathName = usePathname();
	// console.log(pathName);

	const links = [
		{ id: 1, title: "مردانه", category: "men-carts", href: "/mens-cart" },
		{ id: 2, title: "زنانه", category: "women-carts", href: "/womens-cart" },
		{
			id: 3,
			title: "بچگانه",
			category: "children-carts",
			href: "/children-cart",
		},
		{
			id: 4,
			title: "لوازم ورزشی",
			category: "sports-equipment",
			href: "/sports-equipment",
		},
		{ id: 5, title: "شیکر و جاگ", category: "shaker", href: "/shaker" },
	];

	return (
		<ul className="flex *:flex gap-x-5 lg:gap-x-10">
			{links.map((link) => (
				<li
					key={link.id}
					className={pathName === link.href ? "text-sky-600" : "text-black"}
				>
					<Link href={link.href}>{link.title}</Link>
				</li>
			))}
		</ul>
	);
}
