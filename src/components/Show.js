import React, { Component } from 'react';
import { db } from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wine: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = db.collection('wineCellar').doc(this.props.match.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          wine: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    db.collection('wineCellar').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">Wine List</Link></h4>
            <h3 class="panel-title">
              {this.state.wine.name}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.wine.name}</dd>
              <dt>Color:</dt>
              <dd>{this.state.wine.color}</dd>
              <dt>Type:</dt>
              <dd>{this.state.wine.type}</dd>
              <dt>Year:</dt>
              <dd>{this.state.wine.year}</dd>
              <dt>List Price:</dt>
              <dd>{this.state.wine.listPrice}</dd>
              <dt>Open?</dt>
              <dd>{this.state.wine.isOpen}</dd>
              <dt>Empty?</dt>
              <dd>{this.state.wine.isEmpty}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;