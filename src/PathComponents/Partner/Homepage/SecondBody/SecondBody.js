import React from 'react';
import "../Homepage.css"
export default function SecondBody(){
    return(
        <div className='old-parent-secondbody-homepage'>
            <div className='parent-secondbody-homepage'>
                <div className='left-sidebar-img'>
                    <img className='slide-first-img' src={require('../Img/secondbody_first_img.png')}/>
                </div>
                <div className='right-sidebar-info'>
                    <h4 className='second-body-title'>Take Your Business to the Next Level</h4>
                    <div className='first-info-second-body'>
                        <div>
                            <img className='set-img-size-secondbody' src={require('../Img/secondbody_second_img.png')}/>
                        </div>
                        <div className='set-height-width-content'>
                            <h5>Broader Exposure</h5>
                            <p>Expand your business by reaching our customers in APAC region and beyond.</p>
                        </div>
                    </div>
                    <div className='first-info-second-body'>
                        <div>
                            <img className='set-img-size-secondbody' src={require('../Img/secondbody_third_img.png')}/>
                        </div>
                        <div className='set-height-width-content'>
                            <h5>Broader Exposure</h5>
                            <p>Expand your business by reaching our customers in APAC region and beyond.</p>
                        </div>
                    </div>
                    <div className='first-info-second-body'>
                        <div>
                            <img className='set-img-size-secondbody' src={require('../Img/secondbody_fourth_img.png')}/>
                        </div>
                        <div className='set-height-width-content'>
                            <h5>Broader Exposure</h5>
                            <p>Expand your business by reaching our customers in APAC region and beyond.</p>
                        </div>
                    </div>
                    <div className='first-info-second-body'>
                        <div>
                            <img className='set-img-size-secondbody' src={require('../Img/secondbody_fifth_img.png')}/>
                        </div>
                        <div className='set-height-width-content'>
                            <h5>Broader Exposure</h5>
                            <p>Expand your business by reaching our customers in APAC region and beyond.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}