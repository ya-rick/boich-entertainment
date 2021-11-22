import './ourTeam.css';
import Slider from "./slider";
import Card from "../cards/card";
import RunString from "./runString";

export default function OurTeam(){
    return(
        <Card>
            <div className='background'>
                <RunString/>
                <Slider/>
            </div>
        </Card>
    )
};