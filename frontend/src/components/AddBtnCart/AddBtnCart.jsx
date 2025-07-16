"use client";
import { useShoppingContext } from "@/context/fitlandShoppingContext";
import React, { useState } from "react";

export default function AddBtnCart({ id, category }) {
	const {
		handleIncreaseCart,
		handleDeCreaseCart,
		getQtyCart,
		deleteCartFromBasket,
	} = useShoppingContext();
	return (
		<div className="flex gap-5 items-center">
			<div className="flex gap-x-4 items-center">
				<button
					onClick={() => handleIncreaseCart(id, category)}
					className="bg-sky-500 h-8 w-15 flex items-center justify-center rounded-lg text-white cursor-pointer hover:bg-sky-600 transition-colors"
				>
					+
				</button>
				<h3>{getQtyCart(id)}</h3>
				<button
					onClick={() => handleDeCreaseCart(id)}
					className="bg-red-500 h-8 w-15 flex items-center justify-center rounded-lg text-white cursor-pointer hover:bg-red-600 transition-colors"
				>
					-
				</button>
			</div>
			<button
				onClick={() => deleteCartFromBasket(id)}
				className="bg-red-500 h-8 w-22 flex items-center justify-center rounded-lg text-white cursor-pointer hover:bg-red-600 transition-colors"
			>
				Delete
			</button>
		</div>
	);
}
