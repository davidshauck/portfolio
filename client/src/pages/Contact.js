import React, { Component } from "react";
import { Input } from "../components/Form"
import API from "../utils/API";

class Contact extends Component {

  state = {
    name: "",
    email: "",
    message: ""
  }

  handleInputChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleLogin = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/tutors`);
      })
      .then(() => window.location.reload(false))
      .catch(err => {
        console.log(err.response.data.message);
      });
  };

  handleFormSubmit = formSubmitEvent => {
      console.log(this.state)
    formSubmitEvent.preventDefault();


    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        this.state.categories.push(checkbox);
      });
      API.saveTutor({
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        password: this.state.password,
        photo: this.state.photo,
        bio: this.state.bio,
        categories: this.state.categories,
        status: 2
      }).then(res => {
        if (res.data._id) {
          let disabledStatus = false;
          this.setState({ ...this.state, disabledStatus: disabledStatus })
        }
      })
      
  };

  render() {
    return (
      <div className="list-overflow-container register-box">
      <h2>Contact Dave</h2>
      <form onSubmit={this.handleFormSubmit}>
        <Input 
            name="name" 
            type="text"
            placeholder="Full Name" 
            className="col-6 signup-boxes"
            onChange={e => this.handleInputChange(e)}
        />
        <Input 
            name="email" 
            type="email" 
            className="col-6 signup-boxes"
            placeholder="Email (required)" 
            onChange={e => this.handleInputChange(e)}
        />


        <div className="col-12">
        <textarea className="form-control" rows="10" name="message" onChange={e => this.handleInputChange(e)} placeholder="Message here" />
        </div>
          <button type="submit" className="btn save-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;