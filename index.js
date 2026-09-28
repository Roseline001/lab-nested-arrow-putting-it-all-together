// build a secure login feature for an e-commerce site limiting the number of login attempts a user can make
// login attempts = 3, lock the account after 3 failed attempts
function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const loginAttempt = (passwordAttempt) => {
    attemptCount++; // incrementing the number of attempts
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    } 
    if (passwordAttempt === userInfo.password) {
      return "Login successful"; // when the attempt count is less than or equal 3
    } 

    return `Attempt ${attemptCount}: Login failed`; // when the attempt count is less than or equal to 3 and the passwords don't match
  }
  return loginAttempt;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};