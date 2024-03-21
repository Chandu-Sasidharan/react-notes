export default function Greetings({ name }) {

    return (
       <div>
         {/* { name ? <h1>Hello, { name }</h1> : null } */}

         { !!name && <h1>Hello, {name} </h1>}
       </div>
    )
}