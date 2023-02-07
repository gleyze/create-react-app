import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//HTML
<div>

<button id="duplicateBtn" class="btn">Duplicate</button>

<button id="changeBGColorBtn" class = "btn">Change Background Color</button>

<button id="changeTitleBtn" class = "btn">Change title</button>

<button id="deleteBtn" class = "btn">Delete</button>

<section class="all">
<header class ="header">
  <h1 id = "mainTitle" class="title">Shiny Fuecoco!!!</h1>
  </header>
<section class="paragraph">
  <img src = "https://www.serebii.net/Shiny/SV/new/909.png" width= "300">
  </img>
  
  <p>
"This is shiny Fuecoco. A low shiny quality Fuecoco. Fuecoco best boy. Fuecoco head empty. Fuecoco is a bipedal crocodilian Pokémon with a mostly red body and a white stomach and face. Its body contains a small flame sac, which constantly leaks fire energy due to its size. Fuecoco is laid-back and does things at its own pace. It enjoys eating, and it will rush towards any food it sees."
  </p>

    <button id = "detailBtn" class="detailButton"> Detail</button>
    
   </section>
  
</section>

</div>


//CSS





//JS
const duplicateBtn = document.querySelector('#duplicateBtn');

const changeColorButton = document.querySelector("#changeBGColorBtn");

const changeTitle = document.querySelector("#changeTitleBtn");

const deleteBtn = document.querySelector("#deleteBtn");

const firstCard = document.querySelector('.all');

const fuecocoDescription = document.querySelector('p');

const detailBtn = document.getElementById("detailBtn");

fuecocoDescription.style.display = "none";

duplicateBtn.addEventListener("click", function(e){   
 const cloneCard =  firstCard.cloneNode(true);
  document.body.appendChild(cloneCard);       
});

//change details button to hot pink when hovered
detailBtn.addEventListener("mouseenter", (event) => {
  // highlight the mouseenter target
  event.target.style.background= "hotpink";
  
});



detailBtn.addEventListener("mouseleave", (event) => {
  // highlight the mouseenter target
  event.target.style.background = "";
  detailBtn.blur()
});


//hide paragraph
detailBtn.addEventListener("click", function(e){
   var paragraphs = fuecocoDescription;
  if (paragraphs.style.display === "none"){
    paragraphs.style.display = "block"
  } else {
    paragraphs.style.display = "none";
  }
  
});

//change bg color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

changeColorButton.addEventListener("click", function(e){   
     firstCard.style.backgroundColor = getRandomColor(); 
});


//change title text
changeTitle.addEventListener("click", function(e){   
  var x = document.getElementById("mainTitle");
  if (x.innerHTML === "Shiny Fuecoco!!!:)") {
    x.innerHTML = "Something Else";
  } else {
    x.innerHTML = "Shiny Fuecoco!!!:)";
  }
});


//delete duplicates
deleteBtn.addEventListener("click", function(e){ 
  document.body.removeChild(document.querySelector('.all'));
});





