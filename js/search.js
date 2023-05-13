document.addEventListener("keyup", e=>{
  if(e.target.matches("#buscador")){
   document.querySelectorAll(".h2_entry").forEach( item =>{
    item.textContent.toLocaleLowerCase().includes(e.target.value)
    ? item.parentElement.parentElement.classList.remove("filtro")
    : item.parentElement.parentElement.classList.add("filtro")

   })
  }
})
