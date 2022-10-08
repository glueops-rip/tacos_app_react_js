import React from "react";
import './Error.css'

class Error extends React.Component {
    render () {
        return (
            <>
                <h1 id="error-code">500</h1>
                <p id="error-message">
                    Oops! An unexpected error happens. Please try again later.
                </p>
            </>
        )
    }
}

export default Error;
