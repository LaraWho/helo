let initialState = {
    user_name: '',
    auth_id: '',
    user_pic: ''

}
const UPDATE_USER = UPDATE_USER;

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, { user: action.payload} );
            
        default:
        return state;
    }
}

export function updateUser(auth_id, user_name, user_pic) {
    return {
      type: UPDATE_USER,
      payload: {
            user_name: user_name,
            user_pic: user_pic,
            auth_id: auth_id
      }
    }
  }