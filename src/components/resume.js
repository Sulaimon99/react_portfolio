import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Balogun Sulaimon</h2>
                        <h4 style={{ color: 'grey' }}>Programmer|GreatMan</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '58%' }} />
                        <p>
                            My name is Sulaimon, I am a software Developer, Born in Lagos, Based in Ibadan, Nigeria.
                            I currently work at Royal Niger Company, with a focus on growth and activation
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '58%' }} />

                        <h5>Address</h5>
                        <p>1, Ikolaba Gra, ibadan, Oyo State</p>

                        <h5>Email</h5>
                        <p>balo.oluwaseyi@gmail.com</p>

                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2013}
                            endYear={2017}
                            schoolName="Tai Solarin University Of Education"
                            courseDescription="Computer Science "
                            courseGrade="BSc.Ed(First Class Hons)"
                        />


                        <hr style={{ boderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobCompany="NonSuch HMO"
                            jobName="Data Entry Officer"
                            jobDescription="Responisble for entering, encoutering and batching data of the organisation to their database"

                        />

                        <Experience
                            startYear={2019}
                            endYear={201}
                            jobCompany="Royal Niger Company"
                            jobName="Software Developer"
                            jobDescription="Creating and developing Appications for the company clients"

                        />

                        <hr style={{ boderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>


                        <Skills
                            skill="JavaScript"
                            progress={70}
                        />

                        <Skills
                            skill="HTML/CSS"
                            progress={85}
                        />
                        <Skills
                            skill="ReactJs"
                            progress={60}
                        />
                        <Skills
                            skill="NodeJs"
                            progress={45}
                        />
                        <Skills
                            skill="C#"
                            progress={50}
                        />
                        <Skills
                            skill="Xamarin"
                            progress={70}
                        />



                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;