import './news.css';
import SpecialCard from "../cards/specialCard";

export default function News({news}){
return(
    <div className='clear-div'>
        {news?.map((item)=><SpecialCard {...item} />)}
    </div>
)
}