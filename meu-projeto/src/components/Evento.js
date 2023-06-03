function Evento({numero}) {
    function meuEvento(){
        return (
            console.log(`Opa, fui ativado! ${numero}`)
        )
    }

    return (
        <div>
            <p>Clique aqui para ativar.</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento