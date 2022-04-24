/* eslint-disable */
const model_id = 'deepset/roberta-base-squad2';
const api_token = '';
const api_url = `https://api-inference.huggingface.co/models/${model_id}`
const headers = {
    'Authorization': `Bearer ${api_token}`,
    'Content-Type': 'application/json'
}

export default function query(questions, passage) {
  for(let i = 0; i < questions.length; i++) {
    if(questions[i].q.length > 0) {
      const res = fetch(api_url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          'question': questions[i].q,
          'context': passage, 
        })
      })
        .then(res => res.json())
      
      console.log(typeof(res))
      return res
    }
  }
}