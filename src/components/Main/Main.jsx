import { statusList } from "../../lib/data";
import Column from "../Column/Column";

function Main({ cards }) {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status, index) => (
              <Column
                key={index}
                title={status}
                cards={cards.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
