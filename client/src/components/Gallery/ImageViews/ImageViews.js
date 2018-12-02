import React from 'react';
import { connect } from 'react-redux';
import { postVote } from '../../../store/actions';
import './ImageView.scss';

export const ImageView = ({imageUrl, title, postVote , _id, modalHandler, loggedIn, voted}) => {
    return (
        <div className="card imageView">
            <div className="card-header">
                <header className="card-header-title">{title}</header>
            </div>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={imageUrl} alt={title} />
                </figure>
            </div>
            <div className="card-footer">
                {
                    voted ? 
                    '' :
                    <i className="fas fa-thumbs-up card-footer-item thumbsup" onClick={ loggedIn ? () => postVote(_id) : modalHandler}></i>
                }
            </div>
        </div>
    )
}

export default connect(null, { postVote })(ImageView);