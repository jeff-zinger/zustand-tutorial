import create from 'zustand';

interface IBook {
    amount: number,
    title: string,
    updateAmount: (newAmount: number) => void
}

export const useBookStore = create<IBook>((set) => ({
    amount: 40,
    updateAmount: (newAmount: number ) => set( state => ({ ...state, amount: state.amount + newAmount })),
    title: "Alice's Adventures in Wonderland"
}));