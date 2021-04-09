var currScene = -1;
var isAngry = false;
var isStudy = false;
var knowName = false;
var elem = document.getElementById('next');
elem.addEventListener("click", changeScene);
var userName = "";

var dial = document.getElementById("dialogue");
var speaker = document.getElementById("name");

function changeScene() {
    currScene++;
    switch(currScene) {
        case 0:
                userName = document.getElementById("userName").value;
                if(userName == "") {
                    alert("Please enter a name.");
                    currScene = -1;
                }
                break;
        case 1:
            document.getElementById("dialogue").innerHTML = "I woke up to the sun shining in my face. The birds were chirping and it would have been a perfect day if it weren't for the fact that I was late for school yet again. I jump out of bed rush out the door without even stopping for breakfast.";
            dial.style.color = "aqua";
            changeBG("Room");
            document.getElementById("textbox").style.backgroundColor = "rgba(0,0,0,0.6)"
            let child = document.getElementById("formID");
            child.parentNode.removeChild(child);
            speaker.innerHTML = userName;
            document.getElementById("next").style.left = "95%";
            document.getElementById("next").style.top = "75%";
           break;
        case 2:
            document.getElementById("dialogue").innerHTML = "I was high-tailing it to class when suddenly I bump into someone. I was so worried about being late that I did not see who it was!";
            changeBG("Cherry");
            break;
        case 3:
            document.getElementById("name").innerHTML = "????";
            dial.innerHTML = "Hey! Watch where you're going you baka!";
            dial.style.color = "white";
            changeProfile("meowAngry");
            break;
        case 4:
            speaker.innerHTML = userName;
            dial.innerHTML = "Nani?! Who is this? Why is there a cat in the school yard?? How is he talking to me??? And most importantly, how is he so handsome????";
            dial.style.color = "aqua";
            break;
        case 5:
            speaker.innerHTML = "????";
            dial.innerHTML = "Hey! Are you even listening to me? Smh, you humans have no manners at all. Where is my apology??";
            dial.style.color = "white";
            break;
        case 6:
            speaker.innerHTML = userName;
            dial.innerHTML = "Am I really about to apologize to a handsome talking cat??";
            dial.style.color = "aqua";
            giveOptions(7);
            break;
        case 7:
            giveOptions(7);
            break;
        case 8:
            speaker.innerHTML = userName;
            dial.innerHTML = "I'm so sorry! I should have been watching where I was going. My name is " + userName +". It's nice to meet you...err..what's your name again?";
            dial.style.color = "white";
            break;
        case 9:
            speaker.innerHTML = "Meow Meow";
            knowName = true;
            dial.innerHTML = "My name?? You don't know my name???? I am the one and only Meow Meow, brave destroyer of universes, World Champion Snuggler, Smartest known cat in the known Galaxy, Devourer of fish, Holder of World Record for Best Cat, Titled \"BEST THING TO EVER HAPPEN TO YOU\", Conquerer of the Known AND Unknown, Watcher of the deadly shadows....";
            break;
        case 10:
            dial.innerHTML = "Actually, why am I wasting my breath on low-lives like you. I am too Meow-velous for that. Don't you have some place to be you heathen? Classes started more than 20 minutes ago.";
            changeProfile("meowNormal");
            break;
        case 11:
            speaker.innerHTML = userName;
            dial.innerHTML = "EHHHH??? I can't be late again!!";
            break;
        case 12:
            dial.innerHTML = "I hurriedly run off towards class, leaving the cat behind me.";
            dial.style.color = "aqua";
            break;
        case 13:
            changeBG("School");
            dial.innerHTML = "I finally get to class and manage to sneak into the room without anyone noticing. I sit down at my desk and already I'm beginning to daydream. I look over at the desk that's always empty next to me wonder why that classmate never comes to class.";
            changeProfile("remove");
            break;
        case 14:
            dial.innerHTML="Hey wait a second! All these desks are empty! Whatever. I go back to daybreaming about that strange student who is strangely never here and I think about just how strange that is.";
            break;
        case 15:
            dial.innerHTML="Suddenly, I hear the classroom door open. I whip my head around and see a glowing figure backlit by the burning sunshine coming from the sun that is outside.";
            break;
        case 16:
            speaker.innerHTML = "Meow Meow";
            dial.innerHTML = "I'm for being late, teacher.";
            changeProfile("meowNormal");
            dial.style.color = "white";
            break;
        case 17:
            speaker.innerHTML = userName;
            dial.innerHTML = "NANI??!!?!?!?!?!??1??!?!?//!? IT'S THE CAT FROM BEFORE????!@???";
            dial.style.color = "aqua";
            break;
        case 18:
            dial.innerHTML = "Meow Meow sits down in the desk that I was just staring out and pulls out his books (Where was he keeping them???). He seems to be ignoring me but I catch him glancing at me ocassionally.";
            break;
        case 19:
            changeProfile("remove");
            dial.innerHTML = "Just then, the bell rings, signalling the end of the schoolday. Although the schoolday has ended, I still have some studying to do. Should I stay and study?";
            giveOptions(19);
            break;
        case 20:
            speaker.innerHTML = userName;
            dial.innerHTML="I decide to stay at school to study for a while I was just gathering my books and getting ready to leave when I see a shadow appear over my desk. An especially handsome shadow.";
            break;
        case 21:
            speaker.innerHTML = "Meow Meow";
            dial.innerHTML="Are you staying behind to study? I don't mean to bother you but...perhaps we could study together?";
            dial.style.color = "white";
            changeProfile("meowShy");
            break;
        case 22:
            speaker.innerHTML = userName;
            dial.innerHTML="Well? Should you invite a literal CAT to study with you?";
            dial.style.color = "aqua";
            giveOptions(22);
            break;
        case 23:
            speaker.innerHTML = userName;
            dial.innerHTML="Um...of course!! Lets go someone a bit more...private and quiet...";
            dial.style.color = "white";
            break;
        case 24:
            speaker.innerHTML = userName;
            dial.innerHTML="We went to the library and sat down at a desk in a stuffy corner. The table was small so we had to sit...very close together...";
            dial.style.color="aqua";
            changeBG("Study");
            changeProfile("remove");
            break;
        case 25:
            dial.innerHTML="We studied together for a while. I feel as if we became closer as friends during this time. During a period of silence between us, I finally worked up the courage to ask Meow Meow why he never came to school.";
            break;
        case 26:
            dial.innerHTML="Hey Meow Meow? I hope you don't mind me asking but...why don't you ever come to classes?";
            dial.style.color = "white";
            changeProfile("meowNormal");
            break;
        case 27:
            dial.innerHTML="For a while, Meow Meow was silent and I was afraid he was going to get up and leave. He looked down, almost as if he was going to cry. Then he finally spoke up...";
            dial.style.color = "aqua";
            changeProfile("meowSad");
            break;
        case 28:
            speaker.innerHTML="Meow Meow";
            dial.innerHTML="I know that everyone may think that I am tough and strong. But in reality...I am rather pathetic...I'm too scared to cuddle with anyone but my mom and I get scared if you throw treats too close to me....";
            dial.style.color = "white";
            break;
        case 29:
            dial.innerHTML="I'm a failure.";
            changeProfile("meowShy");
            break;
        case 100:
            dial.innerHTML = "testing";
            break;
        default:
            dial.innerHTML = "this aint right";

    }
}

