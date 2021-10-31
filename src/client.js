const contentful = require("contentful"); 

const client = contentful.createClient({
  space: "m2l6fspacvh6",
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

export default client;