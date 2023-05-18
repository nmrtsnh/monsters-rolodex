import { Component } from "react";

import "./search-box.style.css";
class searchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      ></input>
    );
  }
}

export default searchBox;
