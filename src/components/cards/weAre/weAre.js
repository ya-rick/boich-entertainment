import './weAre.css';
import '../../app/app.css';
import Container from "../../container";
import Cool from "../../../images/3d-hands-fun-and-wild-261.svg";
import Professionals from "../../../images/business-3d-facepalm-man-close-up-5 1.svg";
import Gays from "../../../images/3d-hands-fun-and-wild-378.svg";
import Card from "../card";

export default function WeAre(){
    return(
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
                            <p className='text-image'>Excellent conditions for audiences to study more comfortably.</p>
                        </div>
                        <div className='col-3'>
                            <div className='around-3d-image'>
                                <img src={Professionals} alt=''/>
                            </div>
                            <p className='title-image'>Professional</p>
                            <p className='text-image'>Professional equipment to provide appropriate conditions for the educational process.</p>
                        </div>
                        <div className='col-3'>
                            <div className='around-3d-image'>
                                <img src={Gays} alt=''/>
                            </div>
                            <p className='title-image'>Support</p>
                            <p className='text-image'>Support for technical support for the study of the latest technologies.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </Card>
    )
};