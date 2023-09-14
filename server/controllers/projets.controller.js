const mysql = require('mysql');
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Register a new user
const createProjets = (req, res) => {

};
// recuperer les users
const getProjets = (req, res) => {
    const query = 'SELECT nomProjet, textProjet FROM `projets`;';
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
    createProjets,
    getProjets
};