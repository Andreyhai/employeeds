import './app-info.css';

const AppInfo = (props) => {
    const { count, data } = props

    let countIncrease = 0;
    data.map(item => {
        if (item.increase) {
            countIncrease += 1;
        }
    })

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>{`Общее число сотрудников: ${count}`}</h2>
            <h2>{`Премию получат: ${countIncrease}`}</h2>
        </div>
    );
}

export default AppInfo;