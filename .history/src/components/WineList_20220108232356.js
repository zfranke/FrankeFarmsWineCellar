import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import WineService from "../services/WineService";
import Wine from "./Wine";

const WinesList = () => {
  const [currentWine, setCurrentWine] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [Wines, loading, error] = useCollection(WineService.getAll().orderBy("name", "asc"));

  const refreshList = () => {
    setCurrentWine(null);
    setCurrentIndex(-1);
  };

  const setActiveWine = (Wine, index) => {
    const { name, color, type, year, listPrice, isOpen } = Wine.data();

    setCurrentWine({
      id: Wine.id,
      name,
        color,
        type,
        year,
        listPrice,
        isOpen
    });

    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Wines List</h4>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Loading...</span>}
        <ul className="list-group">
          { !loading &&
            Wines &&
            Wines.docs.map((Wine, index) => (
              <li
                className={"list-group-item " + (index === currentIndex ? "active" : "")}
                onClick={() => setActiveWine(Wine, index)}
                key={Wine.id}
              >
                { Wine.data().name }
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentWine ? (
          <Wine Wine={currentWine} refreshList={refreshList} />
        ) : (
          <div>
            <br />
            <p>Please click on a Wine...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WinesList;
