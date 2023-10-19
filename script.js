let numer = Number(prompt('Escreva o numerador'))
        let denom = Number(prompt('Escreva o denominador'))
        
        if(denom == 0){
            alert('Não é possível dividir por zero.')
        }
        else{
            let divisao = (numer / denom)
            alert(`${numer} dividido por ${denom} é ${divisao.toFixed(1)}.`)
        }