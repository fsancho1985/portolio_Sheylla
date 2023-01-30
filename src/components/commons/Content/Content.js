import './Content.css'

const Content = props => {
  return (
    <section className="content-services">
      <h3>{props.title}</h3>
      <p>{props.content_1}</p>
      <h3>{props.title_2}</h3>
      <p>{props.content_2}</p>
      <p>{props.content_3}</p>
    </section>
  )
}

export default Content
