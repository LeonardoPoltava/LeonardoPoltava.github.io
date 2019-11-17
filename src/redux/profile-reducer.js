const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';

let initialState = {
    posts: [{id: 1, message: 'Hello world', likesCount: "12"},{id: 2, message: 'Wazzup', likesCount: "15"},{id: 3, message: 'Im learning reactJs', likesCount: "6"}],
    newPostText : "Type your message here.."
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateTextCreator = (text) => ({
    type: UPDATE_TEXT,
    newText: text
});

export default profileReducer;