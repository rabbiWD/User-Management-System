   
  // Read
  export const readUserService = (req,res)=>{
    return res.status(200).send("User read successfully")
   
  }

  // Create 
  
export const userService = (req,res) => {
    return res.status(200).send("User created  successfully")
   
  
  }
   
  
  // Update

  export const updateUser = (req,res)=>{
     return res.send("User updated successfully")
   
  } 
   
  
  // Delete
   
  export const deleteUser = (req,res)=>{
     return res.send("User deleted successfully") 

  }
   
  
  // All Users 
   
  export const getAllUsers = (req,res) =>{
    return res.send("All users fetched successfully");
  
  }
   
  
  // Get User ID
   
  export const getUserById = (req,res) =>{
    return res.send("User fetched by ID");
   
  }
   
  
  // Login User 
   
  export const loginUser = (req,res)=>{
     return res.send("User login successful") 
  
  }
   
  // Logout User 

  export const logoutUser = (req,res)=>{
     return res.send("User logout successful");
  
  }
   
  // Change Password

  export const changePassword = (req,res)=> {
      return res.send("Password changed successfully")
  
  }
   
  //updateProfile

  export const updateProfile = (req,res)=>{
     return res.send("User profile updated successfully") 
  
  }
   
  //Make Admin

  export const makeAdmin = (req,res)=>{
     return res.send("User made admin successfully")
    
  }
   
  //Remove Admin

  export const removeAdmin = (req,res)=>{
     return res.send("Admin role removed successfully")
   
  }
   
  //Search Users

  export const searchUsers = (req,res)=>{
     return res.send("User search completed successfully") 
  
  }
   
  //Filter Users

  export const filterUsers = (req,res)=>{ 
    return res.send("User filter completed successfully")
   
  }
   
  //Block User

  export const blockUser = (req,res)=>{ 
    return res.send("User blocked completed successfully")
   
  }
   
  //UnBlock User

  export const unBlockUser = (req,res)=>{ 
    return res.send("User unblocked completed successfully")
   
  }
   
  //Verify Email 

  export const verifyEmail = (req,res)=>{ 
    return res.send("Email verified successfully")
  
  }
   
  //Verification

  export const resendVerification = (req,res)=>{ 
    return res.send("Verification email resent") 
  
  }
   
//Upload Picture

  export const uploadProfilePicture = (req,res)=>{
     return res.send("Profile picture uploaded successfully")
   
  }
   
  // Delete Picture

  export const deleteProfilePicture = (req,res)=>{
     return res.send("Profile picture deleted successfully") 
  
  }