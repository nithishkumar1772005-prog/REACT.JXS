import Child from "./Child"

export default function Parent() {

    const rollno = 1234
    const name = "John Doe"
    return <>
        <h1>Parent component</h1>
        <Child rollno={rollno} name={name} />
    </>
}