import React from "react";

export function Body(props) {
  const cards = props.utilsSection.cards;

  const cardsIndex = Object.keys(cards[0]);

  const listCards = cards.map((index) => (
    <div>
      {cardsIndex[0]}: {index.utilName} {cardsIndex[1]}: {index.utilDescription}{" "}
      {cardsIndex[2]}:
      <img
        src={index.utilImg.src}
        alt={index.utilImg.alt}
        width="500"
        height="600"
      ></img>
    </div>
  ));

  const developers = props.developersSection.developers;

  const developersList = developers.map((index) => (
    <div>
      {index.name} {index.description}{" "}
      <img
        src={index.developerImg.developerImg}
        alt={index.developerImg.alt}
        width="500"
        height="600"
      ></img>{" "}
    </div>
  ));

  return (
    <>
      <h1>Body empieza Aquí</h1>
      <h3>{props.utilsSection.sectionTitle}</h3>
      <div>{listCards}</div>
      <h1>{props.developersSection.sectionTitle}</h1>
      <h2>{props.developersSection.desctionDescription}</h2>
      <div>{developersList}</div>
    </>
  );
}
