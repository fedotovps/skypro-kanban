import Card from "../Card/Card";

function Column() {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>Без статуса</p>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Column;
