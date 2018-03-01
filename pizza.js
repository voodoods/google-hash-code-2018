const pizza = `
6 7 1 5
TMMMTTT
MMMMTMM
TTMTTMT
TMMTMMM
TTTTTTM
TTTTTTM
`

const r = pizza.split(" ")[0] // rows 
const c = pizza.split(" ")[1] // columns
const l = pizza.split(" ")[2] // minimum count of ingredient type on a slice
const h = pizza.split(" ")[3].split(/\n/)[0] // maximum number of tiles in a count

const exampleSlice = ["T", "T", "T", "M"]

const filterVeggies = data => {
  const datalist = data.split("")
  return datalist.filter(char => !char.match(/\n|[" "]|[0-9]/) )
}

const checkSlice = slice => {
  let tomatoes = 0
  let mushrooms = 0
  slice.map(ingredient => {
    ingredient === "T" ? tomatoes++ : mushrooms++
  })
  return tomatoes > 0 && mushrooms > 0
}

const veggies = filterVeggies(pizza)

console.log(veggies)
console.log(checkSlice(exampleSlice))