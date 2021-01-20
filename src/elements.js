import styled from "styled-components";
import { FcFilledFilter } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  cursor: pointer;
  column-gap: 1rem;
  justify-items: center;
  .head {
    display: ${({ drop }) => (drop ? "flex" : "none")};
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const FilterIcon = styled(FcFilledFilter)``;
export const FBrand = styled.div`
  display: flex;
  column-gap: 0.4rem;
`;
export const FBody = styled.div`
  .head {
    margin-bottom: 1rem;
  }
  .head:hover {
    border-bottom: 2px solid var(--aux);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:hover {
    .data {
      display: ${({ drop }) => drop && "block"};
      font-size: 0.9rem;
      text-transform: capitalize;
    }
  }
`;
export const FRow = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  .data {
    display: none;
    padding: 0.5rem 1.5rem;
  }
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
export const FData = styled.div`
  &:not(.head):hover {
    background-color: var(--sec);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

export const NEXT_PREV = styled(IoIosArrowForward)`
  transform: ${({ src, next }) => !src && !next && "rotate(90deg)"};
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: ${({ prev }) => prev && "rotate(180deg)"};
`;
export const SearchDiv = styled.div`
  padding: 0.5rem 1.2rem;
  border-radius: 10px;
  width: 20%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;
export const Input = styled.input`
  border: none;
  outline: none;
`;
