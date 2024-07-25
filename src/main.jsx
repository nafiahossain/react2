import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar.jsx'
import Header from './header.jsx'
import ImageSlider from './gallery.jsx'
import RentalDetails from './rentaldetails.jsx'
import RentalInfo from './rentalinfo.jsx'
import Footer from './footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <ImageSlider />
    <RentalDetails />
    <RentalInfo />
    <Footer />
  </React.StrictMode>,
)
