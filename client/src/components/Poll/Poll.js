import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as _ from 'lodash';

import { fetchImages } from '../../store/actions';
import BarChart from '../UI/BarChart/BarChart';

import Spinner from '../UI/Spinner/Spinner';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';

export class Poll extends Component {

    componentDidMount(){
        this.props.fetchImages();
    }

    renderContent = () => {
        if(!this.props.isLoggedIn || !this.props.voted) {
            return <Redirect to='/' />
        }
        
        let images = _.orderBy(this.props.images, ['votes'], ['desc'])
        let data = images.map(image => image.votes);
        let labels = images.map(image => image.title);
        
        if(this.props.loading) {
            return <Spinner />
        } else if(this.props.errorMsg) {
            return <ErrorMessage />
        }else {
            return <BarChart votes={data} titles={labels}/>
        }
    }

    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        voted: state.auth.voted,
        isLoggedIn: state.auth.loggedIn,
        loading: state.image.loading,
        images: state.image.images,
        errorMsg: state.image.errorMessage
    }
}

export default connect(mapStateToProps, {fetchImages})(Poll);