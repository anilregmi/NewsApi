import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
    constructor(){
        super();
        console.log("heloo")
        this.state={
             articles:[]
        }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=5e97efbf5e05477493d852f6900ea108&page=1"
        let data=await fetch(url);
        let parseData= await data.json();
        this.setState({articles:parseData.articles})
    }
    handelPrevClick=()=>{
        console.log("prev")

    }
    handelNextClick=()=>{
        console.log("next")

    }
  render() {
    return (
      <div className='container my-3'>
        <h2>Top News Here</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return  <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
      }) }  
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-secondary"onClick={this.handelPrevClick}>&larr;Prev</button>
      <button type="button" className="btn btn-secondary" onClick={this.handelNextClick}>Next&rarr;</button>
      </div>
      </div>      
    )
  }
}

export default News
