const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? Nicknames are also acceptable: ', (answer) => {
  let name = answer;
  console.log(`Thank you ${name}. Nice to meet you.`)
  
  rl.question('What activity do you like to do?: ', (answer) => {
    let activity = answer;
 
    rl.question('What do you listen to while doing that?: ', (answer) => {
      let music = answer;
      
      rl.question('Which meal is your favourite?: ', (answer) => {
        let meal = answer;
  
        rl.question('What\'s your favourite thing to eat for that meal?: ', (answer) => {
          let favFood = answer;
  
          rl.question('Which sport is your absolute favourite?:  ', (answer) => {
            let sport = answer;

            rl.question('What is your superpower?: ', (answer) => {
              let superpower = answer;

                console.log(`Hello ${name}. You like to do ${activity} while you listen to ${music}. Your favourite meal is ${meal} because of ${favFood}. Your favourite sport is ${sport}. Your superpower is ${superpower} and that's super!`);

              rl.close();
            });
          });
        });
      });
    }); 
  });
});







// const stdin = process.stdin;

// stdin.setRawMode(true);
// stdin.setEncoding('utf8');

// stdin.on('data', (key) => {

//   //If you press ctrl-c it will exit
//   if (key === '\u0003'){
//     process.stdout.write("Thanks for using me, ciao!");
//     process.exit();
//   }
//   if(key === 'b'){
//     process.stdout.write('\x07');
//   }

//   if(Number(key)) {
//     process.stdout.write('setting timer for ' + key + " seconds...\n");

//     setTimeout(() => {
//     process.stdout.write('\x07');
//     }, key * 1000);
//   }


// });