var lado1 = 2
var lado2 = 2
var lado3 = 2
if ( lado1 == lado2 && lado2 == lado3) {
    console.log(`Este triângulo é Equilatero`)
} else if ( lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
    console.log(`Este triângulo é Escaleno`)
} else {
    console.log(`Este triângulo é Isósceles`)
}