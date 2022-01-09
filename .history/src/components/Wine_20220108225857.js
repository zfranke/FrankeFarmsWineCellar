import React, { useState } from "react";
import WineService from "../services/WineService";

const Wine = (props) => {
  const initialWineState = {
    key: null,
    name: "",
    color: "",
    type: "",
    year: "",
    listPrice: "",
    isOpen: false,
    isEmpty: false
  };
  const [currentWine, setCurrentWine] = useState(initialWineState);
  const [message, setMessage] = useState("");

  const { Wine } = props;
  if (currentWine.id !== Wine.id) {
    setCurrentWine(Wine);
    setMessage("");
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentWine({ ...currentWine, [name]: value });
  };

  const updatePublished = (status) => {
    WineService.update(currentWine.id, { isOpen: status })
      .then(() => {
        setCurrentWine({ ...currentWine, isOpen: status });
        setMessage("The status was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateWine = () => {
    const data = {
        name: currentWine.name,
        color: currentWine.color,
        type: currentWine.type,
        year: currentWine.year,
        listPrice: currentWine.listPrice,
    };

    WineService.update(currentWine.id, data)
      .then(() => {
        setMessage("The Wine was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteWine = () => {
    WineService.remove(currentWine.id)
      .then(() => {
        props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentWine ? (
        <div className="edit-form">
          <h4>Wine</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentWine.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
                <label htmlFor="color">Color</label>
                <input
                    type="text"
                    className="form-control"
                    id="color"
                    name="color"
                    value={currentWine.color}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="type">Type</label>
                <input
                    type="text"
                    className="form-control"
                    id="type"
                    name="type"
                    value={currentWine.type}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="year">Year</label>
                <input
                    type="text"
                    className="form-control"
                    id="year"
                    name="year"
                    value={currentWine.year}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="listPrice">List Price</label>
                <input
                    type="text"
                    className="form-control"
                    id="listPrice"
                    name="listPrice"
                    value={currentWine.listPrice}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
              <label>
                <strong>Open?:</strong>
              </label>
              {currentWine.isOpen ? "Open" : "Closed"}
            </div>
          
        </form>

          {currentWine.isOpen ? (
            <button
              className="btn btn-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Close Bottle
            </button>
          ) : (
            <button
              className="btn btn-primary mr-3"
              onClick={() => updatePublished(false)}
            >
              Open Bottle
            </button>
          )}
          

          <button className="btn btn-danger mr-4" onClick={deleteWine}>
            Delete
          </button>

          <button
            type="submit"
            className="btn btn-success mr-5"
            onClick={updateWine}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Wine...</p>
        </div>
      )}
    </div>
  );
};

export default Wine;