const contentFooter = `
<div class="row limited">
<section class="column medium-6 large-blog">
    <h2>Inglés Sin Complicaciones</h2>
    <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./blog.html">Blog</a></li>
        <li><a href="./SobreMi.html">Sobre mi</a></li>
    </ul>
</section>

<section id="registro" class=" column medium-6 large-sidebar">
    <h2>Regístrate al newsletter</h2>
    <form action="https://formspree.io/f/mzbqzwby"
    method="POST">
        <input type="email" name="email">
        <button class="button_style">Enviar</button>
    </form>
</section>
</div>
<hr class="row limited line">
<section class="redes row limited">

<ul>
    <li><img src="./images/facebook.svg" alt="icono facebook"></li>
    <li><img src="./images/twitter.svg" alt="'icono twitter"></li>
    <li><img src="./images/instagram.svg" alt="icono instagram"></li>
    <li></li>
</ul>

<p>Copyright © 2023 Inglés sin complicaciones by Yoa_Diaval</p>
</section >
`;

const footer = document.createElement("footer");
footer.innerHTML = contentFooter;
footer.classList.add("clearfix");

document.querySelector("body").append(footer)