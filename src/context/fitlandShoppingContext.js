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
	const handleIncreaseCart = (id, category) => {
		if (user) {
			setCartItems((currentItems) => {
				let isCartInBasket = currentItems.find(
					(item) => item.id == id && item.category == category
				);
				if (!isCartInBasket) {
					return [...currentItems, { id: id, category: category, qty: 1 }];
				} else {
					return currentItems.map((item) => {
						if (item.id == id && item.category == category) {
							return { ...item, qty: item.qty + 1 };
						} else {
							return item;
						}
					});
				}
			});
		} else {
			alert('لطفا وارد حساب خود شوید')
		}
	};
	const handleDeCreaseCart = (id, category) => {
		setCartItems((currentItems) => {
			// console.log(currentItems);
			// console.log(cartItems);
			
			
			let isLastCartInBasket =
				currentItems.find((item) => item.id === id && item.category === category)
					?.qty == 1;
			if (isLastCartInBasket) {
				return currentItems.filter(
					(item) => !(item.id === id && item.category === category)
				);
			} else {
				return currentItems.map((item) => {
					if (item.id == id && item.category == category) {
						return { ...item, qty: item.qty - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};
	// console.log(cartItems);
	const getQtyCart = (id, category) => {
		return (
			cartItems.find((item) => item.id === id && item.category == category)
				?.qty || 0
		);
	};
	const totalQtyCarts = cartItems.reduce((total, item) => {
		return total + item.qty;
	}, 0);

	const deleteCartFromBasket = (id, category) => {
		setCartItems((currentItems) =>
			currentItems.filter(
				(item) => !(item.id === id && item.category === category)
			)
		);
	};
	useEffect(() => {
		let isCartInLocale = localStorage.getItem("carts");
		if (isCartInLocale) {
			setCartItems(JSON.parse(isCartInLocale));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem("carts", JSON.stringify(cartItems));
	}, [cartItems]);

	// get user info
	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const token = localStorage.getItem("token");
				if (!token) {
					setError("لطفا وارد شوید");
					return;
				}
				const res = await axios.get("https://fitland-3tiu.onrender.com/api/users/", {
					headers: {
						Authorization: token,
					},
				});
				setUser(res.data.user);
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
