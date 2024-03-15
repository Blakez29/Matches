function show() {
    const num1=Math.random();
    const num2=Math.random();
    document.getElementById('create').style.display = 'none';
    document.getElementById("matchtypegen").style.display = 'none';
    document.getElementById('vs').style.display = 'flex';
    document.getElementById('match').style.display = 'flex';
    sleep(1000).then(() => {document.getElementById('bellImg').style.display = 'flex'});
    sleep(1000).then(() => {document.getElementById('bellText').style.display = 'block'});
    sleep(2000).then(() => {document.getElementById('winnerImg').style.display = 'flex'});
    sleep(2000).then(() => {document.getElementById('winnerText').style.display = 'block'});
    document.getElementById("clear").style.display = 'block';

    if(num1 > 0.7){
        sleep(1500).then(() => {document.getElementById("interferenceImg").style.display = 'flex'});
        sleep(1500).then(() => {document.getElementById("interferenceText").style.display = 'block'});  
    }else{
        document.getElementById("interferenceImg").style.display = 'none';
        document.getElementById("interferenceText").style.display = 'none';
    };
    
    if(num2 > 0.7){
        sleep(500).then(() => {document.getElementById('titleImg').style.display = 'flex'});
        sleep(500).then(() => {document.getElementById('titleText').style.display = 'block'});
    }else{
        document.getElementById('titleImg').style.display = 'none';
        document.getElementById('titleText').style.display = 'none';  
        };
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
    };

function clearOut() {
    document.getElementById('vs').style.display = "none";
    document.getElementById('match').style.display = 'none';
    document.getElementById('titleImg').style.display = 'none';
    document.getElementById('titleText').style.display = 'none';
    document.getElementById('bellImg').style.display = 'none';
    document.getElementById('bellText').style.display = 'none';
    document.getElementById('interferenceImg').style.display = 'none';
    document.getElementById('interferenceText').style.display = 'none';
    document.getElementById('winnerImg').style.display = 'none';
    document.getElementById('winnerText').style.display = 'none';
    document.getElementById('create').style.display = 'block';
    document.getElementById("matchtypegen").style.display = 'flex';
    document.getElementById("clear").style.display = 'none';
    document.getElementById('women').style.backgroundColor= 'rgb(131, 111, 111)';
    document.getElementById('men').style.backgroundColor= 'rgb(131, 111, 111)';
};

const mens = [
    {
        name: 'Cody Rhodes',
        img: 'images/Men/cody.jpg'
    },
    {
        name: 'Roman Reigns',
        img: "images/Men/roman.png"
    },
    {
        name: 'Solo Sikoa',
        img: 'images/Men/Solo.png'
    },
    {
        name: 'John Cena',
        img: 'images/Men/cena.jpg'    
    },
    {
        name: 'Ricochet',
        img: 'images/Men/Ricochet.png'
    },
    {
        name: 'CM Punk',
        img: 'images/Men/cm-punk.png'
    },
    {
        name: 'Dominik Mysterio',
        img: 'images/Men/dominik-mysterio.png'
    },
    {
        name: 'Rey Mysterio',
        img: 'images/Men/Rey_Mysterio.webp'
    },
    {
        name: 'AJ Styles',
        img: 'images/Men/aj-styles.png'
    },
    {
        name: 'Bobby Lashley',
        img: 'images/Men/bobby-lashley.png'
    },
    {
        name: 'Chad Gable',
        img: 'images/Men/Chad_Gable.webp'
    },
    {
        name: 'Drew McIntyre',
        img: 'images/Men/Drew_McIntyre.webp'
    },
    {
        name: 'Gunther',
        img: 'images/Men/Gunther.webp'
    },
    {
        name: 'Jey uso',
        img: 'images/Men/Jey_Uso.webp'
    },
    {
        name: 'Jimmy Uso',
        img: 'images/Men/Jimmy_Uso_2.webp'
    },
    {
        name: 'Kofi Kingston',
        img: 'images/Men/kofi-kingston.png'
    },
    {
        name: 'Kurt Angle',
        img: 'images/Men/kurt-angle.png'
    },
    {
        name: 'LA Knight',
        img: 'images/Men/la-knight.png'
    },
    {
        name: 'R Truth',
        img: 'images/Men/r-truth.png'
    },
    {
        name: 'Sami Zayn',
        img: 'images/Men/sami-zayn.png'
    },
    {
        name: 'Seth Rollins',
        img: 'images/Men/seth-rollins.png'
    },
    {
        name: 'Shinsuke Nakamura',
        img: 'images/Men/shinsuke-nakamura.webp'
    },
    {
        name: 'The Rock',
        img: 'images/Men/The_Rock.webp'
    },
    {
        name: 'Triple H',
        img: 'images/Men/Tripleh.webp'
    },
    {
        name: 'The Undertaker',
        img: 'images/Men/undertaker.png'
    },
];

const mensTitles = [
    {
        name: 'Universal WWE Championship',
        img: 'images/mTitles/Universal.png'
    },
    {
        name: 'World Heavyweight Championship',
        img: 'images/mTitles/Heavyweight.png'
    },
    {
        name: 'Intercontinental Championship',
        img: 'images/mTitles/WWE_Intercontinental_Championship.png'
    },
    {
        name: 'United States Championship',
        img: 'images/mTitles/United_states.png'
    }
];

