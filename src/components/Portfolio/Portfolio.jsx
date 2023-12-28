import './Portfolio.css'

const Portfolio = ({portfolio, text}) => {
  return (
    <>
      <div className='belekas'>
        <h1>{portfolio}</h1>
        <p>{text}</p>
      </div>
    </>
  )
}

export default Portfolio