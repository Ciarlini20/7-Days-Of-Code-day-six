let vegetais = []
let laticinios = []
let doces = []
let proteinas = []
let carboidratos = []

let message = 'sim'

while (
  message.toLowerCase() != 'sim' &&
  message.toLowerCase() != 'nao' &&
  message.toLowerCase() != 'remover'
) {
  alert(`${message} não é um comando válido`)
  message = prompt(
    `Deseja adicionar algo a sua lista de compras? responda com sim ou nao.\n Ou deseja remover um item da lista atual? se deseja remover digite remover`
  )
}
while (message.toLowerCase() == 'sim') {
  let product = prompt('Qual o alimento?')
  while (product == '') {
    alert(`Insira um alimento`)
    product = prompt('Qual o alimento?')
  }
  let category = prompt(
    'A qual dessas categorias esse produto pertence? vegetais; laticinios, doces, proteinas, carboidratos'
  )

  while (
    category.toLowerCase() != 'vegetais' &&
    category.toLowerCase() != 'laticinios' &&
    category.toLowerCase() != 'doces' &&
    category.toLowerCase() != 'proteinas' &&
    category.toLowerCase() != 'carboidratos'
  ) {
    alert('Insira uma das categorias listadas')
    category = prompt(
      'A qual dessas categorias esse produto pertence? vegetais; laticinios, doces, proteinas, carboidratos'
    )
  }
  if (category.toLowerCase() == 'vegetais') {
    vegetais.push(product.toLowerCase())
  }
  if (category.toLowerCase() == 'laticinios') {
    laticinios.push(product.toLowerCase())
  }
  if (category.toLowerCase() == 'doces') {
    doces.push(product.toLowerCase())
  }
  if (category.toLowerCase() == 'proteinas') {
    proteinas.push(product.toLowerCase())
  }
  if (category.toLowerCase() == 'carboidratos') {
    carboidratos.push(product.toLowerCase())
  }

  message = prompt(
    `Deseja adicionar algo mais? responda com sim ou nao.\n Ou deseja remover algum item da lista? digite remover para remover`
  )
  while (
    message.toLowerCase() != 'sim' &&
    message.toLowerCase() != 'nao' &&
    message.toLowerCase() != 'remover'
  ) {
    alert(`${message} não é um comando válido`)
    message = prompt(
      `Deseja adicionar algo a sua lista de compras? responda com sim ou nao.\n Ou deseja remover um item da lista atual? se deseja remover digite remover`
    )
  }
}

if (message.toLowerCase() === 'nao') {
  console.log(
    `Lista: \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Doces: ${doces} \n Proteinas: ${proteinas} \n Carboidratos: ${carboidratos} \n`
  )
}

while (message.toLowerCase() === 'remover') {
  let remove = prompt(
    `Qual desses itens deseja remover \n Lista: \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Doces: ${doces} \n Proteinas: ${proteinas} \n Carboidratos: ${carboidratos} \n`
  )
  while (
    vegetais.includes(remove.toLowerCase()) != true &&
    laticinios.includes(remove.toLowerCase()) != true &&
    doces.includes(remove.toLowerCase()) != true &&
    proteinas.includes(remove.toLowerCase()) != true &&
    carboidratos.includes(remove.toLowerCase()) != true
  ) {
    alert(
      `${remove} não foi encontrado na lista de compras por favor escolha um dos produtos listados para remover`
    )
    remove = prompt(
      `Qual desses itens deseja remover \n Lista: \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Doces: ${doces} \n Proteinas: ${proteinas} \n Carboidratos: ${carboidratos} \n`
    )
    let removeFromList
  }
  if (vegetais.includes(remove.toLowerCase()) == true) {
    removeFromList = vegetais.indexOf(remove.toLowerCase())
    vegetais.splice(removeFromList, 1)
  }
  if (laticinios.includes(remove.toLowerCase()) == true) {
    removeFromList = laticinios.indexOf(remove.toLowerCase())
    laticinios.splice(removeFromList, 1)
  }
  if (doces.includes(remove.toLowerCase()) == true) {
    removeFromList = doces.indexOf(remove.toLowerCase())
    doces.splice(removeFromList, 1)
  }
  if (proteinas.includes(remove.toLowerCase()) == true) {
    removeFromList = proteinas.indexOf(remove.toLowerCase())
    proteinas.splice(removeFromList, 1)
  }
  if (carboidratos.includes(remove.toLowerCase()) == true) {
    removeFromList = carboidratos.indexOf(remove.toLowerCase())
    carboidratos.splice(removeFromList, 1)
  }

  console.log(
    `O item ${remove} foi removido da lista, sua lista atual é: \n Lista: \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Doces: ${doces} \n Proteinas: ${proteinas} \n Carboidratos: ${carboidratos} \n`
  )
  message = prompt(
    'Deseja remover mais algum item da lista? digite remover. \n Se desejar adicionar mais alguma coisa na lista digite sim, se está satisfeito com sua lista digite nao'
  )

  while (message.toLowerCase() == 'sim') {
    let product = prompt('Qual o alimento?')
    while (product == '') {
      alert(`Insira um alimento`)
      product = prompt('Qual o alimento?')
    }
    let category = prompt(
      'A qual dessas categorias esse produto pertence? vegetais; laticinios, doces, proteinas, carboidratos'
    )

    while (
      category.toLowerCase() != 'vegetais' &&
      category.toLowerCase() != 'laticinios' &&
      category.toLowerCase() != 'doces' &&
      category.toLowerCase() != 'proteinas' &&
      category.toLowerCase() != 'carboidratos'
    ) {
      alert('Insira uma das categorias listadas')
      category = prompt(
        'A qual dessas categorias esse produto pertence? vegetais; laticinios, doces, proteinas, carboidratos'
      )
    }
    if (category.toLowerCase() == 'vegetais') {
      vegetais.push(product.toLowerCase())
    }
    if (category.toLowerCase() == 'laticinios') {
      laticinios.push(product.toLowerCase())
    }
    if (category.toLowerCase() == 'doces') {
      doces.push(product.toLowerCase())
    }
    if (category.toLowerCase() == 'proteinas') {
      proteinas.push(product.toLowerCase())
    }
    if (category.toLowerCase() == 'carboidratos') {
      carboidratos.push(product.toLowerCase())
    }

    message = prompt(
      `Deseja adicionar algo mais? responda com sim ou nao.\n Ou deseja remover algum item da lista? digite remover para remover`
    )
    while (
      message.toLowerCase() != 'sim' &&
      message.toLowerCase() != 'nao' &&
      message.toLowerCase() != 'remover'
    ) {
      alert(`${message} não é um comando válido`)
      message = prompt(
        `Deseja adicionar algo a sua lista de compras? responda com sim ou nao.\n Ou deseja remover um item da lista atual? se deseja remover digite remover`
      )
    }
  }

  if (message.toLowerCase() === 'nao') {
    console.log(
      `Lista: \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Doces: ${doces} \n Proteinas: ${proteinas} \n Carboidratos: ${carboidratos} \n`
    )
  }
}
