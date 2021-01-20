import React, { useRef } from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Input, SearchDiv } from "../elements";
const Search = ({ api }) => {
  const [input, setInput] = useState("");
  const InputRef = useRef("");
  const handleInput = (e) => {
    console.log(api[1]);
    // const result=
    const value = InputRef.current.value;
    const result = api.filter(
      (e) =>
        e.FirstName.toLowerCase().includes(value) ||
        e.LastName.toLowerCase().includes(value)
    );
    console.log(result, value);
  };
  return (
    <SearchDiv>
      <Input
        onChange={(e) => {
          setInput(e.target.value);
          handleInput(e);
        }}
        placeholder="Search Here"
        ref={InputRef}
      />

      <BsSearch
        onClick={() => {
          console.log(input);
        }}
      />
    </SearchDiv>
  );
};

export default Search;
