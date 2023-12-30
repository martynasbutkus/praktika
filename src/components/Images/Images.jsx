import './Images.css'

const Images = ({imagesrc, text}) =>{
    return (
      <div className='image'>
      <img src={imagesrc} alt="" />
      <h1>{text}</h1>
      </div>
    )
  }

  export default Images