const womens = [
    {
        name: 'Becky Lynch',
        img: 'images/Women/Becky_Lynch_2.webp'
    },
    {
        name: 'Bianca Bel-Air',
        img: "images/Women/Bianca_Belair_2.webp"
    },
    {
        name: 'Rhea Ripley',
        img: 'images/Women/Rhea.webp'
    },
    {
        name: 'Nia Jax',
        img: 'images/Women/nia-jax.png'    
    },
    {
        name: 'Asuka',
        img: 'images/Women/Asuka.png'
    },
    {
        name: 'Bayley',
        img: 'images/Women/Bayley.webp'
    },
    {
        name: 'Charlotte Flair',
        img: 'images/Women/charlotte-flair.png'
    },
    {
        name: 'Chelsea Green',
        img: 'images/Women/Chelsea_Green_2023.webp'
    },
    {
        name: 'Dakota Kai',
        img: 'images/Women/Dakota_Kai_2023.webp'
    },
    {
        name: 'Iyo Sky',
        img: 'images/Women/Iyo_Sky.webp'
    },
    {
        name: 'Jade Cargill',
        img: 'images/Women/jade-cargill.png'
    },
    {
        name: 'Lita',
        img: 'images/Women/Lita_2.webp'
    },
    {
        name: 'Liv Morgan',
        img: 'images/Women/liv-morgan.png'
    },
    {
        name: 'Mia Yim',
        img: 'images/Women/mia-yim.png'
    },
    {
        name: 'Naomi',
        img: 'images/Women/naomi.png'
    },
    {
        name: 'Piper Niven',
        img: 'images/Women/piper-niven.png'
    },
    {
        name: 'Raquel Rodriguez',
        img: 'images/Women/Raquel.webp'
    },
    {
        name: 'Shayna Bazler',
        img: 'images/Women/Shayna_Baszle.webp'
    },
    {
        name: 'Shotzi',
        img: 'images/Women/Shotzi_Blackheart.webp'
    },
    {
        name: 'Tiffany Stratton',
        img: 'images/Women/Tiffany_Stratton_2023.webp'
    },
    {
        name: 'Trish Stratus',
        img: 'images/Women/trish-stratus.png'
    },
    {
        name: 'Zoey Stark',
        img: 'images/Women/Zoey_Stark_NXT_2.webp'
    },
];

const womensTitles = [
    {
        name: 'Women\'s WWE Championship',
        img: 'images/wTitles/WWE_Women\'s_Championship_(2023).jpeg'
    },
    {
        name: 'Women\'s World Heavyweight Championship',
        img: 'images/wTitles/Women\'s_World_Championship_(WWE)_2023.jpeg'
    },
];

function mensMatch(){
    const men = mens.length;
    document.getElementById('men').style.backgroundColor= 'rgb(208, 193, 193)';
    document.getElementById('women').style.backgroundColor= 'rgb(131, 111, 111)';
    let man1 = Math.floor(Math.random() * men);
    let man2 = Math.floor(Math.random() * men);
    document.getElementById('name1').innerHTML = mens[man1].name;
    document.getElementById('name2').innerHTML = mens[man2].name;
    document.getElementById('image1').src = mens[man1].img;
    document.getElementById('image2').src = mens[man2].img;
    if (man1 === man2) {
        mensMatch();
        return;
    }

    title()
    interference()
    winner()

    function title(){
        const title = mensTitles.length;
        let titleUp = Math.floor(Math.random() * title);
        document.getElementById('titleText').innerHTML = `For the ${mensTitles[titleUp].name}!`;
        document.getElementById('titleImg').src = mensTitles[titleUp].img;
    }

    function interference(){
        let man3 = Math.floor(Math.random() * men);
        if(man3 === man1 || man3 === man2){
            interference();
            return; 
        }else{
            document.getElementById('interferenceText').innerHTML = `Oh no! An interference by ${mens[man3].name}! `;
            document.getElementById('interferenceImg').src = mens[man3].img;
        };
    }

    function winner(){
        let num = Math.random();
        if(num > 0.5){
            document.getElementById('winnerText').innerHTML = `And the winner is ... ${mens[man1].name}! `;
            document.getElementById('winnerImg').src = mens[man1].img;  
        }else{
            document.getElementById('winnerText').innerHTML = `And the winner is ... ${mens[man2].name}! `;
            document.getElementById('winnerImg').src = mens[man2].img;
        };
    }

}

function womensMatch(){
    const women = womens.length;
    document.getElementById('women').style.backgroundColor= 'rgb(208, 193, 193)';
    document.getElementById('men').style.backgroundColor= 'rgb(131, 111, 111)';
    let woman1 = Math.floor(Math.random() * women);
    let woman2 = Math.floor(Math.random() * women);
    document.getElementById('name1').innerHTML = womens[woman1].name;
    document.getElementById('name2').innerHTML = womens[woman2].name;
    document.getElementById('image1').src = womens[woman1].img;
    document.getElementById('image2').src = womens[woman2].img;
    if (woman1 === woman2) {
        womensMatch();
        return;
    }

    title()
    interference()
    winner()

    function title(){
        const title = womensTitles.length;
        let titleUp = Math.floor(Math.random() * title);
        document.getElementById('titleText').innerHTML = `For the ${womensTitles[titleUp].name}!`;
        document.getElementById('titleImg').src = womensTitles[titleUp].img;
    }

    function interference(){
        let woman3 = Math.floor(Math.random() * women);
        if(woman3 === woman1 || woman3 === woman2){
            interference();
            return; 
        }else{
            document.getElementById('interferenceText').innerHTML = `Oh no! An interference by ${womens[woman3].name}! `;
            document.getElementById('interferenceImg').src = womens[woman3].img;
        };
    }

    function winner(){
        let num = Math.random();
        if(num > 0.5 ){
            document.getElementById('winnerText').innerHTML = `And the winner is ... ${womens[woman1].name}! `;
            document.getElementById('winnerImg').src = womens[woman1].img;  
        }else{
            document.getElementById('winnerText').innerHTML = `And the winner is ... ${womens[woman2].name}! `;
            document.getElementById('winnerImg').src = womens[woman2].img;
        };
    }

}
