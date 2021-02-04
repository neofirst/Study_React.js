//ACTION CREATOR
//sync
const addPost = (data) =>{
  return{
    type: 'ADD_POST',
    data
  }
}

module.exports = addPost;