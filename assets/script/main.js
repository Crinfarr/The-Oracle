const taglines = [
    'OR-A-CLE! OR-A-CLE!',
    'let me out of the trunk',
    'I wants to go to overpass mcdonalds',
    `did you know 1 in ${Math.ceil(Math.random()*5)} people are brain damaged and dumb and gay`,
    'this is middle school level humor',
    'if you hit a curb I\'ll kill myself',
    'I think I\'m in the wrong room',
    'Dead for the aesthetic',
    'finding patterns in literal rng since 201X',
    'GUYS LOOK A FIRE HYDRANT',
    'GUYS LOOK AN UNATTENDED BRIDGE',
    'TOBY LOOK AN UNATTENDED CHILD',
    'kilwin\'s stans, the lot of you',
    'did you know the best buy credit card will fucking kill you'
]
const sounds = [
    new Audio('https://www.myinstants.com/media/sounds/movie_1.mp3'),//bruh
    new Audio('https://www.myinstants.com/media/sounds/vine-boom.mp3'),//vine boom
    new Audio('https://www.myinstants.com/media/sounds/final_5f459548119a66001520d4e4_49108.mp3'),//white people be like
    new Audio('https://www.myinstants.com/media/sounds/black-people-be-like.mp3'),//black people be like
    new Audio('https://www.myinstants.com/media/sounds/taco-bell-bong-sfx.mp3'),//taco bell bong
    new Audio('https://www.myinstants.com/media/sounds/discord-leave-noise.mp3'),//discord leave
    new Audio('https://www.myinstants.com/media/sounds/yt1s_nYWSz5R.mp3'),//discord join
    new Audio('https://www.myinstants.com/media/sounds/calling-saul.mp3'),//better call saul intro chord
    new Audio('https://www.myinstants.com/media/sounds/bad-to-the-bone.mp3'),//bad to the bone riff
    new Audio('https://www.myinstants.com/media/sounds/penguinz0.mp3'),//HES PULLING HIS COCK OUT
    new Audio('https://www.myinstants.com/media/sounds/spongebob-fail.mp3'),//spongebob disappointed sound
    new Audio('https://www.myinstants.com/media/sounds/anime-wow-sound-effect.mp3'),//stock WOW sound effect
    new Audio('https://www.myinstants.com/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3'),//goku drip
    new Audio('https://www.myinstants.com/media/sounds/aughhhhh-aughhhhh.mp3'),//AUGHHHHH
    new Audio('https://www.myinstants.com/media/sounds/tf_nemesis.mp3'),//sad violin
    new Audio('https://www.myinstants.com/media/sounds/prowler-sound-effect_6bXErot.mp3'),//prowler sound
    new Audio('https://www.myinstants.com/media/sounds/fart-with-reverb.mp3'),//reverb fart
    new Audio('https://www.myinstants.com/media/sounds/error_CDOxCYm.mp3'),//error sound
    new Audio('https://www.myinstants.com/media/sounds/yt1s_wU4BGgD.mp3'),//what da dog doin
    new Audio('https://www.myinstants.com/media/sounds/among-us-role-reveal-sound.mp3'),//amogus role reveal
    new Audio('https://www.myinstants.com/media/sounds/wrong-answer-sound-effect.mp3'),//loud incorrect buzzer
    new Audio('https://www.myinstants.com/media/sounds/censor-beep-1.mp3'),//censor beep
    new Audio('https://www.myinstants.com/media/sounds/ceeday-huh-sound-effect.mp3'),//huh
    new Audio('https://www.myinstants.com/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3'),//what
    new Audio('https://www.myinstants.com/media/sounds/999-social-credit-siren.mp3'),//loud siren
    new Audio('https://www.myinstants.com/media/sounds/sponge-stank-noise.mp3'),//disappointed foghorn
    //ADD PRs WITH MORE SOUND URLS HERE
]

console.log('Loading oracle')

var oracleOn = false;
var runningSound = 0;
function queueSound() {
    console.log('DEBUG PRINT');
    var timeout = Math.ceil(Math.random() * (5 * 60 * 1000));//5 MINUTES
    runningSound = setTimeout(() => {
        var fx = sounds[Math.floor(Math.random() * sounds.length)];
        fx.play();
        queueSound();
    }, timeout);
    console.log(`Queued id ${runningSound} for ${timeout} ms`)
}
fetch("https://api.ipify.org/").then(async (res) => {
    taglines.push(await res.text());
    document.getElementById('tagline').innerText = taglines[Math.floor(Math.random() * taglines.length)];
})
const btn = document.getElementById('togglebutton');

btn.addEventListener('click', (_ev) => {
    if (btn.classList.contains('outline')) {
        //sound effects are not running
        btn.classList.remove('outline');
        btn.classList.remove('btn-info');
        btn.classList.add('btn-primary');
        btn.innerText = 'Stop';
        queueSound();
    } else {
        //sound effects are running
        btn.classList.add('outline');
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-info');
        btn.innerText = 'Start';
        clearTimeout(runningSound);
    }
});
console.log('Oracle loaded');