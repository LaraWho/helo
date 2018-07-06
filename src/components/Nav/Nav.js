import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default function Nav(props) {
    console.log(props)
        return(
            <div>
                { props.user_name }
                { props.user_pic }
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </div>
        )
}

function mapStateToProps(state) {
    return {
        user_name: state.user_name,
        user_pic: state.user_pic
    }
}

// export default connect(mapStateToProps) (Nav)

let connectedFunction = connect(mapStateToProps);
let ConnectedNav = connectedFunction(Nav);
// export default ConnectedNav;