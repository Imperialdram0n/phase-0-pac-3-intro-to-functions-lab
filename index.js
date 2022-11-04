function shout(input){
    return input.toUpperCase()
}

function whisper(input){
    return input.toLowerCase()
}

function logShout(input){
    const transformedInput = shout(input)
    console.log(transformedInput)
}

function logWhisper(input){
    const transformedInput = whisper(input)
    console.log(transformedInput)
}

function sayHiToHeadphonedRoommate(input){
    if(input === whisper(input)){
        return "I can't hear you!"
    } 
    else if(input === shout(input)){
        return "YES INDEED!"
    }
    else if(input === "Let\'s have dinner together!"){
        return "I would love to!"
    }
}

 
// const shout = (input) => {
//     return "HELLO"
// }