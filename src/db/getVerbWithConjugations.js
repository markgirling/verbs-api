const dbClient = require('./dbClient');

module.exports = infinitive => (
  dbClient.table('verbs as v')
    .leftJoin('conjugations as c', 'v.id', 'c.verb_id')
    .select([
      'v.*',
      'c.id as conjugationid',
      'c.conjugation',
      'c.tense',
      'c.person',
      'c.mood',
    ])
    .where('v.infinitive', infinitive)
);
