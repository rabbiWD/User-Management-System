
import { 
 
    readUserService,
    userService ,
    updateUser,
    deleteUser,
    getAllUsers,
    getUserById,
    loginUser,
    logoutUser,
    changePassword,
    updateProfile,
    makeAdmin,
    removeAdmin,
    searchUsers,
    filterUsers,
    blockUser,
    unBlockUser,
    verifyEmail,
    resendVerification,
    uploadProfilePicture,
    deleteProfilePicture,
  
 } from "../service/UserService.js";
  
 
 // Read 

 export const readUser = async(req,res)=>{
     const redResult = readUserService(req,res)
 
     return res.send(redResult);
  
 }

 // Create 
  
 export const UserControllerPost = async(req, res) =>{
      let result = userService(req,res);
   
      return res.status(200)
    
   }
  
 
 // Update 
  
 export const userUpdate = async(req,res) => {
     const userUpdateResult = updateUser(req,res);
 
     return res.send(userUpdateResult) 
 
 }
  
 
 // delete 
 
 export const userDelete =async(req,res)=>{
     const userUpdateResult = deleteUser(req,res)
  
     return res.send(userUpdateResult)
  
 
 }
  
 
 // get all users 
 
 export const getUsers = async(req,res)=>{
      const getUserResult = getAllUsers(req,res);
 
     return res.send(getUserResult)
  
 
 }
  
 
 export const userId = async(req,res)=>{
      const userIdResult = getUserById(req,res)
 
      return res.send(userIdResult)
  
 
 }
  
 
 export const userlogin = async(req,res)=>{
      const userloginRes = (loginUser(req,res));
  
      return res.send(userloginRes)
  
 
 }
  
 
 export const userlogout = async(req,res)=>{
      const userlogoutRes = (logoutUser(req,res));
 
      return res.send(userlogoutRes)
  
 
 }
  
 
 export const passwordChange = async(req,res)=>{
      const passChangeRes = (changePassword(req,res));
 
      return res.send(passChangeRes);
  
 
 }
  
 
 export const profileUPdate = async(req,res)=>{
       const profileRes = updateProfile(req,res)
 
       return res.send(profileRes)
  
 
 }
  
 
 export const adminMake = async(req,res)=>{
       const adminMakeRes = makeAdmin(req,res);
  
       return res.send(adminMakeRes)
 
 }
  
 
 export const adminRemove = async(req,res)=>{
       const adminRemoveRes = removeAdmin(req,res);
  
       return res.send(adminRemoveRes)
 
 }
  
 
 export const userSearch = async(req,res)=>{
       const userseachRes = searchUsers(req,res)
 
       return res.send(userseachRes) 
 
 }
  
 
 export const userfilter = async(req,res)=>{
       const userfilterRes = filterUsers(req,res)
 
       return res.send(userfilterRes)
 
 }
  
 
 export const userblock = async(req,res)=>{
       const userblockRes = blockUser(req,res)
  
       return res.send(userblockRes)
 
 }
  
 
 export const userUnblock = async(req,res)=>{
       const userunblockRes = unBlockUser(req,res)
  
       return res.send(userunblockRes)
 
 }
  
 
 export const emailVerify = async(req,res)=>{
       const emailVerifyRes = verifyEmail(req,res)
  
       return res.send(emailVerifyRes)
  
 }
  
 
 export const veryficationResend = async(req,res)=>{
       const veryficationResendRes = resendVerification(req,res)
 
       return res.send(veryficationResendRes)
  
 }
  
 
 export const profilePictureUload = async(req,res)=>{
       const profie = uploadProfilePicture(req,res);
  
       return res.send(profie);
  
 
 }
  
 
 export const profilePictureDelete = async(req,res)=>{
       const profiledel = deleteProfilePicture(req,res);
  
       return res.send(profiledel);
 
 }