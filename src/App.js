import logo from './logo.svg';
import './App.css';

function App() {
  return (
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

  );
}

export default App;