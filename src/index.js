module.exports = function toReadable (number) {
    let str = String(number);
    str.split('');
   
    if (str.length == 1) {
        if (+str[0] == 0) return 'zero';
        return getUnits(+str);
    } else if (str.length == 2) {
        if (+str[0] == 1) {
                switch (+str[1]) {
                    case 1:
                        return getTeen(+str[1]); 
                    case 2:
                        return getTeen(+str[1]); 
                    case 3:
                        return getTeen(+str[1]); 
                    case 4: 
                        return getTeen(+str[1]); 
                    case 5:
                        return getTeen(+str[1]);
                    case 6:
                        return getTeen(+str[1]); 
                    case 7:
                        return getTeen(+str[1]); 
                    case 8:
                        return getTeen(+str[1]);  
                    case 9: 
                        return getTeen(+str[1]); 
                }
        }

        if (+str[1] == 0) return getTen(+str[0]);

        return getTen(+str[0]) + ' ' + getUnits(+str[1]);

    } else if (str.length == 3) {
        if(+str[1] == 0 && +str[2] != 0) {
            return getUnits(+str[0]) + ' ' + 'hundred' + ' ' + getUnits(+str[2]);
        } else if(+str[2] == 0 && +str[1] != 0) {
            return getUnits(+str[0]) + ' ' + 'hundred' + ' ' + getTen(+str[1]);
        } else if(+str[1] == 0 && +str[2] == 0) {
            return getUnits(+str[0]) + ' ' + 'hundred';
        } else if(+str[1] == 1) {
            return getUnits(+str[0]) + ' ' + 'hundred' + ' ' + getTeen(+str[2]);
        } else {
            return getUnits(+str[0]) + ' ' + 'hundred' + ' ' + getTen(+str[1]) + ' ' + getUnits(+str[2]);
        }
    }

    function getUnits(num) {
        switch (num) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
        }
    }

    function getTeen(num) {
        switch (num) {  
            case 1:
                return 'eleven';
            case 2:
                return 'twelve';
            case 3:
                return 'thirteen'; 
            case 4: 
                return 'fourteen';
            case 5: 
                return 'fifteen';
            case 6:
                return 'sixteen';
            case 7:
                return 'seventeen';
            case 8:
                return 'eighteen'; 
            case 9: 
                return 'nineteen';
        }
    }
    
    function getTen(num) {
        switch (num) {  
            case 1:
                return 'ten';
            case 2:
                return 'twenty';
            case 3:
                return 'thirty'; 
            case 4: 
                return 'forty';
            case 5: 
                return 'fifty';
            case 6:
                return 'sixty';
            case 7:
                return 'seventy';
            case 8:
                return 'eighty'; 
            case 9: 
                return 'ninety';
        }
    }
}
