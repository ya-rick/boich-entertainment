import './specialCard.css';
import Container from "../../container";
import Col from "../../col";
import FrameList from "../../frameList/frameList";
import HeaderButton from "../../buttons/header-button";
import ArrowBlack from "../../../images/ArrowBlack.svg";
import Underline from "../../underline";
import Card from "../card";

export default function SpecialCard({title, subtitle, frameList, img, year}) {


    const myStyle = {
        backgroundSize: 'recover',
        backgroundPositionX: 'right',
        minHeight: '100%',
        background: `url(${img}) no-repeat right`
    }

    return <Card>
        <div style={myStyle} >
            <Container>
                <Col>
                    <p className='special-card-title'>{title}</p>
                    <p className='special-card-subtitle'>{subtitle}
                        </p>
                    <FrameList frameList={frameList}/>
                    <HeaderButton clazz='header-button'>
                        <div className='button-arrow'>
                            <p className='button-arrow-text'>Open case</p>
                            <img className='img-size' src={ArrowBlack} alt=''/>
                        </div>
                    </HeaderButton>
                </Col>
            </Container>
            <Container>
                <Underline year={year}/>
            </Container>
        </div>
    </Card>
}