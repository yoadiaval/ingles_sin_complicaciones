/*funcion auto invocada para proteger las variables de otros archivos*/ 
(
    function(){
        const titleQuestions = [...document.querySelectorAll('.question_title')];
        

        titleQuestions.forEach(question =>{
          question.addEventListener('click',() =>{
            let height = 0;
            let answer = question.nextElementSibling; /*se refiere al siguiente elemento que est'a en html*/
            let addPadding = question.parentElement.parentElement;
            
            addPadding.classList.toggle('questions_pading--add');
            question.children[0].classList.toggle('questions_arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });

    });
})();

