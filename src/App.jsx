import './App.css'
import Portfolio from './components/Portfolio/Portfolio'
import Header from './components/Header/Header'
import Images from './components/Images/Images'

function App() {
  return (
    <>
    <Header title={'Title'} about={'Some about text'} about2={'in two lines'} button={'Button'}/>
    <main className='main'>
    <Portfolio portfolio={'Portfolio'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci ad molestiae eius quia? Est dignissimos nihil sint alias, commodi numquam veritatis ipsa, fugiat voluptas nobis aspernatur quas eaque exercitationem!'}/>
    <section className='imagesDiv'>
      <Images imagesrc={"https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg"} text={'Fotografas'}/>
      <Images imagesrc={"https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg"} text={'Fotografas'}/>
      <Images imagesrc={"https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg"} text={'Fotografas'}/>
      <Images imagesrc={"https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg"} text={'Fotografas'}/>
      <Images imagesrc={"https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg"} text={'Fotografas'}/>
      <Images imagesrc={"https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg"} text={'Fotografas'}/>
    </section>
    </main>
    </>
  )
}

export default App
