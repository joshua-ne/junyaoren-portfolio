import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Junyao Ren</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>M.S in Computer Science Engineering and Ph.D. in Molecular Biology with scientific insights, critical thinking, and analytical skills. Interested in software engineering, machine learning, and computational biology.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1913 Junewood Avenue, San Jose, CA, 95131</p>
            <h5>Phone</h5>
            <p>(214) 914-1579</p>
            <h5>Email</h5>
            <p>jren@scu.edu</p>
            <h5>Web</h5>
            <p>https://junyaoren.herokuapp.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={'current'}
              schoolName="Santa Clara University, Santa Clara, CA"
              schoolDescription="Master of Science, Computer Science Engineering, GPA: 4.00/4.0"
               />



             <Education
               startYear={2011}
               endYear={2018}
               schoolName="University of Texas Southwestern Medical Center, Dallas, TX"
               schoolDescription="PhD, Genetics, Development and Disease, HHMI Med into Grad Initiative, GPA: 3.86/4.0"
                />


              <Education
                  startYear={2007}
                  endYear={2011}
                  schoolName="Tongji University, Shanghai, China"
                  schoolDescription="Bachelor of Science, Biotechnology, GPA: 4.82/5.0, Graduation with distinction"
              />

            <hr style={{borderTop: '3px solid #e22947'}} />



              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={'current'}
              jobName="Co-founder"
              jobDescription="Cloud Chain Sharing Technology Co., Ltd. consists of three parts: 1. IPFS.方得, a Chinese IPFS community with 40k+ members, including developers, investors, and users; 2. IPFS research institutes, studying the technological, business and legal topics in IPFS and Filecoin applications; 3. IPFSFirst.com, an IPFS oriented web media."
              />

              <Experience
                startYear={2012}
                endYear={2014}
                jobName="Data Analyst Intern"
                jobDescription="Cool-Mind Network Technology Co., Ltd., Shenzhen, Guangdong, supervised by Ruiqu Chen"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="Java"
                  progress={80}
                  />
                  <Skills
                    skill="Python"
                    progress={50}
                    />
                    <Skills
                      skill="Java"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
