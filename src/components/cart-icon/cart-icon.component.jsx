import React from "react";
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";


const CartIcon = ({toggleCartHidden, itemCount})=> (
    <div onClick={toggleCartHidden} className="cart-icon">
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)


const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden()),
})

//selector. Takes the state and return a slice of the state
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
