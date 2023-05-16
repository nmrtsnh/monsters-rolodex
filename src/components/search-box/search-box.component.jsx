import { Component } from "react";

class searchBox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      ></input>
    );
  }
}

export default searchBox;
