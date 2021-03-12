// boucle for

let tab = ['Alice', 'Bob', 'Craig', 'Dan', 'Eve']

for (let i = 0; i < tab.length; ++i) {
  console.log(tab[i], `length: ${(tab[i].length)}`)
}

// boucle for of
let tabForof = ['Alice', 'Bob', 'Craig', 'Dan', 'Eve']

for (const elem of tabForof) {
  console.log(elem, 'length: ', elem.length)
}
//boucle for each

let tabForeach = ['Alice', 'Bob', 'Craig', 'Dan', 'Eve']

tabForeach.forEach(elem => {
  console.log(elem, 'length: ', elem.length)
})

// boucle While


let tabWhile = ['Alice', 'Bob', 'Craig', 'Dan', 'Eve']
let i = 0
while (i < tabWhile.length) {
  console.log(tabWhile[i], `length: ${tabWhile[i].length}`)
  i++
}


// boucle do-while

let tabDowhile = ['Alice', 'Bob', 'Craig', 'Dan', 'Eve']
let z = 0
do {
  console.log(tabDowhile[z], `length: ${tabDowhile[z].length}`)
  z++
} while (z < tabDowhile.length)