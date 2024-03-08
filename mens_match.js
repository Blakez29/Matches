const men = mens.length;
const title = mensTitles.length;

export function mensMatch(){
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
    };

    function title(){
        let titleUp = Math.floor(Math.random() * title);
        document.getElementById('titleText').innerHTML = `For the ${mensTitles[titleUp].name}!`;
        document.getElementById('titleImg').img = mensTitles[titleUp].img;
    };

    function interference(){
        let man3 = Math.floor(Math.random() * men);
        if(man3 === man1 || man3 === man2){
            interference();
            return; 
        }else{
            document.getElementById('interferenceText').innerHTML = `Oh no! An interference by ${mens[man3].name}! `;
            document.getElementById('interferenceImg').src = mens[man3].img;
        };
    };

    function winner(){
        let num = Math.random();
        if(num > 0.5){
            document.getElementById('winnerText').innerHTML = `And the winner is ... ${mens[man1].name}! `;
            document.getElementById('winnerImg').src = mens[man1].img;  
        }else{
            document.getElementById('winnerText').innerHTML = `And the winner is ... ${mens[man2].name}! `;
            document.getElementById('winnerImg').src = mens[man2].img;
        };
    };
    title();
    interference();
    winner();
}