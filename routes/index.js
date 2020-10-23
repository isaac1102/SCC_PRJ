const router = express.Router();

router.use('/accounts', require('./accounts'));

module.exports = router;
