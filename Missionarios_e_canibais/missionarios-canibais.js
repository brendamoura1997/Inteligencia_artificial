
// Como o barco comporta no máximo 2 pessoas, há 5 possíveis 
// situações quanto aos passageiros do barco em cada travessia:


let nodeVisitado = []
let resultado

function transform(e){
  if(e == 0){
    return '000'
  }else if(e == 1) {
    return '001'
  }else if(e == 2) {
    return '011'
  }else if(e == 3) {
    return '111'
  }
}

function hammingdistancia(a, b) {
  let distancia = 0

  const newA = `${transform(a[0]) + transform(a[1]) + transform(a[3]) + transform(a[4])}`
  const newB = `${transform(b[0]) + transform(b[1]) + transform(b[3]) + transform(b[4])}`

  for (let i = 0; i < newA.length; i += 1) {
    if (newA[i] !== newB[i]) {
      distancia += 1
    }
  }
 
  return distancia;
}

function validarEstado(estadoAtual){ 
	// restrições para que uma travessia possa ocorrer

  if(nodeVisitado.includes(estadoAtual.toString())) return false

  	// verificar se o número de canibais é maior que o número de missionários
  if((estadoAtual[0] < estadoAtual[1] && estadoAtual[0] != 0) || (estadoAtual[3] < estadoAtual[4] && estadoAtual[3] != 0)) return false

  return true
}


function print(estadoFinal){

	resultado = `${estadoFinal.estado[0]}M ${estadoFinal.estado[1]}C ${estadoFinal.estado[2] == 1 ? ' <<<<<<<< ' : ' >>>>>>>>'} ${estadoFinal.estado[3]}M ${estadoFinal.estado[4]}C \n` + (resultado || '')

  if(!estadoFinal.pai) return console.log(resultado)
  

  print(estadoFinal.pai)

}

function proxEstado(estadoAtual, next){               //next = possível próximo filho

  let novoEstado = []

  let posicaoBarco = estadoAtual.estado[2]

  if (posicaoBarco == 1) {
      novoEstado = [
        estadoAtual.estado[0] - next[0], 
        estadoAtual.estado[1] - next[1], 
        0, 
        estadoAtual.estado[3] + next[0], 
        estadoAtual.estado[4] + next[1], 
        1
      ]
  }else{
    
      novoEstado = [ 
          estadoAtual.estado[0] + next[0], 
          estadoAtual.estado[1] + next[1], 
          1, 
          estadoAtual.estado[3] - next[0], 
          estadoAtual.estado[4] - next[1], 
          0
      ]
      }

  let distanciaPaiInicio = estadoAtual.distanciaInicial
  // + a distância que o pai tem até o filho
  const inicial = distanciaPaiInicio + hammingdistancia(estadoAtual.estado, novoEstado)
  const proxNode = { //onde vou criar o filho, que é o próximo nó.
    pai: estadoAtual,
    distanciaInicial: inicial,
    distanciaTotal: inicial + hammingdistancia(novoEstado, nodeFinal.estado),
    estado: novoEstado,
    filhos: []
  }

  if(validarEstado(proxNode.estado)) estadoAtual.filhos.push(proxNode)
  return estadoAtual 

	
}

const nodeInicial = {
 filhos: [],  
 distanciaInicial: 0,
 estado: [3,3,1,0,0,0]
}

const nodeFinal = {
 pai: null,
 filhos: [],
 estado: [0,0,0,3,3,1]
}

const situacaoTravessia = [
  [1,1],
  [0,1],
  [1,0],
  [2,0],
  [0,2],
]

function criarNode(node){       //*2

  let possivelFilho = node;

  situacaoTravessia.forEach(p => { possivelFilho = proxEstado(possivelFilho, p) })

  const next = possivelFilho.filhos.reduce((a, b) => {
    if(b.distanciaTotal <= a.distanciaTotal) a = b
    return a
  })

  nodeVisitado.push(next.estado.toString())

// se o estado que eu tou == igual ao estado final
  if(next.estado.toString() == nodeFinal.estado.toString()) return print(next)
 
  return criarNode(next)
}

criarNode(nodeInicial)           //*1