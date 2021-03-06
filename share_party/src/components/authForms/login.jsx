import React, { Component } from 'react'
import PropTypes from 'prop-types'

import loginImg from '../../login.svg'

export class Login extends Component {
    constructor(props) {
        super(props);
    }
    //todo: autologin

    render() {
        return (
            <div className='base-container' ref={this.props.containerRef}>
                <div className='header'>login</div>
                <div className='content'>
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' name='username' placeholder='Username' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='text' name='password' placeholder='Password' />
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <button type='button' className='btn' >Login</button>
                </div>
            </div>
        )
    }
}


