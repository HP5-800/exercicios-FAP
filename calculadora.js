/*Faça uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair
Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.
Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 
É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. */


var n1, n2
    var op = window.prompt(parseInt(`Escolha a operação que deseja calcular ou digite 0 para sair: \n 1: Soma \n 2: Subtração \n 3: Multiplicação\n 4: Divisão \n 0: Sair`))
    
    if(op == 0){ 
        window.alert(`Programa encerrado.`)
    }else if(op == 1){
        var n1 = window.prompt(parseInt(`Informe o primeiro número: `))
        var n2 = window.prompt(parseInt(`Informe o segundo número: `))
        window.alert(`${n1} + ${n2} = `, (n1 + n2))
    }else if(op == 2){ 
        var n1 = window.prompt(parseInt(`Informe o primeiro número: `))
        var n2 = window.prompt(parseInt(`Informe o segundo número: `))
        window.alert(`${n1} - ${n2} = `, (n1 - n2))
    }else if(op == 3){ 
        var n1 = window.prompt(parseInt(`Informe o primeiro número: `))
        var n2 = window.prompt(parseInt(`Informe o segundo número: `))
        window.alert(`${n1} x ${n2} = `, (n1 * n2))
    }else if(op == 4){ 
        var n1 = window.prompt(parseInt(`Informe o primeiro número: `))
        var n2 = window.prompt(parseInt(`Informe o segundo número: `))
        window.alert(`${n1} / ${n2} = `, (n1 / n2))
    }else{
        window.alert(`ERRO. Opção inválida.`)
    }
