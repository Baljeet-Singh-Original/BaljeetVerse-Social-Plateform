import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large"> แบรค๐๐รชฤ๐_๐พรฏรฑ๐๐,.</h1>
                    <p className="lead">
                        " ๐'๐ข ๐ฅ๐๐ง๐๐๐๐ฉ ๐๐ฎ ๐๐๐๐๐จ, ๐ฃ๐ค๐ฉ ๐๐ฎ ๐๐๐ง๐ฉ๐. "
                    </p>
                    <div className="buttons">
                        <Link to="/register" className="btn btn-primary">Sign up</Link>
                        <Link to="/login" className="btn btn-light">Login</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
