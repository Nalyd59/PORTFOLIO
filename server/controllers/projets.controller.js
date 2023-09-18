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
    const query = 'SELECT idProjet, nomProjet, textProjet FROM `projets`;';
    conn.query(query, (err, result) => {
        if (err) {
            console.error('Erreur de la récupération des données ' + err);
            res.status(500).json({ error: 'Erreur lors de la récupération des données dans getAllPlayer' });
        } else {
            res.status(200).json(result);
        }
    })
}
// supprimer un projet
const deleteProjets = (req, res) => {
    let query = `DELETE FROM projet WHERE = ?`;
    conn.query(query, [req.params.id], (err) => {
        if (err) {
            console.error('Erreur lors de la suppression du projet');
            res.status(500).json({ error: 'Erreur lors de la suppression du projet' });
        } else {
            res.status(200).json({ message: 'Projet supprimer' });
        }
    });
};

module.exports = {
    createProjets,
    getProjets,
    deleteProjets
};