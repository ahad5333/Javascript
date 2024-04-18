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
