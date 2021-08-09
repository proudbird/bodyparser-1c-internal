import express from 'express';
import parser  from "../index";

import handler from "./handler";

const router = express();
router.use(parser);

router.post('*', async function(req, res, next) {
  handler(req, res);
  next();
});

const port = 3000;
const server = router.listen(port, function() {  
  console.info(`test server is listening at port ${port}`);
});