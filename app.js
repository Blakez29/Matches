function show() {
    const num1=Math.random();
    const num2=Math.random();
    document.getElementById('vs').style.display = 'flex';
    document.getElementById('match').style.display = 'flex';
    document.getElementById('names').style.display = 'flex';
    document.getElementById('bellImg').style.display = 'flex';
    document.getElementById('bellText').style.display = 'block';
    document.getElementById('winnerImg').style.display = 'flex';
    document.getElementById('winnerText').style.display = 'block';
    document.getElementById('create').style.display = 'none';
    document.getElementById("matchtypegen").style.display = 'none';
    document.getElementById("clear").style.display = 'block';

    if(num1 > 0.7){
        document.getElementById("interferenceImg").style.display = 'flex';
        document.getElementById("interferenceText").style.display = 'block';  
    }else{
        document.getElementById("interferenceImg").style.display = 'none';
        document.getElementById("interferenceText").style.display = 'none';
    };
    
    if(num2 > 0.7){
        document.getElementById('titleImg').style.display = 'flex';
        document.getElementById('titleText').style.display = 'block';
    }else{
        document.getElementById('titleImg').style.display = 'none';
        document.getElementById('titleText').style.display = 'none';  
        };
    };

function clearOut() {
    document.getElementById('vs').style.display = "none";
    document.getElementById('match').style.display = 'none';
    document.getElementById('names').style.display = 'none';
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
        img: 'https://i.pinimg.com/736x/16/56/e1/1656e1843d47ec82c72911d597bf1d47.jpg'
    },
    {
        name: 'Roman Reigns',
        img: "https://hips.hearstapps.com/hmg-prod/images/mh-1-18-reigns-1674070087.png?crop=0.490xw:0.981xh;0.494xw,0.00321xh&resize=1200:*"
    },
    {
        name: 'Solo Sikoa',
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88e30824-3c9a-4957-b6ab-394cb783aa20/dfdwngl-854ed640-540c-4ce1-8dbe-3532eea83289.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4ZTMwODI0LTNjOWEtNDk1Ny1iNmFiLTM5NGNiNzgzYWEyMFwvZGZkd25nbC04NTRlZDY0MC01NDBjLTRjZTEtOGRiZS0zNTMyZWVhODMyODkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dRkTxRtcgEI6C56LHiBYjsyM6aad2cvaLx5UDGui0g4'
    },
    {
        name: 'John Cena',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmtk6BOqva0mi55IBqZIAFlkt5Qw_LETVuQ&usqp=CAU'    
    }
];

const mensTitles = [
    {
        name: 'Universal WWE Championship',
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cc1de924-aae6-4b00-badb-41d27bd58c68/dfz7oh3-a6fdf013-eacc-4339-95b7-59d47d887604.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NjMWRlOTI0LWFhZTYtNGIwMC1iYWRiLTQxZDI3YmQ1OGM2OFwvZGZ6N29oMy1hNmZkZjAxMy1lYWNjLTQzMzktOTViNy01OWQ0N2Q4ODc2MDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.A-IhVXeaQTOFeDjaeHcajS3-E6TICb6RgZEFhNl6yuE'
    },
    {
        name: 'World Heavyweight Championship',
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88e30824-3c9a-4957-b6ab-394cb783aa20/dg1bfj2-dfc14294-a127-44df-a762-7c11de5cfa23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4ZTMwODI0LTNjOWEtNDk1Ny1iNmFiLTM5NGNiNzgzYWEyMFwvZGcxYmZqMi1kZmMxNDI5NC1hMTI3LTQ0ZGYtYTc2Mi03YzExZGU1Y2ZhMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bksKM47AR_0dvNUnUi9YPnGYqSqCTo3H8WckIF-m3x4'
    }
];

const womens = [
    {
        name: 'Becky Lynch',
        img: 'https://static.wikia.nocookie.net/bwwe/images/0/0b/Becky_Lynch_2.png/revision/latest?cb=20230201232613'
    },
    {
        name: 'Bianca Bel-Air',
        img: "https://static.wikia.nocookie.net/bwwe/images/2/23/Bianca_Belair_2.png/revision/latest?cb=20220904160744"
    },
    {
        name: 'Rhea Ripley',
        img: 'https://static.wikia.nocookie.net/prowrestling/images/1/1b/Rhea_Ripley_Judgement_Day_Look.png/revision/latest?cb=20230423090024'
    },
    {
        name: 'Nia Jax',
        img: 'https://www.thesmackdownhotel.com/images/wrestling/wrestlers/full-body/nia-jax.png'    
    }
];

const womensTitles = [
    {
        name: 'Women\'s WWE Championship',
        img: 'https://e7.pngegg.com/pngimages/743/123/png-clipart-wwe-raw-women-s-championship-wwe-smackdown-women-s-championship-professional-wrestling-championship-wwe-women-s-championship-title-emblem-professional-wrestling.png'
    },
    {
        name: 'Women\'s World Heavyweight Championship',
        img: 'https://images.footballfanatics.com/wwe-merchandise/wwe-womens-world-championship-replica-title-belt_ss5_p-200117184+pv-1+u-ohhw5dazl8hf7pjtpew3+v-gfuc9ez4yx7rilhstbni.jpg?_hv=2&w=900'
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
        document.getElementById('titleImg').src = mensTitles[1].img;
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
