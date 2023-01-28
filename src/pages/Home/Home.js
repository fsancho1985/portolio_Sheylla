// Styles
import './Home.css'

// Components
import Header from '../../components/Header/Header'
import Logo from '../../components/Logo/Logo'
import Footer from '../../components/Footer/Footer'
import Cards from '../../components/Cards/Cards'
import Assessments from '../../components/commons/Assessments/Assessments'

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Logo />
      <Cards />
      <Assessments />
      <Footer />
    </div>
  )
}

export default Home
