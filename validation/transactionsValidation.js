const checkForItemNameKey = (req, res, next) => {
    if (req.body.hasOwnProperty("item_name")) {
     return next();
    } else {
      res.json({error:"Transaction must have a item name"});
    }
  };

  
  module.exports = { checkForItemNameKey }