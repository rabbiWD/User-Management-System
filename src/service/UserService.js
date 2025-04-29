// create 
export const userService = (req,res) => {
    return res.status(200).send("User created  successfully")
   
  
  }
   
  
  // read
  export const readUserService = (req,res)=>{
    return res.status(200).send("User read successfully")
   
  
  }
   
  
  // update
   
  
  export const updateUser = (req,res)=>{
   
  
     return res.send("User updated successfully")
   
  
  } 
   
  
  // delete
   
  
  export const deleteUser = (req,res)=>{
   
  
     return res.send("User deleted successfully")
   
  
  }
   
  
  // all users 
   
  
  export const getAllUsers = (req,res) =>{
   
  
    return res.send("All users fetched successfully");
   
  
  }
   
  
  // get user id 
   
  
  export const getUserById = (req,res) =>{
   
  
    return res.send(" User fetched by ID");
   
  
  }
   
  
  // login user 
   
  
  export const loginUser = (req,res)=>{
   
  
     return res.send("User login successful")
   
  
  }
   
  
  export const logoutUser = (req,res)=>{
   
  
     return res.send("User logout successful");
   
  
  }
   
  
  export const changePassword = (req,res)=> {
   
  
      return res.send("Password changed successfully")
   
  
  }
   
  
  export const updateProfile = (req,res)=>{
   
  
     return res.send("User profile updated successfully")
   
  
  }
   
  
  export const makeAdmin = (req,res)=>{
   
  
     return res.send("User made admin successfully")
   
  
  }
   
  
  export const removeAdmin = (req,res)=>{
   
  
     return res.send("Admin role removed successfully")
   
  
  }
   
  
  export const searchUsers = (req,res)=>{
   
  
     return res.send("User search completed successfully")
   
  
  }
   
  
  export const filterUsers = (req,res)=>{ 
   
  
    return res.send("User filter completed successfully")
   
  
  }
   
  
  export const blockUser = (req,res)=>{ 
   
  
    return res.send("User blocked completed successfully")
   
  
  }
   
  
  export const unBlockUser = (req,res)=>{ 
   
  
    return res.send("User unblocked completed successfully")
   
  
  }
   
  
  export const verifyEmail = (req,res)=>{ 
   
  
    return res.send("Email verified successfully")
   
  
  }
   
  
  export const resendVerification = (req,res)=>{ 
   
  
    return res.send("Verification email resent")
   
  
  }
   
  
  export const uploadProfilePicture = (req,res)=>{
   
  
     return res.send("Profile picture uploaded successfully")
   
  
  }
   
  
  export const deleteProfilePicture = (req,res)=>{
   
  
     return res.send("Profile picture deleted successfully")
   
  
  }