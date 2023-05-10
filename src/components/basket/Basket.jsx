import React from 'react';
import { Modal } from '../../UI/Modal';
import { DUMMY_ITEMS } from '../../utils/constants';
import BasketItem from './BasketItem';
import TotalAmount from './TotalAmount';
import styled from 'styled-components';

const Basket = ({ onClose }) => {
	return (
		<Modal>
			<Content>
				{DUMMY_ITEMS.length ? (
					<FixedWidthContainer>
						{DUMMY_ITEMS.map((item) => {
							return (
								<BasketItem
									key={item.id}
									title={item.title}
									price={item.price}
									amount={item.amount}></BasketItem>
							);
						})}
					</FixedWidthContainer>
				) : null}

				<TotalAmount totalPrice={0} onClose={onClose} />
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
