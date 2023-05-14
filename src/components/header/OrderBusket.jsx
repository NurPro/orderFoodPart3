import React, { useContext } from 'react';

import styled from 'styled-components';
import { ReactComponent as BasketIcon } from '../../assets/icons//Basket.svg';
import { CartContext } from '../../store/Cart-Context';

const OrderBusked = ({ children, onToggle }) => {
	 const context = useContext(CartContext)
	return (
		<Button onClick={onToggle}>
			<BasketIcon /> <OrderBasketTitle> {children}</OrderBasketTitle>
			<OrderBasketCount>{context.totalAmount }</OrderBasketCount>
		</Button>
	);
};

const Button = styled.button`
	width: 249px;
	height: 59px;
	background: #5a1f08;
	border-radius: 30px;
	color: #ffff;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: #4d1601;
	}
`;

const OrderBasketTitle = styled.span`
	font-weight: 600;
	font-size: 16px;
	color: #fff;
	margin: 0px 24px 0px 13px;
`;
const OrderBasketCount = styled.span`
	border-radius: 30px;
	background-color: #8a2b06;
	padding: 9px 20px;
	font-weight: 600;
`;
export default OrderBusked;
