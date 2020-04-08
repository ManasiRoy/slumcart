import React, { Component } from 'react'
import './SignIn.scss'
import FormInput from '../Form-Input/FormInput';
import Custombuttom from '../custom-buttons/customButtom';
import { signInWithGoogle } from '../../firebase/firebase.utils'

export default class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }
    handleOnchange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> SignIn with your email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleOnchange}
                        label='email'
                        required />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleOnchange}
                        label='password'
                        required />
                    <div className="buttons">
                        <Custombuttom type="submit">SignIn </Custombuttom>
                        <Custombuttom onClick={signInWithGoogle} isGoogleSignIn>SignIn With Google</Custombuttom>
                    </div>
                </form>
            </div>
        )
    }
}
