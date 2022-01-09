import React, { useState } from "react";
import WineDataService from "../services/WineService";

const AddWine = () => {
  const initWineState = {
    name: '',
    color: '',
    type: '',
    year: '',
    listPrice: '',
    isOpen: false,
    isEmpty: false
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
        year: wine.year,
        listPrice: wine.listPrice,
        isOpen: false,
        isEmpty: false
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
                <input
                    type="text"
                    className="form-control"
                    id="color"
                    required
                    value={wine.color}
                    onChange={handleInputChange}
                    name="color"
                />
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

          <button onClick={saveWine} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddWine;