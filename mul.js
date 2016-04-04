var readline= require('readline');
var rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});
var i;
function processMul(x){
		console.log('products are \n');
		for(i=1;i<=x;i++){
			console.log( 1, '*',i,'=',i );	
		}
	}

rl.question('enter the limit:  ',function(x){
	for(i=1;i<=x;i++){
	var pro = parseFloat(x)*parseFloat(i);}
		processMul(pro)
		rl.close;
	});

	
	


	