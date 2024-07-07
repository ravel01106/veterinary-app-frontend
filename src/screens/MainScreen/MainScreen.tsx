import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import style from './MainScreen.module.css'

const MainScreen = () => {
    return (
        <div className={`${style.mainContainer}`}>
            <Header />
            <Navbar />
        </div>
    )
}

export default MainScreen