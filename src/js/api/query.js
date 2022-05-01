/* eslint-disable */
const axios = require('axios')

const model_id = 'deepset/roberta-base-squad2';
const api_token = '';
const api_url = `https://api-inference.huggingface.co/models/${model_id}`
const headers = {
    'Authorization': `Bearer ${api_token}`,
    'Content-Type': 'application/json'
}

export default function query(question, passage) {
  if(question.length > 0 && passage.length > 0) {
    return axios({
      method: 'post',
      url: api_url,
      headers: headers,
      data: {
        'question': question,
        'context': passage,
      },
    })
  }
}
