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

export default Dashboard



const Container = styled.div`
  .dashboard_body{
    display:flex;
  };
  .body {
    background-color: rgb(28,28,28);
    color: #b3b3b3;
    height: 100vh;
    padding: 30px;
    flex: 0.8;

  }
  .sidebar{
    background-color: black;
    color: #b3b3b3;
    height: 100vh;
    min-width: 210px;
    padding-left: 10px;
    padding-right: 10px;
    flex: 0.2;
  }
  .footer {
    position:fixed;
    bottom: 0;
    height: 60px;
    width: 100%;
    background-color: #282828;
    padding: 20px;
  }
  .sidebar_logo img{
    margin-right: auto;
    height: 40px;
    padding:20px;
  }
  .sidebarOption {
  color: #b3b3b3;
  height:20px;
  padding: 10px;
  cursor: pointer;
  }
  .sidebarOption:hover {
    color: white;
  }
  .sidebar h4 {
    padding: 5px;
    margin-left: 8px;
    font-size:14px;
  }
  .sidebar hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
  }
  .sidebar p {
    margin-top: 8px;
    margin-left: 20px;
    font-size:14px;
  }
`