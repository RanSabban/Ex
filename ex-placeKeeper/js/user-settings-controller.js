'use strict'

function onInit(){
    const userSetting = __getUserSetting()
    if (userSetting){
        setColors(userSetting.bgColor,userSetting.txtColor)
        renderBirthTime(userSetting.birthTime)
    }
}

function setColors(bgColor,textColor){
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = bgColor
    elBody.style.color = textColor
}

function renderBirthTime(birthTime){
    document.querySelector('.birthTimeContainer').innerText = `Birth time is: ${birthTime}`
}

function onSubmit(elForm){
    const formData = new FormData(elForm)
    for (const pair of formData.entries()){
        saveValue(pair[0],pair[1])
    }
    saveUserSet()
}

function showAge(newValue){
    document.getElementById('sAge').innerHTML = `Age ${newValue}`
}

window.addEventListener('submit', (ev) => {
    ev.preventDefault()
})
