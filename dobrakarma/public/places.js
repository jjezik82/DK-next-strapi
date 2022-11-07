// 20221101164438
// https://www.dobra-karma.sk/api/get-products

const places = [
  {
    id: '1',
    name: 'Dobrá Karma',
    street: 'J. Gagarina 139',
    postal_code: '96001',
    city: 'Zvolen',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">Dobrá Karma</p>\r\n\r\n<p style="text-align: center;"><strong><img src="/storage/app/media/uploaded-files/dobra-karma.jpg" style="width: 300px;" class="fr-fic fr-dib" data-result="success"></strong></p>',
    lon: '19.144327125961414',
    lat: '48.5605499313952',
    additional_data: null,
    created_at: '2021-10-08 12:13:50',
    updated_at: '2021-10-08 14:17:57',
  },
  {
    id: '3',
    name: 'Dobromysel',
    street: 'Priehradná 1',
    postal_code: '949 01',
    city: 'Nitra',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">Dobromysel<img src="/storage/app/media/uploaded-files/dobromysel.jpg" style="width: 300px;" class="fr-fic fr-dib" data-result="success"></p>',
    lon: '18.081434656207858',
    lat: '48.31334442827152',
    additional_data: null,
    created_at: '2021-10-08 13:07:16',
    updated_at: '2021-10-08 13:14:21',
  },
  {
    id: '4',
    name: 'U Vážky',
    street: 'Rožňavská 1a',
    postal_code: '831 04',
    city: 'Bratislava',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">U Vážky<img src="/storage/app/media/uploaded-files/uvazky.jpg" style="width: 300px;" class="fr-fic fr-dib" data-result="success"></p>',
    lon: '17.153266146683436',
    lat: '48.16758384714015',
    additional_data: null,
    created_at: '2021-10-08 13:09:21',
    updated_at: '2021-10-08 13:14:07',
  },
  {
    id: '5',
    name: 'U Vážky - Mlynské Nivy',
    street: 'Mlynské nivy 3',
    postal_code: '821 08',
    city: 'Bratislava - Ružinov',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">U Vážky <img src="/storage/app/media/uploaded-files/uvazky.jpg" style="width: 300px;" class="fr-fic fr-dib" data-result="success"></p>',
    lon: '17.12858718542092',
    lat: '48.14674149195017',
    additional_data: null,
    created_at: '2021-10-08 13:12:13',
    updated_at: '2021-10-08 13:13:47',
  },
  {
    id: '8',
    name: 'Simply Vegan',
    street: 'A. Hlinku, 727 727/12',
    postal_code: '971 01',
    city: 'Prievidza',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">Simply Vegan</p>\r\n\r\n<p style="text-align: center;"><img src="/storage/app/media/uploaded-files/simplyvegan.png" style="width: 300px;" class="fr-fic fr-dib" data-result="success"></p>',
    lon: '18.616827167483923',
    lat: '48.77296967974034',
    additional_data: null,
    created_at: '2021-10-08 13:21:34',
    updated_at: '2021-10-08 13:21:34',
  },
  {
    id: '9',
    name: 'BioSen',
    street: 'Námestie SNP 14',
    postal_code: '960 01',
    city: 'Zvolen',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">BioSen</p>\r\n\r\n<p style="text-align: center;"><img src="/storage/app/media/uploaded-files/biosen.jpg" style="width: 300px;" class="fr-fic fr-dib" data-result="success"></p>',
    lon: '19.127731872147073',
    lat: '48.575677372101296',
    additional_data: null,
    created_at: '2021-10-08 13:23:22',
    updated_at: '2021-10-08 13:23:22',
  },
  {
    id: '10',
    name: 'Lokál Kútik',
    street: 'Centrum 1743',
    postal_code: '017 01',
    city: 'Považská Bystrica',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">Lokál Kútik</p>\r\n\r\n<p style="text-align: center;"><img src="/storage/app/media/uploaded-files/lokalKutik.jpg" style="width: 300px;" class="fr-fic fr-dib" data-result="success"></p>',
    lon: '18.447543369402023',
    lat: '49.114108685034054',
    additional_data: null,
    created_at: '2021-10-08 13:27:17',
    updated_at: '2021-10-08 13:27:17',
  },
  {
    id: '11',
    name: 'Láskavé Dobroty',
    street: 'Toryská 780/3',
    postal_code: '040 11',
    city: 'Košice',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">Láskavé Dobroty</p>\r\n\r\n<p style="text-align: center;"><img src="/storage/app/media/uploaded-files/laskavedobroty.jpg" style="width: 300px;" class="fr-fic fr-dib" data-result="success"></p>',
    lon: '21.23665721791121',
    lat: '48.714672840574494',
    additional_data: null,
    created_at: '2021-10-08 13:29:32',
    updated_at: '2021-10-08 13:29:32',
  },
  {
    id: '12',
    name: 'Zelený obchod',
    street: 'Rožňavská 1a',
    postal_code: '831 04',
    city: 'Bratislava',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">Zelený obchod</p>\r\n\r\n<p style="text-align: center;"><img src="/storage/app/media/uploaded-files/zelenyobchod.jpg" style="width: 300px;" class="fr-fic fr-dib" data-result="success"></p>',
    lon: '17.153265819454408',
    lat: '48.16757004754025',
    additional_data: null,
    created_at: '2021-11-06 12:45:34',
    updated_at: '2021-11-06 12:45:46',
  },
  {
    id: '13',
    name: 'Oáza Zdravia',
    street: 'Česká 375/12',
    postal_code: '979 01',
    city: 'Rimavská Sobota',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">Oáza Zdravia</p>\r\n\r\n<p style="text-align: center;"><img src="/storage/app/media/uploaded-files/oazazdravia.jpg" style="width: 300px;" class="fr-fic fr-dib" data-result="success"></p>',
    lon: '20.00269090696656',
    lat: '48.3799406302028',
    additional_data: null,
    created_at: '2021-11-06 12:48:47',
    updated_at: '2021-11-06 12:48:47',
  },
  {
    id: '14',
    name: 'Pytlík - Bezobalový obchod',
    street: 'Ivana Krasku 14',
    postal_code: '934 05',
    city: 'Levice',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">Pytlík - Bezobalový obchod</p>\r\n\r\n<p style="text-align: center;"><img src="/storage/app/media/uploaded-files/pytlik.jpg" style="width: 300px;" class="fr-fic fr-dib" data-result="success"></p>',
    lon: '18.60455388187668',
    lat: '48.218074125802204',
    additional_data: null,
    created_at: '2021-11-06 12:50:31',
    updated_at: '2021-11-06 12:52:19',
  },
  {
    id: '17',
    name: 'EKO komôrka',
    street: 'Moravská 3',
    postal_code: '020 01',
    city: 'Púchov',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">EKO komôrka</p>\r\n\r\n<p style="text-align: center;"><img src="/storage/app/media/uploaded-files/ekokomorka.jpg" style="width: 300px;" class="fr-fic fr-dib" data-result="success"></p>',
    lon: '18.328178422832835',
    lat: '49.122332654089426',
    additional_data: null,
    created_at: '2021-11-06 13:05:03',
    updated_at: '2021-11-06 13:05:03',
  },
  {
    id: '19',
    name: 'Finom',
    street: 'Herlianska 1084',
    postal_code: '093 03',
    city: 'Vranov nad Topľou-Čemerné',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<p><strong>Finom</strong></p>',
    lon: '21.66681169839486',
    lat: '48.88305556877082',
    additional_data: null,
    created_at: '2022-05-24 07:50:33',
    updated_at: '2022-05-24 07:51:20',
  },
  {
    id: '20',
    name: 'Hrnček Var',
    street: '1.mája 90/25',
    postal_code: '031 01',
    city: 'Liptovský Mikuláš',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<strong>Hrnček Var</strong>',
    lon: '19.613316456071097',
    lat: '49.08288742260887',
    additional_data: null,
    created_at: '2022-05-24 07:54:07',
    updated_at: '2022-05-24 07:54:07',
  },
  {
    id: '21',
    name: 'Bio U Aničky',
    street: 'Jozefa Weisseho 10',
    postal_code: '915 01',
    city: 'Nové Mesto nad Váhom',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<strong>Bio U Aničky</strong>',
    lon: '17.829965045367754',
    lat: '48.758847031314275',
    additional_data: null,
    created_at: '2022-05-24 07:56:33',
    updated_at: '2022-05-24 07:56:33',
  },
  {
    id: '22',
    name: 'Sanus Vita',
    street: 'Antona Bernoláka 2137/19',
    postal_code: '010 01',
    city: 'Žilina',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<strong>Sanus Vita</strong>',
    lon: '18.741208240731932',
    lat: '49.217579803181465',
    additional_data: null,
    created_at: '2022-05-24 07:58:03',
    updated_at: '2022-05-24 07:58:03',
  },
  {
    id: '23',
    name: 'Do Vrecúška',
    street: 'Námestie Milana Rastislava Štefánika 894',
    postal_code: '010 01',
    city: 'Žilina',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<strong>Do Vrecúška</strong>',
    lon: '18.747336798403396',
    lat: '49.222860059673515',
    additional_data: null,
    created_at: '2022-05-24 07:59:37',
    updated_at: '2022-05-24 07:59:37',
  },
  {
    id: '24',
    name: 'Kvapka',
    street: 'Zvolenská 4000/25',
    postal_code: '036 01',
    city: 'Martin-Sever',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<strong>Kvapka</strong>',
    lon: '18.9272704830571',
    lat: '49.079971379312276',
    additional_data: null,
    created_at: '2022-05-24 08:00:38',
    updated_at: '2022-05-24 08:00:38',
  },
  {
    id: '25',
    name: 'Bio Šujo',
    street: 'M. R. Štefánika 1022/22',
    postal_code: '036 01',
    city: 'Martin',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<strong>Bio Šujo</strong>',
    lon: '18.922772140728082',
    lat: '49.0636538470973',
    additional_data: null,
    created_at: '2022-05-24 08:02:52',
    updated_at: '2022-05-24 08:02:52',
  },
  {
    id: '26',
    name: 'Koliba u Sv. Krištofa',
    street: 'Uľanská cesta 5654/170',
    postal_code: '974 01',
    city: 'Banská Bystrica',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">Vegánske briendzové halušky v ponuke</p>',
    lon: '19.100038111885624',
    lat: '48.7942511115031',
    additional_data: null,
    created_at: '2022-05-24 08:04:18',
    updated_at: '2022-05-24 08:07:34',
  },
  {
    id: '27',
    name: 'Versh Grocery',
    street: 'Turecká 2/e',
    postal_code: '903 01',
    city: 'Senec',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<strong>Versh Grocery</strong>',
    lon: '17.400659329063593',
    lat: '48.220212262237574',
    additional_data: null,
    created_at: '2022-05-24 08:16:55',
    updated_at: '2022-05-24 08:16:55',
  },
  {
    id: '29',
    name: 'Bezobalovo',
    street: 'Blumentálska 25',
    postal_code: '811 07',
    city: 'Bratislava',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<strong>Bezobalovo</strong>',
    lon: '17.123710856048035',
    lat: '48.1555102219021',
    additional_data: null,
    created_at: '2022-05-24 08:20:16',
    updated_at: '2022-05-24 08:20:16',
  },
  {
    id: '30',
    name: 'Špeciálne potraviny Stévia',
    street: 'Dolná 62',
    postal_code: '974 01',
    city: 'Banská Bystrica',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<strong>Špeciálne potraviny Stévia</strong>',
    lon: '19.141081613733718',
    lat: '48.7326308909737',
    additional_data: null,
    created_at: '2022-05-24 08:23:50',
    updated_at: '2022-05-24 08:23:50',
  },
  {
    id: '31',
    name: 'Flora Vita',
    street: 'Rad L. N. Tolstého 1904',
    postal_code: '971 01',
    city: 'Prievidza',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<p style="text-align: center;">Flora Vita</p>',
    lon: '18.619477655975874',
    lat: '48.7795938189758',
    additional_data: null,
    created_at: '2022-11-05 08:29:28',
    updated_at: '2022-11-05 08:29:28',
  },
  {
    id: '32',
    name: 'Bio u Aničky',
    street: 'Soblahovská 7262',
    postal_code: '911 08',
    city: 'Trenčín',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<p style="text-align: center;">Bio u Aničky</p>',
    lon: '18.033507544721218',
    lat: '48.88442169455331',
    additional_data: null,
    created_at: '2022-11-05 08:31:46',
    updated_at: '2022-11-05 08:31:46',
  },
  {
    id: '33',
    name: 'Bio Topka',
    street: 'Námestie mieru 1',
    postal_code: '031 01',
    city: 'Liptovský Mikuláš',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<p style="text-align: center;">Bio Topka</p>',
    lon: '19.611643445207143',
    lat: '49.08588068653995',
    additional_data: null,
    created_at: '2022-11-05 08:33:12',
    updated_at: '2022-11-05 08:33:12',
  },
  {
    id: '34',
    name: 'Na Váhu',
    street: 'Karola Salvu 6',
    postal_code: '034 01',
    city: 'Ružomberok',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content: '<p style="text-align: center;">Na Váhu</p>',
    lon: '19.297640727148245',
    lat: '49.08233727089525',
    additional_data: null,
    created_at: '2022-11-05 08:34:52',
    updated_at: '2022-11-05 08:34:52',
  },
  {
    id: '35',
    name: 'Farmársky obchodík pod Sitnom',
    street: 'Kammerhofská 188/13',
    postal_code: '969 01',
    city: 'Banská Štiavnica',
    country_id: '204',
    cluster_id: null,
    is_published: '1',
    popup_content:
      '<p style="text-align: center;">Farmársky obchodík pod Sitnom</p>',
    lon: '18.898435440626663',
    lat: '48.45755386416076',
    additional_data: null,
    created_at: '2022-11-05 08:36:54',
    updated_at: '2022-11-05 08:36:54',
  },
];

export default places;