function changeBG(newBG) {
    document.getElementById("background").style.backgroundImage = "url('images/BG/" + newBG + ".png')";
}

function changeProfile(newProf) {
    if (newProf == "remove") {
        document.getElementById("profile").innerHTML="";
    }
    else {
        //alert("a");
        document.getElementById("profile").innerHTML="<img id=\"cat\"src='images/meowmeow/" + newProf + ".png' />";
    }
}

function giveOptions(sceneNum) {
    document.getElementById("next").style.opacity = "0.0";
    document.getElementById("next").style.left = "200%";
    switch (sceneNum) {
        case 7:
            //document.getElementById("next").parentElement.removeChild(document.getElementById("next"));
            document.getElementById("options").innerHTML="<button class=\"option\" id=\"option_1\"> Apologize. It was your fault you were running and bumped into this handsome stud. </button> <button class=\"option\" id=\"option_2\"> Run! You're late for class you baka! There's no time to talk to talking cats!!! </button>";
            var one = document.getElementById("option_1");
            var two = document.getElementById("option_2");

            one.addEventListener('click', afterOptions(7));
            two.addEventListener("click", afterOptions(99));
            break;
        case 19:
            var optionOne = "Stay behind and study a bit. Your dumb butt could use some schooling.";
            var optionTwo = "What?? Am I some kind of nerd or something?? There are things to do! A life to live!! I'm leaving this place.";
            document.getElementById("options").innerHTML="<button class=\"option\" id=\"option_1\"> " + optionOne + " </button> <button class=\"option\" id=\"option_2\">" + optionTwo + " </button>";
            var one = document.getElementById("option_1");
            var two = document.getElementById("option_2");

            one.addEventListener('click', afterOptions(19));
            two.addEventListener("click", afterOptions(99));
            break;
        case 22:
            var optionOne = "Of course! How many chances do you get to study with a cat?? <br> Heck, he's probably smarter than you anyways.";
            var optionTwo = "Are you crazy?? That's a cat! You'll be too distracted by his<br> handsomeness to get any work done! No!";
            document.getElementById("options").innerHTML="<button class=\"option\" id=\"option_1\"> " + optionTwo + " </button> <button class=\"option\" id=\"option_2\">" + optionOne + " </button>";
            var one = document.getElementById("option_1");
            var two = document.getElementById("option_2");

            one.addEventListener('click', afterOptions(99));
            two.addEventListener("click", afterOptions(22));
            break;
    }
}

function afterOptions(newScene) {
    return function curried_func(e) {
        currScene = newScene;
        document.getElementById("options").innerHTML="";
        document.getElementById("next").style.opacity = "1.0";
        document.getElementById("next").style.left = "95%";
        changeScene();
    }
}