// const convert = require('xml-js');

module.exports = function (db) {
  return {
    // Get all examples
    getExamples: function (req, res) {
      db.Example.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbExamples) {
        res.json(dbExamples);
      });
    },
    // Create a new example
    createExample: function (req, res) {
      db.Example.create(req.body).then(function (dbExample) {
        res.json(dbExample);
      });
    },
    // Delete an example by id
    deleteExample: function (req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
        res.json(dbExample);
      });
    },

    // ========= GET ROUTES =========
    getUserInfo: function (req, res) {
      db.User.findOne({
        where: {
          id: req.params.id
        },
        include: [db.List]
      }).then(data => {
        res.json(data);
      }).catch(error => {
        console.log(error);
      });
    },
    getBookInfoInternal: function (req, res) {
      db.Book.findAll({}).then(data => {
        res.json(data);
      }).catch(error => {
        console.log(error);
      });
    },

    getUserList: function (req, res) {
      db.List.findAll({}).then(data => {
        res.json(data);
      }).catch(error => {
        console.log(error);
      });
    },

    // getBookReviewsByUser: function (req, res) {
    //   db.Review.findAll({
    //     where: {
    //       UserId: req.params.id
    //     },
    //     include: [db.Book]
    //   }).then(data => {
    //     res.json(data);
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // },
    // getBookReviewsByBook: function (req, res) {
    //   db.Review.findAll({
    //     where: {
    //       BookIsbn: req.params.id
    //     },
    //     include: [db.User]
    //   }).then(data => {
    //     res.json(data);
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // },
    // getFollowers: function (req, res) {
    //   db.Connection.findAll({
    //     where: {
    //       followeeID: req.params.followeeID
    //     }
    //   }).then(data => {
    //     res.json(data);
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // },
    // getFollowing: function (req, res) {
    //   db.Connection.findAll({
    //     where: {
    //       followerID: req.params.followerID
    //     }
    //   }).then(data => {
    //     res.json(data);
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // },
    getConnections: function (req, res) {
      db.Connection.findAll({
      }).then(data => {
        res.json(data);
      }).catch(error => {
        console.log(error);
      });
    },

    // ========= POST ROUTES ========

    // updateUserTable: function (req, res) {
    //   db.User.create(req.body).then(function (dbUsers) {
    //     res.json(dbUser);
    //   });
    // },
    addBookInternal: function (req, res) {
      db.Book.create(req.body).then(function (dbBook) {
        res.json(dbBook);
      });
    },

    followUser: function (req, res) {
      db.Connection.create(req.body).then(function (dbConnection) {
        res.json(dbConnection);
      });
    },

    // addToFuture: function (req, res) {
    //   db.readFuture.create(req.body).then(function (dbAddToFuture) {
    //     res.json(dbAddToFuture);
    //   });
    // },

    addToList: function (req, res) {
      db.List.create(req.body).then(function (dbAddToList) {
        res.json(dbAddToList);
      });
    },

    // addToCurrent: function (req, res) {
    //   db.readCurrent.create(req.body).then(function (dbAddToCurrent) {
    //     res.json(dbAddToCurrent);
    //   });
    // },

    // addToPast: function (req, res) {
    //   db.readPast.create(req.body).then(function (dbAddToPast) {
    //     res.json(dbAddToPast);
    //   });
    // },

    // addReview: function (req, res) {
    //   db.Review.create(req.body).then(function (dbAddReview) {
    //     res.json(dbAddReview);
    //   });
    // },

    // ========= DELETE ROUTES =========
    unFollow: function (req, res) {
      db.Connection.destroy({ where:
        { followerID: req.params.followerID,
          followeeID: req.params.followeeID }
      }).then(function (dbConnection) {
        res.json(dbConnection);
      });
    },
    deleteFromList: function (req, res) {
      db.List.destroy({ where: { id: req.params.id }
      }).then(function (dbList) {
        res.json(dbList);
      });
    }
    // deleteExample: function (req, res) {
    //   db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
    //     res.json(dbExample);
    //   });
    // },

  };
};
