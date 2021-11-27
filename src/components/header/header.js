import HeaderButton from "../buttons/header-button";
//import Line from '../../images/Line.svg';
import {Link} from 'react-router-dom';
import './header.css';

export default function Header() {


    return <div className='header'>
        <Link className='text-logo' to={'/'}>
            Laboratory TMT
        </Link>
        <div className='button-group'>
            <HeaderButton clazz='header-button'>
                <Link className='blue-button' to={'/news'}>
                    <p className='contacts'>
                        News
                    </p>
                </Link>
            </HeaderButton>
            <HeaderButton clazz='header-button'>
                <Link className='blue-button' to={'/about'}>
                    <p className='contacts'>
                        About
                    </p>
                </Link>
            </HeaderButton>
            {/*<HeaderButton clazz='header-button'>*/}
            {/*    <Link className='two-lines'>*/}
            {/*        <img src={Line} alt=''/>*/}
            {/*        <img src={Line} alt=''/>*/}
            {/*    </Link>*/}
            {/*</HeaderButton>*/}
        </div>
    </div>
}
