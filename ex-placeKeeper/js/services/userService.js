'use strict'

const USER_DB = 'USER_DB'

const gUser = {
    email : '',
    txtColor : '',
    bgColor : '',
    age:'',
    birthDate: '',
    birthTime: ''    
}

function saveValue(key,value){
    gUser[key] = value
}

function saveUserSet(){
    saveToStorage('USER_DB',gUser)
}

function __getUserSetting(){
    return loadFromStorage(USER_DB) ? loadFromStorage(USER_DB) : false
}
