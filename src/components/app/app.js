import './app.css';
import Bottle from '../../images/NATO_OTAN_Insignia.svg';
import Science from '../../images/science.svg';
import MainPage from "../mainPage";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import News from "../news/news";
import Header from "../header";
import Footer from "../footer";
import OurTeam from "../ourTeam";
import WhatWeDo from "../whatWeDo";
import WeAre from "../cards/weAre";

const news = [
    {
        title: 'NATO DAY',
        subtitle: 'A NATO delegation arrived at the department and noted the educational and material base of the department for the better.',
        img: Bottle,
        year: '2021',
        frameList: ['NATO', 'English day', 'Scrum Board', 'Face ID']
    }, {
        title: 'Scientific Conference',
        subtitle: '4th year cadets submitted abstracts to an international scientific conference to be held at our institute',
        img: Science,
        year: '2021',
        frameList: ['Science', 'Thesis', 'Scientific work']
    }
]

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage news={news}/>
                </Route>
                <Route exact path="/news">
                    <Header/>
                    <News news={news}/>
                </Route>
                <Route exact path='/about'>
                    <Header/>
                    <WhatWeDo/>
                    <WeAre/>
                    <OurTeam/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}