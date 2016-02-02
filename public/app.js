
window.onload = function(){
  //document is our entry point to manipulate the whole site via the DOM. 

  var init = function(){
    console.log('app started');
    var button = document.getElementById("add-button");

    console.log('button', button);

    var handleClicked = function(){
      console.log('Here are some quotes: ');
      var getText = document.getElementById("quote").value;
      console.log(getText);
    }
      
      //TO EDIT: 
      var quoteList = document.getElementById("quote-list");
      var newQuote = document.createElement('li');
      newFilm.innerText = getText;
      filmList.appendChild(newFilm);
    

    var form = document.getElementById('quote-form');

    form.onsubmit = function(event){
      console.log('event', event);
      //we dont need the above, it's just to help show us what's going on for an event
      event.preventDefault();
      handleClicked();
      button.onclick = handleClicked;

    }
  }

  //Here's how to ADD SOMETHING:
  var quoteArticle = document.createElement("article");
  quoteArticle.classList.add("quote");

  var blockquote = document.createElement("blockquote");
  blockquote.innerText = "New Quote, FILTHY! - ";

  var cite = document.createElement("cite");
  cite.innerText = "Some dude who said something." 

  var quoteArray = [ blockquote, cite ];

  var nameInput   = document.getElementById("name");
  var blockquoteInput = document.getElementById("blockquote");

  function insert(){
   blockquotes.push( blockquoteInput.value );
   names.push( nameInput.value );
 };


  // var aside = document.getElementById("aside");
  // aside.innerText = "Blah Blah Blaaaahhhhhhhh";


//NOW JOIN IT ALL UP: 
blockquote.appendChild(cite);

  //now my article needs the blockquote. We're joining them all up: 
  quoteArticle.appendChild(blockquote);

  //now attach it to the dom:
  var quotes = document.querySelector("section");
  quotes.insertBefore(quoteArticle,quotes.firstChild);



// //-----------------------------
// var articles = document.querySelectorAll("article");
// for (var i = 0; i < articles.length; i++) {
//   if (i%2 ===0){
//     articles[i].style.backgroundColor = "wheat";
//     articles[i].style.color = "tomato";
//   }else{
//     articles[i].style.backgroundColor = "tomato";
//     articles[i].style.color = "wheat";
//   }
// };

window.onload = init;

};

