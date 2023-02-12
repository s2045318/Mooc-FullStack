const Contact = (props) => {
    const name = props.name
    const number = props.number
    return (
        <p>{name} {number} <br/></p>
    )
} 

export default Contact