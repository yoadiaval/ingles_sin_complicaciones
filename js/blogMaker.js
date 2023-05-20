class Entry_blogs {
    constructor(img, credits, title, href, description){
        this.img = img;
        this.credit = credits;
        this.title = title;
        this.href = href;
        this.description = description;
    }
    get make_entry(){
        return `
        <figure class="figure_entry">
            <img   class="img_entry" src="${this.img}" load="lazy" alt="chica estudiando">
            <p class="labeled">Photo by <a href="${this.credit}">Glen Carrie</a> on <a href="https://unsplash.com/s/photos/words?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </figure>
        <div class="description">
            <h2 class="h2_entry"><a href="${this.href}">${this.title}</a></h2>
            <p><a href="./blog.html">Blog</a> &#47;</a> <a href="./SobreMi.html">Por Yoa Diaval</a></p>
            <p>${this.description}</p>
            <p><a href="./estudiar_ingles_en_academia_lo_que_necesitas_saber.html">Leer más>></a></p>
        </div>
    `;
    }
};

// creacion entradas individuales 
const entry1 = new Entry_blogs(
    "./images/grupo estudiantes en aula.jpg",
    "https://unsplash.com/@glencarrie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Estudiar inglés en una academia. Lo que necesitas saber.",
    "./estudiar_ingles_en_academia_lo_que_necesitas_saber.html",
    "Hola de nuevo 🙂. Puede que estés en alguna de las siguientes posiciones: Estudiar de forma autodidacta ha terminado por superarte. Tienes los recursos para pagarte una academia o asistencia personalizada y pasas de ser tu propio guía. Vas corto de tiempo para certificarte por el motivo que sea (trabajo, estudios, etc). Proximidad de un..."
);

const entry2 = new Entry_blogs(
    "./images/img_vocabulario.jpg",

    "https://unsplash.com/@glencarrie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",

    "Buenas prácticas para aprender vocabulario",

    "./buenas_practicas_para_aprender_vocabulario.html",

    "Hola chicos 🙂 hace ya algún tiempo invertí numerosas horas buscando tips sobre cómo aprender vocabulario en inglés. A cada rato encontraba sitios que me sugerían aprenderme “equis” cantidad de palabras al día, pero con suerte, yo solo recordaba las dos o tres últimas que había visto el día anterior. Si a eso le sumo …"
);

const entry3 = new Entry_blogs(
    "./images/chica-estudiando-en-cama.jpg",
    "",
    "¿Cómo puedo practicar listening?",
    "./como_practicar_listening.html",
    "Hola chicos, esta vez os quiero comentar sobre mi método para entrenar listening y al final les doy 2 bonotips para potenciar sus prácticas con el speaking 😜. Adaptar el oído a un idioma diferente al nuestro, suele ser un proceso engorroso al principio. Por otra parte, mientras no entiendas lo que escuchas te molestará …"
);

const entry4 = new Entry_blogs(
    "./images/estudio_autodidacta.jpg",
    "https://unsplash.com/@craftedbygc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Estudiar inglés de forma autodidacta o pagar por clases",
    "./estudiar_ingles_autodidacta_o_pagar_clases.html",
    "Es muy común que te digan que estudiar inglés de forma autodidacta es muy fácil. Con todo lo que hay en internet es solo ponerte. La red de redes está llena de materiales. Pero pasa que a pesar de toda esa información que tienes a tu alcance, en muchos casos, puedes terminar pagándote una academia o clases particulares. ¿por qué esto ocurre?¿Resultará conveniente estudiar inglés por nuestra cuenta? o directamente me pago clases particulares. En este post estaré aclarándote al respecto."
);

const entry5 = new Entry_blogs(
    "./images/c-d-x-PDX_a_82obo-unsplash.jpg",
    "https://unsplash.com/@cdx2?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Consejos para mejorar tu listening",
    "./consejos_mejorar_tu_listening.html",
    "Hola chicos, esta vez tenemos al listening como plato fuerte. Se trata de una de las habilidades que más cuestan a la hora de aprender un nuevo idioma y unas de las más importantes (desde mi punto de vista). Pasa que con frecuencia terminamos frustrándonos cuando no vemos avances. Te cuento que esto es completamente..."
);

const entry6 = new Entry_blogs(
    "./images/shadowing.jpg",
    "https://unsplash.com/@soundtrap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Shadowing, qué es y cómo practicarlo.",
    "./shdowing_que_es_como_practicarlo.html",
    "Shadowing, una técnica que te ayudará si o sí mejorar y potenciar tu speaking mediante hábitos de pronunciación que te llevarán a otro nivel. Este método que te voy a explicar es un básico para entrenar tu speaking."
);


//Generar las entradas en el blog
const arr = [entry1, entry2, entry3, entry4, entry5, entry6];


arr.forEach(item=>{
    const div = document.createElement("div");
    div.classList.add("entry");
    div.classList.add("column");
    div.classList.add("medium-6");
    div.classList.add("alineado");
    div.innerHTML = item.make_entry;

    const entry_section = document.querySelector(".entry_section");
    entry_section.append(div);
});