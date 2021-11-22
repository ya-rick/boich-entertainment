import './frameList.css';
import Frame from "../frame";

export default function FrameList({frameList}){

    const list = frameList?.map((item)=> {
        return(
            <Frame text={item}/>
        )
    });

    return <div className='frame-list'>
        {list}
    </div>
}