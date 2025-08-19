"use client";

import axios from "axios";

const { createContext, useContext, useState, useEffect } = require("react");

const shoppingContext = createContext({});

export const useShoppingContext = () => {
	return useContext(shoppingContext);
};

export function FitlandShoppingContextProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [logOut, setLogOut] = useState(false);
	const handleIncreaseCart = async (id, category) => {
		if (!user) {
			return alert("لطفا وارد حساب خود شوید");
		}

		try {
			// console.log(cartItems);

			const token = localStorage.getItem("token");
			const res = await axios.post(
				"https://fitland-3tiu.onrender.com/api/cart/add",
				{
					userId: user._id,
					productId: id,
					category: category,
					quantity: 1,
				},
				{
					headers: { Authorization: token },
				}
			);
			setCartItems(res.data.cart);
		} catch (err) {
			console.error("خطا در افزودن به سبد خرید", err);
		}
	};

	const handleDeCreaseCart = async (id) => {
		if (!user) {
			return alert("لطفا وارد حساب خود شوید");
		}
		try {
			const token = localStorage.getItem("token");
			const res = await axios.put(
				`https://fitland-3tiu.onrender.com/api/cart/decrease/${user._id}/${id}`,

				{ headers: { Authorization: token } }
			);
			setCartItems(res.data.cart);
		} catch (err) {
			console.error("خطا در کاهش محصول", err);
		}
	};
	// console.log(cartItems);
	const getQtyCart = (id, category) => {
		return (
			cartItems.find(
				(item) => item.productId === id && item.category == category
			)?.quantity || 0
		);
	};
	const totalQtyCarts = cartItems?.reduce((total, item) => {
		return total + item.quantity;
	}, 0);

	const deleteCartFromBasket = (id, category) => {
		if (!user) {
			return alert("لطفا وارد حساب خود شوید");
		}
		const deleteCart = async () => {
			await axios
				.delete(
					`https://fitland-3tiu.onrender.com/api/cart/remove/${user._id}/${id}`
				)
				.then((res) => setCartItems(res.data.cart));
		};
		deleteCart();
	};

	// get user info
	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const token = localStorage.getItem("token");
				if (!token) {
					setError("لطفا وارد شوید");
					return;
				}
				const res = await axios.get(
					"https://fitland-3tiu.onrender.com/api/users/",
					{
						headers: {
							Authorization: token,
						},
					}
				);
				setUser(res.data.user);
				setCartItems(res.data.user?.cart);

				// console.log(user);
			} catch (err) {
				setError("دریافت اطلاعات کاربر باخطا مواجه شد");
			}
		};
		fetchUserInfo();
	}, []);
	const logOutHandler = () => {
		setLogOut(true);
		setTimeout(() => {
			localStorage.removeItem("token");
			window.location.reload();
			setUser(null);
			setLogOut(false);
		}, 3000);
	};
	return (
		<shoppingContext.Provider
			value={{
				cartItems,
				handleIncreaseCart,
				handleDeCreaseCart,
				getQtyCart,
				totalQtyCarts,
				deleteCartFromBasket,
				user,
				error,
				setUser,
				logOutHandler,
			}}
		>
			{children}
		</shoppingContext.Provider>
	);
}
