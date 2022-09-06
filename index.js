//algoritimo de arvore de busca
console.log("....arvore....")
const scan = process.stdin
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

scan.on('data', (data) => {

    let number = parseInt(data.toString())
    searchTree(number)
    process.exit()

})
function searchTree(n) {
    while (1) {
        let metade = parseInt(array.length / 2)
        if (array[metade] == n) {
            console.log('achou!')
            break;

        } else if (array.length < 2) {
            console.log("não encontrado")
            break
        }
        if (array[metade] < n) {
            array.splice(0, metade)
            console.log(array)

        } else {
            array.splice(metade, metade)
            console.log(array)
        }
    }
}