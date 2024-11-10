import {
    addPostAC,
    addPostActionType,
    deletePostAC,
    deletePostActionType,
    ProfilePageType,
    profileReducer
} from "./profile-reducer";

let startState: ProfilePageType = {
    posts: [],
    profile: null,
    status: ""
}

beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "BlaBla", likesCount: 7},
            {id: 4, message: "DaDa", likesCount: 5},
        ],
        profile: null,
        status: ""
    }
})

it('length of posts should be incremented', () => {
    // 1. test data:
    let newMessage = "postText"
    let action: addPostActionType = addPostAC(newMessage)

    // 2.action:
    let newState = profileReducer(startState, action)

    // 3.expectation:
    expect(newState.posts.length).toBe(5)
});

it('message of new post should be correct', () => {
    // 1. test data:
    let newMessage = "postText"
    let action: addPostActionType = addPostAC(newMessage)

    // 2.action:
    let newState = profileReducer(startState, action)

    // 3.expectation:
    expect(newState.posts[4].message).toBe(newMessage)
});

it('after deleting length of posts should be decremented', () => {
    // 1. test data:
    let action: deletePostActionType = deletePostAC(1)

    // 2.action:
    let newState = profileReducer(startState, action)

    // 3.expectation:
    expect(newState.posts.length).toBe(3)
});

it('after deleting length should not be decremented if id is incorrect', () => {
    // 1. test data:
    let action: deletePostActionType = deletePostAC(1000)

    // 2.action:
    let newState = profileReducer(startState, action)

    // 3.expectation:
    expect(newState.posts.length).toBe(4)
});


