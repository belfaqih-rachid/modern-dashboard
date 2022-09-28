import React from "react";
import "./Cards.css";
import { cardsData } from "../../data/Data";
import { createStyled } from "@mui/system";
import Card from "../card/Card";

const Cards = () => {
  return (
    <div className="cards">
      {cardsData.map((card, id) => {
        return (
          <div className="container">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
