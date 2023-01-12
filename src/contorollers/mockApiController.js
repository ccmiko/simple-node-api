const { API_PATH_LIST } = require("../constants/apiPath");

function mockApiController(request, response) {
  try {
    const mockFileInfo = API_PATH_LIST.find((API_PATH) => {
      const splittedApiEndPoint = API_PATH.ENDPOINT.split("/");
      // 末尾の値はパスパラメータか？
      const hasPathParameter = /^:/.test(
        splittedApiEndPoint[splittedApiEndPoint.length - 1]
      );
      const matchEndPoint = hasPathParameter
        ? request.originalUrl.split("/").slice(0, -1).join("/") ===
          splittedApiEndPoint.slice(0, -1).join("/")
        : request.path === API_PATH.ENDPOINT;
      const matchHttpMethod =
        request.method === API_PATH.HTTP_METHOD.toUpperCase();

      return matchEndPoint && matchHttpMethod;
    });
    const mockData =
      require(`../mockResponses/${mockFileInfo.RESPONSE_MOCK_DATA_FILE_NAME}`).getMockData();

    // NOTE: webアプリ側がnuxtのとき、明示的にこう書かないとCORSで怒られるっぽ
    response
      .setHeader("Access-Control-Allow-Origin", "*")
      .status(mockData.status)
      .send(mockData.body);
  } catch (error) {
    response.status(500).send({
      message: "サーバエラー発生",
      errorCode: error.code,
      errorMessage: error.message,
      stack: error.stack,
    });
  }
}

module.exports = mockApiController;
