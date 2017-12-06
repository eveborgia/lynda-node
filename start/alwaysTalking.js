var sayings = [
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", 
"Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.", 
"Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.",
"Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.", 
"Qui officia deserunt mollit anim id est laborum."
];
var interval = setInterval(function() {
	var i = Math.floor(Math.random() * sayings.length);
	process.stdout.write(`${sayings[i]} \n`);
}, 1000);
process.stdin.on('data', function(data) {
	console.log(`STDIN Data Received -> ${data.toString().trim()}`);
	clearInterval(interval);
	process.exit();
});