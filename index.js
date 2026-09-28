// build a secure login feature for an e-commerce site limiting the number of login attempts a user can make
// login attempts = 3, lock the account after 3 failed attempts
function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const loginAttempt = (passwordAttempt) => {
    attemptCount++;
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    } 
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } 

    return `Attempt ${attemptCount}: Login failed`;
  }
  return loginAttempt;
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};