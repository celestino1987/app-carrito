import React from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import RemoveTwoToneIcon from "@material-ui/icons/RemoveTwoTone";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import { BtnEnlace } from "./BtnEnlace";

export const RenderBuyCart = ( {totalSum , handleDelete,handleSumRest,localCart}) => {
    return (
        <div>
                 <div className="box">
          <h2 className="myBuy"> Mi carrito</h2>

          <div className="scroll ">
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {localCart.map((mov) => (
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
                        onClick={() => handleSumRest(mov.id , false)}
                      >
                        {" "}
                        <RemoveTwoToneIcon />{" "}
                      </button>

                      <button
                        className="btn-change"
                        onClick={() => handleSumRest(mov.id, true)}
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
        </div>
    )
}
