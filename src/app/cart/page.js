"use client";
import CartItems from "@/components/CartItems/CartItems";
import LayoutApp from "@/components/LayoutApp/LayoutApp";
import { useShoppingContext } from "@/context/fitlandShoppingContext";
import { formatNumber } from "@/utils/formatNumber";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Cart() {
	const { cartItems } = useShoppingContext();
	const [products, setProducts] = useState([]);
	const [disCountCode, setDisCountCode] = useState("");
	const [discountedPrice, setDiscontedPrice] = useState(0);
	const [finallyPrice, setFinallyPrice] = useState(0);
	useEffect(() => {
		async function getAllProducts() {
			const result = cartItems.map((item) =>
				axios.get(
					`https://fitland-3tiu.onrender.com/api/products/${item.category}/${item.id}`
				)
			);
			const response = await Promise.all(result);
			const data = response.map((res, index) => ({
				...res.data,
				qty: cartItems[index].qty,
				category: cartItems[index].category,
			}));
			setProducts(data);
		}
		getAllProducts();
	}, [cartItems]);
	const totalPrice = products.reduce((total, item) => {
		return (total + item.price) * item.qty;
	}, 0);
	const handleDisCount = () => {
		axios(`https://fitland-3tiu.onrender.com/api/discounts?code=${disCountCode}`).then(
			(res) => {
				let data = res.data;
				let off = data.percentag;
				let discountedPrice = (off * totalPrice) / 100;
				let finallyPrice = totalPrice - discountedPrice;
				setDiscontedPrice(discountedPrice);
				setFinallyPrice(finallyPrice);
				console.log(discountedPrice);
			}
		);
	};
	// console.log(products);

	// console.log(cartItems);

	return (
		<LayoutApp>
			<div>
				<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
					{cartItems.map((cart) => (
						<CartItems
							key={cart.productId}
							id={cart.productId}
							category={cart.category}
						/>
					))}
				</div>
				<div className="container">
					<div className="mt-5 shadow py-6 px-4 rounded-lg space-y-4">
						<h3 className="sm:text-2xl font-iransans-medium flex gap-1 items-center">
							قیمت کل:
							<span className="font-iransans-bold">
								{formatNumber(totalPrice)}
							</span>
							<span className="text-lg font-iransans-regular">تومان</span>
						</h3>
						<h3 className="sm:text-2xl font-iransans-medium flex gap-1 items-center">
							سود شما از این خرید:
							<span className="font-iransans-bold">
								{formatNumber(discountedPrice)}
							</span>
							<span className="text-lg font-iransans-regular">تومان</span>
						</h3>
						<h3 className="sm:text-2xl font-iransans-medium flex gap-1 items-center">
							قیمت نهایی:{" "}
							<span className="font-iransans-bold">
								{formatNumber(finallyPrice)}
							</span>
							<span className="text-lg font-iransans-regular">تومان</span>
						</h3>
						<div className="flex items-center gap-4 mt-5">
							<input
								onChange={(e) => setDisCountCode(e.target.value)}
								value={disCountCode}
								className="bg-green-100 max-sm:w-2/3 text-xs outline-none p-2 rounded-lg"
								type="text"
								placeholder="کد تخفیف را وارد کنید"
							/>
							<button
								onClick={handleDisCount}
								className="bg-green-600 py-1 sm:py-2 px-5 rounded-lg cursor-pointer hover:bg-green-800 transition-colors text-white"
							>
								اعمال
							</button>
						</div>
					</div>
				</div>
			</div>
		</LayoutApp>
	);
}
