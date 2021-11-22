import './ourTeam.css';
import {useState, useEffect} from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import Left from '../../images/left.svg';
import Right from '../../images/right.svg';
import img1 from '../../images/girl1.jpg';
import img2 from '../../images/girl2.jpg';
import img3 from '../../images/girl3.jpg';
import img4 from '../../images/girl4.jpg';
import img5 from '../../images/girl5.jpg';
import img6 from '../../images/girl6.jpg';
import img7 from '../../images/girl7.jpg';
import img8 from '../../images/girl8.jpg';
import img9 from '../../images/girl9.jpg';
import img10 from '../../images/girl10.jpg';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

const arr = [
    {
        img: img1,
        title: 'Yaroslav',
        position: 'Front-end developer',
        phrase: 'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'
    },
    {
        img: img2,
        title: 'Oleksandr',
        position: 'Mobile developer',
        phrase: 'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'
    },
    {
        img: img3,
        title: 'Nikita',
        position: 'Project manager',
        phrase: 'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'
    },
    {
        img: img4,
        title: 'Girl4',
        position: 'Designer',
        phrase: 'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'
    },
    {
        img: img5,
        title: 'Girl5',
        position: 'Designer',
        phrase: 'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'
    },
    {
        img: img6,
        title: 'Girl6',
        position: 'Designer',
        phrase: 'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'
    },
    {
        img: img7,
        title: 'Girl7',
        position: 'Designer',
        phrase: 'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'
    },
    {
        img: img8,
        title: 'Girl8',
        position: 'Designer',
        phrase: 'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'
    },
    {
        img: img9,
        title: 'Girl9',
        position: 'Designer',
        phrase: 'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'
    },
    {
        img: img10,
        title: 'Girl10',
        position: 'Designer',
        phrase: 'Small and diverse teams ensure all skills and expertise are available at every step in the cycle influencing.'
    },
];

function Item({img, title, position, phrase, center}) {
    if (center) {
        return (
            <div className='center-item'>
                <img className='center-img' src={img} alt=''/>
                <p className='phrase'>“{phrase}”</p>
                <p className='center-title'>{title}</p>
                <p className='center-position'>{position}</p>
            </div>
        );
    } else {
        return (
            <div className='item-slider'>
                <img className='img' src={img} alt=''/>
                <p className='title'>{title}</p>
                <p className='position'>{position}</p>
            </div>
        );
    }
}

export default function Slider() {
    const [center, setCenter] = useState(null);
    useEffect(()=>{
        setCenter(0);
    },[]);
    return (
        <div className='slider'>
            <Splide
                onMove={(newIndex, prevIndex, destIndex)=> setCenter(prevIndex)}
                renderControls={() => (
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev arrow-button">
                            <div className='arrow'>
                                <img className='arrow-img' src={Left}  alt=''/>
                            </div>
                        </button>
                        <button className="splide__arrow splide__arrow--next">
                            <div className='arrow'>
                                <img className='arrow-img' src={Right}  alt=''/>
                            </div>
                        </button>
                    </div>
                )}
                options={{
                    type: 'loop',
                    padding: '5rem',
                    rewind: true,
                    width: '75%',
                    gap: '135px',
                    autoWidth: true,
                    autoHeight: true,
                    perPage: 3,
                    perMove: 1,
                    focus: 'center',
                    pagination: false
                }}>
                {arr.map((i, v) => <SplideSlide key={v}><Item key={v} {...i} center={center === v}/></SplideSlide>)}
            </Splide>
        </div>
    )
}