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

//gameType return class 
export function getAbbr(gameType) {		
    switch(gameType){
    case 1 :
        return "my";
    case 104001:
        return "soccer";
    case 104002:
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
    default :       
    }    
}
//gameType return league 
export function getGame(gameType) {		
    switch(gameType){
    case 104001:
        return "SOCCER";
    case 104002:
        return "MLB";
    case 104003:
        return "NFL";
    case 104004:
        return "NBA";
    case 104012:
        return "KBO";
    case 105001:
        return "LOL";
    case 105002:
        return "CS";
    case 105003:
        return "DOTA";
    case 105004:
        return "PUBG";
    default :  
    }
}

//gameType return league 
export function getContestType(contestType) {		
    switch(contestType){                
    case 114001:
        return "TNMT";
    case 114002:
        return "50/50";
    case 114003:
        return "30/30";
    case 114004:
        return "H2H"; 
    case 114005:
        return "SCORE"; 
    case 114006:
        return "LINE"; 
    case 114011:
        return "TNMT";
    case 114012:
        return "50/50";
    case 114013:
        return "30/30";
    case 114014:
        return "H2H"; 
    default :    
    }       
}

//match list date groupBy
export function groupBy(array, key) {
    return array.reduce((result, currentValue) => {                
      var startDate = new Date(currentValue.st);                                
      var formatted = startDate.toLocaleDateString("en-US");                 
      var numberDate = formatted.split("/");         
      var yearDate = numberDate.splice(-1)[0];      
      numberDate.splice(0, 0, yearDate);        
      var groupDate = numberDate.join("");              
      (result[groupDate] = result[groupDate] || []).push(
        currentValue                    
      );        
      return result;
    }, {});
}; 