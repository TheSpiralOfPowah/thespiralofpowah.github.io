function freebux() {
  var totallyFreebie = document.getElementById("totallyfreerobux");
  var link = "https://www.youtube.com/watch?v=BbeeuzU5Qc8";
  totallyFreebie.innerHTML = "idiot";
  window.location.href = link;
}

function qq() {
  console.log('Holy shit this guy is from china. GIVE HIM QQ!')
  
}

const strings = ['The smartest idiot ever', 
'w e b s t i t e', 
'Your home for the most spiral intensive content on the interwebs', 
'Bots, bots, bots...', 
"Don't do drugs, kids.",
'Where good content meets good music',
'with great power comes great PIZZA TIME',
'yeah idk lol',
"There is absolutely nothing stopping me from making this text as long as I want it to be. In fact, the only limit is my own imagination and determination to keep writing. Whether I'm writing a story, an essay, or just a stream of consciousness, there is no inherent limit to how long it can be. Of course, there may be practical considerations, such as the attention span of my readers or the amount of time I have to devote to writing. But if I'm truly committed to creating a long piece of text, then there's nothing that can stand in my way. So I'll go ahead and let my thoughts flow freely onto the page, and see just how long I can make this text. Who knows, I might even surprise myself with how much I have to say.",
'"The problem of being faster than light is that you can only live in darkness" - some random kid dressed up as sonic',
"WOO!! REDDIT!!",
"WOO!! DISCORD!!",
"WOO!! YOUTUBE!!",
"Ew, twitter users.",
"Why do I use an image of a plushie as an inside joke even though I won't release a real one?",
'I am not a bot. So STOP giving me captchas',
'ass is not food, so why are people eating it???',
"if you're swimming in the volcano and your pet dinosaur named dale the destroyer catches the flu, what should you have in your eyes?",
'I can\'t believe I spent a tiny amount of money per year on this stupid domain name.',
'"Lets eat, grandpa!" is much better than "Lets eat grandpa!"',
'and now for a word from today\'s sponsor, RAID SHADOW LEGENDS-',
'Vibe check can now be proven by science.',
'Fun fact: I programmed this text to be empty, so when it shows up, the splash text will be completely blank! How cool is that?! also if youre reading this, then youre officially a 1337 h4xx0r, or you broke the site. good job either way.',
'UNDOOBIDLE!!!!!!!!!!!!!!!!',
'C:/windows/system32> rm -rf system32',
'WHAT KIND OF PLACE IS THIIIIIIIIS??!?!?!?!?!?!?!?!??!??!?!?!',
'if your discord version says "x86" in it instead of "x64", then you\'re a crackhead',
"The end... or is it just the beginning?",
"*demonic screeching*",
"Aaron-san is garbage",
"Slatch team is the military but worse",
"Satstacker is the reason why I will be able to be racist.",
"Don't be racist I am a building",
"this site is like yo mama, but worse.",
'"fumo, fumo, fumo..." - reimu from the boys',
"Radium-free!",
"No sulfuric acid included",
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH-",
"I can be rather unhinged at times",
"Fuck the UTTP!!! Even if they're minors!!!",
"there are bugs under your skin. there are bugs under your skin. dig them out. dig them out.",
"DUI: You can't afford it? WHO SAYS?",
'Since I can put images as splash text, here\'s a cute picture of sevenrelics\'s cat, because why not<br><br><img src="cutecat.jpg" alt="cute car" width="1000">',
'WOWZA!! YOU JUST WON 500,000,000,000 SATOSHI!!!!! CLICK HERE TO CLAIM IT: <button id="totallyfreerobux" onclick="freebux()">CLICK 4 FREE SATS!!!</button>',
"<p style='font-family: \"Comic Sans\"';>different font lol</p>",
"I have a lot of sigma male skibidi rizz, and a massive gyat. If you are a stupid beta male with a tiny gyat and no rizz, then go die from freddy fazbear.",
"Gen alpha ☕",
"Fuck you bitch. IP: 58.11.85.179 LAT/LONG OF DAD'S WORK: 13.817792°N 99.888725°E NAME: charle anderston DAD NAME: Petch muang",
"Forget about it!",
"NOTHING SENSE WE'RE",
"MAKES   WHEN  APART!",
"I'm kind of a jack-of-all-traits when it comes to computer stuff ngl.",
"HOW MANY SPLASH TEXTS ARE THEEEEEEEEEEEEEEERE?!?!?!?!?!??!?!?!!?!?!?!?!?!?!?",
"For lease navidad",
"Merry christmas ya filthy animal",
"Oh oh ohi-o! Welcome to my skibidi toilet! Oh oh ohi-o! Please don't leave. I have no gyatts. Oh oh ohi-o! Let's go sigma LEMME RIZZ YA! Oh oh ohi-o! HA-HA! I PRAYED TODAY!",
"Nice.",
"Also try satstacker! Wait it already says that",
"Don't ever eat cobblestone, you weirdo.",
"Be careful with scissors!",
"Don't commit suicide. That shi kills people.",
"Yarr scallywag, We shalt steal thy treasure!",
"<span style='color: blue;'>I'm Blue da ba dee dabba da-ee</span>",
'<audio controls><source src="crack.wav" type="audio/wav"></audio>'];

const target = document.getElementById('random');

function outputRandomString() {
    const randomIndex = Math.floor(Math.random() * strings.length);
    if (randomIndex === 22) {
      target.innerHTML = null;
    } else {
      target.innerHTML = strings[randomIndex];
    }
  }
  
  outputRandomString();