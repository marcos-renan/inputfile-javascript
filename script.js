const label = document.querySelector("label")
const input = document.querySelector("#file")
const dropzone = document.querySelector("#drop-zone")


function onEnter() {
  label.classList.add("active")
}

function onLeave() {
  label.classList.remove("active")
}

label.addEventListener("dragenter", onEnter)
label.addEventListener("drop", onLeave)
label.addEventListener("dragend", onLeave)
label.addEventListener("dragleave", onLeave)

input.addEventListener("change", event => {
  
  if (input.files.length > 0) {
    const type = input.files[0].type;
    const formats = ["image/jpeg", "image/png", "image/jpg"]
    if (!formats.includes(type)) {
      alert("Esse formato não é permitido!")
      return;
    }

    if (document.querySelector("#cover")) {
      dropzone.removeChild(document.querySelector("#cover"))
    }

    const img = document.createElement("img");
    img.id = "cover";
    img.src = URL.createObjectURL(input.files[0]);

    dropzone.appendChild(img);
  }
})
