const cep = document.querySelector('#cep')

const preencheDados = resultado => {
  for(const campo in resultado) {
    if(document.querySelector('#' + campo)) {
      document.querySelector('#' + campo).value = resultado[campo]
    }
  }
}

const blurFunction = () => {
  let search = cep.value.replace('-', '')
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  }

  const url = `https://viacep.com.br/ws/${search}/json/`

  fetch(url, options)
    .then(response => response.json())
    .then(data => preencheDados(data))
    .catch(e => console.log('Deu erro: ' + e.message))
}