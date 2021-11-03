import React, { useEffect, useState } from "react";

import { axiosDelMovies } from "../redux-thunk/accions/rootAcion";
import { useDispatch, useSelector } from "react-redux";
import { axiosPutMovies } from "../redux-thunk/accions/rootAcion";
import { AppCircular } from "./AppCircular";
import PropTypes from "prop-types";
import { serviceSwal } from "../service/serviceSwal";
import { openLoading, openModal } from "../redux-thunk/accions/modalAction";
import { RenderBuyCart } from "./RenderBuyCart";

import { debounce, throttle } from "lodash";
import "../css/AppBuyCart.css";

export const AppBuyCart = ({ totalSum }) => {
  const movie = useSelector((state) => state.rootReducer.carrito);
  const loading = useSelector((state) => state.loadingReducer);
  const [localCart, setLocalCart] = useState([...movie]);
  const [disabled, setDisabled] = useState();

  const dispatch = useDispatch();
  let update = {};

  const handleSumRest = (id, ini = Boolean) => {
    setDisabled(true);
    setLocalCart(
      localCart.map((count) => {
        // console.log(count);
        if (count.id === id && ini === true) {
          count.amount++;
        } else if (count.id === id && ini === false) {
          count.amount--;
        }
        return count;
      })
    );
    const handleDebounce = debounce(() => {
      dispatch(
        axiosPutMovies(
          id,
          localCart.find((a) => a.id === id)
        )
      );
      setDisabled(false);
    }, 2000);
    handleDebounce();
  };

  const handleDelete = (id) => {
    dispatch(openModal(false));
    serviceSwal(
      "question",
      "¿Desea eliminar el producto?",
      "",
      true,
      true,
      false
    ).then((res) => {
      if (res.isConfirmed) {
        dispatch(axiosDelMovies(id));
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
        <RenderBuyCart
          disabled={disabled}
          handleDelete={handleDelete}
          handleSumRest={handleSumRest}
          localCart={localCart}
          totalSum={totalSum}
        />
      </>
    );
  }
};
AppBuyCart.propTypes = {
  handleChangeNumber: PropTypes.func,
  update: PropTypes.object,
};
