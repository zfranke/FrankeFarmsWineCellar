import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { db } from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = db.collection('wineCellar');
    this.unsubscribe = null;
    this.state = {
      wineCellar: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const wineCellar = [];
    querySnapshot.forEach((doc) => {
      const { name, color, type, year, listPrice, isOpen, isEmpty } = doc.data();
      wineCellar.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        color,
        type,
        year,
        listPrice,
        open: isOpen,
        empty: isEmpty
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
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Franke Farms: WINE LIST
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create">Add Wine</Link></h4>
            <table className="table table-stripe">
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

