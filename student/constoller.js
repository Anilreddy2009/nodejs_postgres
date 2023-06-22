const pool=require('../db');
const query=require('./queries');

const getStudents=(req,res)=>{
    pool.query(query.queries,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getStudentById=(req,res)=>{
    const id=req.params.id;
    pool.query(query.querieById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addStudent=(req,res)=>{
    const {name,email,age,dob} = req.body;
    pool.query(query.checkEmailExists,[email],(error,results)=>{
        if(results.rows.length){
            res.send("email already exists");
        }else{
        pool.query(query.addStud,[name,email,age,dob],(error,result)=>{
            if(error) throw error;
            res.status(200).json("student added succesfully");
        })
    }
    })
}

const removeStudent=(req,res)=>{
    const id=req.params.id;
    pool.query(query.getStudentById,[id],(error,result)=>{
        if(!result.rows.length){
            res.send("Student does not found to delete");
        }else{
            pool.query(query.remStd,[id],(error,result)=>{
                if(error) throw error;
                res.status(200).send("student removed successfully");
            })
        }
    })
}

module.exports={
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
};