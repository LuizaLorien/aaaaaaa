const Button = ({nome, modal, setModal}) => {
    return (
        <>
            <button className="Button" onClick><p>{nome}</p></button>
        </>
    )
}

export default Button;