import {useBookStore} from "./store/bookstore.ts";
import {shallow} from "zustand/shallow";

const App = () => {

    const { amount,updateAmount, title } = useBookStore(
        (state) => ({ amount: state.amount, updateAmount: state.updateAmount, title: state.title }),
        shallow
    )

    return (
        <div>
            <h1>Books: {amount} </h1>
            <p>Title: {title} </p>
            <button
                onClick={ () => updateAmount(10) }
            > Update Amount </button>
        </div>
    )
}
export default App