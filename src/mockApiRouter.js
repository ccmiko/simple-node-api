const express = require("express");
const app = express();
const { API_PATH_LIST } = require("./constants/apiPath");

API_PATH_LIST.forEach((API_PATH) => {
  app[API_PATH.HTTP_METHOD](
    API_PATH.ENDPOINT,
    require(`./contorollers/${API_PATH.CONTOLLER_FILE_NAME}`)
  );
});

module.exports = app;
