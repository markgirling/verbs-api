const buildConjugations = require('../verbBuilder/buildConjugations');

const extractInfo = (resultRow) => {
  const {
    infinitive,
    translation,
    present_participle, // eslint-disable-line camelcase
    past_participle, // eslint-disable-line camelcase
  } = resultRow;

  return {
    infinitive,
    translation,
    presentParticiple: present_participle,
    pastParticiple: past_participle,
  };
};

const extractConjugations = results => (
  results.map(({
    conjugation,
    tense,
    person,
    mood,
  }) => ({
    conjugation,
    tense,
    person,
    mood,
  }))
);

module.exports = (verbResults) => {
  const info = extractInfo(verbResults[0]);

  if (verbResults.length === 1 && !verbResults[0].conjugationid) {
    return {
      info,
      conjugations: buildConjugations(info.infinitive, []),
    };
  }

  return {
    info,
    conjugations: buildConjugations(info.infinitive, extractConjugations(verbResults)),
  };
};
