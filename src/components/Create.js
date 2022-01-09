import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('wineCellar');
    this.state = {
      name: '',
      color: '',
      type: '',
      year: '',
      listPrice: '',
      isOpen: '',
      isEmpty: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, color, type, year, listPrice, isOpen, isEmpty } = this.state;

    this.ref.add({
        name,
        color,
        type,
        year,
        listPrice,
        open: isOpen,
        empty: isEmpty
        
    }).then((docRef) => {
      this.setState({
        name: '',
        color: '',
        type: '',
        year: '',
        listPrice: '',
        isOpen: '',
        isEmpty: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
   const { name, color, type, year, listPrice, isOpen, isEmpty } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD WINE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Wine List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="color">Color:</label>
                <textArea class="form-control" name="color" onChange={this.onChange} placeholder="Color" cols="80" rows="3">{color}</textArea>
              </div>
              <div class="form-group">
                <label for="author">Type:</label>
                <input type="text" class="form-control" name="author" value={type} onChange={this.onChange} placeholder="Type" />
              </div>
                <div class="form-group">
                    <label for="year">Year:</label>
                    <input type="text" class="form-control" name="year" value={year} onChange={this.onChange} placeholder="Year" />
                </div>
                <div class="form-group">
                    <label for="listPrice">List Price:</label>
                    <input type="text" class="form-control" name="listPrice" value={listPrice} onChange={this.onChange} placeholder="List Price" />
                </div>
                <div class="form-group">
                    <label for="isOpen">Open:</label>
                    <input type="checkbox" class="form-control" name="isOpen" value={isOpen} onChange={this.onChange} placeholder="Open" />
                </div>
                <div class="form-group">
                    <label for="isEmpty">Empty:</label>
                    <input type="checkbox" class="form-control" name="isEmpty" value={isEmpty} onChange={this.onChange} placeholder="Empty" />
                </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;