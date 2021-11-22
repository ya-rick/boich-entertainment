import './header-button.css';

export default function HeaderButton ({ clazz, children}){
    return <button className={clazz}>
        {children}
    </button>
}