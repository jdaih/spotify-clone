import React from "react"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Header from './Header'

const Dashboard = () => {
    return (
        <div className='dashboard'>
          <Header/>
          <Sidebar/>
          <Footer/>
        </div>
  )
}

export default Dashboard