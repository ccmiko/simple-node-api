const { createMockResponseSchema } = require("./createMockResponseSchema");

function getMockData() {
  const responseData = createMockResponseSchema();

  responseData.body = {
    message: "疎通確認成功",
  };

  return responseData;
}

module.exports = {
  getMockData,
};
