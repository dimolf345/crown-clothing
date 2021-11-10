import React, {Component} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {SignInContainer, SignInTitle, ButtonsBarContainer} from './sign-in.styles';


class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({
                'email': '',
                'password': ''
            })
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                     handleChange = {this.handleChange}
                     name="email" 
                     type="email" 
                     label="Email"
                     required 
                     value={this.state.email} />
                    
                    <FormInput 
                    handleChange={this.handleChange}
                    name="password"
                    required
                    label="Password"
                    type="password"
                    value={this.state.password} />
                    <ButtonsBarContainer>
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                     <CustomButton
                    isGoogleSignIn
                     onClick={signInWithGoogle}>
                        Sign in with Google
                    </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>

        )
    }
}



export default SignIn;