import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            posts: [],
            search: '',
            user_posts: true
        }
    }

    //get all posts from DB

    //reset search

    render() {
        let postsToDisplay =  this.state.posts.map((post, index) => (
                <div key={index + post}>
                <p>{post.title}</p>
                <p>Author: {post.user_name}</p>
                <p>{post.user_pic}</p>
            </div>
            ))

        return(
            <div>
                <input type="text"
                placeholder=" Type here..."/>
                <button>Search</button>
                <button>Reset</button>
                { postsToDisplay }
            </div>
        )
    }
}

export default Dashboard;