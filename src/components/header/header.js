import HeaderButton from "../buttons/header-button";
import Line from '../../images/Line.svg';
import './header.css';

export default function Header() {
    return <div className='header'>
        <p className='text-logo'>
            BOICH
        </p>
        <div className='button-group'>
            <HeaderButton clazz='header-button-blue'>
                <div className='blue-button'>
                    <p className='contacts'>
                        Contact
                    </p>
                </div>
            </HeaderButton>
            <HeaderButton clazz='header-button'>
                <div className='two-lines'>
                    <img src={Line} alt=''/>
                    <img src={Line} alt=''/>
                </div>
            </HeaderButton>
        </div>
    </div>
}
