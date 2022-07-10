const express = require ('express');
const detailsControler = require('../Component/Details');
// const detailsControler1 = require('../Component/Bollywood');

 const detailsRouter =express.Router();
// const detailsRouter1 =express.Router();

// detailsRouter1.route('/bolly')
 detailsRouter.route('/Details')


// .get(detailsControler1.bollywoodapi)
.get(detailsControler.apiController)

// module.exports=detailsRouter1;
 module.exports=detailsRouter;

