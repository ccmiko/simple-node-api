const API_PATH_LIST = [
  // APIサーバ立ち上げ時の疎通確認用API
  {
    HTTP_METHOD: "get",
    ENDPOINT: "/",
    CONTOLLER_FILE_NAME: "mockApiController",
    RESPONSE_MOCK_DATA_FILE_NAME: "example",
  },
  // 4xxを返すエラーAPI
  {
    HTTP_METHOD: "get",
    ENDPOINT: "/error400",
    CONTOLLER_FILE_NAME: "mockApiController",
    RESPONSE_MOCK_DATA_FILE_NAME: "error400",
  },
];

module.exports = {
  API_PATH_LIST,
};
