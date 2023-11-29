import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const PageCheckout = () => {
	const selectCart = (state: RootState) => state.cart;
	const { cartItems } = useSelector(selectCart);

	return (
		<div className="">
			{cartItems.map((cartItem) => {
				return (
					<div className="flex gap-5 items-center mb-3 bg-slate-600 text-slate-300 p-3 w-[30rem]">
						<img className="w-10"
							src={`https://edwardtanguay.vercel.app/share/images/techBooks/${cartItem.book.idCode}.jpg`}
						/>
						<p className="text-3xl">{cartItem.book.title}</p>
					</div>
				);
			})}
		</div>
	);
};
