import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          // src={`https://robohash.org/${id}?set=set2&`}
          // src={`https://robohash.org/QZT.png?set=set${id}`}
          src={`https://robohash.org/${id}`}
          // src={`https://robohash.org/${id}?set=set5`}
        ></img>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
export default Card;
