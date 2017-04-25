// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

let algarismoRomano = ['I','II','III','IV','V','IV','VII'];

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
        	.attr({ 'data-episode-url' : filmes.url}));
		}
	}
});

