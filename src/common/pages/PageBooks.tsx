import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { NavLink } from "react-router-dom";

export const PageBooks = () => {
	const dispatch = useDispatch();
	const selectCart = (state: RootState) => state.cart;
	const { books, cartItems } = useSelector(selectCart);

	return (
		<>
			<div className="flex gap-3 mb-4">
				{books.map((book) => {
					return (
						<img
							className="w-40 cursor-pointer"
							onClick={() =>
								dispatch({
									type: "cart/addCartItem",
									payload: {
										book,
									},
								})
							}
							src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
						/>
					);
				})}
			</div>
			<p className="text-xl">
				You have {cartItems.length} items in your{" "}
				<NavLink className="underline" to="/checkout">cart</NavLink>.
			</p>
		</>
	);
};
