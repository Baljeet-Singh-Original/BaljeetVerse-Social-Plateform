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
                    <h1 className="x-large"> ẞä𝖑𝖏êē𝖙_𝕾ïñ𝖌𝖍,.</h1>
                    <p className="lead">
                        " 𝙄'𝙢 𝙥𝙚𝙧𝙛𝙚𝙘𝙩 𝙗𝙮 𝙙𝙚𝙚𝙙𝙨, 𝙣𝙤𝙩 𝙗𝙮 𝙗𝙞𝙧𝙩𝙝. "
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
