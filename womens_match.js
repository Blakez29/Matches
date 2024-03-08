import {womens} from './women_stars.js';
const women = womens.length;

export function womensMatch(){
    document.getElementById('women').style.backgroundColor= 'rgb(208, 193, 193)';
    document.getElementById('men').style.backgroundColor= 'rgb(131, 111, 111)';
    let woman1 = Math.floor(Math.random() * men);
    let woman2 = Math.floor(Math.random() * men);
    document.getElementById('name1').innerHTML = women[woman1].name;
    document.getElementById('name2').innerHTML = women[woman2].name;
    document.getElementById('image1').src = women[woman1].image;
    document.getElementById('image2').src = women[woman2].image;
}