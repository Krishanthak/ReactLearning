import React, { Component } from 'react';

class SavedList extends Component {
    render() {
        // console.log(this.props.savedPlaces)
        var saves = this.props.savedPlaces.map(name => {
            return (
                <div className="alert alert-info" key={name}>
                    <a href="#" className="btn btn-xs btn-primary pull-right">Click for more info</a>
                    <strong>{name}</strong>
                </div>
            )
        })


        return (
            <ul>
                <h3>Saved Places</h3>
                {saves}
            </ul>
        )
    }
}

export default SavedList;