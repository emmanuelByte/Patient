import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, TableHead, TableBody, TableFoot, NEXT_PREV } from "./elements";
import uniqid from "uniqid";
import Category from "./Components/Category";
import Search from "./Components/Search";
export default function App() {
  const [api, setApi] = useState([]);
  const [counter, setCounter] = useState(0);

  // eslint-disable-next-line
  const rows = [
    "S/N",
    "FirstName",
    "LastName",
    "Gender",
    "Email",
    "CreditCardType",
    // "DomainName",
    // "PhoneNumber",
    // "UserName",
    // "LastLogin",
    // "MacAddress",
    // "URL",
  ];
  const getApi = async () => {
    try {
      let { data } = await axios.get(
        "https://api.enye.tech/v1/challenge/records"
      );
      data = data.records.profiles;
      window.localStorage.setItem("api", JSON.stringify(data));
      setApi(data);
    } catch (error) {
      console.log(error.message);
      setApi(JSON.parse(window.localStorage.getItem("api")));
    }
  };
  useEffect(() => {
    getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCount = (type) => {
    // setPage(api.filter());
    if (type === "prev" && counter > 0) setCounter(counter - 1);
    else if (type === "next" && counter * 20 + 20 < api.length)
      setCounter(counter + 1);
    console.log(counter * 20);

    // setPage(api.filter((e, i) => i > counter * 20 && i < counter * 20 + 20));
  };
  return (
    <>
      <div className="field">
        <Category api={api} setApi={setApi} />
        <Search api={api} />
      </div>
      <Table rows={rows}>
        <TableHead>
          <tr>
            {rows.map((e, i) => (
              <th key={uniqid()}> {e} </th>
            ))}
          </tr>
        </TableHead>
        <TableBody>
          {api
            .filter((e, i) => counter * 20 <= i && i < counter * 20 + 20)
            .map((e, i) => (
              <tr key={uniqid()}>
                {rows.map((ele) => (
                  <td key={uniqid()}>
                    {e[ele] ? e[ele] : i + 1 + counter * 20}
                  </td>
                ))}
              </tr>
            ))}
        </TableBody>
      </Table>
      <TableFoot>
        <p>
          {" "}
          {counter * 20 + 1} -{" "}
          {counter * 20 + 20 < api.length ? counter * 20 + 20 : api.length} of{" "}
          {api.length}{" "}
        </p>{" "}
        <div className="btns">
          <NEXT_PREV
            value="prev"
            onClick={() => handleCount("prev")}
            prev={true && 1}
          />{" "}
          <NEXT_PREV next onClick={() => handleCount("next")} />{" "}
        </div>{" "}
      </TableFoot>{" "}
    </>
  );
}
