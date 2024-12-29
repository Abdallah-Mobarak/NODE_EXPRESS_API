let users =[];

export const getUsers = (req,res)=>{
    res.send(users)
}
export const CreateUser = (req,res)=>{
    const user = req.body;
    users.push({...user})
    console.log("post is sucsseful")
    res.send(`the first name of post is ${user.firstName}`)
}
export const getUserBYid = (req,res)=>{
    const {id} = req.params;
    const FoundUser = users.find(user => user.id === +id);
    
    res.send(FoundUser);
}
export const deleteUser = (req,res)=>{
    const {id} = req.params;
    users = users.filter(user => user.id !== +id);
    res.send(`delet is sucsses by id ${id}`);
    
}
 export const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName,lastName} = req.body;
    const updateUser = users.find(user => user.id === +id);

    if(firstName) updateUser.firstName = firstName;
    if(lastName) updateUser.lastName =lastName;
    res.send(`the updat is hase been update by id ${id}`)

} 