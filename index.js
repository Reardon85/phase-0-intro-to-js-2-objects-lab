// Write your solution in this file!
const employee = {
    
}

function updateEmployeeWithKeyAndValue(emp, key1, value1){


    const newEmp = {
        ...emp, 
    };
    
    newEmp[key1] = value1;
    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key1, value1){

    emp[key1] = value1;
    return emp;
}

function deleteFromEmployeeByKey(emp, key){
    const newEmp = {...emp};
    delete newEmp[key];
    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(emp, key){

    delete emp[key];
    return emp;
}