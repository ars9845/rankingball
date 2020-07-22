export const DATA_URL = 'https://dev.rankingball.com:13001/';
export const IMAGE_URL = 'https://cdnnew.rankingball.com/img/';

export const SPORTS_MY = 1;
export const SPORTS_FEATURED = 104000;
//export const SPORTS_MLB = 104002;
export const SPORTS_MLB = 104012;
export const SPORTS_SOCCER = 104001;
export const SPORTS_NFL = 104003;
export const SPORTS_NBA = 104004;
export const SPORTS_KBO = 104012;
export const ESPORTS_FEATURED = 105000;
export const ESPORTS_LOL = 105001;
export const ESPORTS_CS = 105002;
export const ESPORTS_DOTA = 105003;
export const ESPORTS_PUBG = 105004;

export function getAbbr(gameType) {		
    switch(gameType){
    case 1 :
        return "my";
    case 104001:
        return "soccer";
    case 104012:
        return "mlb";
    case 104003:
        return "nfl";
    case 104004:
        return "nba";
    case 104012:
        return "kbo";
    case 105001:
        return "lol";
    case 105002:
        return "cs";
    case 105003:
        return "dota";
    case 105004:
        return "pubg";
    }
}