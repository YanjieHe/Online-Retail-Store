import React from 'react';
import Header from "./Header";
import {withRouter} from 'react-router-dom';
import {instanceOf} from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';

class Login extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        fetch('http://localhost:8080/customer_login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.text();
                }
            })
            .then(text => {
                if (text) {
                    const {cookies} = this.props;
                    cookies.set("sessionId", text, {path: '/'});
                    this.props.history.push('/');
                } else {
                    alert("fail");
                }
            })
            .catch(e => console.log(e));
        event.preventDefault();
    }

    bannerArea() {
        return <section className="blog-banner-area" id="category">
            <div className="container h-100">
                <div className="blog-banner">
                    <div className="text-center">
                        <h1>Login / Register</h1>
                        <nav aria-label="breadcrumb" className="banner-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Login/Register</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    }

    loginBox() {
        return <section className="login_box_area section-margin">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="login_box_img">
                            <div className="hover">
                                <h4>New to our website?</h4>
                                <p>There are advances being made in science and technology everyday, and a good example
                                    of this is the</p>
                                <a className="button button-account" href="register.html">Create an Account</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="login_form_inner">
                            <h3>Log in to enter</h3>
                            <form className="row login_form" action="#/" id="contactForm" onSubmit={this.handleSubmit}>
                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" id="name" name="email"
                                           placeholder="Email" onFocus="this.placeholder = ''"
                                           value={this.state.email}
                                           onChange={this.handleChange}
                                           onBlur="this.placeholder = 'email'"/>
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="password" className="form-control" id="name" name="password"
                                           placeholder="Password" onFocus="this.placeholder = ''"
                                           value={this.state.password}
                                           onChange={this.handleChange}
                                           onBlur="this.placeholder = 'Password'"/>
                                </div>
                                <div className="col-md-12 form-group">
                                    <div className="creat_account">
                                        <input type="checkbox" id="f-option2" name="selector"/>
                                        <label htmlFor="f-option2">Keep me logged in</label>
                                    </div>
                                </div>
                                <div className="col-md-12 form-group">
                                    <button type="submit" value="submit" className="button button-login w-100">Log In
                                    </button>
                                    <a href="#">Forgot Password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }

    render() {
        return (
            <div>
                <Header/>
                {this.bannerArea()}
                {this.loginBox()}
            </div>
        );
    }
}

export default withCookies(withRouter(Login));