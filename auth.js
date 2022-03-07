const JwtStrategy = require('passport-jwt').Strategy,
EstractJwt = require('passport-jwt').ExtractJwt;

module.exports= passport => {
    //Esto es un objeto JSON para dar el esquema de la estrategia.
    const opts ={
        jwtFromRequest: EstractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: 'secretPassword' //TODO Esto en una variable de entorno.
    }
    passport.use(new JwtStrategy(opts,(decoded,done)=>{
        console.log('decoded jwt',decoded);
        return done(null,false);
    }));
};