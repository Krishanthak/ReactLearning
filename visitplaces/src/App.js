import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import ResultList from './components/ResultList';
import SavedList from './components/SavedList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      saved: []
    }
  }

  updateState(value) {
    // console.log(value);
    this.setState({
      results: value
    })
  }

  savedList(value) {
    // console.log(value);
    const places = this.state.saved.concat([value])
    this.setState({
      saved: places
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Search callUpdate={this.updateState.bind(this)} />
            <ResultList resultPlaces={this.state.results}
              saveList={this.savedList.bind(this)}
            />
          </div>
          <div className="col-md-4">
            <SavedList savedPlaces={this.state.saved} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
