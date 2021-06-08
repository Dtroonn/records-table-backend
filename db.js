const Pool = require('pg').Pool;

const pool = new Pool({
    connectionString:
        'postgres://harjtbgmarnkzd:683f3d10e1c8f9b5ae62dc59651695315c1462defdbe6d79ae5a1333c4e8c160@ec2-54-195-246-55.eu-west-1.compute.amazonaws.com:5432/df7oj1fs391j22',
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = pool;
