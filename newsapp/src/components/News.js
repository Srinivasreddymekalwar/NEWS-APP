     import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
    articles=[{
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Hathras: What we know about crush that killed 121 in Uttar Pradesh",
            "description": "The incident that took place during a religious gathering is among the deadliest crushes in India in a decade.",
            "url": "https://www.bbc.co.uk/news/articles/cyr7kjvme44o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1d22/live/84885b80-3915-11ef-a044-9d4367d5b599.jpg",
            "publishedAt": "2024-07-03T11:07:16.151664Z",
            "content": "Who is Bhole Baba?\r\nThe self-styled godman's original name is Suraj Pal but he reportedly re-christened himself Narayan Sakar Vishwa Hari. His devotees call him Bhole Baba.\r\nHe hails from Bahadurpur … [+919 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Hathras: Grief and anger after India crush kills 121",
            "description": "Most of the dead were women - killed as crowds left a packed religious gathering in Uttar Pradesh state.",
            "url": "https://www.bbc.co.uk/news/articles/c6p231q5gpro",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4ea4/live/23eb3040-391f-11ef-bbe0-29f79e992ddd.jpg",
            "publishedAt": "2024-07-03T10:07:15.9645063Z",
            "content": "A day after 121 people were crushed to death at a religious event in the north Indian state of Uttar Pradesh, families of some of the victims are still searching for their loved ones.\r\nThe incident t… [+788 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Singapore to cane Japanese hairdresser for rape",
            "description": "The 38-year-old man is the first Japanese national to receive this punishment in Singapore.",
            "url": "https://www.bbc.co.uk/news/articles/c0w47x7p39xo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3b5a/live/3621a9d0-38fa-11ef-a5d6-9ff6c394ada7.jpg",
            "publishedAt": "2024-07-03T10:07:14.8554064Z",
            "content": "According to court documents, Kita met the woman at Clarke Quay, a popular nightlife district, in December 2019.\r\nThe woman, who was then 20, had not known Kita before. She was intoxicated when he to… [+1296 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Fears for Australian child missing after croc attack",
            "description": "The 12-year-old was last seen swimming in a remote creek in the Northern Territory.",
            "url": "https://www.bbc.co.uk/news/articles/c3gvregg7wxo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8a91/live/d08878a0-38dc-11ef-a044-9d4367d5b599.jpg",
            "publishedAt": "2024-07-03T08:52:17.8393043Z",
            "content": "A desperate search is under way in northern Australia for a child feared to have been taken by a crocodile.\r\nThe 12-year-old was last seen around dusk on Tuesday, swimming near the remote town of Nga… [+1056 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Israel Gaza policy 'put a target on America’s back', former US officials say",
            "description": "A joint statement by 12 former officials says US policy on Gaza has \"put a target on America’s back\".",
            "url": "https://www.bbc.co.uk/news/articles/c725wxky293o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/30a4/live/7e6a8b80-38e6-11ef-bf1a-89a50700c39b.jpg",
            "publishedAt": "2024-07-03T03:52:14.2492568Z",
            "content": "The joint statement by the former officials says: \"Americas diplomatic cover for, and continuous flow of arms to Israel has ensured our undeniable complicity in the killings and forced starvation of … [+2264 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "RFK Jr pushes back on Vanity Fair, sexual assault allegation",
            "description": "A magazine article claimed the candidate sexually assaulted a babysitter and joked about eating dog meat in Korea.",
            "url": "https://www.bbc.co.uk/news/articles/c6p27evjz49o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/25d6/live/b97bcc40-38bc-11ef-bf12-4f56c54f44bc.jpg",
            "publishedAt": "2024-07-03T02:22:11.1714957Z",
            "content": "Independent US presidential candidate Robert F Kennedy Jr on Tuesday has described a Vanity Fair story as \"a lot of garbage,\" responding to several allegations including that he sexually assaulted a … [+1083 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "'Almost whole island homeless' in Hurricane Beryl's wake",
            "description": "Union Island, which lies off St Vincent and the Grenadines, has been devastated  by the powerful hurricane.",
            "url": "https://www.bbc.co.uk/news/articles/c724x1rjlpno",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4936/live/2a5077b0-38d9-11ef-832c-dfac4aa1aef3.jpg",
            "publishedAt": "2024-07-03T02:07:15.046016Z",
            "content": "Plus, of course, generators.\r\nWith power and communications still down, she has only managed to send out messages by connecting to the Starlink network launched by Elon Musk's SpaceX.\r\nFor its part, … [+1981 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "A Bugatti, a first lady and the fake stories aimed at Americans",
            "description": "A former US police officer runs an AI-powered network of misleading news sites turning its sights towards November.",
            "url": "https://www.bbc.co.uk/news/articles/c72ver6172do",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/57ff/live/cbe330f0-3883-11ef-b390-fb401932e653.png",
            "publishedAt": "2024-07-03T01:07:17.9374955Z",
            "content": "Our latest investigation, carried out over more than six months and involving the examination of hundreds of articles across dozens of websites, found that the operation has a new target - American v… [+2011 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Chris Mason: We stand on the threshold of a landmark election",
            "description": "The Tories are braced for defeat, as Labour prepares for victory but polling day could still bring surprises.",
            "url": "https://www.bbc.co.uk/news/articles/ckdgxj8v75no",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/db79/live/1c20ddd0-38a5-11ef-bbe0-29f79e992ddd.jpg",
            "publishedAt": "2024-07-03T01:07:16.9015763Z",
            "content": "Next the Liberal Democrats, where if services to absurdity were the route to electoral success, they would be heading for a landslide.\r\nLeader Sir Ed Daveys midlife crisis just so happened to coincid… [+1314 chars]"
            },
            {
            "source": {
            "id": "bbc-news",
            "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Texas Democrat Lloyd Doggett calls on Biden to step aside",
            "description": "Rep Lloyd Doggett called for Biden to make the \"difficult to decision to withdraw\" from the race.",
            "url": "https://www.bbc.co.uk/news/articles/c4ngx67qle6o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5849/live/0ad2e8f0-389d-11ef-be63-dd84b28a5b0d.jpg",
            "publishedAt": "2024-07-02T19:37:17.4378241Z",
            "content": "A Texas congressman is the first sitting Democratic lawmaker to call for Joe Biden to step aside as the party's presidential nominee, after his disastrous debate performance last week.\r\n\"I am hopeful… [+1491 chars]"
            
            }
            
    ]
    constructor () {
        super()
        this.state= {
            articles:this.articles,
            loading:false,
            page:1,

        }
    }
   async componentDidMount() {
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=700892caa4734f078d5e877f094d173f&page=${this.state.page + 1}`;
      let data= await fetch(url);
      let parsedData=await data.json();
      this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults})

    }
   

handlePreviousclick= async ()=> {
console.log("previous")
let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=700892caa4734f078d5e877f094d173f&page=${this.state.page - 1}`;
      let data= await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData)
      this.setState({articles:parsedData.articles,
        page:this.state.page-1  
      })
    }
    handleNextClick= async ()=> {
      console.log("next");
      if(this.state.page+1 > 4) {

      }
      else {

      
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=700892caa4734f078d5e877f094d173f&page=${this.state.page + 1}`;
            let data= await fetch(url);
            let parsedData=await data.json();
            console.log(parsedData)
            this.setState({articles:parsedData.articles,
                          page:this.state.page+1 
                        })
         
            }
          }

  render() {
    return (
      <div className='container my-5 mx-5' >
        <h1>News Monkey Headlines</h1>
        <Spinner/>
        <div className='row'>
            {this.state.articles.map((element)=>{
              return   <div className='col-md-4 my-4' key={element.url}>
                     <NewsItem  title={element.title} description={element.description} newsUrl={element.url} imageUrl={element.urlToImage}/>
                     </div>

            })}
        
        
        </div>
        
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousclick}>&larr; Previous</button>
           <button type="button" disabled={this.state.page+1 > 4}className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>


        </div>
      
    )
  }
}

export default News





