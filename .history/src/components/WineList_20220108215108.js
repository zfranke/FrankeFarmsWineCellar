import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import WineService from "../services/WineService";
import Wine from "./Wine";

const WinesList = () => {
  const [currentWine, setCurrentWine] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [wines, loading, error] = useCollection(WineService.getAll().orderBy("name", "asc"));

  const refreshList = () => {
    setCurrentWine(null);
    setCurrentIndex(-1);
  };

  const setActiveWine = (wine, index) => {
    const { name, color, type, year, listPrice, isOpen, isEmpty } = wine.data();

    setCurrentWine({
      id: wine.id,
        name,
        color,
        type,
        year,
        listPrice,
        isOpen,
        isEmpty
    });

    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Wine List</h4>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Loading...</span>}
        <ul className="list-group">
          { !loading &&
            wines &&
            wines.docs.map((wine, index) => (
              <li
                className={"list-group-item " + (index === currentIndex ? "active" : "")}
                onClick={() => setActiveWine(wine, index)}
                key={wine.id}
              >
                { wine.data().title }
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentWine ? (
          <Wine tutorial={currentWine} refreshList={refreshList} />
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
