import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './QuickSearchTile.css';

class QuickSearchTile extends Component {
    handleClick = (id) => {
        const area = window.sessionStorage.getItem("area");
        const city = window.sessionStorage.getItem("city");
        const meal = id;
        const cost =0;
        const page = 1;
        const sort=1;
        if (city>0 && area>0) {
            this.props.history.push(`/restaurantsearchpage?location_id=${area}&city_id=${city}&cuisine_type=null&type=${meal}&cost=${cost}&page=${page}&sort=${sort}`);
        }
        else {
            this.props.history.push(`/restaurantsearchpage?location_id=0&city_id=0&cuisine_type=null&type=${meal}&cost=${cost}&page=${page}&sort=${sort}`);
        }
    }

    render() {
        const { id, banner, heading, content } = this.props;
        return (<div id={id} className='quick-search-tile-container row' onClick={()=> this.handleClick(id)}>
            <div className='col-sm-5 image-container' >
                <img src={banner} alt="tile icon"/>
            </div>
            <div className='col-sm-7 content-bar' >
                <div className='content-heading row' >{heading}</div>
                <div className='content-text row' >{content}</div>
            </div>
        </div>
        );
    }
}

export default withRouter(QuickSearchTile);
