import React, {Component} from "react";
// import SHOP_DATA from './shop.data.js'
import CollectionOverview from '../../components/collections-overview/collection-overview.component'
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";


//Match object is given by the parent Route component in the APP js
const ShopPage = ({match}) => {
    return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
    )
}

export default ShopPage;