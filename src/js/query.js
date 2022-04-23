/* eslint-disable */
const model_id = 'deepset/roberta-base-squad2';
const api_token = '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';
const api_url = `https://api-inference.huggingface.co/models/${model_id}`
const headers = {
    'Authorization': `Bearer ${api_token}`,
    'Content-Type': 'application/json'
}

export default function query(questions, passage) {
  fetch(api_url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      'question': questions[0].q,
      'context': passage, 
    })
  })
    .then(res => res.json())
}