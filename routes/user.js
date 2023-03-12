var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
  { name:'Apple iPhone 13',
    category:'Smartphone',
    description:'The iPhone 14 seems like the obvious choice for anyone who needs a new iPhone but doesn’t want to step up to the 14 Pro.',
    image:'https://duet-cdn.vox-cdn.com/thumbor/0x0:2019x1346/1080x720/filters:focal(1010x673:1011x674):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863269/vpavic_210916_4760_0069.jpg'
  },
  { name:'Samsung Galaxy S23 Plus',
  category:'Smartphone',
  description:'The S23 Plus is a minor update to its predecessor, but the upgrades are good ones.',
  image:'https://duet-cdn.vox-cdn.com/thumbor/0x0:2000x1333/1080x720/filters:focal(1000x667:1001x668):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24453465/DSC04343_processed.jpg'
},
{ name:'Apple iPhone 14 Pro',
category:'Smartphone',
description:'For a lot of iPhone owners, this isn’t an upgrade year, especially if you’re coming from a 12 or a 13.',
image:'https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1080x720/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24020041/226270_iPHONE_14_PHO_akrales_0724.jpg'
},
{ name:'Samsung Galaxy S23 Ultra',
category:'Smartphone',
description:'The S23 Ultra is Samsung’s kitchen sink flagship phone. It’s a maximalist experience with a built-in stylus.',
image:'https://duet-cdn.vox-cdn.com/thumbor/0x0:2000x1333/750x500/filters:focal(1000x667:1001x668):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24431318/DSC04309.jpg'
},
  
  ]
  res.render('index', {products,admin:false });
});

module.exports = router;
