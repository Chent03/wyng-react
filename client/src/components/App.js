import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import { fetchUser } from '../store/actions'
import Gallery from '../components/Gallery/Gallery';
import Navbar from '../components/Navbar/Navbar';
import Polls from '../components/Poll/Poll';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return(
            <BrowserRouter>
                <Fragment>
                    <Navbar isLoggedIn={this.props.auth}/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Gallery}/>
                            <Route exact path="/polls" component={Polls}/>
                            <Redirect to="/"/>
                        </Switch>
                    </div>
                </Fragment>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, { fetchUser })(App);

