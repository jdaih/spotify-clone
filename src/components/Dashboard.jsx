import React from "react"
import Body from './Body'
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Header from './Header'
import styled from "styled-components"


const Dashboard = ({spotify}) => {
    return (
      <Container>
        <div className='dashboard'>
          <div className='dashboard_body'>
            <Sidebar/>
            <Body/>
          </div>
          <Header/>
          <Footer/>
        </div>
      </Container>
  )
}

const Container = styled.div`
  .dashboard_body{
    display:flex;
  };
  .body {
    background-color: gray;
    flex: 0.8;
  }
  .sidebar{
    background-color: black;
    color: #b3b3b3;
    height: 100vh;
    flex: 0.2;
  }
  .footer {
    position:fixed;
    bottom: 0;
    height: 65px;
    width: 100%;
    background-color: #282828;
    padding: 20px;
  }
`

export default Dashboard