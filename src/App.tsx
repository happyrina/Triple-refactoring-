import { useEffect, useState } from 'react'
import Header from '@shared/Header'
import Banner from '@components/home/banner/Banners'

function App() {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    fetch('http://localhost:8888/banners')
      .then((response) => response.json())
      .then((banners) => {
        setBanners(banners)
      })
  }, [])

  return (
    <div className="App">
      <Header />

      {banners.map((banner: any) => (
        <Banner {...banner} />
      ))}
    </div>
  )
}

export default App
