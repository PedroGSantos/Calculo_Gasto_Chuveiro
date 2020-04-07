/*Declaração de variável booleana que permite que a lampada volte após ser quebrada*/
var quebrar = false;

alert("Seja bem vindo")
/*Função que deixa  lampada acesa caso ela não esteja quebrada*/
function acenderlampada(){
	if(quebrar==false){
		document.getElementById("lam").src="lampadaacesa.png";
	}
}

/*Função que deixa  lampada apagada caso ela não esteja quebrada*/
function apagarlampada(){
	if(quebrar==false){
		document.getElementById("lam").src="lampadaapagada.png";
	}
}
/*Função que quebra a lampada e deixa a variavel booleana verdadeira*/
function quebralampada(){
	document.getElementById("lam").src="lampadaquebrada.png";
	quebrar=true;
}
/*Função chamada por um botão que faz com que a lampada volte mesmo após ser quebrada*/
function voltarlampada(){
	document.getElementById("lam").src="lampadaapagada.png";
	quebrar=false;
}
/*Declaração de variáveis que auxiliam no processo de calculo do custo do chuveiro*/
var consumoemkwh = 0.0;
var consumor = 0.0;
var temphoras= 0.0;

/*Função que é chamada pelo botão de calcular e que, consequentemente, calcula e exibe a quantidade total de KWh por mês e o gasto em reais*/
function dea(){
	var pot=document.getElementById("txtpotc").value;
	var qtd=document.getElementById("txtqtd").value;
	var tempo=document.getElementById("txttempb").value;
	temphoras= tempo / 60;
	consumoemKWh= (pot*qtd*temphoras*30)/1000;
	consumor= consumoemKWh *0.30;
	if(consumor<0){
		consumor= -(consumor);
	}
	if(consumoemKWh<0){
		consumoemKWh= -(consumoemKWh);
	}
	alert("Quantidade total de KWh por mês: "+consumoemKWh);
	alert("Gasto em reais por mês: R$ "+consumor);
}

