
let state = {
postsData: [
    {id: 1, message: 'Good job!', likeCounter: '5'},
    {id: 1, message: "wat's up, men?", likeCounter: '3'},
    {id: 1, message: "yo-yo-yo?", likeCounter: '1'}
  ],
  
dialogsData: [
    {id: 1, name: 'Serega'},
    {id: 2, name: 'Valenta'},
    {id: 3, name: 'Arsenchik'},
    {id: 4, name: 'Davy Johnes'},
    {id: 5, name: 'Sharky'}
  ],
  
messagesData: [
    {id: 1, message: 'Wassssup men?'},
    {id: 1, message: 'How much is the fish?'},
    {id: 1, message: 'Check the microphone!'}
  ],
};

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 1,
        message: postMessage,
        likeCounter: 0
    }
    state.postsData.push(newPost);
}

export default state;