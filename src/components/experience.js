import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col = {4}>
                <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col = {8}>
                <h4 style = {{marginTop:'0px'}}>{this.props.jobCompany}</h4>
                <p>{this.props.jobName}</p>
                <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;