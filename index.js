// Some of my initial tests to get to a solution:

console.log('hello');
var str = 'traCedynamics';
str = str.substring(0,str.length-1);
console.log(str); 
console.log(str.toLowerCase());

// My first solution submission to Code Wars:

function disemvowel(str) {
    const LEN = str.length + 1;
    let tStr = str.toLowerCase();
    let rStr = '';
    for ( let i = 0; i < LEN; i++) {
      if ( (tStr[i] === "a") || (tStr[i] === "e") || (tStr[i] === "i") || (tStr[i] === "o") || (tStr[i] === "u") ) {}
      else {
        rStr = rStr + str.charAt(i);
      }
    }
    return rStr;
  }


  /*

Other Code Wars Solutions:

  osuushi, xDranik, ssineriz, laoris, colbydauph, duncancumming, Balkoth, nimdahk, Strikeskids, KaeruCT (plus 6902 more warriors)
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
664 similar code variations are grouped with this oneShow Variations

Best Practices1647Clever743
48ForkCompare with your solutionLink
user4413811, dokdim, gaspid, iheb khemissi, rahma.boukari
function disemvowel(str) {
  return (str || "").replace(/[aeiou]/gi, "");
}
2 similar code variations are grouped with this oneShow Variations

Best Practices123Clever56
5ForkCompare with your solutionLink
mayurarora, kat1aka, rafaelmalave, Kellen.Pugmire, sargent88, jodilark, Adunreal, kome12, MMehelich, JosiahGr, justeban (plus 21 more warriors)
disemvowel = str => str.replace(/[aeiou]/gi,'');
14 similar code variations are grouped with this oneShow Variations

Best Practices117Clever105
7ForkCompare with your solutionLink
andorey
// without arrow function
function disemvowel(str) { return str.replace(/[aeiou]/gi, '') }
Best Practices42Clever1
0ForkCompare with your solutionLink
RaphaelR, lipenco, equinoxjenkins, georgeawwad, Rolivhuwa, estupidyante, diviTheGreat, juanjuar457, eduardosanchezcastillo, mk2moo (plus 74 more warriors)
function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}
36 similar code variations are grouped with this oneShow Variations

Best Practices39Clever137
13ForkCompare with your solutionLink
ricardoCeb, Arnold, oumaima-dr, Houssemboukari123, walid28
function disemvowel(str) {
  var diemvoweledStr = str.replace(/[aeiou]/gi,"");
  return diemvoweledStr;
}
*/
