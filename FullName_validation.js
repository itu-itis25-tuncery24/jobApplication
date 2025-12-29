function isValidFullName(name) {
    if (name.trim().length < 6) return false;
    
    let hasDigit = /\d/.test(name);
    if (hasDigit) return false;

    return true;
}