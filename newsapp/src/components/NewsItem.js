import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
<div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/8a91/live/d08878a0-38dc-11ef-a044-9d4367d5b599.jpg":imageUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
