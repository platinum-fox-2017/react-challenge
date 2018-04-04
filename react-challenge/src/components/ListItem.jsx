import React, { Component } from 'react'

export default class ListItem extends Component {
  constructor () {
    super()
    this.state = {
      posts: []
    }
  }

  // componentDidMount = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       console.log(data);
        
  //       let postsData = data.map((item) => {
  //         return (
  //           <div key={item.id}>
  //             <p>{item.id} : {item.title}</p>
  //             <p>{item.body}</p>
  //           </div>
  //         )
  //       })
  //       this.setState({posts: postsData})
  //       // console.log("state", this.state.posts);
        
  //     })
  // }
  

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <div className="container">
          {this.state.posts}
        </div>
      </div>
    )
  }
}
