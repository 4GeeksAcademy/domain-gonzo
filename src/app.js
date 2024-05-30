let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function generateDomains(pronouns, adjectives, nouns) {
    let domains = [];

    for (let p of pronouns) {
        for (let a of adjectives) {
            for (let n of nouns) {
                domains.push(`${p}${a}${n}.com`);
            }
        }
    }

    return domains;
}

let domains = generateDomains(pronoun, adj, noun);

let domainList = document.getElementById('domain-list');

let domainItems = domains.map(domain => `<li>${domain}</li>`).join('');
domainList.innerHTML = domainItems;
