export default function Greetings({ name }) {

    return (
       <div>
         { name ? <h1>Hello, { name }!</h1> : <h1>Hello, Guest!</h1> }

         {/* { !!name && <h1>Hello, {name}</h1>} */}
       </div>
    )
}