import {Configuration, OpenAIApi} from "openai";

export default defineEventHandler( async (event) => {

  return 'chat';

  // const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: 'sk-XlBY2hTwq6raliqjJ3FlT3BlbkFJL4Clac8hEgpuCamtXti7chy',
  });

  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "学编程是自学好还是找培训机构？",
  });

  // console.log(completion);

  return {
    stat: 1,
    msg: completion.data.choices[0].text,
    data: completion,
  }

  // const {req, res} = event.node;

  // return {
  //   stat:1,
  //   msg:'ok',
  //   data:{
  //     url: req.url,
  //     method: req.method,
  //     statusCode: res.statusCode,
  //     time: (new Date).toLocaleString(),
  //   }
  // }

})

