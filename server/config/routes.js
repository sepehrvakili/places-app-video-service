module.exports = (app) => {
  app.post('/api/videos', (req, res) => {
    console.log('reqBODY', req.body);
    const { userPlaceId, videoUrl } = req.body;
    const job = { userPlaceId, videoUrl };
    // send message from http  worker to master
    process.send({ download: job });
    res.sendStatus(200).end();
  });
  app.get('/', (req, res) => {
    res.send('video service is running.');
  });
};
