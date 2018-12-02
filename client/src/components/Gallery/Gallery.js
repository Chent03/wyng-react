import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchImages } from '../../store/actions';
import './Gallery.scss';

import ImageView from './ImageViews/ImageViews';
import Spinner from '../UI/Spinner/Spinner';
import LoginModal from '../UI/LoginModal/LoginModal';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';

export class Gallery extends Component {

    componentDidMount() {
        this.props.fetchImages();
    }

    
    constructor(props){
        super(props);
        this.state = {
            displayLogin: false
        }
    }

    toggleModal = () => {
        this.setState({displayLogin: !this.state.displayLogin})
    }
    
    renderContent = () => {
        if(this.props.voted) {
            return <Redirect to='/polls'/>
        } else {
            if(this.props.loading) {
                return <Spinner />
            } else if(this.props.errorMsg) {
                return <ErrorMessage />
            } else {
                return this.props.images.map(image => {
                    return <ImageView 
                        {...image} 
                        key={image.title} 
                        loggedIn={this.props.loggedIn}
                        modalHandler={this.toggleModal}
                        voted={this.props.voted}
                    />
                })
            }
        }
    }

    render() {
        return (
            <LoginModal isActive={this.state.displayLogin} toggleModal={this.toggleModal}>
                <div>
                    <h1>Please Vote On Your Favorite Picture</h1>
                    <div className="gallery">
                        {this.renderContent()}
                    </div>
                </div>
            </LoginModal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
        voted: state.auth.voted,
        loading: state.image.loading,
        images: state.image.images,
        errorMsg: state.image.errorMessage
    }
}

export default connect(mapStateToProps, { fetchImages } )(Gallery);