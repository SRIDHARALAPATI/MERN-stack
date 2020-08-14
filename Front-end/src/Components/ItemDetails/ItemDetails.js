import axios from 'axios';
import queryString from 'query-string';
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ItemDetails.css';


class Details extends Component {
    constructor() {
        super();
        this.state = {
            restaurantDetail: null,
            thumb:[]
        }
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        const restuarantId = values.restaurant;
        axios(`http://localhost:3333/api//getResById/${restuarantId}`)
            .then(res => this.setState({ restaurantDetail: res.data.restaurant }))
            .catch(err => console.log(err))
    }

    render() {
        const { restaurantDetail } = this.state;
        return (
            <div>
                {restaurantDetail && <div>
                    <Carousel showThumbs={false}>
                        {restaurantDetail.thumb.map((item, index) => {
                            return <div>
                                <img src={`../${item}`} />
                                <p className="legend">{`Image ${index}`}</p>
                            </div>
                        })}
                    </Carousel>
                    <div className="heading">{restaurantDetail.name}</div>
                    <Tabs>
                        <TabList>
                            <Tab><span className="overview">Overview</span></Tab>
                            <Tab><span className="overview">Contact</span></Tab>
                        </TabList>

                        <TabPanel>
                            <div>
                                <div className="about">About this Place</div>
                                <br />
                                <div className="cuisine">Cuisine</div>
                                <div className="bakery">{restaurantDetail.Cuisine}</div>
                                <br />
                                <div className="cuisine">Average Cost</div>
                                <div className="bakery">{`₹${restaurantDetail.min_price} for two people(approx).`}</div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <div className="phone-number">Phone Number</div>
                                <div className="pdigit">{restaurantDetail.contact_number}</div>
                                <br />
                                <div className="bheader">{restaurantDetail.name}</div>
                                <div className="address">{restaurantDetail.locality}</div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>}
            </div>
        )
    }
}

export default Details;