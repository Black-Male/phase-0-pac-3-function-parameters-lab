function introduction(name = "user" ){
    console.log('Hi, my name is ${name} ');
}

function introductionWithLanguage(name, language){
    console.log('Hi my name is ${name} and I am learning to program in ${language} ');    
}

function introductionWithLanguageOptional(name = "user" , language = "JavaScript" ){
    console.log('Hi my name is ${name} and I am learning to program in ${language} ');    
}