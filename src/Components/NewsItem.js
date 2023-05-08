import React, { Component } from "react";

const NewsItem = (props) => {
 
    let {title, description, imageUrl, newsUrl, author, date, source} = props
    return (
      <div>
        <div className="my-3">
        <div className="card" >
          <div style={{
                 display: 'flex',
                 justifyContent: 'flex-end',
                 position: 'absolute',
                 right:'0'
              }}>
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" >{source}
          </span>
          </div>
        
        
          <img src={!imageUrl?"https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/03/03/1161926-ggmiwplblog.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By {!author?"Unknown author":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
          </div>
        </div>
      </div>
    
    )
}

export default NewsItem;
