# Advanced React Hooks

**Yesterday**
- You learnt about useReducer hook

**Today**
- We will learn two advanced hooks, useId and useMemo

## Two Advanced React hooks

- There are actually many hooks
  - We definitely don't have time to look at all of them
  - You can even make your own hooks

- Here are two more hooks for you
  - We teach these so that you have heard of these
  
## Unique IDs with `useId`

- useId is a hook used to generate a unique ID
- It's primarily for accessibility purposes
- Accessibility attributes require unique IDs to properly associate elements.
- You cannot hardcode ids in react because a component may be used more than once.

### Example Usage
```javascript
function TextInputField() {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>Name:</label>
            <input id={id} type="text" name="name"/>
        </div>
    );
}
```
- IDs are stable across re-renders (won't change unless the component unmounts).

## Memoization with `useMemo`

- Memoization is an interesting performance enhancement hook.
- It's mostly used in larger apps.
- Memoization is storing the results of expensive function calls
  - You can reuse the old result when the same inputs occur again
  - This technique is a kind of "caching"

- This improves performance by avoiding redundant work.
- Useful for avoiding expensive recalculations on every render.

### Syntax
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### Example Usage
```javascript
function TotalPrice({ quantity, pricePerItem }) {
    const totalPrice = useMemo(() => {
        console.log('Calculating total...');
        return quantity * pricePerItem;
    }, [quantity, pricePerItem]);

    return <h2>Total Price: ${totalPrice}</h2>;
}
```

- In this example, 
  - totalPrice is only recalculated when `quantity` or `pricePerItem` changes.

## Wrap-Up

- It's common to combine useReducer and useContext
- React has lots of hooks
- With useId you can generate unique IDs
- With useMemo you can cache the results of operations

## Exercise

- https://github.com/DigitalCareerInstitute/spa-store-useidform
- https://github.com/DigitalCareerInstitute/spa-store-shoppingcart

## Self-Study

- [Self-study prompts](https://react.dev/reference/react/hooks)