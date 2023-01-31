import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Assessments from '../../components/commons/Assessments/Assessments'

import './Thanks.css'

import HandShake from '../../assets/handshake.jpg'

const Thanks = () => {
  return (
    <div>
      <Navbar />
      <div className="container-thanks">
        <h1>Agradecemos seu contato</h1>
        <div className="container-main-img-thanks">
        <img
          src={HandShake}
          alt="Imagem de duas mãos apertadas."
          />
      </div>
          <span>
            <p>Em breve retornaremos seu contato.</p>
          </span>
      </div>
      <Assessments />
      <Footer />
    </div>
  )
}

export default Thanks
