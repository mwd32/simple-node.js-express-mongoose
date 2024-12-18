
// importing modules
import { Router }  from "express";
import createUser from "./services/createUser.js";
import updateUser from "./services/updateUser.js";
import getUser from "./services/getUser.js";
import getUsers from "./services/getUsers.js";
import deleteUser from "./services/deleteUser.js";


const router = Router (); // user router


// user router endpoints
router.post ("/", createUser);

router.get ("/:userId", getUser);

router.post ("/search", getUsers);

router.patch ("/:userId", updateUser);

router.delete ("/:userId", deleteUser);


// exporting user router
export default router;
