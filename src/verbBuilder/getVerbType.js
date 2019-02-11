module.exports = (infinitive) => {
  if (infinitive.match(/ar$/)) return 'ar';
  if (infinitive.match(/ir$/)) return 'ir';
  if (infinitive.match(/er$/)) return 'er';

  throw new Error(`Could not detect verb type for ${infinitive}`);
};
