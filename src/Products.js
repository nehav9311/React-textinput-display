import "./styles.css";
import React, { useEffect, useState } from "react";

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
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <div className="main-div">
      <div className="child-div">
        <div>Add your products here</div>
        <div className="addItems">
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <input type="submit" onClick={addItem} />
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
