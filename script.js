$(document).ready(function(){

	var divPai = $('.Graf');
	var btnCriar = $('#criarGraf');

	var graficoAtual = 0;

	btnCriar.click(function(){
		divPai.append("<div class='graficoContainer'><b> div grafico " + graficoAtual + "</b></div><p>");
		divPai.append("<blockquote><div class='plot'>div plot do grafico "+ graficoAtual + "</div></blockquote><p>");
		divPai.append("<blockquote><div class='drop'>div dropdowns do grafico " + graficoAtual +"</div></blockquote><p>");
		graficoAtual += 1;
	});

});