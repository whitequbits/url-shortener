import React from "react";
import axios from "axios";
import InputForm from "./InputForm";
import ResultCard from "./ResultCard";
import ErrorCard from "./ErrorCard";

const API_URL = "localhost:8080";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalUrl: '',
      shortUrl: '',
      responseCode: 201,
      error: '',
    };
  }

  handleChange = (event) => {
    this.setState({ originalUrl: event.target.value });
  };

  handleSubmit = () => {
    const request = {
      original_url: this.state.originalUrl,
    };

    axios
      .post(API_URL, request)
      .then((response) =>
        this.setState({
          shortUrl: response.data.id,
        })
      )
      .catch((error) => {
        this.setState({
          error: error,
          responseCode: 404,
        });
      });;
  };

  render() {
    const shortUrl = this.state.shortUrl;
    const responseCode = this.state.responseCode;

    let card =
      shortUrl !== "" ? <ResultCard shortUrl={API_URL + "/" + shortUrl} /> : "";

    if(responseCode !== 201){
      card = <ErrorCard/>
    }

    return (
      <div className="main-component">
        <InputForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {card}
      </div>
    );
  }
}

export default Main;