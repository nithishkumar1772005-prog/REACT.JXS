export default function Child(props)
 {
    return <>
        <h1>Child component</h1>
        <div>
            <h3>student profile</h3>
            <h2>Roll No: {props.rollno}</h2>
            <h4>Name: {props.name}</h4>
        </div>
    </>
}