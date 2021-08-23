import axios from 'axios'





const getAll =  async(url)=>{
    let allDataResp = await axios.get(url);
    return allDataResp.data;
}

const getById = async(url)=>{
    let dataResp = await axios.get(url);
    return dataResp.data;
}
const getTodos = async(id)=>{
    let allTodos = await getAll("https://jsonplaceholder.typicode.com/todos");
    let allUserTodos = allTodos.filter(todo=>todo.userId === id); 
    allUserTodos.forEach(todo=>{
        delete todo.userId
    })
    return allUserTodos;
}

const getPosts = async(id)=>{
    let allPosts = await getAll("https://jsonplaceholder.typicode.com/posts");
    let allUserPosts = allPosts.filter(post=>post.userId===id);
    allUserPosts.forEach(post => { 
        delete post.userId       
    });
    return allUserPosts;
}



const getProjectData = async()=>{
   let allUsers = await getAll("https://jsonplaceholder.typicode.com/users");
   let users = allUsers.map(user=>{ 
    let obj = {
        id: user.id,
        name:user.name,
        email:user.email,
        address:{
            street:user.address.street,
            city:user.address.city,
            zipcode:user.address.zipcode
        },
        todos: [],
        posts: []    
    }
    return obj; } )
    users.forEach(async user=>{
         user.todos = await getTodos(user.id);
         user.posts = await getPosts(user.id)
    })
   return users;
}


export default{getProjectData};