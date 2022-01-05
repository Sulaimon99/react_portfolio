import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>

                        <img
                            // src = "https://i.imgur.com/4itVNES.jpg"
                            src="https://i.imgur.com/Fl1Jja7.jpg"
                            alt="avatar"
                            className="avatar-img"

                        />
                        <div className='banner-text'>
                            <h1>
                                JAVASCRIPT DEVELOPER
                            </h1>
                            <hr />
                            <p>HTML/CSS | BOOTSTRAP | JAVASCRIPT | REACT.JS | NODE.JS </p>
                            <div className="social-links">


                                <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                <a href="http://github.com/sulaimon99" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                <a href="http://twitter.com/balotech_" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>

                                <a href="http://freecodecamp.com/sulaimon99" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>


                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;