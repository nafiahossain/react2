import React from 'react'
import ReactDOM from 'react-dom/client'
import BookingApp from './app3.jsx'
import Header from './header.jsx'
import ImageSlider from './gallery.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingApp />
    <Header />
    <ImageSlider />
  </React.StrictMode>,
)
