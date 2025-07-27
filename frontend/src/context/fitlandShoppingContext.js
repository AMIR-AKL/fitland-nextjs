"use client";
const { createContext, useContext, useState, useEffect } = require("react");

const shoppingContext = createContext({});

export const useShoppingContext = () => {
	return useContext(shoppingContext);
};

export function FitlandShoppingContextProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const handleIncreaseCart = (id, category) => {
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
	};
	const handleDeCreaseCart = (id, category) => {
		setCartItems((currentItems) => {
			let isLastCartInBasket =
				currentItems.find((item) => item.id == id && item.category == category)
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

	return (
		<shoppingContext.Provider
			value={{
				cartItems,
				handleIncreaseCart,
				handleDeCreaseCart,
				getQtyCart,
				totalQtyCarts,
				deleteCartFromBasket,
			}}
		>
			{children}
		</shoppingContext.Provider>
	);
}
