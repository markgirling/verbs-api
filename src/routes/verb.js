const getVerbWithConjugations = require('../db/getVerbWithConjugations');
const verbView = require('../views/verb');

module.exports = async (req, res, next) => {
  try {
    const verbWithConjugations = await getVerbWithConjugations(req.params.infinitive);

    if (!verbWithConjugations.length) {
      return next();
    }

    return res.json(verbView(verbWithConjugations));
  } catch (e) {
    return next(e);
  }
};
