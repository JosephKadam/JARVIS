const btn = document.querySelector(".talk");
const content = document.querySelector(".content");


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1.5;
    text_speak.volume = 1;
    text_speak.pitch = 1.5;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day =  new Date();
    var hour= day.getHours();

    if(hour>=0 && hour<12){
        speak("Good morning Boss");
    }
    else if(hour>=12 && hour<17){
        speak("Good Afternoon Boss");
    }
    else{
        speak("Good Evening Boss");
    }

}


window.addEventListener("load", ()=>{
    speak("Initializing Jarvis... 0.1 four");
    wishMe();
});


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition(); 
recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase())
}

window.addEventListener("click", ()=>{
    content.textContent = "Listening..."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey')||message.includes('hello')){
        speak("Hello Joseph sir, how may i help you")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://google.com","_blank");
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://youtube.com","_blank");
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://facebook.com","_blank");
    }
    else if(message.includes("open instagram")){
        speak("opening Instagram")
        window.open("https://instagram.com","_blank");
    }
    else if(message.includes("social media")){
        speak("Here you have links of instagram, Facebook and youtube");
    }

    else if(message.includes("wikipedia")){
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia","")}`,"_blank");
        const finalText = "This is what I found on internet regarding "+message;
        speak(finalText);
    }

    else if(message.includes("time")||message.includes("timing")){
        const time = new Date().toLocaleString(undefined, {hour:"numeric", minute: "numeric", second:"numeric"});
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes("date")){
        const date = new Date().toLocaleString(undefined, {month:"short", day:"numeric", year:"numeric"});
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes("calculator"))
    {
        window.open("Calculator:///")
        const finalText = "Opening calculator"
        speak(finalText)
    }

    else if(message.includes("camera"))
    { 
      speak("this action is not allowed, for privacy reasons")
    }


    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ","+")}`,"_blank");
        const finalText = "This is what I found on internet regarding "+message;
        speak(finalText);
    }
}  