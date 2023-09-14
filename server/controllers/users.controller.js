const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
const EMAIL = process.env.EMAIL_ADMIN;
const KEY =  process.env.SECRET_KEY;

// Register a new user
const createUser = (req, res) => {
    // Utilise req.body de body-parser
    const { prenom, nom, email, password } = req.body;
    // Vérifier si les champs sont remplis
    if (!prenom || !nom || !email || !password) {
        return res.status(400).json({
            error: 'element manquant',
        });
    }
    if (email == EMAIL) {
        return res.status(400).json({
            error: 'Email deja utilisée',
        });
    }
    // Cryptage du password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const query = 'INSERT INTO `users` (`prenom`,`nom`,`email`, `password`) VALUES ( ?, ?, ?, ?)';
        conn.query(query, [prenom, nom, email, hashedPassword], (dbErr) => {
            if (dbErr) {
                return res.status(500).json({ error: dbErr.message });
            } else {
                res.status(200).json({ message: 'Utilisateur enregistré' });
            }
        });
    });
};

// recuperer les users
const signUp = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email et mot de passe sont requis' });
    }
    const query = 'SELECT * FROM `users` WHERE `email` = ?';
    conn.query(query, [email], (dbErr, results) => {
        if (dbErr) {
            return res.status(500).json({ error: dbErr.message });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Utilisateur non trouvé' });
        }

        const user = results[0];

        bcrypt.compare(password, user.password, (bcryptErr, result) => {
            if (bcryptErr) {
                return res.status(500).json({ error: 'Erreur de comparaison de mot de passe' });
            }

            if (!result) {
                return res.status(401).json({ error: 'Mot de passe incorrect' });
            }

            jwt.sign({ payload: { mail: user.email } }, KEY, (jwtErr, token) => {
                if (jwtErr) {
                    return res.status(500).json({ error: 'Erreur de génération du token JWT' });
                }
                res.status(200).json({ user });
            });
        });
    });
}

// get commentaires
const getCom = (req, res) => {
    const query = 'SELECT * FROM `commentaires`';
    conn.query(query, (err, result) => {
        if (err) {
            console.error('Erreur de la récupération des données ' + err);
            res.status(500).json({ error: 'Erreur lors de la récupération des données dans getAllPlayer' });
        } else {
            res.status(200).json(result);
        }
    })
};

// post commentaires
const postCom = (req, res) => {
    // Utilise req.body de body-parser
    const { titreCommentaire, textCommentaire, auteurCommentaire, dateCommentaire } = req.body;
    // Vérifier si les champs sont remplis
    if (!titreCommentaire || !textCommentaire || !auteurCommentaire || !dateCommentaire) {
        return res.status(400).json({
            error: 'element manquant',
        });
    }
    const query = 'INSERT INTO `commentaires` (`titreCommentaire`, `textCommentaire`, `auteurCommentaire`, `dateCommentaire`) VALUES ( ?, ?, ?, ? )';
        conn.query(query, [titreCommentaire, textCommentaire, auteurCommentaire, dateCommentaire], (dbErr) => {
            if (dbErr) {
                return res.status(500).json({ error: dbErr.message });
            } else {
                res.status(200).json({ message: 'commentaire enregistré' });
            }
        });
};

module.exports = {
    createUser,
    signUp,
    getCom,
    postCom
};