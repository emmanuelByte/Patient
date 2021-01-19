import React, { useState } from "react";
import { Filter, FilterIcon, ListItem, Cat, CatItem } from "../elements";

export default function Category({ api, setApi }) {
  let cat = [new Set(), new Set()];
  const [click, setClick] = useState(false);
  api.map((e) => {
    cat[0].add(e.PaymentMethod);
    cat[1].add(e.Gender);
    return "";
  });
  cat = cat.map((e, i) => Array.from(e));
  var keys = ["PaymentMethods", "Gender"];

  var categories = Object.assign.apply(
    {},
    keys.map((v, i) => ({ [v]: cat[i] }))
  );
  console.log(categories);
  return (
    <Filter
      onClick={() => {
        setClick(!click);
      }}>
      <FilterIcon /> Filter
      <Cat click={click}>
        <CatItem gen className="gender">
          <p>{[keys[1]]}</p>

          <div className="div1 d">
            {cat[0] &&
              categories.Gender.map((e, i) => <ListItem key={i}>{e}</ListItem>)}
          </div>
        </CatItem>
        <CatItem className="payment">
          <p>{[keys[0]]}</p>

          <div className="div2 d">
            {cat[1] &&
              categories.PaymentMethods.map((e, i) => (
                <ListItem key={i}>{e}</ListItem>
              ))}
          </div>
        </CatItem>
      </Cat>
    </Filter>
  );
}
