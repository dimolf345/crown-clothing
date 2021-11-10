import React from "react";
// import SHOP_DATA from './shop.data.js'
import CollectionOverview from '../../components/collections-overview/collection-overview.component'
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {onCollectionSnapshot, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import { collection } from "@firebase/firestore";
import {updateCollections} from '../../redux/shop/shop.actions'
import withSpinner from '../../components/with-spinner/with-spinner.component'
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


//Match object is given by the parent Route component in the APP js
class ShopPage extends React.Component {
    state = {
        loading: true,
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        onCollectionSnapshot('collection', (snapshot)=> {
           const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false})
        })

    }

    render(){
    const {match} = this.props;
    const {loading} = this.state;
    return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner isLoading={loading}  {...props} />}/>
                <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading}  {...props} />}/>
            </div>
    )
    }
}


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>(dispatch(updateCollections(collectionsMap)))
})

export default connect(null, mapDispatchToProps)(ShopPage);