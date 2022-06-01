//*crear un componente
const Mensaje = (props) => {
    return (
        <h1 style={{color: props.color}}>
            {props.text}
        </h1>
    )
}

export default Mensaje