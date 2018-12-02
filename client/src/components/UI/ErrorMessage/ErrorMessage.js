import React from 'react';
import './ErrorMessage.scss';

export default () => {
    return (
        <div className="error-container">
            <i className="fas fa-exclamation-triangle"></i>
            <p>Something went wrong</p>
        </div>
    )
}