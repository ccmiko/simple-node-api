const { createMockResponseSchema } = require("./createMockResponseSchema");

function getMockData() {
  const responseData = createMockResponseSchema();

  responseData.status = 400;
  responseData.body = {
    message: "400エラーです",
  };

  return responseData;
}

module.exports = {
  getMockData,
};
