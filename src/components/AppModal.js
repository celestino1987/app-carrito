import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { AppBuyAnime } from "./AppBuyAnime";
import { AppBuyCar } from "./AppBuyCar";
import "../css/AppModal.css";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AppModal({
  open,
  setOpen,
  change,
  setChange,
  movie,
  setAmount,
  amount,
  disabled,

  totalSum,
  price,
  setPrice,
  loading,
  setLoading,
}) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {change ? (
        <AppBuyAnime
          movie={movie}
          setOpen={setOpen}
          totalSum={totalSum}
          price={price}
          loading={loading}
          setLoading={setLoading}
        />
      ) : (
        <AppBuyCar
          setPrice={setPrice}
          setChange={setChange}
          disabled={disabled}
          amount={amount}
          setAmount={setAmount}
          setOpen={setOpen}
          movie={movie}
          totalSum={totalSum}
        />
      )}
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
