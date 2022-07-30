// Como podemos rodar isso em um arquivo .ts sem causar erros? 
let employee1 = {
    code: 10,
    name: 'John'
}


let employee2: { code: Number, name: String } = {
    code: 10,
    name: 'John'
}

interface Iemployee {
    code: number,
    name: string
}

let employee3: Iemployee = {
    code: 200,
    name: "john"
}

