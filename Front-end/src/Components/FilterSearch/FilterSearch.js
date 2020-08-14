import axios from 'axios';
import queryString from 'query-string';
import React from 'react';
import Pagination from "react-js-pagination";
import './FilterSearch.css';

class FilterSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantList: [],
            locationList: [],
            // mealList:[],
            location: null,
            city: null,
            cuisine: null,
            meal: null,
            cost: 0,
            page:1,
            sort:1,
            cityName:"India "
        };
        // this.handleLocationDDChange = this.handleLocationDDChange.bind(this)
        // this.handleClickRestaurant=this.handleClickRestaurant.bind(this)
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)

        const location = values.location_id;
        const city = values.city_id;
        const cuisine = values.cuisine_type;
        const meal = values.type;
        const cost = values.cost;
        const page = values.page;
        const sort =values.sort;

        axios("http://localhost:3333/api/CityList")
            .then(res => this.setState({ locationList: res.data.city, location, city, cuisine, meal, cost, page }))
            .catch(err => console.log(err))
        

        axios(`http://localhost:3333/api/restaurantListFilter?location_id=${location}&city_id=${city}&cuisine_type=${cuisine}&type=${meal}&cost=${cost}&page=${page}&sort=${sort}`)
            .then(res => this.setState({ restaurantList: res.data.restaurant }))
            .catch(err => console.log(err))
    }

    handlePageChange = (pageNumber) => {
        const values = queryString.parse(this.props.location.search)
        const location = values.location_id;
        const city = values.city_id;
        const page = pageNumber;
        const {  cuisine, meal, cost ,sort} = this.state;

        this.props.history.push(`/restaurantsearchpage?location_id=${location}&city_id=${city}&cuisine_type=${cuisine}&meal_type=${meal}&cost=${cost}&page=${page}&sort=${sort}`);

        axios(`http://localhost:3333/api/restaurantListFilter?location_id=${location}&city_id=${city}&cuisine_type=${cuisine}&type=${meal}&cost=${cost}&page=${page}&sort=${sort}`)
            .then(res => this.setState({ restaurantList: res.data.restaurant }))
            .catch(err => console.log(err))
    }

    handleLocationDDChange = (event) => {
        const obj= JSON.parse(event.target.value);
        const location = obj.location_id;
        const city = obj.city_id;
        this.setState({cityName:obj.name});
        const { cuisine, meal, cost, page,sort } = this.state;
        this.props.history.push(`/restaurantsearchpage?location_id=${location}&city_id=${city}&cuisine_type=${cuisine}&type=${meal}&cost=${cost}&page=${page}&sort=${sort}`);

        axios(`http://localhost:3333/api/restaurantListFilter?location_id=${location}&city_id=${city}&cuisine_type=${cuisine}&type=${meal}&cost=${cost}&page=${page}&sort=${sort}`)
            .then(res => this.setState({ restaurantList: res.data.restaurant }))
            .catch(err => console.log(err))
    }

    handleCuisineChange = (event) => {
        const values = queryString.parse(this.props.location.search)
        const location = values.location_id;
        const city = values.city_id;
        const cuisine = event.target.value;
        const {  meal, cost, page,sort } = this.state;

        this.props.history.push(`/restaurantsearchpage?location_id=${location}&city_id=${city}&cuisine_type=${cuisine}&type=${meal}&cost=${cost}&page=${page}&sort=${sort}`);

        axios(`http://localhost:3333/api/restaurantListFilter?location_id=${location}&city_id=${city}&cuisine_type=${cuisine}&type=${meal}&cost=${cost}&page=${page}&sort=${sort}`)
            .then(res => this.setState({ restaurantList: res.data.restaurant }))
            .catch(err => console.log(err))
    }

    onCostSelect = (event) => {
        const values = queryString.parse(this.props.location.search)
        const location = values.location_id;
        const city = values.city_id;
        const cost = event.target.value;
        const {  meal, cuisine, page,sort } = this.state;

        this.props.history.push(`/restaurantsearchpage?location_id=${location}&city_id=${city}&cuisine_type=${cuisine}&type=${meal}&cost=${cost}&page=${page}&sort=${sort}`);

        axios(`http://localhost:3333/api/restaurantListFilter?location_id=${location}&city_id=${city}&cuisine_type=${cuisine}&type=${meal}&cost=${cost}&page=${page}&sort=${sort}`)
            .then(res => this.setState({ restaurantList: res.data.restaurant }))
            .catch(err => console.log(err))
    }
    onSortSelect = (event) => {
        const values = queryString.parse(this.props.location.search)
        const location = values.location_id;
        const city = values.city_id;
        const sort = event.target.value;
        const {  meal, cuisine, page, cost } = this.state;

        this.props.history.push(`/restaurantsearchpage?location_id=${location}&city_id=${city}&cuisine_type=${cuisine}&type=${meal}&cost=${cost}&page=${page}&sort=${sort}`);

        axios(`http://localhost:3333/api/restaurantListFilter?location_id=${location}&city_id=${city}&cuisine_type=${cuisine}&type=${meal}&cost=${cost}&page=${page}&sort=${sort}`)
            .then(res => this.setState({ restaurantList: res.data.restaurant }))
            .catch(err => console.log(err))
    }


    handleClickRestaurant = (id) => {
        
        const restaurantId = id;
        this.props.history.push(`/restaurantdetailspage/?restaurant=${restaurantId}`);
    }

    render() {
        const { locationList, restaurantList,  } = this.state;
        return (
            <div class="container-fluid">
                <div className="header-search">Food  serving places in {`${this.state.cityName}`}</div>
                <div class="row">
                    <div class="col-sm-3 col-md-6 col-lg-3">
                        <div className="Rectangle-5">
                            <div className="Filters">Filters</div>
                            <div className="Select-Location">Select-Location</div>
                            <select className="textbox" onChange={this.handleLocationDDChange}>
                                {locationList.map((item) => {
                                    return <option value={JSON.stringify(item)} >{item.name}</option>
                                })}
                            </select>
                            <div className="Select-Location">Cuisine</div>
                            <div className="block">
                                <input className="inline-block" type="checkbox" value={`North Indian`} onChange={this.handleCuisineChange} />
                                <span className="option-item inline-block">North Indian</span>
                            </div>
                            <div className="block">
                                <input className="inline-block" type="checkbox" value={`South Indian`} onChange={this.handleCuisineChange} />
                                <span className="option-item inline-block">South Indian</span>
                            </div>
                            <div className="block">
                                <input className="inline-block" type="checkbox" value={`Chinese`} onChange={this.handleCuisineChange} />
                                <span className="option-item inline-block">Chinese</span>
                            </div>
                            <div className="block">
                                <input className="inline-block" type="checkbox" value={'Fast food'} onChange={this.handleCuisineChange} />
                                <span className="option-item inline-block">Fast Food</span>
                            </div>
                            <div className="block">
                                <input className="inline-block" type="checkbox" value={'Street Food'} onChange={this.handleCuisineChange} />
                                <span className="option-item inline-block">Street Food</span>
                            </div>


                            <div className="Cost-For-Two">Cost-For-Two</div>
                            <input type="radio" value={0} name='radio' onChange={this.onCostSelect} /><span className="option-item">Less than 500</span><br />
                            <input type="radio" value={500}name='radio' onChange={this.onCostSelect} /><span className="option-item">500 to 1000</span><br />
                            <input type="radio" value={1000} name='radio' onChange={this.onCostSelect} /><span className="option-item">1000 to 1500</span><br />
                            <input type="radio" value={1500} name='radio' onChange={this.onCostSelect} /><span className="option-item">1500 to 2000</span><br />
                            <input type="radio" value={2000} name='radio' onChange={this.onCostSelect} /><span className="option-item">2000</span><br />
                            <div className="Sort">Sort</div>
                            <input type="radio" value={1} name='radio1'onChange={this.onSortSelect}/ ><span className="option-item">Price low to high</span><br />
                            <input type="radio" value={-1} name='radio1'onChange={this.onSortSelect} /><span className="option-item">Price high to low</span><br />
                        </div>
                    </div>
                    <div class="col-sm-9 col-md-6 col-lg-9">
                        {restaurantList.length === 0 ? <h3>No Item's Found</h3> :
                            restaurantList.map((item) => {
                                return <div className="Item" id={item._id} onClick={()=>this.handleClickRestaurant(item._id)}>
                                    <div className="row row-height">
                                        <div className="col-sm-3">
                                            <img className="Image" src={item.logo} />
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="The-Big-Chill-Cakery">{item.name}</div>
                                            <div className="FORT">{item.city}</div>
                                            <div className="Shop-1-Plot-D-Samruddhi-Complex-Chincholi- ">{item.locality}</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="CUISINES-COST-FOR-TWO">CUISINES</div>
                                            <div className="CUISINES-COST-FOR-TWO">COST FOR TWO</div>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="Bakery-700">{item.Cuisine.map((item) => { return <span>{`${item}, `}</span> })}</div>
                                            <div className="Bakery-700">{item.min_price}</div>
                                        </div>
                                    </div>
                                </div>
                            })}

                        <Pagination
                            activePage={this.state.page}
                            itemsCountPerPage={2}
                            totalItemsCount={50}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </div>
                </div>
            </div >
        )
    }
}

export default FilterSearch;