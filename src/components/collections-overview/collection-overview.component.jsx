import React from "react";
import { connect } from "react-redux";
import './collection-overview.styles.scss';
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selector.js";

const CollectionsOverview = ({collections}) => {
    return (
    <div className="collections-overview">
        {
            Object.keys(collections).map((item)=> 
                <CollectionPreview key={collections[item].id}
                {...collections[item]}/>
            )
        }

    </div>
)
    }

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)



        /* {
         Object.keys(collections).map(({id, ...otherCollecionProps}) => (
         <CollectionPreview key={id} {...otherCollecionProps}/>
           ))
        } */