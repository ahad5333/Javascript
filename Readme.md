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
##Project 4 || Nature PortFolio  - used onclick event when we click on mountain button mountain images appear and when onclicking on greenary greenary images will appear
``` javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Changing tab using JavaScript</title>
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .box{
            height: 100vh;
            width: 100vw;
        }
        .Portfolio{
            padding-top: 50px;
            text-align: center;
            color:#37517e ;
            text-transform: uppercase;
            position: relative;

        }
        .Portfolio::after{
            content: "__";
            display: block;
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            padding-bottom: 10px; 
            color: blue;
            font-weight: bold;
        }
        .portfolio-para{
            font-size: 30px;
            text-align: center;
            margin-left: 200px;
            width: 70%;
            margin-top: 90px;
            margin-bottom: 90px;
        }
        .button-btn{
            display:flex ;
            justify-content: center;
            gap: 10px;
        }
        .btn{
            font-size: 18px;
            border: none;
            padding: 5px 20px;
            background-color:grey;
            border-radius: 30px;

        }
        .btn:hover{
            background-color: #37517e;
            color: white;
        }
        .image-part{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img {
            text-align: center;
            margin-top: 50px;
            width: 300px;
            height: 300px;
            border-radius: 30px;
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div class="box">

    
    <h1 class="Portfolio">Nature Portfolio</h1>
    <p class="portfolio-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati neque rem excepturi, placeat ad, hic omnis repellendus iure voluptatibus cupiditate, quas est!</p>
    <div class="button-btn">
    <button class="btn" id="btn1">Mountain</button>
    <button class="btn" id="btn2">City</button>
    <button class="btn" id="btn3">Greenary</button>
    <button class="btn" id="btn4">Snowfall</button>
</div>
<div class="image-part" id="image-part">
</div>
</div>

   <script>
    const allButtons = document.getElementsByClassName("btn");
for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function(event) {
    
    const buttonText = event.target.textContent;
    if (buttonText === "Mountain") {
      document.body.style.backgroundColor = "grey";
      const imageUrls = [
        "https://cdn.pixabay.com/photo/2023/12/06/08/41/mountain-8433234_640.jpg",
        "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_640.jpg",
        "https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_640.jpg",
        

      ];
      const imagePart = document.getElementById("image-part");
      imagePart.innerHTML = ""; 
      imageUrls.forEach(url => {
        const image = document.createElement("img");
        image.src = url;
        imagePart.appendChild(image);
      });
    } 
    if (buttonText === "City") {
      document.body.style.backgroundColor = "grey";
      const imageUrls = [
       
      "https://cdn.pixabay.com/photo/2023/03/15/10/14/hamburg-7854198_640.jpg",
        "https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscrapers-3184798_640.jpg"
        
        
        

      ];
      const imagePart = document.getElementById("image-part");
      imagePart.innerHTML = ""; 
      imageUrls.forEach(url => {
        const image = document.createElement("img");
        image.src = url;
        imagePart.appendChild(image);
      });
    } 
    if (buttonText === "Greenary") {
      document.body.style.backgroundColor = "grey";
      const imageUrls = [
      "https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/09/20/06/27/bridge-2767545_1280.jpg"
        

      ];
      const imagePart = document.getElementById("image-part");
      imagePart.innerHTML = ""; 
      imageUrls.forEach(url => {
        const image = document.createElement("img");
        image.src = url;
        imagePart.appendChild(image);
      });
    }
    if (buttonText === "Snowfall") {
      document.body.style.backgroundColor = "grey";
      const imageUrls = [
      "https://cdn.pixabay.com/photo/2024/01/29/16/06/mountains-8540334_640.jpg",
      "https://cdn.pixabay.com/photo/2022/11/19/15/09/leaf-7602314_640.jpg",
      "https://cdn.pixabay.com/photo/2022/06/18/07/46/matterhorn-7269334_640.jpg"
        

      ];
      const imagePart = document.getElementById("image-part");
      imagePart.innerHTML = ""; 
      imageUrls.forEach(url => {
        const image = document.createElement("img");
        image.src = url;
        imagePart.appendChild(image);
      });
    }
  });
}
   </script> 
</body>
</html>
```
