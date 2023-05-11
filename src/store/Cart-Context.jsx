import { createContext, useState } from 'react';

export const CartContext = createContext({
	items: [],
	totalAmount: 0,
});
export const CartProvider = ({ children }) => {
	const [cartState, setCartState] = useState([]);
	const amount = cartState.reduce((prev, current) => prev + current.amount, 0);

	const totalPrice = cartState.reduce(
		(prev, current) => prev + current.price * current.amount,
		0
	);

	const addItem = (data) => {
		if (!cartState.length) {
			return setCartState([data]);
		}
		const isExist = cartState.find((item) => item.title === data.title);
		if (!isExist) {
			return setCartState([...cartState, data]);
		}
		const updatedItem = cartState.map((item) => {
			if (item.id === data.id) {
				return {
					...item,
					amount: item.amount + data.amount,
				};
			}
			return item;
		});
		setCartState([...updatedItem]);
	};

	const increment = (id) => {
		const updatedItem = cartState.map((item) => {
			if (item.id === id) {
				return {
					...item,
					amount: item.amount + 1,
				};
			}
			return item;
		});
		setCartState([...updatedItem]);
	};
	const decrement = (id) => {
		const updatedItem = cartState.map((item) => {
			if (item.id === id && item.amount !== 0) {
				return {
					...item,
					amount: item.amount - 1,
				};
			}
			return item;
		});
		setCartState([...updatedItem]);
	};
	const cartValue = {
		items: cartState,
		totalAmount: amount,
		addItem,
		totalPrice: totalPrice,
		increment,
		decrement,
	};
	return (
		<CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
	);
};
