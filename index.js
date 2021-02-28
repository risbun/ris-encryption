const readline = require('readline');

var fulltext = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('input ', (answer) => {
	words = answer.split(" ");
	for(var word = 0; word < words.length; word++){
		for(var letter = 0; letter < words[word].length; letter++){
			var l = words[word][letter];
			if(fulltext[letter] == undefined){
				fulltext[letter] = l;
			}else{
				fulltext[letter] += l;
			}
		}
	}
	console.log(fulltext.join(""));
	rl.close();
});
