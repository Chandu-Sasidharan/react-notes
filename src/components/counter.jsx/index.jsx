import { useReducer } from "react";
import classNames from "classnames";

function reducer(state, action) {
    if (action.type === 'INCREMENT') {
        return { count: state.count + 1 };
    }

    if (action.type === 'DECREMENT') {
        return { count: state.count -1 };
    }

    return state;
}

const btnClasses = classNames({
    "btn btn-primary btn-xs": true
})

export default function Counter() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex flex-col gap-3 mt-10 items-center">
            <p>Count: {state.count}</p>
            <button 
                onClick={() => dispatch({ type: 'INCREMENT' })}
                className={btnClasses}
            >
                +
            </button>
            <button 
                onClick={() => dispatch({ type: 'DECREMENT' })}
                className={btnClasses}
            >
                -
            </button>
        </div>
    );
}