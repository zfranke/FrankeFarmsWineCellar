import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('wineCellar');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const wineCellar = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      wineCellar.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      wineCellar
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Franke Farms: WINE LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create">Add Wine</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Color</th>
                  <th>Type</th>
                  <th>Year</th>
                  <th>List Price</th>
                  <th>Open?</th>
                  <th>Empty?</th>
                </tr>
              </thead>
              <tbody>
                {this.state.wineCellar.map(wine =>
                  <tr>
                    <td><Link to={`/show/${wine.key}`}>{wine.name}</Link></td>
                    <td>{wine.color}</td>
                    <td>{wine.type}</td>
                    <td>{wine.year}</td>
                    <td>{wine.listPrice}</td>
                    <td>{wine.open}</td>
                    <td>{wine.empty}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
