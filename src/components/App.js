// packages
import React from 'react';
// components
import Particles from 'react-tsparticles';
import Navigation from './Navigation';
import Signin from './Signin';
import FaceRecognition from './FaceRecognition';
import LogoStars from './LogoStars';
import Rank from './Rank';
import Register from './Register';
import BottomNav from './BottomNav';
import Content from './Content';
// utilities
import { 
  particleOptions, 
  diceUrlApi,
  serverUrlApi, 
  signinPage, 
  homePage,
  registerPage,
} from '../helpers/Utils.js';
// css & media
import '../styles/App.css';
import ImageLinkForm from './ImageLinkForm';

class App extends React.Component {

    constructor() {
      super();

      this.state = {
        input: '',
        rolls: 0,
        total: 0,
        route: signinPage,
        isSignedIn: false,
        id: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        token: '',
        action: '',
        rank: '',
        isLoading: false,
        content: '',
        categories: ['Story', 'Chars', 'Starmap']
      }
    }

  // functions
  onSaveClick = () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          name: this.state.name,
          email: this.state.email, 
          entries: this.state.total,
          token: this.state.token 
      })
    };

    let responseStatus = 404;

    fetch(`${serverUrlApi}/saveroll`, requestOptions)
      .then(response => {
        if (response.status === 200) {
          responseStatus = response.status;
          return response.json();
        } 
      })
      .then(data => {
        if(responseStatus === 200) {
          
          this.setState({
            entries: this.state.total
          });
          this.getRank();
          
          
        } else {
          console.log('save roll failed');
        }
      });
    
    

  }

  onRollClick = () => {

    this.setState({
      isLoading: true
    });

    fetch(diceUrlApi)
    .then(res => res.json())
    .then(res => {
      if (res >= 20) {
        let d20s = (res - (res % 20)) / 20;
        this.setState({
          isLoading: false,
          rolls: d20s,
          total: res,
        });
      } else {
        this.setState({
          isLoading: false,
          rolls: 0,
          total: res
        });
      }
    })
  }

  onSignIn = (mail, pass) => {
    this.setState({
      email: mail,
      password: pass,
      action: 'signIn'
    });
  }

  onRegister = (name, mail, pass, confirmPass) => {

    if (mail.length <= 1) {
      alert('email is missing or invalid');
      return;
    }

    this.setState({
      name: name,
      email: mail,
      password: pass,
      confirmPassword: confirmPass,
      action: 'register'
    });
  }

  onSignOut = () => {
    this.setState({
      action: 'signOut'
    });
  }

  onRouteChange = (changeRoute) => {
    this.setState({
      route: changeRoute
    });
  }

  getRank = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
          name: this.state.name,
          token: this.state.token 
      })
    };

    let responseStatus = 404;

    fetch(`${serverUrlApi}/getrank`, requestOptions)
      .then(response => {
        responseStatus = response.status;
        return response.json();
      })
      .then(data => {
        if(responseStatus === 200) {

          this.setState({
            rank: data
          });

        } else {
          console.log('get rank failed');
        }
      });

  }

  onHoverLogo = () => {
    console.log("hovering logo");
  }

  showContents = (e) => {
    this.setState({
      content: e
    });
  }

  conditionalRendering = (route) => {
    if (route === homePage) { // home page
      return(
        <div className='app-container'>
          <div className='app-item centermass'>
            <div className='container'>
              <LogoStars
                showContents={this.showContents} 
                name={'story'}
              />
              <LogoStars
                showContents={this.showContents} 
                name={'chars'}
              />
              <LogoStars
                showContents={this.showContents}
                name={'starmap'} 
              />
            </div>
          </div> 
          <div className='app-item'>
            <Content 
              display={this.state.content}
            />
          </div>
          <div className='app-item'>
            <Rank
              name={this.state.name}
              rank={this.state.rank} 
              roll={this.state.entries}
            />
            <ImageLinkForm 
              total={this.state.total}
              onRollClick={this.onRollClick}
              onSaveClick={this.onSaveClick}
              />
            <FaceRecognition  
              rolls={this.state.rolls}
              total={this.state.total}
              isLoading={this.state.isLoading}
            />
          </div>
          <BottomNav 
            categories={this.state.categories}
            showContents={this.showContents}
          />
        </div>
      );
    } else if (route === registerPage) { // register page
      return(
        <Register
          onRegister={this.onRegister} 
        />
      );
    } else { // signin page
      return(
        <Signin 
          onRouteChange={this.onRouteChange}
          onSignIn={this.onSignIn} 
        />
      );
    }
  }

  // methods
  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {

    if ((prevState.action !== this.state.action && this.state.action === 'signIn')){ // signin logic
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            email: this.state.email,
            password: this.state.password 
        })
      };
  
      let responseStatus = 404;

      fetch(`${serverUrlApi}/signin`, requestOptions)
        .then(response => {
          responseStatus = response.status;
          return response.json();
        })
        .then(data => {
          if(responseStatus === 200) {

            this.setState({
              password: '',
              isSignedIn: true,
              id: data.id,
              name: data.name,
              token: data.token,
              entries: data.entries
            });

            this.onRouteChange(homePage);
            this.getRank();

          } else {
            this.setState({
              isSignedIn: false,
              action: ''
            });
            alert('login failed');
          }
        });
    } else if (prevState.action !== this.state.action && this.state.action === 'register') { // register logic
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: this.state.name,
            email: this.state.email, 
            password: this.state.password,
            confirmPassword: this.state.confirmPassword 
        })
      };

      let responseStatus = 404;

      fetch(`${serverUrlApi}/register`, requestOptions)
        .then(response => {
          if (response.status === 200) {
            responseStatus = response.status;
            return response.json();
          } 
        })
        .then(data => {
          if(responseStatus === 200) {
            this.setState({
              password: '',
              confirmPassword: '',
              id: '',
              name: '',
              email: ''
            });
            this.onRouteChange(signinPage);
          } else {
            this.setState({
              action: ''
            })
            alert('registration failed');
          }
        });
    } else if (prevState.action !== this.state.action && this.state.action === 'signOut') { // signout logic
      this.setState({
        input: '',
        rolls: [],
        total: 0,
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        id: '',
        route: signinPage,
        action: 'signOut'
      });
    }
  }

  render(){
    return(
      <div className="App">
        <Particles className='particles' options={particleOptions} />
        <Navigation 
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
          onSignOut={this.onSignOut}
        />
        {
          this.conditionalRendering(this.state.route)
        }
      </div>
    );
  }

}

export default App;