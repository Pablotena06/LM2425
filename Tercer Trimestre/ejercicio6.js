<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 6</title>
    <script src="jquery-3.7.1.js"></script>
</head> 
<body>
    <h1>Titulo 1</h1>
    <p>parrafo 2</p>
    <p>parrafo 3</p>
    <img src="https://picsum.photos/200" alt="">
    <img src="https://picsum.photos/200" alt="">
    <img src="https://picsum.photos/200" alt="">
    <a href="https://www.google.com"></a>
    <a href="https://www.google.com"></a>
    <a href="https://www.google.com"></a>
    <a href="https://www.google.com"></a>    
    <a href="https://www.google.com"></a>
    <table border="1">
        <tr><th>Nº H1</th><th>Nº P</th><th>Nº IMG</th><th>Nº A</th></tr>
        <tr><td id="nh1"></td><td id="np"></td><td id="nimg"></td><td id="na"></td></tr>
    </table>
    <script>
        $(document).ready(function(){
            let nh1 = $("h1").length;
            let np = $("p").length;
            let nimg = $("img").length;
            let na = $("a").length;
            $("#nh1").text(nh1);
            $("#np").text(np);
            $("#nimg").text(nimg);
            $("#na").text(na);
        });
    </script>
</body>
</html>