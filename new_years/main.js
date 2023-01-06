function addToList(){
    let resolution = document.querySelector(".resolution")
    let newResolution = resolution.value

    resolution.value = ""


    let resolutionList = document.querySelector(".resolutionList")
    resolutionList.innerHTML += `<li>${newResolution}</li>`
}