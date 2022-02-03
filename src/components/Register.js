import React from 'react';

class Register extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          name: '',  
          email: '',
          password: '',
          confirmPassword: ''
        }
    }

    render() {
        return(
            <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset
                            id="sign_up"
                            className="ba b--transparent ph0 mh0"
                        >
                            <legend 
                                className="f4 fw6 ph0 mh0"
                            >
                            Register
                            </legend>
                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="name"
                                    id="name"
                                    onChange={(ev) => { 
                                        this.setState({name: ev.target.value}); 
                                    }}    
                                />
                            </div>
                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="email-address">
                                    Email
                                </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={(ev) => { 
                                        this.setState({email: ev.target.value}); 
                                    }}
                                />
                            </div>
                            <div className="mv3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={(ev) => { 
                                        this.setState({password: ev.target.value}); 
                                    }}
                                />
                            </div>
                            <div className="mv3">
                                <label
                                    className="db fw6 lh-copy f6"
                                    htmlFor="confirmPassword">
                                    Confirm password
                                </label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    onChange={(ev) => { 
                                        this.setState({confirmPassword: ev.target.value}); 
                                    }}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Save"
                                onClick={() => this.props.onRegister(this.state.name, this.state.email, this.state.password, this.state.confirmPassword )}
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}


export default Register;