import { Component } from "react";
import BookList from "./SecondaryComponents/BookList";
import Welcome from "./SecondaryComponents/Welcome";

class MyMain extends Component {
  render() {
    return (
      <>
        <Welcome className="mb-5 w-100   bg-secondary py-5" />
        <BookList generi={this.props.gender} />
      </>
    );
  }
}

export default MyMain;
