const btnEL = document.getElementById("btn")
const appEL = document.getElementById("app")
addNote()
createNoteEL()
saveNote()
function getNotes(){
    return JSON.parse(localStorage.getItem("notes-app") || "[]")
}
function addNote(){
  const notes = getNotes()
    const noteOBJ = {
    id: Math.floor(Math.random() * 100000),
    content: "" ,
   };
   /* console.log(noteOBJ);*/
   const noteEL = createNoteEL(noteOBJ.id,noteOBJ.content)
   appEL.insertBefore(noteEL , btnEL) 
notes.push(noteOBJ)
   saveNote(notes)
}
function createNoteEL(id , content){
  console.log(id , content);
  const element = document.createElement("textarea")
  element.classList.add("Note")
  element.placeholder = "Empty Note"
  element.value = content
  element.addEventListener("dblclick" , ()=>{
    const warning = confirm("do you want to delete this note ?")
    if(warning){
        deleteEL(id , element)
    }
  })
element.addEventListener("input" , ()=>{
    UpdateNote(id , element.value)
})
return element 
}
function deleteEL(){}

function UpdateNote(){}
function saveNote(notes){
localStorage.setItem("App" , JSON.stringify(notes))

}
btnEL.addEventListener("click",addNote)