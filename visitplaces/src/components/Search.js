import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

    GetKey(e) {
        e.preventDefault();
        const typedKey = this.refs.inputword.value;
        // console.log(this.props.callUpdate)
        const update = this.props;

        axios.post('http://localhost:3001/getLocations', {
            city: typedKey,
        })
            .then(function (response) {
                // updateState()
                update.callUpdate(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <form className="form-horizontal">
                <fieldset>
                    <legend>Search Nearby Places</legend>
                    <div className="col-md-10">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="col-lg-2 control-label">Place</label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter here" ref="inputword" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary" onClick={this.GetKey.bind(this)}>Search</button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default Search;