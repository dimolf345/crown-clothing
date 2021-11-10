import React from 'react'
import './header.styles.scss';
import { connect } from 'react-redux';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                 <OptionLink to="/shop">SHOP</OptionLink>
                 <OptionLink to="/contact">CONTACT</OptionLink>
                {
                    currentUser?
                    <OptionDiv 
                        onClick={()=> auth.signOut()}>
                     SIGN OUT
                    </OptionDiv>
                    : <OptionLink className="option" to="/signin">
                        SIGN IN
                    </OptionLink>
                }
              <CartIcon/>
            </OptionsContainer>
               { hidden? null : <CartDropdown/>}
       </HeaderContainer>
    )
}

//createStructured selector pass in automatically the state
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);