import './App.css'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <>
      <Hero title={'Hero'} subtitle={'Info hero'} color={'blue'} />
      <Hero title={'About'} subtitle={'Info about'} color={'red'} />
      <Hero title={'Contacts'} subtitle={'Info contacts'} color={'blue'} />
      <Hero title={'Faq'} subtitle={'Info faq'} color={'red'} />
    </>
  )
}

export default App
