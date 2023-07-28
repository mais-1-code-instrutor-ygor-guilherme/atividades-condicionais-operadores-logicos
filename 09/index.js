/*A Loja do Juninho está com uma super promoção. 
E na compra de qualquer produto você ganha desconto conforme a forma de pagamento seguindo a tabela seguinte.*/

/*| Forma de Pagamento | Desconto |
| ------------------ | -------- |
| credito            | 5%       |
| cheque             | 3%       |
| debito ou dinheiro | 10%      |*/

// tipo de pagamento (dinheiro, credito, debito, cheque).

const tipoDePagamento = "credito";
let valorDoProduto = 11051;
let valorFinal;

    switch(tipoDePagamento){
        case "credito":
            valorFinal = valorDoProduto - (valorDoProduto * (5/100));
            console.log("Valor a ser pago: R$",valorFinal);
            break
        case "cheque":  
            valorFinal = valorDoProduto - (valorDoProduto * (3/100));
            console.log("Valor a ser pago: R$",valorFinal );
            break  
        case "dinheiro":  
            valorFinal = valorDoProduto - (valorDoProduto * (10/100));
            console.log("Valor a ser pago: R$",valorFinal );
            break
        case "debito":  
            valorFinal = valorDoProduto - (valorDoProduto * (10/100));
            console.log("Valor a ser pago: R$",valorFinal );
            break            
        default:
            console.log("Forma de pagamento não encontrada");                   
    }

