import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (

                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'green' }}>React Project #1</CardTitle>
                        <CardText>fdbgf bgfbfnhgnhg dfvdgbhn bnnhgh fgbfnb ghnhg vdgb</CardText>
                        <CardActions border>
                            <Button colored> </Button>

                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'blue' }}>React Project #1</CardTitle>
                        <CardText>fdbgf bgfbfnhgnhg dfvdgbhn bnnhgh fgbfnb ghnhg vdgb</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'yellow' }}>React Project #1</CardTitle>
                        <CardText>fdbgf bgfbfnhgnhg dfvdgbhn bnnhgh fgbfnb ghnhg vdgb</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </CardActions>
                    </Card>

                </div>

            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: '[img]https://i.imgur.com/rWGsDmX.png[/img]' }}>HTML/CSS #1</CardTitle>
                        <CardText>fdbgf bgfbfnhgnhg dfvdgbhn bnnhgh fgbfnb ghnhg vdgb</CardText>
                        <CardActions border>
                            <Button colored><a href="https://priceless-thompson-1afc0d.netlify.com/#" rel="noopener noreferrer" target="_blank">Demo Bank interface</a></Button>

                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'blue' }}>HTML/CSS #2</CardTitle>
                        <CardText>fdbgf bgfbfnhgnhg dfvdgbhn bnnhgh fgbfnb ghnhg vdgb</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'yellow' }}>HTML/CSS #3</CardTitle>
                        <CardText>fdbgf bgfbfnhgnhg dfvdgbhn bnnhgh fgbfnb ghnhg vdgb</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </CardActions>
                    </Card>

                </div>

            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'green' }}>JavaScript Project #1</CardTitle>
                        <CardText>fdbgf bgfbfnhgnhg dfvdgbhn bnnhgh fgbfnb ghnhg vdgb</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'blue' }}>JavaScript Project #2</CardTitle>
                        <CardText>fdbgf bgfbfnhgnhg dfvdgbhn bnnhgh fgbfnb ghnhg vdgb</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'yellow' }}>JavaScript Project #3</CardTitle>
                        <CardText>fdbgf bgfbfnhgnhg dfvdgbhn bnnhgh fgbfnb ghnhg vdgb</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </CardActions>
                    </Card>

                </div>

            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'green' }}>C# Project #1</CardTitle>
                        <CardText>fdbgf bgfbfnhgnhg dfvdgbhn bnnhgh fgbfnb ghnhg vdgb</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'blue' }}>C# Project #2</CardTitle>
                        <CardText>fdbgf bgfbfnhgnhg dfvdgbhn bnnhgh fgbfnb ghnhg vdgb</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'yellow' }}>C# Project #3</CardTitle>
                        <CardText>fdbgf bgfbfnhgnhg dfvdgbhn bnnhgh fgbfnb ghnhg vdgb</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>

                        </CardActions>
                    </Card>

                </div>

            )

        }

    }
    render() {
        return (
            <div className="category-tabs">

                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>C#</Tab>
                </Tabs>

                <Grid className>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>




            </div>
        )
    }
}

export default Projects;