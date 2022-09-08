

// part 1
// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.


// let faveNum = 7;
// let link = `http://numbersapi.com/${faveNum}?json`;

// $.getJSON(link).then(data=>console.log(data));

  
  // 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

// let faveNums = [1,2,3,4,5,6];
// let link = `http://numbersapi.com/${faveNums}?json`;
// $.getJSON(link).then(data=>console.log(data));

  
// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

// let faveNum = 7;
// let fourFacts = [];
// let link = `http://numbersapi.com/${faveNum}?json`;

// for (let i = 1; i < 5; i++) {
// fourFacts.push(
//     $.getJSON(link)
// );
// }

// Promise.all(fourFacts).then(data=>data.forEach(x=>console.log(x)))
  
// part 2 - DECK OF CARDS
// 1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
// let baseURL = "http://deckofcardsapi.com/api/deck/new/draw/?count=1"
// $.getJSON(baseURL).then(data=>console.log(data.cards[0].suit,data.cards[0].value))


// 2. Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.
// Once you have both cards, console.log the values and suits of both cards.

// let drawOne = "http://deckofcardsapi.com/api/deck/new/draw/?count=1"
// $.getJSON(drawOne).then(data=>{console.log(data.cards[0].suit,data.cards[0].value); return $.getJSON(drawOne) }).then(data=>{console.log(data.cards[0].suit,data.cards[0].value)});


// 3. Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

let deckId;
let deck = "http://deckofcardsapi.com/api/deck/new/shuffle/";
let selected = '';

$.getJSON(deck).then(data=>{
    deckId = data.deck_id});

$('.button').on('click',function(){
    $.getJSON(`http://deckofcardsapi.com/api/deck/${deckId}/draw`).then(data=>{
    selected=data.cards[0].suit +' '+ data.cards[0].value; console.log(selected);

    if(selected){
        $('.drawn-card').append('<li>'+selected+'</li>')
    };
    if(data.remaining==0){
        $('.button').remove();
    }


});

});



  
  
  // NOTES FROM CLASS
  
  // let fourPokemonPromises = [];
  // for (let i=1;i<5;i++){
      //     fourPokemonPromises.push(
          //         axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
          //     );
          // }
          
          // Promise.all(fourPokemonPromises)
          // .then(pokemonArr => (
              //     pokemonArr.forEach(p=> console.log(p.name))
              // ))
              // .catch(err=> console.log(err));
              
              
              // function get(url){
                  //     const request = new XMLHttpRequest();
                  //     return new Promise((resolve,reject)=>{
                      //         let probSuccess = 0.5;
                      //         let requestTime = 1000;
                      
                      //         setTimeout(function(){
//             let randomNum = Math.random();
//             if (randomNum < probSuccess){
    //                 let data = "here's your data";
    //                 resolve(JSON.parse(request.response));
    //             } else {
        //                 reject(request.status);
        //             }
        //         },requestTime);
        
        //         request.onerror= function handleError(){
            //             request = null;
            //             reject()
            //         }
            
            //         request.open('GET',url);
            //         request.send();
            //     });

            // }
            
            
            // get('http://www/')
            // .then(res=>console.log(res))
            // .catch(err=>console.log(err))





// function numberApi(url){
//     const faveNum = 7
//     const request = new XMLHttpRequest();
//     return new Promise((resolve,reject)=>{



//     })
//     }
    
//     request.send();
// }


// get('http://numbersapi.com/'+faveNum)
// .then(res=>console.log(res))
// .catch(err=>console.log(err))


// ----------------------------------
// function get(url){
//     const request = new XMLHttpRequest();
//     return new Promise((resolve,reject)=>{
//         let probSuccess = 0.5;
//         let requestTime = 1000;
    
//         setTimeout(function(){
//             let randomNum = Math.random();
//             if (randomNum < probSuccess){
//                 let data = "here's your data";
//                 resolve(JSON.parse(request.response));
//             } else {
//                 reject(request.status);
//             }
//         },requestTime);

//         request.onerror= function handleError(){
//             request = null;
//             reject()
//         }

//         request.open('GET',url);
//         request.send();
//     });

// }