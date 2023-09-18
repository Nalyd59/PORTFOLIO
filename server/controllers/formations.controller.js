const mysql = require('mysql');
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Register a new user
const createFormations = (req, res) => {

};

// recuperer les users
const getFormations = (req, res) => {
    const query = 'SELECT nomFormation, textFormation, lieuFormation FROM `formations`;';
    conn.query(query, (err, result) => {
        if (err) {
            console.error('Erreur de la récupération des données ' + err);
            res.status(500).json({ error: 'Erreur lors de la récupération des données dans getAllPlayer' });
        } else {
            res.status(200).json(result);
        }
    })
}


module.exports = {
    createFormations,
    getFormations
};