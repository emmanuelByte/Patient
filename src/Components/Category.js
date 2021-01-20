import React, { useState } from "react";
import {
  Filter,
  FilterIcon,
  FBrand,
  NEXT_PREV,
  FBody,
  FRow,
  FData,
} from "../elements";

export default function Category({ api, setApi }) {
  let cat = [new Set(), new Set()];
  const [click, setClick] = useState(false);
  const [drop, setDrop] = useState(false);
  api.map((e) => {
    cat[0].add(e.PaymentMethod);
    cat[1].add(e.Gender);
    return "";
  });
  cat = cat.map((e, i) => Array.from(e));
  var keys = ["PaymentMethod", "Gender"];

  var categories = Object.assign.apply(
    {},
    keys.map((v, i) => ({ [v]: cat[i] }))
  );
  console.log(api);
  const handleCategory = (key, value) => {
    // api.filter((e) =>e[key] ===);
    console.log();
    setApi(api.filter((e) => e[key] === value));
  };

  return (
    <Filter drop={drop} onClick={() => setDrop(!drop)}>
      <FBrand>
        <FilterIcon />
        <p>Filter</p>
        <NEXT_PREV src={drop ? 1 : 0} />
      </FBrand>
      <>
        {cat[0] &&
          keys.map((e, i) => (
            <FBody drop={drop} key={i}>
              <FData className="head">{e}</FData>
              <FRow>
                {categories[e].map((ele, index) => (
                  <FData
                    onClick={(element) => {
                      console.log();
                      handleCategory(e, ele);
                      setDrop(false);
                    }}
                    className="data"
                    key={index}
                  >
                    {ele}
                  </FData>
                ))}
              </FRow>
            </FBody>
          ))}

        {/* categories.Gender.map((e, i) => (
            <ListItem onClick={(e) => console.log(e)} key={i}>
              {e}
            </ListItem>
        </p>
          )) */}
      </>
    </Filter>
  );
}
