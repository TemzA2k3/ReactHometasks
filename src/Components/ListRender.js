const ListRender = ({shops}) => {
    return(
        <div className="list">
            <ul>
                {shops.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender