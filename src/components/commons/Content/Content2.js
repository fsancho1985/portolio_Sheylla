import './Content2.css'

const Content2 = props => {
  return (
    <section className='content-services'>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <h3>{props.title_2}</h3>
      <ul>
        <h4>{props.subtitle}</h4>
        <li>{props.li_1}</li>
        <li>{props.li_2}</li>
        <li>{props.li_3}</li>
        <li>{props.li_4}</li>
        <li>{props.li_5}</li>
        <li>{props.li_6}</li>
        <li>{props.li_7}</li>
        <li>{props.li_7}</li>
        <li>{props.li_10}</li>
        <li>{props.li_11}</li>
        <li>{props.li_12}</li>
        <li>{props.li_13}</li>
      </ul>
    </section>
  )
}
export default Content2
