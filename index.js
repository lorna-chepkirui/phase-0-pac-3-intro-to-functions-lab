const shout = (str) => str.toLocaleUpperCase();

const whisper = (str) => str.toLocaleLowerCase();

const logShout = (str) => console.log(str.toLocaleUpperCase());

const logWhisper = (str) => console.log(str.toLocaleLowerCase());

const sayHiToHeadphonedRoommate = (str) => {
    let message = '';
    if(str.toLocaleLowerCase() === str){
        message = `I can't hear you!`;
    }else if(str.toLocaleUpperCase() === str){
        message = `YES INDEED!`;
    }else if(str===`Let's have dinner together!`){
        message = `I would love to!`;
    }

    return message;
}