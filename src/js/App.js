import React from 'react';
import {connect} from 'react-redux';
import List from "./components/List";
import Filter from "./components/Filter";

export class App extends React.Component 
{
  render() {
    return (
      <div className="container">
        <h1 className="row title">Danh sách cách bác sĩ</h1>
        <Filter />
        <List />
      </div>
    );
  }
}
