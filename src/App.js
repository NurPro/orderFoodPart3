import { useState } from 'react';
import './App.css';
import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import MealSummary from './components/meal-summary/MealSummary';
import Meals from './components/meals/Meals';
import { CartProvider } from './store/Cart-Context';
function App() {
	const [toggle, setToggle] = useState(false);

	const toggleModalHandler = () => {
		setToggle((prev) => !prev);
	};

	return (
		<CartProvider>
			<div className='App'>
				<Header onToggle={toggleModalHandler} />
				<MealSummary />
				<Meals />
				{toggle && <Basket onClose={toggleModalHandler} />}
			</div>
		</CartProvider>
	);
}

export default App;
