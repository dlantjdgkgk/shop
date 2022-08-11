import { configureStore, createSlice } from '@reduxjs/toolkit';

const user = createSlice({
    initialState: 'moo',
    name: 'user',
});

const stock = createSlice({
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 },
    ],
    name: 'stock',
});

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
    },
});
