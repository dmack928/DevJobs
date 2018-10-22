import React, {Component} from 'react';
import brand from '../nav/logo128.png';


class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push('/#')
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.auth.isAuthenticated) {
  //     this.props.history.push('/#')
  //   }
  // }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    // this.props.loginUser(userData)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-black">Job Seeker Login </h3>
              <p className="subtitle has-text-black">
                Please login to proceed.
              </p>
              <div className="box">
                <figure className="avatar">
                  <img src={brand} />
                </figure>
                <form method="POST" action="/login">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="text"
                        placeholder="Username"
                        autoFocus=""
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Your Password"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <button className="button is-block is-info is-large is-fullwidth">
                    Login
                  </button>
                </form>
              </div>
              <p className="has-text-grey">
                <a href="/#/signup">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
              </p>
            </div>
          </div>
        </div>
      </section>
    );


    // Login - Get User Token
// export const loginUser = userData => dispatch => {
//   axios
//     .post('/api/users/login', userData)
//     .then(res => {
//       // Save to localStorage
//       const { token } = res.data;
//       // Set token to ls
//       localStorage.setItem('jwtToken', token);
//       // Set token to Auth header
//       setAuthToken(token);
//       // Decode token to get user data
//       const decoded = jwt_decode(token);
//       // Set current user
//       dispatch(setCurrentUser(decoded));
//     })
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// // Set logged in user
// export const setCurrentUser = decoded => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded
//   };
// };

// // Log user out
// export const logoutUser = () => dispatch => {
//   //Remove token from localStorage
//   localStorage.removeItem('jwtToken');
//   // Remove auth header for future requests
//   setAuthToken(false)
//   // Set current user to {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}))
// }
//   }
// }
