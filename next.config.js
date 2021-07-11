const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'michbodura',
                mongodb_password: 'Cytadela',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'myFirstDatabase'
            },
        };
    }
    return {
        env: {
            mongodb_username: 'michbodura',
            mongodb_password: 'Cytadela',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'database'
        }
    }
}