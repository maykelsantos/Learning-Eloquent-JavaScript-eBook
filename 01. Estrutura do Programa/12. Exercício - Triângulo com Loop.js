// Escreva um programa que faça sete chamadas a console.log() para retornar o seguinte triângulo:

/*
#
##
###
####
#####
######
#######
*/

let caixa = `#`
for (c = 1; c < 8; c++) {
    console.log(caixa)
    if (c < 8) {
        caixa = caixa + `#`
    }
}