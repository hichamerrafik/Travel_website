 
import User from '../models/User.js'


// create new User

export const createUser = async(req, res) => {

    const newUser = new User(req.body);
    
    try {
        const savedUser = await newUser.save()
        res
        .status(200)
        .json({
            success:true,
            message: 'successfully created',
            data:savedUser
        });

    } catch (error) {
                res.status(500).json({success:false, message: ' Failed to create. Try Again'});

    }
};
// update User
export const updateUser = async(req, res) =>{
    const id = req.params.id ;

    try {
        const updateUser = await  User.findByIdAndUpdate(id, {
            $set : req.body}, {new:true})

            res
            .status(200)
            .json({
                success:true,
                message: 'successfully updated',
                data:updateUser ,
            });

    } catch (error) {
        res
        .status(500)
        .json({
            success:false,
            message: 'failed to update',
        });
    }
};
// delete User
export const deleteUser = async(req, res) =>{
    const id = req.params.id ;

    try {
        await  User.findByIdAndDelete(id)

            res
            .status(200)
            .json({
                success:true,
                message: 'successfully deleted',
            });

    } catch (error) {
        res
        .status(500)
        .json({
            success:false,
            message: 'failed to delete',
        });
    }
};
// getSingle User
export const getSingleUser = async(req, res) =>{
    const id = req.params.id ;

    try {
        const user =  await  User.findById(id)
            res
            .status(200)
            .json({
                success:true,
                message: 'successfully deleted',
                data:user,
            });

    } catch (error) {
        res
        .status(404)
        .json({
            success:false,
            message: 'Not found',
        });
    }

};
// getAll User
export const getAllUser = async(req, res) =>{


    try {
        
        const Users = await User.find({})
        res
        .status(200)
        .json({
            success:true,
            message: 'successfully ',
             data:Users,
        });
    } catch (error) {
        res
        .status(404)
        .json({
            success:false,
            message: 'Not found',
        });
        
    }
};