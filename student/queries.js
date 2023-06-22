const queries="SELECT * FROM student";
const querieById="SELECT * FROM student WHERE id=$1";
const checkEmailExists="SELECT s FROM student s WHERE s.email=$1";
const addStud= "INSERT INTO student (name,email,age,dob) VALUES ($1,$2,$3,$4)";
const remStd="DELETE FROM student WHERE id=$1";

module.exports={
    queries,
    querieById,
    checkEmailExists,
    addStud,
    remStd,
}