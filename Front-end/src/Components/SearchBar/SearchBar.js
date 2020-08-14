import React, { Component } from 'react';
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { withRouter } from "react-router-dom";
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        selected: [],
        isLoading: false,
        options: []
    };

    onRestaurantSelect = (selected) => {
        this.setState({ selectedRestaurant: selected });
        this.props.history.push(`restaurantdetailspage/?restaurant=${selected[0]._id}`);
    }

    handleLocationChange = (selected) => {
        this.setState({ selectedLocation: selected })
        window.sessionStorage.setItem("area", selected[0].location_id);
        window.sessionStorage.setItem("city", selected[0].city_id);
    }

    renderDropdownChildren = (option) => {
        return <div className=" logo-container row">
            <div className="logo-container col-sm-1">
                <img className='restaurant-logo' src={option.logo} />
            </div>
            <div className="address-container col-sm-11">
                <div className="row restaurant-name">{option.name}</div>
                <div className="row">{option.city}</div>
            </div>
        </div>
    }
    
    render() {
        return (<div className='search-container container-fluid'>
            <div className='logo row'>e!</div>
            <div className='search-heading row'>Find the best restaurants, cafe's and bars</div>
            <div className='search-controller row'>
                <div className='search-location col-sm'>
                    <Typeahead
                        {...this.state.selectedLocation}
                        labelKey={(option) => `${option.name}`}
                        id="basic-example"
                        onChange={this.handleLocationChange}
                        minLength={3}
                        options={this.props.locationList}
                        placeholder="Please select a location"
                    />
                </div>
                <div className='search-restaurant col-sm'>
                    <AsyncTypeahead
                        {...this.state.selectedRestaurant}
                        labelKey="name"
                        id="basic-example"
                        onChange={this.onRestaurantSelect}
                        minLength={3}
                        onSearch={this.props.onTypeAhead}
                        options={this.props.restaurantList}
                        placeholder="Search for restaurants"
                        renderMenuItemChildren={(option, props, index) => {
                            return this.renderDropdownChildren(option);
                        }}
                    />
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(SearchBar);
