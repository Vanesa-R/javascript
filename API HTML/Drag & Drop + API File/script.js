const input = document.getElementById("input-file");
const dropZone = document.getElementById("drop-zone");
const preview = document.getElementById("container-preview");

dropZone.addEventListener("dragover", e => {
    e.preventDefault();
})
dropZone.addEventListener("drop", (e) =>{
    e.preventDefault();
    const files = e.dataTransfer.files;
    const fragment = document.createDocumentFragment();

    for (const file of files){
        const filePreview = document.createElement("div");
        const img = document.createElement("img");
        const text = document.createElement("p");
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.addEventListener("load", e => {
            filePreview.classList.add("file-preview");
            img.setAttribute("src", e.target.result);
            text.textContent = file.name;
            filePreview.appendChild(img);
            filePreview.appendChild(text);
        })
        fragment.appendChild(filePreview)
    }
    preview.style.display = "flex";
    preview.appendChild(fragment)
})

input.addEventListener("change", e => {
    const files = e.target.files;
    const fragment = document.createDocumentFragment();

    for (const file of files){
        const filePreview = document.createElement("div");
        const img = document.createElement("img");
        const text = document.createElement("p");
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", e => {
            filePreview.classList.add("file-preview");
            img.setAttribute("src", e.target.result);
            text.textContent = file.name;
            filePreview.appendChild(img);
            filePreview.appendChild(text);
        })
        fragment.appendChild(filePreview)
    }
    preview.style.display = "flex";
    preview.appendChild(fragment);
})
