import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      name: '',
      color: '',
      type: '',
      year: '',
      listPrice: '',
      isOpen: '',
      isEmpty: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('wineCellar').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const wine = doc.data();
        this.setState({
          key: doc.id,
            name: wine.name,
            color: wine.color,
            type: wine.type,
            year: wine.year,
            listPrice: wine.listPrice,
            isOpen: wine.open,
            isEmpty: wine.empty
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({wine:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, color, type, year, listPrice, isOpen, isEmpty } = this.state;

    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    updateRef.set({
        name,
        color,
        type,
        year,
        listPrice,
        open: isOpen,
        empty: isEmpty
    }).then((docRef) => {
      this.setState({
        key: '',
        name: '',
        color: '',
        type: '',
        year: '',
        listPrice: '',
        isOpen: '',
        isEmpty: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT WINE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Wine List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label>Color</label>
                <input type="text" class="form-control" name="color" value={this.state.color} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label>Type</label>
                <input type="text" class="form-control" name="type" value={this.state.type} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label>Year</label>
                <input type="text" class="form-control" name="year" value={this.state.year} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label>List Price</label>
                <input type="text" class="form-control" name="listPrice" value={this.state.listPrice} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label>Open</label>
                <input type="text" class="form-control" name="isOpen" value={this.state.isOpen} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label>Empty</label>
                <input type="text" class="form-control" name="isEmpty" value={this.state.isEmpty} onChange={this.onChange} />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
