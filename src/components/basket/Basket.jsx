import React from 'react';
import { Modal } from '../../UI/Modal';
// import { DUMMY_ITEMS } from '../../utils/constants';
import BasketItem from './BasketItem';
import TotalAmount from './TotalAmount';
import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../../store/Cart-Context';

const Basket = ({ onClose }) => {
	const context = useContext(CartContext);
	return (
		<Modal>
			<Content>
				{context.items.length ? (
					<FixedWidthContainer>
						{context.items.map((item) =>
							item.amount > 0 ? (
								<BasketItem
									key={item.id}
									title={item.title}
									price={item.price}
									amount={item.amount}
									id={item.id}
								/>
							) : null
						)}
					</FixedWidthContainer>
				) : null}

				<TotalAmount totalPrice={context.totalPrice} onClose={onClose} />
			</Content>
		</Modal>
	);
};

const Content = styled.div`
	width: 100%;
	height: 100%;
	padding: 1.5rem 1rem;
`;

const FixedWidthContainer = styled.div`
	max-height: 250px;
	overflow-y: scroll;
`;

export default Basket;
