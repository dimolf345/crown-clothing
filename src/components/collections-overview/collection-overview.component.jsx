import React from "react";
import { connect } from "react-redux";
import './collection-overview.styles.scss';
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selector.js";

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
          collections.map(({id, ...otherCollecionProps}) => (
         <CollectionPreview key={id} {...otherCollecionProps}/>
           ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)