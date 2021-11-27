import Card from "../cards/card";
import Header from "../header";
import Container from "../container";
import Col from "../col";
import HeaderButton from "../buttons/header-button";
import Arrow from "../../images/Arrow.svg";
import AnimationScrollDown from "../animationScrollDown";
import Computer from "../comtuter";
import WeAre from "../cards/weAre";
import SelectedWorks from "../selectedWorks";
import News from "../news/news";
import ButtonFullWidth from "../buttons/buttonFullWidth";
import WhatWeDo from "../whatWeDo";
import OurTeam from "../ourTeam";

export default function MainPage({news}){
    return(
        <div>
            <Card>
                <Header/>
                <Container>
                    <Col>
                        <div className='flex'>
                            <p className='h-logo'>Laboratory</p>
                            <p className='service'> technical</p>
                        </div>
                        <p className='h-logo'>teaching aids</p>
                        <p className='sub-title'>It is better to learn when you do something</p>
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
            <WeAre/>
            <div className='flex-center'>
                <SelectedWorks/>
            </div>
            <News news={news}/>
            <ButtonFullWidth text='All NEWS'/>
            <WhatWeDo/>
            <OurTeam/>
        </div>
    )
 }