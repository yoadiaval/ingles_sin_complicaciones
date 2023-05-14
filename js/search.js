document.addEventListener("keyup", e=>{
  if(e.target.matches("#buscador")){
   document.querySelectorAll(".h2_entry").forEach( item =>{
    item.textContent.toLowerCase().includes(e.target.value.toLowerCase())//esta l'inea s la que compara 
    ? item.parentElement.parentElement.classList.remove("filtro")
    : item.parentElement.parentElement.classList.add("filtro")
   })
  }
})
