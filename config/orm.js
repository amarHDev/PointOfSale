const connection = require("./database");

const orm = {


    selectAll: function (cb) {
        connection.query("SELECT * FROM produit", function (err, data) {
            if (err) cb(err, null);
            cb(null, data);

        
        });
    }
    // ,
    // selectAllBy: function(condition, value, cb) {
    //     const sqlQuery = `SELECT * FROM produit WHERE ${condition } = ${value}`;
    //     connection.query(sqlQuery, function (err, data) {
    //         if (err) cb(err, null);
    //         cb(null, data);
    //     });
    // },
    // insertOne: function (burgerName, cb) {
    //     const sqlQuery = `INSERT INTO produit(burger_name) VALUES('${burgerName}')`;
    //     connection.query(sqlQuery, function (err, data) {
    //         if (err) cb(err, null);
    //         cb(null, data);
    //     });
    // },

    // updateOne: function (condition, id, cb) {
    //     const sqlQuery = `UPDATE produit SET is_favorite = ${condition} WHERE id = ${id}`;
    //     connection.query(sqlQuery, function (err, data) {
    //         if (err) cb(err, null);
    //         cb(null, data)
    //     });
    // },

    // deleteOne: function(id, cb) {
    //     const sqlQuery = `DELETE FROM produit WHERE id = ${id}`;
    //     connection.query(sqlQuery, function (err, data) {
    //         if (err) cb(err, null);
    //         cb(null, data)
    //     });
    // }
};



module.exports = orm;
