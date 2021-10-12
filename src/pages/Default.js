import React from 'react';
import { NotFound } from 'components/NotFound';

const Default = (props) => {
    return (
        <div className="container" >
            <div className="row" >
                <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                    <NotFound message="the page is missing" />
                    <h4>
                        the requested URL
                            <span className="text-warning" >
                            {window.location.href}
                            {/* The following is the relative path: */}
                            {/* {window.location.pathname} */}
                        </span>{" "} is not found
                        </h4>
                </div>
            </div>
        </div>
    )
}
export default Default;