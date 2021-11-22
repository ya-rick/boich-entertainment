import './buttonFullWidth.css';
import Container from "../../container";
import Arrow from "../../../images/Arrow.svg";

export default function ButtonFullWidth({text}) {
    return <div>
        <Container>
            <button className='button-full-width'>
                <div className='button-arrow-100'>
                    <p className='button-arrow-text'>{text}</p>
                    <img className='img-size' src={Arrow} alt=''/>
                </div>
            </button>
        </Container>
    </div>
}