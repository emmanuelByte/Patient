import styled from "styled-components";
import { FcFilledFilter } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 25px 0;
  width: fit-content;
  margin: 3rem 0;

  /* font-size: 0.9em; */
  font-family: "Montserrat", sans-serif;
  min-width: 70%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  th,
  td {
    padding: 1rem 2rem;
  }
  tr {
    cursor: pointer;
  }
`;
const TableHead = styled.thead`
  tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
`;
const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #dddddd;
  }
  tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  tr:hover {
    z-index: 100;
    background-color: #f3f3f36b;
    transform: scale(1.02);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
`;

export { Table, TableHead, TableBody };
export const TableFoot = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  font-size: 2rem;
  cursor: pointer;
`;
export const Filter = styled.div`
  cursor: pointer;
  position: relative;
`;

export const FilterIcon = styled(FcFilledFilter)``;

export const NEXT_PREV = styled(IoIosArrowForward)`
  transform: ${({ prev }) => prev && "rotate(180deg)"};
`;
export const Cat = styled.ul`
  list-style: none;
  width: fit-content;
  padding: 1rem;
  display: ${({ click }) => (click ? "flex" : "none")};
  row-gap: 1rem;

  flex-direction: column;
  background-color: #fff;
`;
export const CatItem = styled.li`
  position: relative;
  display: flex;
  column-gap: 2rem;
  align-items: baseline;

  .d {
    transform: translate(20%, -20%);

    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  .div1 {
    display: none;
  }
  &:hover {
    p {
      background-color: blue;
    }
    padding: ${({ gen }) => (gen ? "1rem 2rem 1rem 0" : "1rem 1rem 1rem 0")};
    .div1 {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }
    .div2 {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }
  }
  .div2 {
    display: none;
  }
`;
export const ListItem = styled.div`
  /* right: 0;
  top: 0; */
`;
export const Search = styled.div`
  padding: 2rem 5rem;
  border-radius: 50%;

`;
export const Input=styled(Search)
