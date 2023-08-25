$(function(){
    $('button').bind('click',function(){
        let altura = $('#altura').val();
        let peso = $('#peso').val();

        altura = altura.replace(',', '.');
        peso = peso.replace(',', '.');

        let imc = peso / (altura * altura);
        let traducao;

        if (imc < 16){
            traducao = 'baixo peso muito grave';
        } else if (imc >= 16 && imc < 16.99){
            traducao = 'baixo peso grave';
        } else if (imc >= 17 && imc < 18.49){
            traducao = 'baixo peso';
        } else if (imc >= 18.50 && imc < 24.99){
            traducao = 'peso normal';
        } else if (imc >= 25 && imc < 29.99){
            traducao = 'sobrepeso';
        } else if (imc >= 30 && imc < 34.99){
            traducao = 'obesidade grau 1';
        } else if (imc >= 35 && imc < 39.99){
            traducao = 'obesidade grau 2';
        } else if (imc >= 40){
            traducao = 'obesidade grau 3';
        }

        $('#resultado').html("Seu IMC é: " + imc.toFixed(2) + " kg/m2 e seu status é: " + traducao);
    });
});
