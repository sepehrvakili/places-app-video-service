const http = require('http');
const fs = require('fs');
const path = require('path');

module.exports = () => {
  // listen for messeages from master
  process.on('message', (downloadJob) => {
    // downloadJob format: { userPlaceId, videoUrl }
    const videoUrl = downloadJob.videoUrl;
    // use regex to get the video name from the url, everything after /
    const fileName = videoUrl.match(/\/([^/]*)$/)[1];
    const filePath = path.join(`${__dirname}./../../dist/videos/${fileName}`);
    const writeStream = fs.createWriteStream(filePath);

    http.get(videoUrl, (res) => {
      console.log('video being downloaded from api server.');
      // This pipes the resp data to the file
      res.pipe(writeStream);
    });

    // This is here incase any errors occur
    writeStream.on('error', (err) => {
      console.log(err);
    });

    writeStream.on('finish', () => {
      console.log('video has been downloaded locally.');
      console.log('sending job to uploader service.');
      // download worker sends job to master
      // to forward job to upload worker
      process.send({ upload: downloadJob });
    });
  });
};
