export type CountyItem = {
  id: string;
  label: string;
  query: string;
  capital: string;
  countyCode: number;
  population: number;
  area: number; // in km²
  region: string;
};

export const KENYA_COUNTIES: CountyItem[] = [
  { id:"mombasa", label:"Mombasa", query:"Mombasa", capital:"Mombasa", countyCode:1, population:1200000, area:294, region:"Coast" },
  { id:"kwale", label:"Kwale", query:"Kwale", capital:"Kwale", countyCode:2, population:866000, area:8270, region:"Coast" },
  { id:"kilifi", label:"Kilifi", query:"Kilifi", capital:"Kilifi", countyCode:3, population:1600000, area:12545, region:"Coast" },
  { id:"tana-river", label:"Tana River", query:"Tana River", capital:"Hola", countyCode:4, population:315000, area:35956, region:"Coast" },
  { id:"lamu", label:"Lamu", query:"Lamu", capital:"Lamu", countyCode:5, population:143000, area:6273, region:"Coast" },
  { id:"taita-taveta", label:"Taita-Taveta", query:"Taita-Taveta", capital:"Voi", countyCode:6, population:340000, area:17083, region:"Coast" },

  { id:"garissa", label:"Garissa", query:"Garissa", capital:"Garissa", countyCode:7, population:840000, area:44736, region:"North Eastern" },
  { id:"wajir", label:"Wajir", query:"Wajir", capital:"Wajir", countyCode:8, population:780000, area:56701, region:"North Eastern" },
  { id:"mandera", label:"Mandera", query:"Mandera", capital:"Mandera", countyCode:9, population:867000, area:25940, region:"North Eastern" },

  { id:"marsabit", label:"Marsabit", query:"Marsabit", capital:"Marsabit", countyCode:10, population:459000, area:70944, region:"Eastern" },
  { id:"isiolo", label:"Isiolo", query:"Isiolo", capital:"Isiolo", countyCode:11, population:268000, area:25336, region:"Eastern" },
  { id:"meru", label:"Meru", query:"Meru", capital:"Meru", countyCode:12, population:1550000, area:6936, region:"Eastern" },
  { id:"tharaka-nithi", label:"Tharaka-Nithi", query:"Tharaka-Nithi", capital:"Chuka", countyCode:13, population:393000, area:2609, region:"Eastern" },
  { id:"embu", label:"Embu", query:"Embu", capital:"Embu", countyCode:14, population:608000, area:2555, region:"Eastern" },
  { id:"kitui", label:"Kitui", query:"Kitui", capital:"Kitui", countyCode:15, population:1130000, area:30570, region:"Eastern" },
  { id:"machakos", label:"Machakos", query:"Machakos", capital:"Machakos", countyCode:16, population:1720000, area:6208, region:"Eastern" },
  { id:"makueni", label:"Makueni", query:"Makueni", capital:"Wote", countyCode:17, population:1020000, area:8168, region:"Eastern" },

  { id:"nyandarua", label:"Nyandarua", query:"Nyandarua", capital:"Ol Kalou", countyCode:18, population:760000, area:3245, region:"Central" },
  { id:"nyeri", label:"Nyeri", query:"Nyeri", capital:"Nyeri", countyCode:19, population:759000, area:2361, region:"Central" },
  { id:"kirinyaga", label:"Kirinyaga", query:"Kirinyaga", capital:"Kerugoya", countyCode:20, population:610000, area:1474, region:"Central" },
  { id:"muranga", label:"Murang’a", query:"Murang'a", capital:"Murang’a", countyCode:21, population:1130000, area:2560, region:"Central" },
  { id:"kiambu", label:"Kiambu", query:"Kiambu", capital:"Kiambu", countyCode:22, population:2540000, area:2538, region:"Central" },

  { id:"turkana", label:"Turkana", query:"Turkana", capital:"Lodwar", countyCode:23, population:926000, area:71297, region:"Rift Valley" },
  { id:"west-pokot", label:"West Pokot", query:"West Pokot", capital:"Kapenguria", countyCode:24, population:672000, area:8424, region:"Rift Valley" },
  { id:"samburu", label:"Samburu", query:"Samburu", capital:"Maralal", countyCode:25, population:310000, area:20526, region:"Rift Valley" },
  { id:"trans-nzoia", label:"Trans-Nzoia", query:"Trans-Nzoia", capital:"Kitale", countyCode:26, population:990000, area:2495, region:"Rift Valley" },
  { id:"uasin-gishu", label:"Uasin Gishu", query:"Uasin Gishu", capital:"Eldoret", countyCode:27, population:1370000, area:3399, region:"Rift Valley" },
  { id:"elgeyo-marakwet", label:"Elgeyo-Marakwet", query:"Elgeyo-Marakwet", capital:"Iten", countyCode:28, population:454000, area:3032, region:"Rift Valley" },
  { id:"nandi", label:"Nandi", query:"Nandi", capital:"Kapsabet", countyCode:29, population:950000, area:2874, region:"Rift Valley" },
  { id:"baringo", label:"Baringo", query:"Baringo", capital:"Kabarnet", countyCode:30, population:666000, area:11075, region:"Rift Valley" },
  { id:"laikipia", label:"Laikipia", query:"Laikipia", capital:"Nanyuki", countyCode:31, population:518000, area:8696, region:"Rift Valley" },
  { id:"nakuru", label:"Nakuru", query:"Nakuru", capital:"Nakuru", countyCode:32, population:2370000, area:7495, region:"Rift Valley" },
  { id:"narok", label:"Narok", query:"Narok", capital:"Narok", countyCode:33, population:1150000, area:17921, region:"Rift Valley" },
  { id:"kajiado", label:"Kajiado", query:"Kajiado", capital:"Kajiado", countyCode:34, population:1210000, area:21013, region:"Rift Valley" },
  { id:"kericho", label:"Kericho", query:"Kericho", capital:"Kericho", countyCode:35, population:901000, area:2436, region:"Rift Valley" },
  { id:"bomet", label:"Bomet", query:"Bomet", capital:"Bomet", countyCode:36, population:875000, area:1993, region:"Rift Valley" },

  { id:"kakamega", label:"Kakamega", query:"Kakamega", capital:"Kakamega", countyCode:37, population:1910000, area:3020, region:"Western" },
  { id:"vihiga", label:"Vihiga", query:"Vihiga", capital:"Mbale", countyCode:38, population:590000, area:563, region:"Western" },
  { id:"bungoma", label:"Bungoma", query:"Bungoma", capital:"Bungoma", countyCode:39, population:1680000, area:3021, region:"Western" },
  { id:"busia", label:"Busia", query:"Busia", capital:"Busia", countyCode:40, population:895000, area:1695, region:"Western" },

  { id:"siaya", label:"Siaya", query:"Siaya", capital:"Siaya", countyCode:41, population:1040000, area:2530, region:"Nyanza" },
  { id:"kisumu", label:"Kisumu", query:"Kisumu", capital:"Kisumu", countyCode:42, population:1420000, area:2086, region:"Nyanza" },
  { id:"homa-bay", label:"Homa Bay", query:"Homa Bay", capital:"Homa Bay", countyCode:43, population:1130000, area:3154, region:"Nyanza" },
  { id:"migori", label:"Migori", query:"Migori", capital:"Migori", countyCode:44, population:1120000, area:2596, region:"Nyanza" },
  { id:"kisii", label:"Kisii", query:"Kisii", capital:"Kisii", countyCode:45, population:1310000, area:1317, region:"Nyanza" },
  { id:"nyamira", label:"Nyamira", query:"Nyamira", capital:"Nyamira", countyCode:46, population:605000, area:912, region:"Nyanza" },

  { id:"nairobi-city", label:"Nairobi City", query:"Nairobi", capital:"Nairobi", countyCode:47, population:4700000, area:696, region:"Nairobi" },
];
