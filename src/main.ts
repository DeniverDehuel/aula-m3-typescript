// // let nome: any = "joao";
// // let preco: number = 29.90;
// // let aberta: boolean = true;

// // let preços: number[] = [20.90, 19.90, 10.90];
// // let item: string[] = [];


// // let exemplo = 3;
// // let exemplo2: any = 0;

// import emReais from "./comanda";

// const itens: string[] = [];
// const precos: number[] = [];
// const quantidades: number[] = [];

// function adicionar(item: string,
//         precoCentavos: number,
//         quantidade: number): void
// {
//     itens.push(item);
//     precos.push(precoCentavos);
//     quantidades.push(quantidade);

// }

// function emReais(centavos: number): string{
//     return "R$" + (centavos / 100).toFixed(2);
// }


// export default emReais;
import { ItemComanda,comanda } from "./comanda";

const mesa7 = new comanda(7)
const burguer = new ItemComanda("X-Burguer", 19.90, 1);
mesa7.adicionar(burguer);

console.log(mesa7.fechar());

