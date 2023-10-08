import Footer from './(component)/footer/footer'
import Header from './(component)/header/header'
import Navbar from './(component)/navbar/navbar'
import Slider from './(component)/slider/slider'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        </head>
        <Navbar/>
        <Header/>
        <div className= 'home flex'>

        <Slider/>
        <main>
          {children}
          </main>
        </div>
      <Footer/>
      <canvas id="myChart"></canvas>
      </body>
    </html>
  )
}
