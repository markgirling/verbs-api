const getVerbType = require('./getVerbType');
const getVerbStem = require('./getVerbStem');
const { persons, moods, regularEndings } = require('./verbProperties');

module.exports = (infinitive, irregularConjugations) => {
  const stem = getVerbStem(infinitive);
  const type = getVerbType(infinitive);
  const result = [];

  moods.forEach(({ mood, tenses }) => (
    tenses.forEach(tense => (
      persons.forEach((person) => {
        const existing = irregularConjugations.find(conjugation => (
          conjugation.person === person
          && conjugation.tense === tense
          && conjugation.mood === mood
        ));

        if (existing) {
          result.push(existing);
        } else {
          const negativePrefix = tense === 'negative' ? 'no ' : '';

          result.push({
            conjugation: `${negativePrefix}${stem}${
              regularEndings[type][mood][tense][person]
            }`,
            mood,
            tense,
            person,
          });
        }
      })
    ))
  ));

  return result;
};
