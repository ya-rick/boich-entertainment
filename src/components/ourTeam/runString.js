import './ourTeam.css';
import Marquee from "react-fast-marquee";

export default function RunString(){
    return(
        <div className='run-string'>
            <Marquee gradient={false} speed={50}>
                <p className='our-team'>Our Team</p>
                <p className='our-team'>Our Team</p>
                <p className='our-team'>Our Team</p>
            </Marquee>
        </div>
    )
}