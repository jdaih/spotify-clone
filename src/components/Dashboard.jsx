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
            <Body spotify={spotify}/>
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
    height: 100;
    padding: 30px;
    flex: 0.8;
  }
  .body_content {
    display: flex;
    align-items: flex-end;
    padding: 10px;
  }
  .body_content img {
    height: 20vw;
    margin: 0 20 px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5)
  }
  .body_text {
    padding: 10px;
    flex: 1;
  }
  .body_text h2 {
    font-size: 48px;
    margin-bottom: 10px;

  }
  .body_text p {
    font-size: 14px;
  }

  .sidebar{
    background-color: black;
    color: #b3b3b3;
    height: 100;
    min-width: 210px;
    padding-left: 10px;
    padding-right: 10px;
    flex: 0.2;
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

  .footer {
    position:fixed;
    display:flex;
    justify-content: space-between;
    bottom: 0;
    height: 50px;
    width: 97%;
    background-color: #282828;
    padding: 20px;
  }
  .header {
    display:flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .header_left {
    background-color: white;
    color: #b3b3b3;
    border-radius: 30px;
    min-width: 70px;
    padding: 8px;
    display: flex;
    flex: 0.3;
    align-items: center;  
  }
  .header_left input {
    border: none;
    width: 100%;
  }
  .header_right {
    display: flex;
    align-items: center;  
  }
  .songRow {
    display:flex;
    margin-left: 20px;
    padding: 20px;
    align-items: center;
    color: white;
  }
  .songRow:hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
  }
  .songRow_info {
    margin-left: 20px;
  }
  .songRow_info h1 {
    font-size: 16px;
  }
  .songRow_info p {
    font-size: 14px;
    margin-top: 3px;
    color: #b3b3b3;
  }
  .songRow_album{
    height: 40px;
    width: 40px;
  }
`