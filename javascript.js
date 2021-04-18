var currScene = -1;
var knowName = false;
var isHappy = false;
var elem = document.getElementById('next');
elem.addEventListener("click", changeScene);
var userName = "";

var dial = document.getElementById("dialogue");
var speaker = document.getElementById("name");

function changeScene() {
    currScene++;
    switch (currScene) {
        case 0:
            userName = document.getElementById("userName").value;
            if (userName == "") {
                alert("Please enter a name.");
                currScene = -1;
                var number = prompt("Enter scene num");
                currScene = number;
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
            break;
        case 8:
            isHappy = true;
            speaker.innerHTML = userName;
            dial.innerHTML = "I'm so sorry! I should have been watching where I was going. My name is " + userName + ". It's nice to meet you...err..what's your name again?";
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
            dial.innerHTML = "EHHHH??? Today is school! I can't be late again!!";
            break;
        case 12:
            dial.innerHTML = "I hurriedly off towards class, leaving the cat behind me.";
            dial.style.color = "aqua";
            break;
        case 13:
            changeBG("School");
            dial.innerHTML = "Suddenly, I finally quickly get to class and manage to sneak into the room without anyone noticing. I sit down at my desk and already I'm beginning to daydream. I look over at the desk that's always empty next to me wonder why that classmate never comes to class.";
            changeProfile("remove");
            break;
        case 14:
            dial.innerHTML = "Hey wait a second! All these desks are empty! Whatever. I go back to daybreaming about that strange student who is strangely never here and I think about just how strange that is.";
            break;
        case 15:
            dial.innerHTML = "Suddenly, I hear the classroom door open. I whip my head around and see a glowing figure backlit by the burning sunshine coming from the sun that is outside.";
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
            dial.innerHTML = "I decide to stay at school to study for a while I was just gathering my books and getting ready to leave when I see a shadow appear over my desk. An especially handsome shadow.";
            break;
        case 21:
            if (knowName) {
                speaker.innerHTML = "Meow Meow";
                dial.innerHTML = "Are you staying behind to study? I don't bother you but...perhaps we could study together?";
                dial.style.color = "white";
                changeProfile("meowShy");
            } else {
                speaker.innerHTML = "????";
                dial.innerHTML = "You heathen! I need to study withs omeone but there is literally not one else in this school as you can see from al these empty desks. Let me study with you."
                dial.style.color = "white";
                changeProfile("meowNormal");
            }
            break;
        case 22:
            speaker.innerHTML = userName;
            dial.innerHTML = "Well? Should you invite a literal CAT to study with you?";
            dial.style.color = "aqua";
            giveOptions(22);
            break;
        case 23:
            speaker.innerHTML = userName;
            dial.innerHTML = "Um...of course!! Lets go someone a bit more...private and quiet...";
            dial.style.color = "white";
            break;
        case 24:
            speaker.innerHTML = userName;
            dial.innerHTML = "We went to the library and sat down at a desk in a stuffy corner. The table was small so we had to sit...very close together...";
            dial.style.color = "aqua";
            changeBG("Study");
            changeProfile("remove");
            break;
        case 25:
            if (!knowName) {
                dial.innerHTML = "We studied in silence together for a while and I finally learned that cat's name was Meow Meow because he told me it was. After a while, I suddenly slowly worked up the courage to ask him why he was such a meanie beanie.";
            } else {
                dial.innerHTML = "We studied together for a while. I feel  if we became closer as friends during this time. During a period of silence between us, I finally worked up the courage to ask Meow Meow why he never came to school.";
            }
            break;
        case 26:
            if (knowName) {
                dial.innerHTML = "Hey Meow Meow? I hope you don't mind me asking but...why havent you ever to classes?";
            } else {
                dial.innerHTML = "Hey Meow Meow? I hope you dont mind me asking but...why are you literally so mean?";
            }
            dial.style.color = "white";
            changeProfile("meowNormal");
            break;
        case 27:
            dial.innerHTML = "For a while, Meow Meow was silent and I was afraid he was going to get up and leave. He looked down, almost as if he was going to cry. Then he finally spoke up...";
            dial.style.color = "aqua";
            changeProfile("meowSad");
            break;
        case 28:
            speaker.innerHTML = "Meow Meow";
            dial.innerHTML = "I know that everyone may think that I am tough and strong. But in reality...I am rather pathetic...I'm too scared to cuddle with anyone but my mom and I get scared if you throw treats too close to me....";
            dial.style.color = "white";
            break;
        case 29:
            dial.innerHTML = "I'm a failure.";
            changeProfile("meowShy");
            break;
        case 30:
            speaker.innerHTML = userName;
            dial.innerHTML = "I sat there in shock, for what felt like forever. The silence enveloped the room, just as I wished so badly to envelope this sad cat in front of me in a hug. Tears started dripping down his face. It was such a big cat-astrophe that he was sad. What should I do?";
            changeProfile("meowTear");
            giveOptions(30);
            dial.style.color = "aqua";
            break;
        case 31:
            dial.innerHTML = "Suddenly, I give Meow Meow a gently pat on the head. He looks up at me, tears still glistening in his eyes. I give him a small smile.";
            changeProfile("meowShy");
            break;
        case 32:
            dial.innerHTML = "Baka na koto o iu na! I know you're pathetic, but at least you're also pathetically cute. So what if you're scared of everything and your macho tough coolness is all a fraud, just like you? You're still adorable and well loved.";
            dial.style.color = "white";
            break;
        case 33:
            dial.innerHTML = "You may not be macho macho, but at least youre still moe moe :)";
            break;
        case 34:
            dial.innerHTML = "Meow Meow smiled at me and it was as if the sun came out from behind the clouds. People kept telling us to be quiet because this is a library or something but I ignored that and smiled back at Meow Meow";
            dial.style.color = "aqua";
            break;
        case 35:
            speaker.innerHTML = "Meow Meow";
            dial.innerHTML = "Thank you " + userName + ". You've taught me so much today. You've taught me that I no longer need to be tsun and I can just be dere.";
            changeProfile("meowBlush");
            break;
        case 36:
            speaker.innerHTML = userName;
            dial.innerHTML = "For a while we sat in silence, staring into each other's eyes.";
            dial.style.color = "aqua";
            break;
        case 37:
            placeOverlay();
            dial.innerHTML = "Suddenly, the lights off signalling that the school was closed. We had been so busy staring at each other's faces that we didnt even notice how late it had gotten! Suddenly the day had ended and it was time to go home.";
            break;
        case 38:
            speaker.innerHTML = "Meow Meow";
            dial.innerHTML = "C-c-can... I w-w-walk you h-h-home....k-k-k-k-k-k-k-k-kk-k-k-k-k-k--k-k-k-k-k-k-koibito?";
            dial.style.color = "white";
            giveOptions(38);
            break;
        case 39:
            speaker.innerHTML = userName;
            dial.innerHTML = "He took my hand in his paw and we left the school building in the dark because the sun had gowne downa nd it was night. My face was burning red.";
            dial.style.color = "aqua";
            changeBG("Night");
            changeProfile("remove");
            deleteOverlay();
            break;
        case 40:
            speaker.innerHTML = "Meow Meow";
            dial.innerHTML = "Honto ni ii no?";
            changeProfile("meowBlush");
            dial.style.color = "white";
            break;
        case 41:
            speaker.innerHTML = userName;
            dial.innerHTML = "Oh! Uh.. yes... it is...";
            break;
        case 42:
            speaker.innerHTML = userName;
            dial.innerHTML = "I felt my face growing redder and redder as we walked on in silence. As we approached my house, I felt my chest tighten...in anticipation?";
            dial.style.color = "aqua";
            break;
        case 43:
            speaker.innerHTML = "Meow Meow";
            dial.innerHTML = "We've arrived. This is where you live.";
            dial.style.color = "white";
            changeProfile("meowNormal");
            break;
        case 44:
            dial.innerHTML = "But first..." + userName + "... I have something to tell you... I..I-I-I....";
            changeProfile("meowBlush");
            break;
        case 45:
            dial.innerHTML = "ILOVEYOUWILLYOUBEMYAIJIN?!?!?!?!?";
            changeProfile("meowConfess");
            giveOptions(45);
            break;
        case 46:
            speaker.innerHTML = userName;
            dial.innerHTML = "I...I will..";
            dial.style.color = "white";
            changeProfile("meowSurprise");
            break;
        case 47:
            dial.innerHTML = "I WILL!!!!!!!1!!!1!!!!!!!!!!!!";
            dial.style.color;
            break;
        case 48:
            dial.innerHTML = "We embraced under the stars as we shared our confessions. My chest exploded in a firework show of emotions and new found feelings. This is the start of a a new chapter in my life. This is what true love is@!!!!!!";
            dial.style.color = "aqua";
            break;
        case 49:
            changeBG("Room");
            placeOverlay();
            changeProfile("remove");
            dial.innerHTML = "Anyways, it was night time and that window is actually a picture so that's why the sun is there. I went to sleep in my bed.";
            break;
        case 50:
            end();
            break;
        //REJECTION FOR STUDY ROUTE
        case 51:
            speaker.innerHTML = userName;
            dial.innerHTML = "No.";
            break;
        case 52:
            changeProfile("meowTear");
            dial.innerHTML = "Meow Meow's head hung low and tears started pouring from his eyes. My rejection left him heartbroken. He quickly turned and ran down the street. I felt clawful for my actions but it had to be done.";
            dial.style.color = "aqua";
            break;
        case 53:
            dial.innerHTML = "Our relationship would have never worked out. Not because he is a cat and I am a human, but because......";
            break;
        case 54:
            dial.innerHTML = "I HAVE A TERRIBLE CAT ALLERGYYYYYYYYYYYY!!!!!";
            dial.style.fontSize = "30px";
            break;
        case 55:
            dial.style.fontSize = "17px";
            dial.innerHTML = "The whole walk home my face was becoming red and my chest felt tight because my throat was closing. As I lay on the ground breathing my final breath, I couldn't help but feel like I was dying.";
            break;
        case 56:
            end();
            break;
        //RUNNING ROUTE
        case 57:
            changeBG("School");
            changeProfile("remove");
            dial.innerHTML = "I run off and I made it to school before classes started. The cat was wrong about what time it was because cats cant tell time.";
            break;
        case 58:
            dial.innerHTML = "I was sitting at my desk, absentmindedly looking out the window when class started. I was bored so I did not pay attention.";
            break;
        case 59:
            dial.innerHTML = "SUDDENLY, the door slammed open and a shadow (particullarily handsome) appeared above me.";
            break;
        case 60:
            changeProfile("meowAngry");
            speaker.innerHTML = "????";
            dial.innerHTML = "HEY!!!!!! YOU BAKAAA!! YOU NEVER APOLOGIZED TO ME YOU BAKAAAAA!!";
            dial.style.color = "white";
            break;
        case 61:
            speaker.innerHTML = userName;
            dial.innerHTML = "NANI???? IS THAT?? THE CAT FROM THIS MORNING WHEN I WAS RUNNING TO CLASS AND RAN INTO A CAT???? WHY IS HE HERE???";
            dial.style.color = "aqua";
            break;
        case 62:
            dial.innerHTML = "WHY IS THERE A CAT IN THE SCHOOOOOOOOLLL?????";
            dial.style.color = "white";
            break;
        case 63:
            speaker.innerHTML = "????";
            dial.innerHTML = "APOLOGIZE YOU CRETIN!!!!";
            break;
        case 64:
            speaker.innerHTML = userName;
            dial.innerHTML = "Our commotion attracted the attention of our teacher who, turned around and suddenly gasped when she saw the cat.";
            dial.style.color = "aqua";
            break;
        case 65:
            speaker.innerHTML = "teacher";
            dial.innerHTML = "Oh goodness why is there is cat here????? Mr.Cat-Sir!!!! You should not be here!!";
            changeProfile("meowNormal");
            dial.style.color = "white";
            break;
        case 66:
            dial.innerHTML = "Your should be in the advance classes!!! THis calss is far too low level for you! I must get you to the right class right away!";
            break;
        case 67:
            speaker.innerHTML = userName;
            dial.innerHTML = "The teacher picked up the cat and suddenly carried him off to another classroom.";
            dial.style.color = "aqua";
            currScene = 18;
            break;
        //BRANCH FOR NOT STAYING TO STUDY AND LEAVING LIKE A DUMBASS
        case 68:
            changeBG("DayStreet");
            dial.innerHTML = "HAH! Once again I have foiled the attempts of school at attempting to confine me to its prison. I shall prevail! Fools know not my strength!";
            break;
        case 69:
            dial.innerHTML = "I step out past the door of the school and let the sunlight warm me after being trapped in the cold stagnant air of the school. A bird chirped in the distance and I began analyzing the metaphorical significance of birds in my moment of freedom and revelry.";
            break;
        case 70:
            if (isHappy) {
                dial.innerHTML = "But what is this?? A shadow has encroached upon my path! A...particularly handsome shadow?? Who could this shadow belong to?";
            } else {
                dial.innerHTML = "But what is this?? A shadow has encroached upon my path! My happiness was suddenly banished when I heard a familiar voice echoing from the empty school halls behind me.";
            }
            break;
        case 71:
            dial.style.color = "white";
            if (!knowName) {
                changeProfile("meowAngry");
                speaker.innerHTML = "????";
                dial.innerHTML = userName + "!!!!!!!!!!!!! ANATA WA WATASHI KARA NIGETE IMASENNNNNNN. GET BACK HERE YOU BAKA!!!";
            } else {
                changeProfile("meowNormal");
                speaker.innerHTML = "Meow Meow";
                dial.innerHTML = userName + ", chotto mate!";
            }
            break;
        case 72:
            dial.style.color = "aqua";
            speaker.innerHTML = userName;
            if (!isHappy) {
                dial.innerHTML = "It was the cat from before! Dare he challange me so brashly??";
            } else {
                dial.innerHTML = "Meow Meow came rushing towards me with...is that a slight blush on his face???";
            }
            break;
        case 73:
            dial.style.color = "white";
            if (!isHappy) {
                speaker.innerHTML = userName;
                dial.innerHTML = "I have no reason to apologize to some fantastical speaking feline! State your purpose you devil-spawn, and perhaps through repentance the gods shall have mercy upon your soul!";
            } else {
                speaker.innerHTML = "Meow Meow";
                dial.innerHTML = "D-d-d-d-do you uh, do you want to walk home together?";
                /////////////////////////////////////////////////////////////////////////////////////////////
            }
            break;
        //FIGHT
        case 74:
            speaker.innerHTML = "Meow Meow";
            dial.innerHTML = "You FOOL! No one insults the great Meow Meow and gets away with it! I shall vanquish you back to the hell hole you crawled out of!";
            break;
        case 75:
            speaker.innerHTML = userName;
            dial.innerHTML = "Why you--! No one insults my mother like that!!!! Not even someone with a name as cute as Meow Meow!! Prepare for battle you fiend!";
            giveOptions(75);
            break;
        case 76:
            dial.style.color = "aqua";
            dial.innerHTML = "I leapt at the foe, arms raised, knives out, ready to restore the justice to my mother's name. Both of us were so over powered that the fight took only half a second to complete and it was really really cool and awesome. In the end however, I remained standing as the victor.";
            break;
        case 77:
            speaker.innerHTML = "Meow Meow";
            dial.innerHTML = "I..I underestimated you....You are far stronger than you seem.";
            changeProfile("meowHurt");
            dial.style.color = "white";
            break;
        case 78:
            speaker.innerHTML = userName;
            dial.innerHTML = "I stood on the street, cradling a bloodied Meow Meow in my arms. Suddenly, I saw raindrops dripping down from the sky....but..the sky is clear. Oh..";
            dial.style.color = "aqua";
            break;
        case 79:
            dial.innerHTML = "I'm crying.";
            break;
        case 80:
            speaker.innerHTML = "Meow Meow";
            dial.innerHTML = "Thank you " + userName + ". You've taught me.. true strength....I no longer need to hide behind my mask of machoness...I can finally...be myself.";
            changeProfile("meowHurtHappy");
            dial.style.color = "white";
            break;
        case 81:
            speaker.innerHTML = userName;
            dial.innerHTML = "With his final breath, Meow Meow gave me one last tearful smile, and was gone.";
            dial.style.color = "aqua";
            break;
        case 82:
            speaker.innerHTML = userName;
            dial.innerHTML = "NOOOOOOOOOOOOOOOOOOO WHY MUST OUR MACHONESS GET BETWEEN TRUE LOOOOOOOVVVEEEEE?????!!!?!?!?!?!?!?!";
            dial.style.color = "white";
            dial.style.fontSize = "30px";
            break;
        case 83:
            changeProfile("remove");
            dial.innerHTML = "Anyways I went home and went to sleep because it was late I guess.";
            changeBG("Room");
            placeOverlay();
            dial.style.fontSize = "17px";
            break;
        //NO FIGHT
        case 84:
            speaker.innerHTML = userName;
            dial.innerHTML = "Actually...Meow Meow! I have a proposition for you! Let us set down our weapons, and instead use the power of love to remedy the pain we have caused one another!";
            dial.style.color = "white";
            break;
        case 85:
            speaker.innerHTML = "Meow Meow";
            dial.innerHTML = ".............";
            changeProfile("meowNormal");
            break;
        case 86:
            changeProfile("meowAngry");
            dial.innerHTML = "NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO";
            dial.style.fontSize = "30px";
            break;
        case 87:
            dial.style.fontSize = "17px";
            speaker.innerHTML = userName;
            dial.innerHTML = "In the blonk of an eye, Meow Meow slashed his claws at me and slightly scratched my forearm. The searing pain gently tingled and somewhat itched as I collapsed in pain, writhing on the concrete floor.";
            break;
        case 88:
            dial.innerHTML = "Although it was my forearm that Meow Meow's claws slightly abrased, it was my heart that was torn in twain.";
            break;
        case 89:
            dial.innerHTML = "Meow Meow looked down at my crumpled figure. And with a smirk, he turned and left, never to be seen by me again.";
            break;
        case 90:
            speaker.innerHTML = userName;
            dial.style.color = "white";
            dial.innerHTML = "Ewwwww no, you're like literally a cat??? If i walk back with you people will get too jealous and I'll become a possible target of robbings!";
            break;
        case 91:
            dial.style.color = "aqua";
            dial.innerHTML = "My words seemed to leave Meow Meow wounded. Tears flowed freely down him furry little cheeks, like ravines cutting through fields of grass but instead ot was fur instead of grass.";
            break;
        case 92:
            dial.style.color = "white";
            speaker.innerHTML = "Meow Meow";
            dial.innerHTML = "Thanks ok...I..I--";
            changeProfile("meowTear");
            break;
        case 92:
            changeProfile("meowConfess");
            dial.innerHTML = "I DONT NEEE DYOU ANYWAAAAAAAAAAAAAAAAAAAAAYS";
            dial.style.fontSize = "30px";
            break;
        case 93:
            dial.style.fontSize = "17px";
            dial.style.color="aqua";
            speaker.innerHTML = userName;
            dial.innerHTML = "With that, Meow Meow left screaming into the night and I never saw him again.";
            break;
        case 94:
            changeBG("Room");
            changeProfile("remove");
            dial.innerHTML = "Anyways, I went home and slept or someting I guess yea";
            break;
        //MAKE A JOKE ROUTE
        case 95:
            speaker.innerHTML = userName;
            dial.innerHTML = "Haha, are you \"feline-ing\" down??";
            dial.style.color = "white";
            break;
        case 96:
            dial.style.color = "aqua";
            dial.innerHTML = "Suddenly, a loud blast blasted from Meow Meow. His anger had compressed so much that it had turned into a bomb!";
            break;
        case 97:
            dial.innerHTML = "The resulting blast from Meow Meow's anger left no survivors. Earth was disintegrated and everyone died...Except for me. I alone remain to record the story of our world. But who shall be left to read it?";
            break;
        case 98:
            dial.innerHTML = "Anyways, I walked home and went to sleep.";
            break;
        default:
            alert(currScene);
            dial.innerHTML = "this aint right";
            var num = prompt("enter scene");
            currScene = num;

    }
}


function changeBG(newBG) {
    document.getElementById("background").style.backgroundImage = "url('images/BG/" + newBG + ".png')";
}

function changeProfile(newProf) {
    if (newProf == "remove") {
        document.getElementById("profile").innerHTML = "";
    }
    else {
        //alert("a");
        document.getElementById("profile").innerHTML = "<img id=\"cat\"src='images/meowmeow/" + newProf + ".png' />";
    }
}

function giveOptions(sceneNum) {
    document.getElementById("next").style.opacity = "0.0";
    document.getElementById("next").style.left = "200%";
    switch (sceneNum) {
        case 7:
            //document.getElementById("next").parentElement.removeChild(document.getElementById("next"));
            document.getElementById("options").innerHTML = "<button class=\"option\" id=\"option_1\"> Apologize. It was your fault you were running and bumped into this handsome stud. </button> <button class=\"option\" id=\"option_2\"> Run! You're late for class you baka! There's no time to talk to talking cats!!! </button>";
            var one = document.getElementById("option_1");
            var two = document.getElementById("option_2");

            one.addEventListener('click', afterOptions(7));
            two.addEventListener("click", afterOptions(56));
            break;
        case 19:
            var optionOne = "Stay behind and study a bit. Your dumb butt could use some schooling.";
            var optionTwo = "What?? Am I some kind of nerd or something?? There are things to do! A life to live!! I'm leaving this place.";
            document.getElementById("options").innerHTML = "<button class=\"option\" id=\"option_1\"> " + optionOne + " </button> <button class=\"option\" id=\"option_2\">" + optionTwo + " </button>";
            var one = document.getElementById("option_1");
            var two = document.getElementById("option_2");

            one.addEventListener('click', afterOptions(19));
            two.addEventListener("click", afterOptions(67));
            break;
        case 22:
            var optionOne = "Of course! How many chances do you get to study with a cat?? <br> Heck, he's probably smarter than you anyways.";
            var optionTwo = "Are you crazy?? That's a cat! You'll be too distracted by his<br> handsomeness to get any work done! No!";
            document.getElementById("options").innerHTML = "<button class=\"option\" id=\"option_1\"> " + optionTwo + " </button> <button class=\"option\" id=\"option_2\">" + optionOne + " </button>";
            var one = document.getElementById("option_1");
            var two = document.getElementById("option_2");

            one.addEventListener('click', afterOptions(99999999999999999));
            two.addEventListener("click", afterOptions(22));
            break;
        case 30:
            var optionOne = "This is supes awks. Crack a joke! Lighten the mood a little!.";
            var optionTwo = "Comfort Meow Meow. He's so karashi right now it hurts my heart.";
            document.getElementById("options").innerHTML = "<button class=\"option\" id=\"option_1\"> " + optionOne + " </button> <button class=\"option\" id=\"option_2\">" + optionTwo + " </button>";
            var one = document.getElementById("option_1");
            var two = document.getElementById("option_2");

            one.addEventListener('click', afterOptions(94));
            two.addEventListener("click", afterOptions(30));
            break;
        case 38:
            var optionOne = "Yes!!! (///o_o///) ";
            var optionTwo = "No?? You're a literal cat?? (o` _ 'o)";
            document.getElementById("options").innerHTML = "<button class=\"option\" id=\"option_1\"> " + optionOne + " </button> <button class=\"option\" id=\"option_2\">" + optionTwo + " </button>";
            var one = document.getElementById("option_1");
            var two = document.getElementById("option_2");

            one.addEventListener('click', afterOptions(38));
            two.addEventListener("click", afterOptions(89));
            break;
        case 45:
            var optionOne = "YES";
            var optionTwo = "NO";
            document.getElementById("options").innerHTML = "<button class=\"option\" id=\"option_1\"> " + optionOne + " </button> <button class=\"option\" id=\"option_2\">" + optionTwo + " </button>";
            var one = document.getElementById("option_1");
            var two = document.getElementById("option_2");

            one.addEventListener('click', afterOptions(45));
            two.addEventListener("click", afterOptions(50));
            break;
        case 75:
            var optionOne = "Wait! This is not the time for a fight! There are better ways to resolve this!!";
            var optionTwo = "ANATA WA WATASHI NO TE DE SHINUDESHOUUUUUUUUUUUUU!!!!!!!!!!";
            document.getElementById("options").innerHTML = "<button class=\"option\" id=\"option_1\"> " + optionOne + " </button> <button class=\"option\" id=\"option_2\">" + optionTwo + " </button>";
            var one = document.getElementById("option_1");
            var two = document.getElementById("option_2");

            one.addEventListener('click', afterOptions(83));
            two.addEventListener("click", afterOptions(75));
            break;
    }
}

function afterOptions(newScene) {
    return function curried_func(e) {
        currScene = newScene;
        document.getElementById("options").innerHTML = "";
        document.getElementById("next").style.opacity = "1.0";
        document.getElementById("next").style.left = "95%";
        changeScene();
    }
}

function placeOverlay() {
    var overlay = document.createElement("div");
    document.getElementById("background").appendChild(overlay);
    overlay.style.position = "fixed";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,.7)";
    overlay.id = "overlay";
}

function deleteOverlay() {
    document.getElementById("background").removeChild(document.getElementById("overlay"));
}

function end() {
    document.getElementById("next").style.opacity = "0.0";
    document.getElementById("next").style.left = "200%";
    deleteOverlay();
    changeProfile("remove");
    var endText = document.createElement("p");
    document.getElementById("background").appendChild(endText);
    dial.innerHTML = "";
    document.getElementById("textbox").style.opacity = "0.0";
    endText.style.position = "fixed";
    endText.style.backgroundColor = "rgba(0,0,0,0.7)";
    endText.innerHTML = "You and Meow Meow fall deeply in love but he is a cat so a few days later he starts ignoring you. The time you two spent together will be the best minutes of your life however.";
}