import React, { Component } from 'react';
import QuickSearchTile from "../QuickSearchTile/QuickSearchTile";
import './QuickSearch.css';

class QuickSearch extends Component {
    render() {
        const { items } = this.props;
        return (<div className='quick-search-container container-fluid '>
            <div className='container'>
                <div className='quick-search-heading row'>Quick Searches</div>
                <div className='quick-search-subheading row'>Discover restaurants by type of meal</div>
                <div className='row'>
                    {items.map((item) => {
                        return <div className='col-sm-4'>
                            <QuickSearchTile id={item.meal_id} heading={item.meal_name} banner={item.img_src} content={item.content} />
                        </div>
                    })}
                </div>
            </div>
        </div>
        );
    }
}

export default QuickSearch;
