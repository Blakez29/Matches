const men = ['Roman Reigns', 'John Cena', 'Edge', 'R-Truth', 'Brock Lesnar', 'Cody Rhodes', 'Seth Rollins', 'Big Show', 'The Undertaker', 'Ric Flair', 'Drew McIntyre', 'Logan Paul', 'Kurt Angle'];
const menTitle = ['WWE Championship', 'World HeavyWeight Championship', 'Intercontinental Championship', 'United States Championship'];
const women = ['Rhea Ripley', 'Trish Stratus', 'Nia Jax', 'Becky Lynch', 'Bianca Belair', 'Jade Cargill', 'Lita', 'Bayley'];
const womenTitle = ['Women\'s WWE Championship', 'Women\'s World HeavyWeight Championship', 'Women\'s NXT Championship'];
const title = [false, false, false, false, true, false, true, false, false, true];
const interfere = [true, false, false, false]
const matchType = Math.floor(Math.random() * 2);

function whosFighting(num) {
    let man1 = men[Math.floor(Math.random() * men.length)];
    let man2 = men[Math.floor(Math.random() * men.length)];
    let woman1 = women[Math.floor(Math.random() * women.length)];
    let woman2 = women[Math.floor(Math.random() * women.length)];
    if (num === 0) {
        if (man1 === man2) {
            whosFighting(num);
            return;
        }
        console.log(`The main event for tonight is ${man1} vs. ${man2}!`)
    } else if (num === 1) {
        if (woman1 === woman2) {
            whosFighting(num);
            return;
        }
        console.log(`The main event for tonight is ${woman1} vs. ${woman2}!`)
    }
    forTitle(num);
    interference(interfere, num);
    if (num === 0) {
        let manWin = [man1, man2];
        console.log(`And the winner is...${manWin[Math.floor(Math.random()) * 2]}!`);
    } else {
        let womanWin = [woman1, woman2];
        console.log(`And the winner is...${womanWin[Math.floor(Math.random()) * 2]}!`);
    }

    function interference(arr, num) {
        let interfere = arr[Math.floor(Math.random() * 2)]
        if (num === 0 && interfere) {
            let man3 = men[Math.floor(Math.random() * men.length)]
            if (man3 === man1 || man3 === man2) {
                interference(arr, num);
                return;
            }
            console.log(`Interference by ${man3}`);
        } else if (num === 1 && interfere) {
            let woman3 = women[Math.floor(Math.random() * women.length)]
            if (woman3 === woman1 || woman3 === woman2) {
                interference(arr, num);
                return;
            }
            console.log(`Interference by ${woman3}`);
        }
    }
}

function forTitle(num) {
    let titleMatch = title[Math.floor(Math.random() * 10)]
    if (titleMatch && num === 0) {
        console.log(`For the ${menTitle[Math.floor(Math.random()) * menTitle.length]}!`);
    } else if (titleMatch && num === 1) {
        console.log(`For the ${womenTitle[Math.floor(Math.random()) * womenTitle.length]}!`);
    }
}



whosFighting(matchType);
