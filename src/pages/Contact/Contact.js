import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Assessments from '../../components/commons/Assessments/Assessments'

import ContactUs from '../../assets/contact-us.jpg'

import { AiOutlineWhatsApp } from "react-icons/ai"

import './Contact.css'

const Contact = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="wrapper-contact">
        <h2>Entre em contato conosco:</h2>
        <div className="container-main-img-contact">
          <img src={ContactUs} alt="Imagem de duas mãos apertadas." />
        </div>
        <div className="form-contact">
          <h3>Pelo formulário</h3>
          <form
            action="https://formsubmit.co/frsancho1985@gmail.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Nome" />
            <input type="text" name="subject" placeholder="Assunto" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Seu e-mail"
            />
            <textarea
              name="message"
              id="message"
              rows='10'
              placeholder="Deixa uma mensagem"
            ></textarea>
            <button type="submit">Enviar</button>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/"
            ></input>
          </form>
        </div>
        <div className="whats">
          <h3>Ou entre em contato pelo WhatsApp</h3>
          <div className="whats-contact">
            <a href="https://api.whatsapp.com/send?phone=5514998033511&text=Rodacki%20Per%C3%ADcias"><AiOutlineWhatsApp size='2.5rem'/></a>
          </div>
        </div>
      </div>
      <Assessments />
      <Footer />
    </div>
  )
}

export default Contact
