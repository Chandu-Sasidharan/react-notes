import { useReducer, useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "../../App";

function reducer(state, action) {
    // switch (action.type) {
    //     case 'INCREMENT':
    //         return { count: state.count + 1 };
    //     case 'DECREMENT':
    //         return { count: state.count - 1 };
    //     default:
    //         // throw new Error();
    //         return state;
    // }
    
    if (action.type === 'INCREMENT') {
        return { count: state.count + 1 };
    }

    if (action.type === 'DECREMENT') {
        return { count: state.count -1 };
    }

    return state;
}

export default function Counter() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isDarkMode } = useContext(ThemeContext);

    const btnClasses = classNames({
        "btn btn-primary btn-xs hover:bg-stone-600 border-0": true,
        "bg-slate-100 text-slate-900 hover:bg-red-200": isDarkMode
    })

    return (
        <div className="flex flex-col gap-3 mt-10">
            <p>Count: {state.count}</p>
            <div className="space-x-3">
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
        </div>
    );
}