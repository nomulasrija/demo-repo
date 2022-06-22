import React from 'react';
import { Routes, Route } from 'react-router-dom'
// import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBookOpen, faRibbon } from '@fortawesome/free-solid-svg-icons'
import Slideshow from './Slideshow';

function Home() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Slideshow />}></Route>
            </Routes>
            <div className='container' id="jaanu">
                <br></br>
                <div className='container'>
                    <h2 className='text-center font-link display-4'><b>Why Choose us?</b></h2>
                </div>
                <br />
                <div className='container bg-light'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='text-center mt-3'>
                                <FontAwesomeIcon icon={faRibbon} size="3x"></FontAwesomeIcon>
                            </div>
                            <br />
                            <div>
                                <h3 className='font-link text-center'><b>#1first in India!</b></h3>
                                <p className='container'>
                                    <em>Our courses are designed to help learners to excel. The induction of students to a particular
                                        course is based on scientific selection process that maps learner interest to course choice.
                                        The instructional methodology takes into account different learning styles, thereby creating
                                        opportunities for immersive and intensive learning along with constructive collaboration.
                                        The assessment strategy and timely interventions for improvements.</em>
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='text-center mt-3'>
                                <FontAwesomeIcon icon={faBookOpen} size="3x"></FontAwesomeIcon>
                            </div>
                            <br />
                            <div>
                                <h3 className='font-link text-center'><b>Easy Learning!</b></h3>
                                <p className='container'>
                                    <em>Our courses are designed to help learners to excel. The induction of students to a particular
                                        course is based on scientific selection process that maps learner interest to course choice.
                                        The instructional methodology takes into account different learning styles, thereby creating
                                        opportunities for immersive and intensive learning along with constructive collaboration.
                                        The assessment strategy and timely interventions for improvements.</em>
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='text-center mt-3'>
                                <FontAwesomeIcon icon={faAward} size="3x"></FontAwesomeIcon>
                            </div>
                            <br />
                            <div>
                                <h3 className='font-link text-center'><b>Best courses guaranteed!</b></h3>
                                <p className='container'>
                                    <em>Although India does have a large trainable workforce, the supply pool is not always
                                        close to demand. Socio-cultural issues, migration issues further complicate the situation.
                                        The education system, not being closely linked to industry needs, creates graduates who are
                                        not readily employable. From the industry's perspective therefore acquisition and retention
                                        of new talent, especially of blue collar workers, is a major challenge.</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;