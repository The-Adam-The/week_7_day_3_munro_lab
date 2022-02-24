const MunroDetail = ({munro}) => {
    return (
        <div>
            <h3>Selected Munro: {munro.name}</h3>
            <p>Height: {munro.height}m</p>
            <p>Region: {munro.region}</p>
            <p>Meaning: {munro.meaning}</p>
        </div>
    );
}

export default MunroDetail;