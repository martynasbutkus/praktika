import './Images.css'

const Images = ({imagesrc, text}) =>{
    return (
      <div className='image'>
      <img src={imagesrc ? imagesrc : "https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg"} alt="" />
      <h1>{text ? text : "Nuotrauka"}</h1>
      </div>
    )
  }

  export default Images