function isValidDOB(dateInput) {
    if (!dateInput) return false;

    let today = new Date();
    let birthDate = new Date(dateInput);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age > 17 && age < 36) {
        return true;
    }
    return false;
}