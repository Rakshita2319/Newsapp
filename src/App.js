
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize= 15;
  apiKey= process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }

  setProgress =(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height= {3}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Routes>
        
        <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category='business'/>}/>
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category='entertainmen'/>}/>
        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category='general'/>}/>
        <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category='health'/>}/>
        <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category='science'/>}/>
        <Route exact path="/space" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="space" pageSize={this.pageSize} country="in" category='space'/>}/>
        <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category='technology'/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

