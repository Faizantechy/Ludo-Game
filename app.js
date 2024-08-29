
//Generate a random number form 1 to 6


const firstRandomNumber=Math.floor(Math.random()*6)+1;

const secRandomNumber=Math.floor(Math.random()*6)+1;







const firstImage= 'dice'+firstRandomNumber+'.png';
const SecImage= 'dice'+secRandomNumber+'.png';
let h1=document.querySelector('.h1');



document.querySelectorAll('img')[0].setAttribute('src',firstImage)
document.querySelectorAll('img')[1].setAttribute('src',SecImage)


//condtions:

if(firstRandomNumber == 6 && secRandomNumber <firstRandomNumber){

h1.textContent='User 1 Is the Winner';  


    
} 

else if(secRandomNumber==6 && firstRandomNumber <secRandomNumber){

    h1.textContent='The User2 is the Winner';  


}

else if(firstRandomNumber==secRandomNumber){

    h1.textContent='The match is a tie';  

}



else{
    h1.textContent='' ;   

}












// let player1;




// let player2;

// const container=document.getElementById('Container')

// const click=document.getElementById('Click');

// const dice1=document.querySelector('.dice1')
// const dice2=document.querySelector('.dice2')


// click.onclick = function() {
//     const random1 = Math.floor(Math.random() * 6) + 1;
//     const random2 = Math.floor(Math.random() * 6) + 1;
  
//     player1 = `
//       <div class="dice">
//         <p class="para">Player 1</p>
//         <img src="/dice${random1}.png" alt="Dice ${random1}">
//       </div>`;
  
//     player2 = `
//       <div class="dice">
//         <p>Player 2</p>
//         <img src="/dice${random2}.png" alt="Dice ${random2}">
//       </div>`;
  
//     dice1.innerHTML = player1;
//     dice2.innerHTML = player2;
//   };

  
  
  
  
  
  
  
//   // const diceResult=document.getElementById('diceResult');
//     // const diceImage=document.getElementById('diceImage');

//     // const values=[];
//     // const images=[];



//     // function rollDice(){

//     //     const numOfDice = document.getElementById('numOfDice').value;
//     //     console.log(numOfDice);



//     //     // let random=Math.floor(Math.random()*6+1)

//     //     // diceResult.innerHTML=`<img src="${random}.png">`
//     //     // console.log(random);

//     // }



















// // function rollDice(){

// //     const numOfDice=document.getElementById('numOfDice').value;
// //     const diceResult=document.getElementById('diceResult');
// //     const diceImage=document.getElementById('diceImage');

// //     const values=[];
// //     const images=[];


    


// // }