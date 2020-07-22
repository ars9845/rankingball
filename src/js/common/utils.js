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
    case this.SPORTS_MY:
        return "my";
    case this.SPORTS_SOCCER:
        return "soccer";
    case this.SPORTS_MLB:
        return "mlb";
    case this.SPORTS_NFL:
        return "nfl";
    case this.SPORTS_NBA:
        return "nba";
    case this.SPORTS_KBO:
        return "kbo";
    case this.ESPORTS_LOL:
        return "lol";
    case this.ESPORTS_CS:
        return "cs";
    case this.ESPORTS_DOTA:
        return "dota";
    case this.ESPORTS_PUBG:
        return "pubg";
    }
}