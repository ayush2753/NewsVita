import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsVita - Top headlines</h2> 
        
        <div className="row">
          {this.state.articles.map((element)=>{console.log(element)
            return <div className="col-md-4">
              <Newsitem title="mytitle" description="mydesc" imageurl="https://content.api.news/v3/images/bin/6a71cee5d1433c20ed53717bd6bb1aba"/>
              </div>
          })}
           
 
           
      
               
        </div>
      </div>
    )
  }
}

export default News
