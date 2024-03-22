const TestComponent = ({shops}) => {
    return(
        <div className="list">
            {Object.values(shops).map((item, index) => (
                <h2 key={index}>{item}</h2>
            ))}
        </div>
    )
}

export default TestComponent