import React from 'react';
import CardsComponent from './displayRestaurants.jsx';
import {Card} from 'semantic-ui-react';
class DisplayFavComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        let divStyle = {
            margin: 70
        };
        let fav = this.props.fav;
        let JsonArray = this.props.json.map(function(item) {
            if (fav === 'favourites') {
                return <CardsComponent name = {item.name} id = {item._id} img = {item.img} address = {item.address} cuisines = {item.cuisines} ratings = {item.ratings} comments = {item.comments} favourite = 'favourites'/>
            }
        });
        return (
            <div style = {divStyle}>
                <Card.Group>{JsonArray}</Card.Group>
            </div>
        );
    }
}
module.exports = DisplayFavComponent;
