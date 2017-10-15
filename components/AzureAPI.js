'use strict'

const URL = {
  base: 'https://eastus2.api.cognitive.microsoft.com/vision/v1.0/',
  celebritiesEndpoint: 'models/celebrities/analyze?model=celebrities'
}

const subscriptionKey = 'f292151dd8e847afafa49fb6adf6344c';

const AzureAPI = {
  findCelebrities: function(imageBlob) {
    const url = URL.base + URL.celebritiesEndpoint
    let headers = new Headers()
    headers.append("Content-Type", "application/json");
    headers.append("Ocp-Apim-Subscription-Key", subscriptionKey);

    const requestInfo = { 
      method: 'POST',
      headers: headers,
    }

    return fetch(url, requestInfo)
    .then(response => response.json())
    .then(json => json.result.celebrities)
    .then(celebrities => {
      console.log(celebrities)
      celebrities.map(celebrity => celebrity.name)
    })
    .catch(err => {})
  }
}

export default AzureAPI