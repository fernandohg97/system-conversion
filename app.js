/* Code */
var content = document.getElementById('content')
var content1 = document.getElementById('content1')



function calculate () {
  let div = document.createElement('DIV')
  div.setAttribute('class', 'grid-x grid-padding-x')
  let div2 = document.createElement('DIV')
  div2.setAttribute('class', 'medium-4 cell')
  let label = document.createElement('LABEL')
  let labelMsg = document.createTextNode('Ingresa un numero:')
  label.appendChild(labelMsg)
  div2.appendChild(label)
  let input = document.createElement('INPUT')
  input.setAttribute('value', '0')
  label.appendChild(input)
  let div3 = document.createElement('DIV')
  div3.setAttribute('class', 'medium-4 cell')
  let btn = document.createElement('BUTTON')
  btn.setAttribute('type', 'button large')
  let btnMsg = document.createTextNode('Calcular')
  btn.appendChild(btnMsg)
  div3.appendChild(btn)
  let div4 = document.createElement('DIV')
  div4.setAttribute('class', 'medium-4 cell')
  let p = document.createElement('P')
  p.setAttribute('id', 'result')
  div4.appendChild(p)
  div.appendChild(div2)
  div.appendChild(div3)
  div.appendChild(div4)
  content.replaceChild(div, content1)
}


// Sistema decimal a sistema binario
function toBinary () {
  var res // res = Residuo de la division
  let binaryArray = [] // Arreglo para almacenar numero binario
  let binaryNumber = document.getElementById('binaryNumber')
  let result = document.getElementById('number-db').value // numero del usuario
  result = parseInt(result)
  while (result !== 0) {
    res = result % 2
    result = Math.floor(result / 2)
    binaryArray.push(res)
  }
  binaryArray = binaryArray.join('')
  binaryNumber.innerHTML = binaryArray
  binaryArray = []
}

// Sistema decimal a sistema octal
function toOctal () {
  let res // res = Residuo de la division
  let octalArray = [] // Arreglo para almacenar el numero octal
  let octalNumber = document.getElementById('octalNumber')
  let result = document.getElementById('number-do').value // numero del usuario
  result = parseInt(result)
  while (result !== 0) {
    res = result % 8
    result = Math.floor(result / 8)
    octalArray.push(res)
  }
  octalArray = octalArray.join('')
  octalNumber.innerHTML = octalArray.reverse()
  octalArray = []
}

// Sistema binario a sistema decimal
function binaryToDecimal () {
  var sum = 0
  let num = 0
  let binary = [] // Arreglo para almacenar las potencias de 2

  var decimalNumber = document.getElementById('decimalNumber-b')
  let result = document.getElementById('number-bd').value // numero del usuario
  let length = result.toString().length // Numero de caracteres del numero del usuario
  let binaryNumber = [] // Arreglo para almacenar el numero del usuario
  // Ciclo para almacenar cada caracter del numero de usuario al arreglo binaryNumber
  for (var i = 0; i < length; i++) {
    let element = parseInt(result.charAt(i))
    binaryNumber.push(element)
  }

  for (var i = 0; i < binaryNumber.length; i++) {
    num = Math.pow(2, i)
    binary.push(num)
  }
  let j = 0
  // Ciclo para sumar los valores binarios
  for (var i = binary.length - 1; i >= 0; i--) {
    if (binaryNumber[i] === 1) {
      sum += binary[j]
    }
    j++
  }
  decimalNumber.innerHTML = sum
  binary = []
  binaryArray = []
}

// Sistema octal a sistema decimal
function octalToDecimal () {
  let sum = 0
  let decimal = [] // arreglo para almacenar el numero decimal
  let octalArray = [] // arreglo para almacenar el numero octal del usuario
  let octalNumber = document.getElementById('decimalNumber-o')
  let result = document.getElementById('number-od').value // numero del usuario
  let length = result.toString().length
  for (var i = 0; i < length; i++) {
    let element = parseInt(result.charAt(i))
    octalArray.push(element)
  }
  let j = 0
  for (var i = octalArray.length - 1; i >= 0; i--) {
    let num = Math.pow(8, i) * octalArray[j]
    decimal.push(num)
    j++
  }
  for (var i = 0; i < decimal.length; i++) {
    sum = sum + decimal[i]
  }
  octalNumber.innerHTML = sum
  decimal = []
  octalArray = []
}

