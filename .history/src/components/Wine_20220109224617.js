import React, { useState } from "react";
import WineService from "../services/WineService";

const Wine = (props) => {
  const initialWineState = {
    key: null,
    name: "",
    color: "",
    type: "",
    origin: "",
    year: "",
    listPrice: "",
    isOpen: false,
    rackLocation: "",
    rowPosition: "",
    colPosition: ""
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

  const updateOpen = (status) => {
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
        origin: currentWine.origin,
        year: currentWine.year,
        listPrice: currentWine.listPrice,
        isOpen: currentWine.isOpen,
        rackLocation: currentWine.rackLocation,
        rowPosition: currentWine.rowPosition,
        colPosition: currentWine.colPosition
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
                <select class="form-control" name="color" value={currentWine.color} onChange={handleInputChange}>
                        <option value="red">Red</option>
                        <option value="white">White</option>
                        <option value="rose">Rose</option>
                        <option value="sparkling">Sparkling</option>
                        <option value="tawny">Tawny</option>
                        <option value="yellow">Orange</option>
                        <option value="yellow">Gray</option>
                        <option value="yellow">Yellow</option>
                        <option value="other">Other</option>
                    </select>
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
                <label htmlFor="origin">Origin</label>
                <input
                    type="text"
                    className="form-control"
                    id="origin"
                    name="origin"
                    value={currentWine.origin}
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
                <label htmlFor="rackLocation">Rack Location</label>
                <select class="form-control" name="rackLocation" value={currentWine.rackLocation} onChange={handleInputChange}>
                        <option value="redRack">Red Rack</option>
                        <option value="whiteRack">White Rack</option>
                        <option value="fridge">Wine Fridge</option>
                    </select>
            </div>

            <div className="form-group">
                <label htmlFor="rowPosition">Row Position</label>
                <select class="form-control" name="rowPosition" value={currentWine.rowPosition} onChange={handleInputChange}>
                        <option value="rowOne">1</option>
                        <option value="rowTwo">2</option>
                        <option value="rowThree">3</option>
                        <option value="rowFour">4</option>
                        <option value="rowFive">5</option>
                        <option value="rowSix">6</option>
                    </select>
            </div>

            <div className="form-group">
                <label htmlFor="colPosition">Col Position</label>
                <select class="form-control" name="colPosition" value={currentWine.colPosition} onChange={handleInputChange}>
                        <option value="colOne">1</option>
                        <option value="colTwo">2</option>
                        <option value="colThree">3</option>
                        <option value="colFour">4</option>
                        <option value="colFive">5</option>
                        <option value="colSix">6</option>
                    </select>
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
              onClick={() => updateOpen(false)}
            >
              Close Bottle
            </button>
          ) : (
            <button
              className="btn btn-primary mr-3"
              onClick={() => updateOpen(true)}
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