import './footer.css';
import Container from "../container";

export default function Footer() {
    return (
        <div className='footer'>
            <Container>
                <ul className='footer-list'>
                    <li>
                        <a href={'/'}>About</a>
                    </li>
                    <li>
                        <a href={'/'}>News</a>
                    </li>
                </ul>
            </Container>
            <Container>
                <p className='center footer-rules'>All rights reserved © 2020</p>
            </Container>
        </div>
    )
}