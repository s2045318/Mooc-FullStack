const Hello = (props) => {
    console.log(props)
    return (

        <div>
            <p>Hello {props.name} you are {props.age} years old</p>
        </div>
    )
}

const App = () => {
    return (
        <>
            <h1>Greetings</h1>
            <Hello name="Jesse" age="21" />
        </>
    )
}
export default App