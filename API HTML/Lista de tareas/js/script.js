const pending = document.getElementById("pending-tasks");
const finished = document.getElementById("finished-tasks");

pending.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", e.target.id)
})

pending.addEventListener("drag", e => {
    e.target.classList.add("active")
})
pending.addEventListener("dragend", e => {
    e.target.classList.remove("active")
})

finished.addEventListener("dragover", e => {
    e.preventDefault()
})

finished.addEventListener("drop", e => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData("text"))
    element.classList.remove("active")
    element.setAttribute("draggable", "true")
    finished.appendChild(pending.removeChild(element))
})