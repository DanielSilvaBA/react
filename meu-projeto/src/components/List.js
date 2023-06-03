import Item from "./Item"

function List() {
    return (
        <>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca={'Ferrari'} ano_lancamento={1987}/>
                <Item marca={'Fiat'}/>
                <Item/>
            </ul>
        </>
    )
}

export default List