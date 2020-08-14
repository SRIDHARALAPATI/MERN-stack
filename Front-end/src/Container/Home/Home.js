import axios from 'axios';
import React, { Component } from 'react';
import QuickSearch from "../../Components/QuickSearch/QuickSearch";
import SearchBar from "../../Components/SearchBar/SearchBar";
import './Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            locationList: [],
            restaurantList: [],
            quickSeachList: []
        }
    }

    onTypeAhead = (selected) => {
        axios("http://localhost:3333/api/getRestaurantList")
            .then(res => this.setState({ restaurantList: res.data.restaurant }))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        window.sessionStorage.setItem("area", null);
        window.sessionStorage.setItem("city", null);

        axios("http://localhost:3333/api/CityList")
            .then(res => this.setState({ locationList: res.data.city }))
            .catch(err => console.log(err))

        axios("http://localhost:3333/api/MealType")
            .then(res => this.setState({ quickSeachList: res.data.mealtype }))
            .catch(err => console.log(err))
    }

    render() {
        const { locationList, restaurantList, quickSeachList } = this.state;
        return (<div className='home-container'>
            <SearchBar locationList={locationList} onTypeAhead={this.onTypeAhead} restaurantList={restaurantList} />
            <QuickSearch items={quickSeachList} />
        </div>
        );
    }
}

export default Home;
