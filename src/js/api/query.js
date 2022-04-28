/* eslint-disable */
const axios = require('axios')

const model_id = 'deepset/roberta-base-squad2';
const api_token = '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';
const api_url = `https://api-inference.huggingface.co/models/${model_id}`
const headers = {
    'Authorization': `Bearer ${api_token}`,
    'Content-Type': 'application/json'
}

export default function query(question, passage) {
//   console.log('query sent')
//   console.log(`question: ${question}, passage: ${passage}`)
//   console.log(question.length)
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


// for(let i = 0; i < questions.length; i += 1) {
//     let answer = {};
//     if(questions[i].q.length > 0 && passage.length > 0) {
//       axios({
//         method: 'post',
//         url: api_url,
//         headers: headers,
//         data: {
//           'question': questions[i].q,
//           'context': passage,
//         },
//       }).then(function(res) {
//         answer = res.data
//       })
//       console.log('answer:', answer)
//       return answer
//     }
//   }