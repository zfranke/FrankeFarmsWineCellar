import React, { useState } from "react";
import WineDataService from "../services/WineService";

const AddWine = () => {
  const initWineState = {
    name: '',
    color: '',
    type: '',
    origin: '',
    year: '',
    listPrice: '',
    isOpen: false,
    isEmpty: false,
    rackLocation: "",
    rowPosition: "",
    colPosition: ""
  };
  const [wine, setWine] = useState(initWineState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setWine({ ...wine, [name]: value });
  };

  const saveWine = () => {
    var data = {
      name: wine.name,
      color: wine.color,
        type: wine.type,
        origin: wine.origin,
        year: wine.year,
        listPrice: wine.listPrice,
        isOpen: false,
        isEmpty: false,
        rackLocation: "",
        rowPosition: "",
        colPosition: ""
    };

    WineDataService.create(data)
      .then(() => {
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newWine = () => {
    setWine(initWineState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newWine}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={wine.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

            <div className="form-group">
                <label htmlFor="color">Color</label>
                <select class="form-control" name="color" value={wine.color} onChange={handleInputChange}>
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
                    required
                    value={wine.type}
                    onChange={handleInputChange}
                    name="type"
                />
            </div>

            <div className="form-group">
                <label htmlFor="year">Year</label>
                <input
                    type="text"
                    className="form-control"
                    id="year"
                    required
                    value={wine.year}
                    onChange={handleInputChange}
                    name="year"
                />
            </div>

            <div className="form-group">
                <label htmlFor="listPrice">List Price</label>
                <input
                    type="text"
                    className="form-control"
                    id="listPrice"
                    required
                    value={wine.listPrice}
                    onChange={handleInputChange}
                    name="listPrice"
                />
            </div>  

            <div className="form-group">
                <label htmlFor="rackLocation">Rack Location</label>
                <select class="form-control" name="rackLocation" value={wine.rackLocation} onChange={handleInputChange}>
                        <option value="redRack">Red Rack</option>
                        <option value="whiteRack">White Rack</option>
                        <option value="fridge">Wine Fridge</option>
                    </select>
            </div>

            <div className="form-group">
                <label htmlFor="rowPosition">Row Position</label>
                <select class="form-control" name="rowPosition" value={wine.rowPosition} onChange={handleInputChange}>
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
                <select class="form-control" name="colPosition" value={wine.colPosition} onChange={handleInputChange}>
                        <option value="colOne">1</option>
                        <option value="colTwo">2</option>
                        <option value="colThree">3</option>
                        <option value="colFour">4</option>
                        <option value="colFive">5</option>
                        <option value="colSix">6</option>
                    </select>
            </div>        

          <button onClick={saveWine} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddWine;