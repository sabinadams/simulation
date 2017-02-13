var imports = require('./util/Barrel');

var resources = [];
var bots = [];
var simulating = false;
imports.app.get('/', (req, res) => {
	res.sendFile(__dirname + '/client/index.html');
});

imports.app.use('/client', imports.express.static(__dirname + '/client'));


imports.serv.listen(2000);
console.log('Server listening on port 2000.');

var io = require('socket.io')(imports.serv, {});
io.sockets.on('connection', (socket) => {
	

	//Initiates 6 bots
	for(i = 0; i < 6; i++){
		let location = imports.initialXY[i];
		let bot = new imports.Bot(location.x, location.y, i);
		bots.push(bot);
		socket.emit('initiate', { x: bot.getX(), y: bot.getY(), name: bot.getName() });
	}
	
	//Initiates 20 resources
	for(i = 0; i < 20; i++){
		let x = imports.rand(imports.options);
		let y = imports.rand(imports.options);
		socket.emit('newResource', {x: x, y: y, index:i});
		resources.push({x:x, y:y, index:i});
	}


	//Ends the simulation
	socket.on('endsimulation', () => {simulating = false});

	//Demo Simulation that removes a resource every 3 seconds and redraws the canvas
	socket.on('demo', () => {
		simulating = true;
		var simulation = setInterval(() => {
			if(simulating) socket.emit('test');
			else clearInterval(simulation);
		}, 1000);
	});
	
});