// Sistema decimal a hexadecimal
function toHexa () {
  var a = 'A'
  var b = 'B'
  var c = 'C'
  var d = 'D'
  var e = 'E'
  var f = 'F'
  let divResult
  let res // Residuo de la division
  let decimalArray = [] // Arreglo para almacenar el numero del usuario
  let hexadecimalValues = [] // Arreglo para almacenar las potencias de 16
  let hexadecimalNumbers = [] // Arreglo para almacenar el numero hexadecimal
  var hexadecimalNumber = document.getElementById('hexadecimalNumber')
  let result = document.getElementById('number-dh').value
  let length = result.toString().length
  for (var i = 0; i < length; i++) {
    let element = parseInt(result.charAt(i))
    decimalArray.push(element)
  }
  for (var i = 0; i <= decimalArray.length; i++) {
    let num = Math.pow(16, i)
    hexadecimalValues.push(num)
  }
  for (var i = 0; i <= decimalArray.length; i++) {
    if (hexadecimalValues[i] > parseInt(result)) {
      hexadecimalValues.splice(i)
      break
    }
  }
  hexadecimalValues = hexadecimalValues.reverse()
  divResult = parseInt(result)
  for (var i = 0; i < hexadecimalValues.length; i++) {
    res = divResult % hexadecimalValues[i]
    divResult = Math.floor(divResult / hexadecimalValues[i])
    hexadecimalNumbers.push(divResult)
    if (res <= 15) {
      hexadecimalNumbers.push(res)
      break
    }
    divResult = res
  }
  for (var i = 0; i < hexadecimalNumbers.length; i++) {
    switch (hexadecimalNumbers[i]) {
      case 10:
        hexadecimalNumbers[i] = a
        break
      case 11:
        hexadecimalNumbers[i] = b
        break
      case 12:
        hexadecimalNumbers[i] = c
        break
      case 13:
        hexadecimalNumbers[i] = d
        break
      case 14:
        hexadecimalNumbers[i] = e
        break
      case 15:
        hexadecimalNumbers[i] = f
        break
    }
  }
  hexadecimalNumber.innerHTML = hexadecimalNumbers.join('')
}

// Sistema hexadecimal a sistema decimal
function hexaToDecimal () {
  let mult = 0 // Multiplicacion del numero hexadecimal por la potencia
  let sum = 0 // Suma del resultado de la multiplicacion
  let hexadecimalValues = [] // Arreglo para almacenar las potencias de 16
  let hexadecimalNumber = [] // Arreglo para almacenar el numero del usuario
  let result = document.getElementById('number-hd').value // Numero del usuario
  let decimalNumber_h = document.getElementById('decimalNumber-h') // Variable para mostrar el numero decimal
  let length = result.length // Longitud de caracteres del numero
  for (var i = 0; i < length; i++) {
    let element = result.charAt(i)
    if (element === '0' || element === '1' || element === '2' || element === '3' || element === '4' || element === '5' || element === '6' || element === '7' || element === '8' ||
    element === '9') {
      element = parseInt(element)
    }
    hexadecimalNumber.push(element)
  }
  for (var i = hexadecimalNumber.length - 1; i >= 0; i--) {
    let value = Math.pow(16, i)
    hexadecimalValues.push(value)
  }
  for (var i = 0; i < hexadecimalNumber.length; i++) {
    switch (hexadecimalNumber[i]) {
      case 'A':
        hexadecimalNumber[i] = 10
        break
      case 'B':
        hexadecimalNumber[i] = 11
        break
      case 'C':
        hexadecimalNumber[i] = 12
        break
      case 'D':
        hexadecimalNumber[i] = 13
        break
      case 'E':
        hexadecimalNumber[i] = 14
        break
      case 'F':
        hexadecimalNumber[i] = 15
        break
    }
    mult = hexadecimalNumber[i] * hexadecimalValues[i]
    sum += mult
  }
  decimalNumber_h.innerHTML = sum
}
