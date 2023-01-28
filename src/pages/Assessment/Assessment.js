import React from 'react'
import Assessments from '../../components/commons/Assessments/Assessments'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Assessment = () => {
  return (
    <div>
      <Navbar />
      <h1>Resumo Cadastral</h1>
      <Assessments />
      <Footer />
    </div>
  )
}

export default Assessment
