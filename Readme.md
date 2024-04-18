##project1 Changing background color using javascript
``` javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BackGround Changer | javascript</title>
    <style>
        .box{
            text-align: center;

        }
        .box h1{
            text-decoration: underline;
            margin-bottom: 50px;
        }
        button{
            margin-top: 100px;
            font-size: 20px;
            text-transform: capitalize;
            border-radius: 10px;
            padding: 5px 20px;
        }
    </style>

</head>
<body>
    <div class="box">

        <h1>BackGround Changing app</h1>
        <p>click below boxes to change the color of the BackGround</p>
        <button class="change" id="red">red</button>
        <button class="change"id = "yellow">yellow</button>
        <button class="change" id = "green">green</button>
        <button class="change" id = "purple">purple</button>
        <button class="change" id="orange">orange</button>

    </div>
   
    

    <script>
        const bg = document.querySelector("body")
        const btn = document.querySelectorAll(".change");
        btn.forEach(function(button) {
            button.addEventListener("click",function(e){
                if(e.target.id === "red"){
                    bg.style.backgroundColor  = "red";
                    bg.style.color= "white"
                }
                if(e.target.id === "yellow"){
                    bg.style.backgroundColor  = "yellow";
                    bg.style.color = "black"
                }
                if(e.target.id === "green"){
                    bg.style.backgroundColor = "green";
                    bg.style.color = "white"
                }
                if(e.target.id === "purple"){
                    bg.style.backgroundColor = e.target.id;
                    bg.style.color = "white"
                }
                if(e.target.id === "orange"){
                    bg.style.backgroundColor = e.target.id;
                    bg.style.color = "black"
                }
            })
            
        });

    </script>
</body>
</html>
```

##Project 2 Counter App 
``` javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Counter App</title>
  <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    .counter {
      margin-top: 200px;
      height: 50vh;
      text-align: center;
      padding-top: 10px;
      font-size: 40px;
      text-transform: uppercase;
      color: white;
      background-color: brown;
    }
    p {
      margin-top: 40px;
      font-size: 60px;
    }
    #counter {
      color: black;
    }
    #counter.red {
      color: red; 
    }
    #counter.blue {
      color: blue; 
    }
    #btn{
      text-align: center;
    }
    #btn button {
      margin-left: 10px;
      margin-top: 50px;
      font-size: 30px;
      padding: 10px;
      border-radius: 15px;
      outline: none;
      border: none;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="counter">
    <h1 class="heading">Counter App</h1>
    <p id="counter" class="">0</p>
  </div>

  <div id="btn">
    <button onclick="Increase()" class="clickMe">Increase</button>
    <button onclick="Reset()" class="clickMe">Reset</button>
    <button onclick="Decrease()" class="clickMe">Decrease</button>
  </div>

  <script>
    let count = 0;
    let counterDisplay = document.getElementById("counter");

    function Increase() {
      count++;
      updateCounter();
    }

    function Decrease() {
      count--;
      updateCounter();
    }

    function Reset() {
      count = 0;
      updateCounter();
    }

    function updateCounter() {
      counterDisplay.textContent = count;
      counterDisplay.classList.remove("red", "blue"); 
      if (count < 0) {
        counterDisplay.classList.add("blue"); 
      } else if (count > 0) {
        counterDisplay.classList.add("yellow"); 
      }
    }
  </script>
</body>
</html>

```

##Project 3 | Score card App 
```javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ScoreBoard</title>
  <style>
    body {
      background-color: black;
    }
    .box {
      background-color: white;
      margin: auto;
      width: 400px;
      height: 400px;
      border-radius: 50px;
      margin-top: 250px;
      text-align: center;
      padding-top: 50px;
    }
    h1 {
      text-decoration: underline;
    }
    p {
      font-size: 40px;
    }
    .score-btn {
      margin-top: 100px;
    }
    .score-btn button {
      cursor: pointer;
      font-size: 20px;
      border-radius: 5px;
      margin-left: 5px;
      border: none;
      outline: none;
      background-color: green;
      color: white;
      padding: 5px 15px;
    }
    button:hover {
      background-color: rgb(95, 186, 95);
    }
  </style>
</head>
<body>
  <div class="box">
    <h1>Batsmen Score Card:-</h1>
    <p class="scoreCount">0</p>
    <div class="score-btn">
      <button onclick="oneRun()">1</button>
      <button onclick="twoRun()">2</button>
      <button onclick="fourRun()">4</button>
      <button onclick="sixRun()">6</button>
      <button onclick="wicket()">Wicket</button>
    </div>
    <p id="totalScore">Total score: 0</p>
  </div>
  <script>
    let scoreParagraph = document.querySelector(".scoreCount");
    let totalScoreParagraph = document.getElementById("totalScore");
    let run = 0;
    let totalRun = 0; 

    function oneRun() {
      run += 1;
      scoreParagraph.textContent = run;
      totalRun += run;
      totalScoreParagraph.textContent = "Total score: " + totalRun;
    }

    function twoRun() {
      run += 2;
      scoreParagraph.textContent = run;
      totalRun += run;
      totalScoreParagraph.textContent = "Total score: " + totalRun;
    }

    function fourRun() {
      run += 4;
      scoreParagraph.textContent = run;
      totalRun += run;
      totalScoreParagraph.textContent = "Total score: " + totalRun;
    }

    function sixRun() {
      run += 6;
      scoreParagraph.textContent = run;
      totalRun += run;
      totalScoreParagraph.textContent = "Total score: " + totalRun;
    }

    function wicket() {
      run = 0;
      scoreParagraph.textContent = run;
      totalScoreParagraph.textContent = "Total score: " + totalRun;
    }
  </script>
</body>
</html>

```
