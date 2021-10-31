<script >
    var objetos = new Array(); 
    objetos[0] = "https://i.pinimg.com/originals/5a/3c/1e/5a3c1e3cad90283fa4bc7caf785cd646.jpg";
    objetos[1] = "https://i.pinimg.com/originals/ed/83/5f/ed835fee3fa96615e8aa2c30422868a8.jpg";
    objetos[2] = "https://i.pinimg.com/originals/19/e6/fb/19e6fbefd6178c9bd8bd6fb0866f6d7e.jpg";
    objetos[3] = "https://i.pinimg.com/originals/9f/72/a4/9f72a4ec83f272d547faa656c731cf75.jpg";
    objetos[4] = "https://i.pinimg.com/originals/42/72/4c/42724c332b7c0a00dcb989bc51647bbe.jpg";
    objetos[5] = "https://i.pinimg.com/originals/7f/68/c7/7f68c77e8584cb637cb960d0d7064a5f.jpg";
    function aleatorio() {
        var azar = Math.floor(Math.random()*objetos.length);
        document.images["imagen"].src = objetos[azar];
    }
</script>
