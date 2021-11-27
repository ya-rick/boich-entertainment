import './whatWeDo.css';
import React, {useEffect, useState} from 'react';
import Container from "../container";
import Col from '../col';
import HeaderButton from "../buttons/header-button";
import ArrowBlack from "../../images/Arrow.svg";
import Mac from '../../images/casual-life-3d-5 1.png';
import MiniCard from "./miniCard";
import Stylus from '../../images/casual-life-3d-stilus 1.png';
import Mobile from '../../images/casual-life-3d-phone.png';
import Branding from '../../images/casual-life-3d-4 1.png';
import Cristal from '../../images/casual-life-3d-crystal 1.png';
import Molecule from '../../images/casual-life-3d-molecule 1.png';

export default function WhatWeDo() {

    const [array, setArray] = useState([]);

    useEffect(()=>{
        const data = [
            { id: 0, img:Mac, title: 'Web development', text: 'In addition to training PCs, the department has a server for training cadets in the deployment of their software products.' },
            { id: 1, img:Stylus , title: 'UI/UX design' , text: 'The department is equipped with graphics tablets for the development of cadets skills to develop a friendly interface.' },
            { id: 2, img:Mobile , title: 'Mobile apps' , text: 'Each PC has an Android studio for developing all and testing all possible software products for mobile.' },
            { id: 3, img:Branding , title: "Branding" , text: 'All development environments are licensed for unlimited software development.' },
            { id: 4, img:Molecule , title: 'CRM/ERP systems' , text: 'Each auditorium is provided with kanban and scrum boards to automate work during practical classes.' },
            { id: 5, img:Cristal , title: 'High-load projects' , text: 'Here are some of the featured projects we’ve been working on.' }
            ].map((item)=>{
                const {id, img, title, text} = item;
                return <MiniCard key={id} src={img} title={title} text={text}/>
        });
        setArray(data);
    }, []);

    console.log('.');

    return (<div className='card-resize'>
            <Container>
                <Col>
                    <div className='content'>
                        <p className='h-logo'>What we do</p>
                        <p className='sub-title-do'>
                            The laboratory provides an excellent educational material base for the opportunity to acquaint and teach cadets the main types of software development and support.
                        </p>
                        <p className='sub-title-do'>
                            Small and diverse teams ensure all skills and expertise are available at every step in the
                            cycle influencing.
                        </p>
                        <HeaderButton clazz='header-button-black'>
                            <div className='button-arrow'>
                                <p className='button-arrow-text'>Let`s talk</p>
                                <img className='img-size' src={ArrowBlack} alt=''/>
                            </div>
                        </HeaderButton>
                    </div>
                </Col>
                <Col>
                    <ul className='container wrap-box'>
                        {array}
                    </ul>
                </Col>
            </Container>
            <div className='padding-20'>

            </div>
        </div>

    )
}