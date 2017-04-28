// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

let algarismoRomano = ['III','II','IV','I','VI','V','VII'];

	$.ajax({
		url: 'http://swapi.co/api/films/',
		type: 'GET',
		success: function(result){
			//$("#movies ul").html(result);
			console.log(result);
			$('#movies ul').html(null);
			for(let filmes of result.results)
			{
				$('#movies ul').append($('<li>Episode ' + algarismoRomano[filmes.episode_id-1]+'</li>')
	        	.attr('data-episode-url' , filmes.url));
	        	$('.reading-animation').append('Episode '+algarismoRomano[filmes.episode_id-1]+'\n'+filmes.title+'\n\n'+filmes.opening_crawl);
	        	//document.querySelector('.reading-animation').innerHTML='Episode '+algarismoRomano[i]+'\n'+result.results.title+'\n\n'+result.results.opening_crawl;
	        	//$('.reading-animation').append(filmes.opening_crawl);
	        	//.attr('.reading-animation', filmes.opening_crawl);
			}
//			$('.reading-animation').append('Episode '+algarismoRomano[1]+'\n'+result.results.title+'\n\n'+result.results.opening_crawl);
//			for(i=0;i<7;i++){
//				document.querySelector('.reading-animation').innerHTML='Episode '+algarismoRomano[i]+'\n'+result.title+'\n\n'+result.opening_crawl;
//			}
		}
	});

function starwars(event){
	$.ajax({
		url: 'http://swapi.co/api/films/',
		type: 'GET',
		success: function(resultado){
			$('#movies ul').html(null);
			for(let filmes2 of resultado.results)
			{
	        	$('.reading-animation').append('Episode '+algarismoRomano[filmes2.episode_id]+'\n'+filmes2.title+'\n\n'+filmes2.opening_crawl+'\n');
			}
		}
	});
}

function inicia ()
{
	let classicos = document.querySelectorAll("#movies li");
	for(let a of classicos) {
	 	a.addEventListener('click',starwars,false);
	 }
}

document.addEventListener("DOMContentLoaded",inicia,false);