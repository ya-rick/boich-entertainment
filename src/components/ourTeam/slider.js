import './ourTeam.css';
import {useState, useEffect} from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import Left from '../../images/left.svg';
import Right from '../../images/right.svg';
import img1 from '../../images/personal/Yaroslav.jpg';
import img2 from '../../images/personal/Binkovsky.jpg';
import img3 from '../../images/personal/Kit.jpg';
import img4 from '../../images/personal/Oleksandr.jpg';
import img5 from '../../images/personal/Mark.jpg';
import img6 from '../../images/personal/Bandura.jpg';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

const arr = [
    {
        img: img1,
        title: 'Yaroslav Yarovy',
        position: 'Front-end developer',
        phrase: 'Sometimes its better to stay home at night on Monday than to spend an entire week debugging the code written on Monday.'
    },
    {
        img: img2,
        title: 'Dmytro Binkovskyi',
        position: 'Full-stack developer',
        phrase: "Measuring a programmers performance by counting lines of code is the same as measuring an aircraft's weight."
    },
    {
        img: img3,
        title: 'Valentyn Kit',
        position: 'Front-end developer',
        phrase: 'Debugging code is twice as difficult as writing it. So if you are writing code as cleverly as you can, you are by definition not smart enough to debug it.'
    },
    {
        img: img4,
        title: 'Oleksandr Litvin',
        position: 'Mobile developer',
        phrase: 'Many of you are familiar with the benefits of a programmer. There are only three of them, and it is clear: laziness, impatience and pride.'
    },
    {
        img: img5,
        title: 'Mark Shulmeyster',
        position: 'Full-stack developer',
        phrase: 'Always write the code as if it were accompanied by a violent psychopath who knows where you live.'
    },
    {
        img: img6,
        title: 'Taras Bandura',
        position: 'Full-stack developer',
        phrase: 'Programs should be written for the people who will read them, and the machines that will run these programs should be secondary.'
    }
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
                    width: '85%',
                    height: 'auto',
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