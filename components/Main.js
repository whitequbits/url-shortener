import React from "react";
import axios from "axios";
import InputForm from "./InputForm";
import ResultCard from "./ResultCard";
import ErrorCard from "./ErrorCard";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

  checkRegex = (string) => {
    let re = new RegExp("^(http|https)://", "i");
    return re.test(string);
  }

  handleChange = (event) => {
    let value = event.target.value;
    let originalUrl = this.checkRegex(value) ? value : "https://" + value;
    
    this.setState({ originalUrl: originalUrl });
  };

  handleSubmit = () => {
    const request = JSON.stringify({
      original_url: this.state.originalUrl,
    });

    axios
      .post(API_URL + "/v1/url/create", request)
      .then((response) =>{
        this.setState({
          shortUrl: response.data.result.short_url,
          responseCode: response.status,
        });
      }
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
      shortUrl !== "" ? <ResultCard shortUrl={API_URL + "/tiny/" + shortUrl} /> : "";

    if(responseCode === 404){
      card = <ErrorCard/>
    }

    return (
      <div className="main-component">
        <InputForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.originalUrl}
        />
        {card}
      </div>
    );
  }
}

export default Main;
