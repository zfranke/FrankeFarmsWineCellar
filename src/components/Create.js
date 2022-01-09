import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { db } from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = db.collection('wineCellar');
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
        isOpen,
        isEmpty
        
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
                <select class="form-control" name="color" value={color} onChange={this.onChange}>
                        <option value="red">Red</option>
                        <option value="white">White</option>
                        <option value="rose">Rose</option>
                        <option value="sparkling">Sparkling</option>
                        <option value="tawny">Tawny</option>
                        <option value="yellow">Orange</option>
                        <option value="yellow">Gray</option>
                        <option value="yellow">Yellow</option>
                        <option value="other">Other</option>
                    </select>
              </div>
              <div class="form-group">
                <label for="author">Type:</label>
                <input type="text" class="form-control" name="type" value={type} onChange={this.onChange} placeholder="Type" />
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
                    <select class="form-control" name="isOpen" value={isOpen} onChange={this.onChange}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="isEmpty">Empty:</label>
                    <select class="form-control" name="isEmpty" value={isEmpty} onChange={this.onChange}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
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