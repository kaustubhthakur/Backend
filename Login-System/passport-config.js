const { authenticate } = require('passport');


const localStorage = require('passport-local').Strategy
function initialize(passport)
{
    const suthenticateUser = (email,password,done) => {
        
    }
passport.use(new localStorage({usernameField:'email'}),authenticateUser);

}