import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { axiosDelMovies } from "../redux-thunk/accions/rootAcion";
import { useDispatch } from "react-redux";

export const AppDeleteIcon = ({mov}) => {

  const dispatch = useDispatch();

console.log(mov.id)

  const handleDelete = () => {
    dispatch(axiosDelMovies(mov.id));
    console.log("hola delete")
  };
  return (
    <div>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};
