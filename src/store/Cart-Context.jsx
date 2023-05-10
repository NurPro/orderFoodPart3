import { createContext, useState } from 'react';

export const CartContext = createContext({
	items: [],
	totalAmount: 0,
});
export const CartProvider = ({ children }) => {
	const [cartState, setCartState] = useState([]);
	const amount=cartState.reduce((prev,current )=>prev+current.amount,0)

	const addItem = (data) => {

		if (!cartState.length) {
			return setCartState([data]);
		}
		const isExist = cartState.find((item) => item.title === data.title)
		if (!isExist) {
			return setCartState([...cartState,data])
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
	console.log(cartState);
	const cartValue = {
		items: cartState,
		totalAmount:amount,
		addItem,
	};
	return (
		<CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
	);
};
