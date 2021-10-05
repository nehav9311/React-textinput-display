import "./styles.css";
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const Product = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="addItems">
          <TextField
            variant="outlined"
            placeholder="Type here"
            margin="normal"
            required
            onChange={(e) => setInputData(e.target.value)}
          />
          <div className="Button">
            <Button variant="contained" color="primary" onClick={addItem}>
              submit
            </Button>
          </div>
        </div>

        <div className="showItems">
          {items.map((elem, ind) => {
            return (
              <div className="eachItem" key={ind}>
                <h3>{elem}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
