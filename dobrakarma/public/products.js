const products = [
  {
    id: 1,
    name: 'nesyrella',
    description:
      'Naša ľahká, jemne kyselkavá nesyrella je vegánska alternatíva mozzarelly, ktorá pozdvihne každé jedlo na vyššiu úroveň. Pretože je to jeden z tvrdších syrov z našej kuchyne, je možné ju nastrúhať a krásne sa rozpúšťa. Odporúčame ju posypať na pizzu, či cestoviny alebo použiť ako náplň do slaného pečiva z lístkového cesta. Čerstvá je najlepšia nakrájaná na kocky v tvojom obľúbenom šaláte alebo ju jednoducho nakrájaj na tenšie plátky s paradajkou a bazalkou, pokvapkaj kvalitným olivovým olejom a voilá, vychutnaj si ju ako vegánske caprese.',
    attributes: [
      {
        title: 'zloženie',
        text: 'bio sójový nápoj (voda, sójové bôby 8%), kokosový olej, tapioka, morská soľ, kappa karagénan, citrónová šťava',
      },
      {
        title: 'skladovanie',
        text: 'Minimálna trvanlivosť produktu je 7 dní. Skladujte v chlade, pri teplote od 2°C do 5°C. Po otvorení ihneď spotrebujte.',
      },
      {
        title: 'energetické hodnoty',
        text: 'Energia: 1338 kJ/320 kcal Tuky: 31,6 g z toho nasýtené mastné kyseliny: 25,5 g Sacharidy: 7,1 g z toho cukry: 0,3 g Vláknina: 1,1 g Bielkoviny: 1,9 g Soľ: 1,3 g',
      },
    ],
    image:
      'https://www.dobra-karma.sk/storage/app/uploads/public/611/4ce/838/6114ce83811be599817346.jpg',
    gallery: [
      'https://www.dobra-karma.sk/storage/app/uploads/public/611/4ce/836/6114ce836777b175057334.jpg',
      'https://www.dobra-karma.sk/storage/app/uploads/public/611/4ce/844/6114ce8444448754303893.jpg',
      'https://www.dobra-karma.sk/storage/app/uploads/public/611/4ce/b19/6114ceb19c75c597929656.jpg',
    ],
  },
  {
    id: 2,
    name: 'brielant',
    description:
      'Náš „signature“ vegánsky syr typu brie si zamilujú nielen gurmáni, ale naozaj každý. Jeho lahodne krémová textúra vďačí kešu orieškom a unikátny chuťový charakter je dosiahnutý fermentáciou bakteriálnych kultúr z kokosového jogurtu a niekoľkodňovým individuálnym zrením. Kešu Brielant si taktiež užije menší soľný kúpeľ, ktorý zaistí tenkú kôrku na jeho povrchu, zatiaľ čo uprostred zostane jemný a roztierateľný. Vychutnať si ho môžete v rôznych syrových omáčkach vo vegásnkej verzii alebo sa bude vynímať ako stredobod vegánskeho syrového taniera. Jeho chuť sa najlepšie kombinuje so sladkým bobuľovitým ovocím ako sú jahody, maliny alebo červené hrozno. Brielant nepohrdne ani keď ho zosobášite s pohárikom španielskej Riojy.',
    attributes: [
      {
        title: 'zloženie',
        text: 'bio sójový nápoj (voda, sójové bôby 8%), kokosový olej, tapioka, morská soľ, kappa karagénan, citrónová šťava',
      },
      {
        title: 'skladovanie',
        text: 'Minimálna trvanlivosť produktu je 7 dní. Skladujte v chlade, pri teplote od 2°C do 5°C. Po otvorení ihneď spotrebujte.',
      },
      {
        title: 'energetické hodnoty',
        text: 'Energia: 1338 kJ/320 kcal Tuky: 31,6 g z toho nasýtené mastné kyseliny: 25,5 g Sacharidy: 7,1 g z toho cukry: 0,3 g Vláknina: 1,1 g Bielkoviny: 1,9 g Soľ: 1,3 g',
      },
    ],
    image:
      'https://www.dobra-karma.sk/storage/app/uploads/public/611/4cf/2e3/6114cf2e35b7d182175392.jpg',
    gallery: [
      'https://www.dobra-karma.sk/storage/app/uploads/public/611/4cf/2e3/6114cf2e3ca27539218518.jpg',
      'https://www.dobra-karma.sk/storage/app/uploads/public/611/4cf/2ec/6114cf2ec75f4771323598.jpg',
      'https://www.dobra-karma.sk/storage/app/uploads/public/611/4cf/2ed/6114cf2ed21e9416425565.jpg',
    ],
  },
  {
    id: 3,
    name: 'golda',
    description:
      'Delikátna údená golda je naozaj zlatom v kuchyni. Jemná, rozpúšťajúca sa na jazyku s prírodnou údenou príchuťou sa vyníma najmä na sendvičoch z kváskového chlebíka s rukolou a jablkovým chutney. Taktiež aj na cestovinových pokrmoch ako napríklad lasagne, primiešaná do bešamelovej omáčky. Varená, pečená či len tak natretá na krekroch je jednou z našich najobľúbenejších príchutí. Párujte so zeleným jablkom alebo zeleným hroznom. Pohárik Chardonnay či Sauvignon Blanc dodá golde na chuťovej palete šmrnc a pozdvihne obyčajnú chvíľu na zážitok.',
    attributes: [
      {
        title: 'zloženie',
        text: 'bio sójový nápoj (voda, sójové bôby 8%), kokosový olej, tapioka, morská soľ, kappa karagénan, citrónová šťava',
      },
      {
        title: 'skladovanie',
        text: 'Minimálna trvanlivosť produktu je 7 dní. Skladujte v chlade, pri teplote od 2°C do 5°C. Po otvorení ihneď spotrebujte.',
      },
      {
        title: 'energetické hodnoty',
        text: 'Energia: 1338 kJ/320 kcal Tuky: 31,6 g z toho nasýtené mastné kyseliny: 25,5 g Sacharidy: 7,1 g z toho cukry: 0,3 g Vláknina: 1,1 g Bielkoviny: 1,9 g Soľ: 1,3 g',
      },
    ],
    image:
      'https://www.dobra-karma.sk/storage/app/uploads/public/611/4cd/a38/6114cda389242232542088.jpg',
    gallery: [
      'https://www.dobra-karma.sk/storage/app/uploads/public/611/4cd/5da/6114cd5da3158536432762.jpg',
      'https://www.dobra-karma.sk/storage/app/uploads/public/611/4cd/8a9/6114cd8a938de934879325.jpg',
    ],
  },
]

export default products
