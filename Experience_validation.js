function isValidExperience(experience, dateInput) {
    if (experience === "") return false;
    
    let expVal = Number(experience);
    if (expVal < 0) return false;

    if (!dateInput) return false; 

    let today = new Date();
    let birthDate = new Date(dateInput);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    let maxExperience = age - 10;
    
    if (expVal > maxExperience) {
        return false;
    }
    
    return true;
}