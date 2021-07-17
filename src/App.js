// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Search from "./Search";
import Dropdown from "./Dropdown";
import List from "./List";

function App(props) {
  return (
   <React.Fragment>
     <div className="row">
        <div className="col-2 p-4">
          <Dropdown />
        </div>
        <div className="col-10 p-4">
          <div className="row">
            <div className="col-3">
              <Search />
            </div>
          </div>
          </div>
           <List/>
          </div>
     
   </React.Fragment>
  );
}

export default App;
