import './App.css'
import Portfolio from './components/Portfolio/Portfolio'
import Header from './components/Header/Header'
import Images from './components/Images/Images'

const imagesInfo = [
  {imagessrc: "https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg" , text: "Fotografas"},
  {imagessrc: "https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg" , text: "Fotografas"},
  {imagessrc: "https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg" , text: "Fotografas"},
  {imagessrc: "https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg" , text: "Fotografas"},
  {imagessrc: "https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg" , text: "Fotografas"},
  {imagessrc: "https://vilniausgalerija.lt/wp-content/uploads/2020/06/marco-xu-ToUPBCO62Lw-unsplash.jpg" , text: "Fotografas"}
]

function App() {
  return (
    <>
    <Header title={'Title'} about={'Some about text'} about2={'in two lines'} button={'Button'}/>
    <main className='main'>
    <Portfolio portfolio={'Portfolio'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci ad molestiae eius quia? Est dignissimos nihil sint alias, commodi numquam veritatis ipsa, fugiat voluptas nobis aspernatur quas eaque exercitationem!'}/>
    <section className='imagesDiv'>
      {
      imagesInfo.map((info, index) => (
        <Images 
        imagesrc={info.imagessrc} 
        text={info.text} 
        key={index}
        />
      ))
      }
    </section>
    </main>
    </>
  )
}

export default App
