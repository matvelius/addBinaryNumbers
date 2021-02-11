let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let lineIndex = 0
let num1Arr = []
let num2Arr = []
let outputArray = []
let carry = 0

function addBinaryDigits(digit1, digit2) {
    let sum = digit1 + digit2 + carry
    if (sum == 3) {
        carry = 1
        outputArray.push(1)
    } else if (sum == 2) {
        carry = 1
        outputArray.push(0)
    } else {
        carry = 0
        outputArray.push(sum)
    }
}

rl.on('line', function (line) {

    if (lineIndex == 0) {

        num1Arr = line.split('').map(item => parseInt(item))
        lineIndex += 1

    } else {

        num2Arr = line.split('').map(item => parseInt(item))

        const longerArray = num2Arr.length > num1Arr.length ? num2Arr : num1Arr
        const otherArray = longerArray == num1Arr ? num2Arr : num1Arr

        // pad shorter array with zeros in front
        const lengthDifference = longerArray.length - otherArray.length
        for (let i = 0; i < lengthDifference; i++) {
            otherArray.unshift(0)
        }

        for (let i = longerArray.length - 1; i >= 0; i--) {
            addBinaryDigits(longerArray[i], otherArray[i] ?? 0)
        }

        if (carry == 1) {
            outputArray.push(1)
        }

        console.log(outputArray.reverse().join(''))

        rl.close()
    }
})
















































// let readline = require('readline');
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false
// });

// let lineIndex = 0
// let num1Arr = []
// let num2Arr = []
// let outputArray = []
// let carry = 0

// function addBinaryDigits(digit1, digit2) {
//     // console.log(`adding ${digit1}, ${digit2}, and ${carry} (carry)`)
//     let sum = digit1 + digit2 + carry
//     // console.log(`sum: ${sum}`)
//     if (sum == 3) {
//         carry = 1
//         outputArray.push(1)
//     } else if (sum == 2) {
//         carry = 1
//         outputArray.push(0)
//     } else {
//         carry = 0
//         outputArray.push(sum)
//     }
//     // console.log('outputArray is now:')
//     // console.log(outputArray)
// }

// rl.on('line', function (line) {

//     if (lineIndex == 0) {

//         num1Arr = line.split('').map(item => parseInt(item))
//         // console.log(`num1Arr: ${num1Arr}`)
//         lineIndex += 1

//     } else {

//         num2Arr = line.split('').map(item => parseInt(item))
//         // console.log(`num2Arr: ${num2Arr}`)

//         const longerArray = num2Arr.length > num1Arr.length ? num2Arr : num1Arr
//         // console.log(`longerArray: ${longerArray}`)
//         const otherArray = longerArray == num1Arr ? num2Arr : num1Arr
//         // console.log(`otherArray: ${otherArray}`)

//         // pad shorter array with zeros
//         const lengthDifference = longerArray.length - otherArray.length
//         for (let i = 0; i < lengthDifference; i++) {
//             otherArray.unshift(0)
//         }

//         for (let i = longerArray.length - 1; i >= 0; i--) {
//             // console.log(`calling addBinaryDigits with ${longerArray[i]} and ${otherArray[i] ?? 0}`)
//             addBinaryDigits(longerArray[i], otherArray[i] ?? 0)
//         }
//         // longerArray.forEach((item, index) => {
//         //     console.log(`longerArray.forEach((${item}, ${index})`)
//         //     console.log(`calling addBinaryDigits with ${item} and ${otherArray[index] ?? 0}`)
//         //     addBinaryDigits(item, otherArray[index] ?? 0)
//         // })

//         if (carry == 1) {
//             outputArray.push(1)
//         }

//         console.log(outputArray.reverse().join(''))

//         rl.close()
//     }
// })
