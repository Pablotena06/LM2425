<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
    <script src="jquery-3.7.1.js"></script>
</head>
<body>
    <h1 class="encabezado">Encabezado nivel 1</h1>
    <p class="par">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis rem voluptatem ullam omnis. In omnis, numquam aperiam itaque excepturi dolor maiores officia ducimus, deserunt possimus deleniti tenetur, et voluptas eos?</p>
    <p class="impar">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam facere ipsum nemo repellat nostrum beatae fuga? Saepe ab, perspiciatis quaerat totam quas laudantium laborum natus inventore illum dicta? Voluptatem, sit!</p>
    <p class="par">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cupiditate tempore architecto quasi eaque veritatis. Dolores beatae, ullam harum pariatur eos facere reiciendis eius at, nulla labore perspiciatis ipsam itaque.</p>
    <button id="aparecer">Menos grande</button>
    <button id="ocultar">Más grande</button>
    <script>
        $(document).ready(function () {
            $("#aparecer").click(function(){
                $(".encabezado").css("font-size", "0.8em");
                $(".encabezado").css("color", "blue");
                $(".par").css("font-size", "0.8em");
                $(".par").css("color", "blue");
                // para hacerlo en una misma línea $(".encabezado").css({"font-size":"0.8em","color":"blue"});
            });
            $("#ocultar").click(function(){
                $(".encabezado").css("font-size", "2em");
                $(".encabezado").css("color", "purple");
                $(".par").css("font-size", "2em");
                $(".par").css("color", "purple");
            });
        });
    </script>
</body>
</html>