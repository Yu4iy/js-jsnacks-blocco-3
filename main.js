

const playerGeneral =	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
 	}

	 console.log(playerGeneral);
	 
	 
	 
const players = 
[
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},	{
		name: 'Paolo',
		surName: 'Duzioni',
		age: 28,
		cg: getPlayerCode().join(''),
		media:getRndInteger(0, 50),
		percentuale: getRndInteger(0, 100),
	},
	

]
console.log(players);



const filterMedia = players.filter((el)=> el.media > 35 && el.percentuale > 80)


console.log(filterMedia);











function getPlayerCode(){
		 const cg = []

		for(let i = 0 ; i < 3; i++){
			const words = 'QWERTYUIOPASDFGHJKLZXCVBNM';
			const number = getRndInteger(0, words.length)	 
		  words.split('')
		  const leter = words[getRndInteger(0, words.length)];
		  cg.push(leter,number)
		  
	  }
	  return cg
	  
}

	
function getRndInteger(minimum, maximum){ 
			return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

	