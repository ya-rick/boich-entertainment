import './app.css';
import Card from "../cards/card";
import Header from "../header";
import Container from "../container";
import HeaderButton from "../buttons/header-button";
import Arrow from "../../images/Arrow.svg";
import AnimationScrollDown from "../animationScrollDown";
import Computer from "../comtuter";
import Cool from '../../images/3d-hands-fun-and-wild-261.svg'
import Professionals from '../../images/business-3d-facepalm-man-close-up-5 1.svg';
import Gays from '../../images/3d-hands-fun-and-wild-378.svg';
import SelectedWorks from "../selectedWorks";
import Col from "../col";
import SpecialCard from "../cards/specialCard";
import Bottle from '../../images/testBottles.png';
import ButtonFullWidth from "../buttons/buttonFullWidth";
import WhatWeDo from "../whatWeDo";
import Marquee from "react-fast-marquee";
import Slider from "../ourTeam/slider";
import OurTeam from "../ourTeam";

export default function App() {
    return <div>
        <Card>
            <Header/>
            <Container>
                <Col>
                    <div className='flex'>
                        <p className='h-logo'>We are</p>
                        <p className='service'>full service</p>
                    </div>
                    <p className='h-logo'>development agency</p>
                    <p className='sub-title'>Creating easy to use websites that produces results</p>
                    <HeaderButton clazz='header-button-black'>
                        <div className='button-arrow'>
                            <p className='button-arrow-text'>Let’s talk</p>
                            <img className='img-size' src={Arrow} alt=''/>
                        </div>
                    </HeaderButton>
                    <div className='scroll-div'>
                        <AnimationScrollDown/>
                        <p className='scroll-text'>Scroll down</p>
                    </div>
                </Col>
                <div className='col'>
                    <Computer/>
                </div>
            </Container>
        </Card>
        <Card>
            <div className='background'>
                <Container>
                    <p className='we-are'>We are...</p>
                </Container>
                <Container>
                    <div className='gap'>
                        <div className='col-3'>
                            <div className='around-3d-image'>
                                <img src={Cool} alt=''/>
                            </div>
                            <p className='title-image'>Cool</p>
                            <p className='text-image'>Small and diverse teams ensure all skills and expertise are
                                available at every step in the cycle influencing.</p>
                        </div>
                        <div className='col-3'>
                            <div className='around-3d-image'>
                                <img src={Professionals} alt=''/>
                            </div>
                            <p className='title-image'>Professionals</p>
                            <p className='text-image'>Small and diverse teams ensure all skills and expertise are
                                available at every step in the cycle influencing.</p>
                        </div>
                        <div className='col-3'>
                            <div className='around-3d-image'>
                                <img src={Gays} alt=''/>
                            </div>
                            <p className='title-image'>Gays</p>
                            <p className='text-image'>Small and diverse teams ensure all skills and expertise are
                                available at every step in the cycle influencing.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </Card>
        <div className='flex-center'>
            <SelectedWorks/>
        </div>
        <SpecialCard title={'BATTLESTAR'}
                     subtitle={'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'}
                     img={Bottle}
                     year={'2021'}
                     frameList={['Brand', 'Web', 'IOS', 'Android']}
        />
        <SpecialCard title={'BATTLESTAR'}
                     subtitle={'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'}
                     img={Bottle}
                     year={'2021'}
                     frameList={['Brand', 'Web', 'IOS', 'Android']}
        />
        <SpecialCard title={'BATTLESTAR'}
                     subtitle={'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'}
                     img={Bottle}
                     year={'2021'}
                     frameList={['Brand', 'Web', 'IOS', 'Android']}
        />
        <ButtonFullWidth text='All Projects'/>
        <WhatWeDo/>
        <OurTeam/>
    </div>
}