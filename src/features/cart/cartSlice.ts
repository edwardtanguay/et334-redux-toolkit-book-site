import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const books = [
	{
		id: 1,
		idCode: "buildingMicroservices",
		title: "Building Microservices",
	},
	{
		id: 2,
		idCode: "gatsbyEcommerce",
		title: "Gatsby E-Commerce",
	},
	{
		id: 3,
		idCode: "rustWeb",
		title: "Rust Web Programming",
	},
];

interface IBook {
	id: number;
	idCode: string;
	title: string;
}

interface ICartItem {
	book: IBook;
}

interface IState {
	count: number;
	books: IBook[];
	cartItems: ICartItem[];
}

const initialState: IState = {
	count: 0,
	books,
	cartItems: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		subtract: (state) => {
			state.count--;
		},
		add: (state) => {
			state.count++;
		},
		addCartItem: (state, action: PayloadAction<ICartItem>) => {
			state.cartItems.push(action.payload);
		},
	},
});

export const { subtract, add, addCartItem} = cartSlice.actions;
export default cartSlice.reducer;
