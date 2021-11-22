import './miniCard.css';

export default function MiniCard({id, src, title, text}){
    return <li className='mini-card col-6' key={id}>
        <div className='mini-card-img'>
            <img className='zone-img' src={src} alt=''/>
        </div>
        <p className='mini-card-title'>{title}</p>
        <p className='mini-card-text'>{text}</p>
    </li>
}