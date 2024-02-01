import React, { Component } from 'react'

export class Newsitem extends Component {
  articles = [
      {
        "source": {
          "id": "news-com-au",
          "name": "News.com.au"
        },
        "author": "James Dampney",
        "title": "Australian cricket stunned by massive snub",
        "description": "Australian cricket enjoyed an extraordinary year in 2023, taking out the ODI World Cup and the World Test Championship along with retaining the Ashes.",
        "url": "https://www.news.com.au/sport/cricket/travis-heads-name-was-a-surprise-omission-for-crickets-biggest-award/news-story/62b5fad646630550562875b38e25c76c",
        "urlToImage": "https://content.api.news/v3/images/bin/5e76d99498b44ec1f1ca36b96074a1a4",
        "publishedAt": "2024-01-31T09:43:00Z",
        "content": "Australian cricket enjoyed an extraordinary year in 2023, taking out the ODI World Cup and the World Test Championship along with retaining the Ashes.Among the stars of Australian cricket, the name… [+3059 chars]"
      },
      {
        "source": {
          "id": "news-com-au",
          "name": "News.com.au"
        },
        "author": "Alex Blair",
        "title": "Stars erupt at awkward Michael Clarke joke",
        "description": "Aussie cricketers have been made to sweat in their expensive duds at the annual Cricket Awards in Melbourne.",
        "url": "https://www.news.com.au/sport/cricket/the-grade-cricketers-ian-higgins-makes-joke-about-michael-clarke-karl-stefanovic-to-steve-smith/news-story/7e0a3eca5384dca173377cbdcef9da1f",
        "urlToImage": "https://content.api.news/v3/images/bin/6a71cee5d1433c20ed53717bd6bb1aba",
        "publishedAt": "2024-01-31T09:16:00Z",
        "content": "Aussie cricketers have been made to sweat in their expensive duds at the annual Cricket Awards in Melbourne.Anyone familiar with hosts Sam Perry and Ian Higgins from the popular podcast, The Grade … [+2448 chars]"
      }
    ]
  constructor(){
      super()
      this.state = {
        articles: this.articles,
        loading: false
      }
  }
  
  
  render() {
    let {title, description,imageurl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href="/newsdetail/" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
