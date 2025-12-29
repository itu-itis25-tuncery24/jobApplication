function isValidSalary(salary) {
    if (salary === "") return false;
    let val = Number(salary);
    
    if (val < 0) return false;
    
    return true;
}