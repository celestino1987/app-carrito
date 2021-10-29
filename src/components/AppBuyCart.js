import React, { useCallback, useEffect, useMemo, useState } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import RemoveTwoToneIcon from "@material-ui/icons/RemoveTwoTone";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { BtnEnlace } from "./BtnEnlace";
import DeleteIcon from "@material-ui/icons/Delete";
import { axiosDelMovies } from "../redux-thunk/accions/rootAcion";
import { useDispatch, useSelector } from "react-redux";
import { axiosPutMovies } from "../redux-thunk/accions/rootAcion";
import { AppCircular } from "./AppCircular";
import PropTypes from "prop-types";
import { serviceSwal } from "../service/serviceSwal";
import { openLoading, openModal } from "../redux-thunk/accions/modalAction";
import "../css/AppBuyCart.css";

import { debounce,throttle} from "lodash";

export const AppBuyCart = ({ totalSum }) => {
  const movie = useSelector((state) => state.rootReducer.carrito);
  const loading = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();
 
  let update = {};

  const handleDelete = (id) => {
    dispatch(openModal(false));
    serviceSwal(
      "question",
      "¿Desea eliminar el producto?",
      "",
      true,
      true,
      false
    ).then(async (res) => {
      if (res.isConfirmed) {
        await dispatch(axiosDelMovies(id));
        try {
          if (movie.length - 1 < 1) {
            dispatch(openModal(false));
          } else {
            dispatch(openModal(true));
          }
        } catch {
          serviceSwal("error", "", "Error", false, false, 1500);
        }
      } else {
        dispatch(openModal(true));
      }
    });
  };

  const handleRest = debounce((id, mov, amount) => {

    dispatch(
      axiosPutMovies(
        id,
        (update = {
          ...mov,
          amount: amount - 1,
        })
      )
    );
  },0);

 
  
  useEffect(() => {
    setTimeout(() => {
      dispatch(openLoading(true));
    }, 1000);

    dispatch(openLoading(false));
  }, []);
  if (!loading) {
    return <AppCircular />;
  } else {
    return (
      <>
        <div className="box">
          <h2 className="myBuy"> Mi carrito</h2>

          <div className="scroll ">
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {movie.map((mov) => (
                <div key={mov?.mal_id} className="item">
                  <ListItem alignItems="center">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={mov.foto} />
                    </ListItemAvatar>
                    <Typography
                      ml={1}
                      sx={{ display: "block" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Precio:{" "}
                      <span className="color">
                        {Math.round(mov?.price * mov?.amount)}€
                      </span>
                    </Typography>
                    <Typography
                      ml={1}
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Cantidad:
                      <span className="color">{mov.amount}</span>
                    </Typography>
                    <Typography
                      ml={1}
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      <button
                        className={
                          mov.amount === 1 ? "btn-color" : "btn-change"
                        }
                        disabled={mov.amount === 1 ? true : false}
                        onClick={() => handleRest(mov.id, mov, mov.amount)}
                      >
                        {" "}
                        <RemoveTwoToneIcon />{" "}
                      </button>

                      <button
                        className="btn-change"
                        onClick={() => {
                          dispatch(
                            axiosPutMovies(
                              mov.id,
                              (update = {
                                ...mov,
                                amount: mov.amount + 1,
                              })
                            )
                          );
                        }}
                      >
                        {" "}
                        <AddTwoToneIcon />{" "}
                      </button>
                    </Typography>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      <button
                        className="btn-del"
                        onClick={() => handleDelete(mov.id)}
                      >
                        <DeleteIcon />
                      </button>
                    </Typography>
                  </ListItem>
                  <div className="border"></div>
                </div>
              ))}
            </List>
          </div>
          <Divider />

          <div className="box-center">
            <h3>
              Total:<span className="color"> {Math.round(totalSum)}€ </span>
            </h3>

            <BtnEnlace />
          </div>
        </div>
      </>
    );
  }
};
AppBuyCart.propTypes = {
  handleChangeNumber: PropTypes.func,
  update: PropTypes.object,
};
