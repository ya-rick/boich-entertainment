import './selectedWorks.css';
import Arrow from '../../images/VectorArrowButton.svg';

export default function SelectedWorks(){
    return <div className='selected-works'>
        <img src={Arrow} alt=''/>
        <p className='selected-works-text'>Selected news</p>
    </div>
}