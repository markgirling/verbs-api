const getVerbType = require('./getVerbType');
const getVerbStem = require('./getVerbStem');
const { moods, regularEndings } = require('./verbProperties');

module.exports = (infinitive, irregularConjugations) => {
  const stem = getVerbStem(infinitive);
  const type = getVerbType(infinitive);
  const result = {};

  moods.forEach(({ mood, tenses, persons }) => (
    tenses.forEach(tense => (
      persons.forEach((person) => {
        if (!result[mood]) result[mood] = {};
        if (!result[mood][tense]) result[mood][tense] = {};
        if (!result[mood][tense][person]) result[mood][tense][person] = {};

        const existing = irregularConjugations.find(conjugation => (
          conjugation.person === person
          && conjugation.tense === tense
          && conjugation.mood === mood
        ));

        if (existing) {
          result[mood][tense][person] = {
            conjugation: existing.conjugation,
            regular: false,
          };
        } else {
          const negativePrefix = tense === 'negative' ? 'no ' : '';

          result[mood][tense][person] = {
            conjugation: `${negativePrefix}${stem}${
              regularEndings[type][mood][tense][person]
            }`,
            regular: true,
          };
        }
      })
    ))
  ));

  return result;
};
