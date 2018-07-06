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
        return(
            <div>
                Dashboard!
            </div>
        )
    }
}

export default Dashboard;