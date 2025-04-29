import express from "express";

import * as UserController  from '../controller/UserController.js';

export const router = express.Router()
 
router.get('/read-user',UserController.readUser);

router.post('/create-user',UserController.UserControllerPost)
 
router.put('/update-user',UserController.userUpdate);
 
router.delete('/delete-user',UserController.userDelete);
 
router.get('/all-users',UserController.getUsers);

router.post('/user/:id',UserController.userId)
 
router.post('/user-login',UserController.userlogin)
 
router.post('/user-logout',UserController.userlogout)
 
router.put("/change-password", UserController.passwordChange);
 
router.put('/profile-update',UserController.profileUPdate)
 
router.put('/make-adimn/:id',UserController.adminMake)
 
router.put('/remove-adimn/:id',UserController.adminRemove)
 
router.get('/search-user', UserController.userSearch)
 
router.get('/filter', UserController.userfilter)
 
router.patch('/block-user/:id', UserController.userblock)
 
router.patch('/unblock-user/:id', UserController.userUnblock)
 
router.post('/verify-email', UserController.emailVerify)
 
router.post('/resend-verification', UserController.veryficationResend)
 
router.post('/upload-profile',UserController.profilePictureUload)
 
router.delete('/delete-profile',UserController.profilePictureDelete)
 
export default router;