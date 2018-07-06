import React, { Component } from 'react';

class Post extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            author_picture: ''
        }
    }

    //get post info

    render() {
        return(
            <div>
                Post!
            </div>
        )
    }
}

export default Post;