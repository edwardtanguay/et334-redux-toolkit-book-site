import { useDispatch, useSelector } from "react-redux";
import { add, subtract } from "../../features/cart/cartSlice";
import { RootState } from '../../app/store';

export const PageWelcome = () => {
	const dispatch = useDispatch();
	const selectCart= (state: RootState) => state.cart;
	const { count } = useSelector(selectCart);

	return (
		<div className="flex gap-3">
			<button onClick={() => dispatch(subtract())}>Subtract</button>
			<button onClick={() => dispatch(add())}>Add</button>
			<div className="text-3xl">count = {count}</div>
		</div>
	);
};
