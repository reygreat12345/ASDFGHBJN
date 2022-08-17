var SpeechRecongnition = window.webkitSpeechRecognition;



var recongnition = new SpeechRecongnition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recongnition.start();
}

recongnition.onresult = function(event) {
    console.log(event);

    var Content = event.results [0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie"){
     console.log("taking selfie ---");
     speak();
    }
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
function speak (){

     var synth = window.speechSynthesis;
       speak_data = "Taking your selfie in 5 seconds";
     speak_data = document.getElementById("textbox").value;
         
     var utterThis = new SpeechSynthesisUtterance(speak_data)

     synth.speak(utterThis);
     Webcam.attach(camara);
     setTimeout(function(){
        TS();
        save();

     }, 5000)


}
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90

});
camara = document.getElementById("RID");
function TS()
{
    Webcam.snap(function(data_uri){
        document.getElementById("RID2").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';

    });
}