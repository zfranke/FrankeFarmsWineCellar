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
    setTutorial({ ...wine, [name]: value });
  };

  const saveWine = () => {
    var data = {
      name: wine.name,
      color: color.description,
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
    ...
  );
};

export default AddTutorial;