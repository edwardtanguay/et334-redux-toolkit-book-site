import { useDispatch } from "react-redux";
import { add, subtract } from "../../features/cart/cartSlice";

export const PageWelcome = () => {
	const dispatch = useDispatch();

	return (
		<div className="flex gap-3">
			<button>Add</button>
			<button>Subtract</button>
		</div>
	);
};
