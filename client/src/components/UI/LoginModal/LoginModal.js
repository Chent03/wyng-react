import React, {Fragment} from 'react';

import './LoginModal.scss';

const LoginModal = ({children, isActive, toggleModal}) => {
    return(
        <Fragment>
            <div className={`modal ${isActive ? 'is-active' : ''}`}>
                <div className="modal-background" onClick={toggleModal}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">WYNG</p>
                    </header>
                    <section className="modal-card-body">
                        <h4>Please Log In To Vote</h4>
                    </section>
                    <footer className="modal-card-foot">
                        <a className="button is-success" href="/auth/google">Login</a>
                    </footer>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={toggleModal}></button>
            </div>
            {children}    
        </Fragment>

    )
}

export default LoginModal;
