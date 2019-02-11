module.exports = (err, req, res) => {
  console.error(err.stack); // eslint-disable-line no-console

  return res.status(500).json({
    error: '500 - Internal Server Error',
  });
};
