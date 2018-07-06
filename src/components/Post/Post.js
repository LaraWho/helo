import React, { Component } from 'react';

class Post extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            img: '',
            content: '',
            user_name: '',
            user_pic: ''
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