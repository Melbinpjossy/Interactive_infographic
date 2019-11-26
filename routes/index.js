var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile((path.join(__dirname, "../views/index.html")));
});

router.get('/svgdata/:target', (req, res) => {
  //here is where we ste up the query
  let query = `SELECT * FROM tbl_killers WHERE id="${req.params.target}"`;

  sql.query(query, (err, result) => {
    if (err) {  console.log(err); } // something done broke!

    console.log(result); // this should be the database row

    res.json(result[0]); // sedn that ow back to the calling function
  })
})


module.exports = router;
