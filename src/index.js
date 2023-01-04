module.exports = function toReadable (number) {
    if (String(number).length === 3 && String(number)[1] != 1) {
       let hundreds = String(number)[0] == 1 ? 'one hundred':
            String(number)[0] == 2 ? 'two hundred':
            String(number)[0] == 3 ? 'three hundred':
            String(number)[0] == 4 ? 'four hundred':
            String(number)[0] == 5 ? 'five hundred':
            String(number)[0] == 6 ? 'six hundred':
            String(number)[0] == 7 ? 'seven hundred':
            String(number)[0] == 8 ? 'eight hundred': 'nine hundred';
        let dozens = String(number)[1] == 1 && String(number)[2] == 0 ? ' ten':
            String(number)[1] == 2 ? ' twenty':
            String(number)[1] == 3 ? ' thirty':
            String(number)[1] == 4 ? ' forty':
            String(number)[1] == 5 ? ' fifty':
            String(number)[1] == 6 ? ' sixty':
            String(number)[1] == 7 ? ' seventy':
            String(number)[1] == 8 ? ' eighty':
            String(number)[1] == 9 ? ' ninety': '';
        let unity = String(number)[2] == 1 ? ' one':
            String(number)[2] == 2 ? ' two':
            String(number)[2] == 3 ? ' three':
            String(number)[2] == 4 ? ' four':
            String(number)[2] == 5 ? ' five':
            String(number)[2] == 6 ? ' six':
            String(number)[2] == 7 ? ' seven':
            String(number)[2] == 8 ? ' eight':
            String(number)[2] == 9 ? ' nine': '';
            return(hundreds + dozens + unity);
    };
    if (String(number).length === 3 && String(number)[1] == 1) {
        let hundreds = String(number)[0] == 1 ? 'one hundred':
             String(number)[0] == 2 ? 'two hundred':
             String(number)[0] == 3 ? 'three hundred':
             String(number)[0] == 4 ? 'four hundred':
             String(number)[0] == 5 ? 'five hundred':
             String(number)[0] == 6 ? 'six hundred':
             String(number)[0] == 7 ? 'seven hundred':
             String(number)[0] == 8 ? 'eight hundred':
             String(number)[0] == 9 ? 'nine hundred': '';
         let dozens = String(number)[1] == 1 && String(number)[2] == 0 ? ' ten':
             String(number)[1] == 1 && String(number)[2] == 1 ? ' eleven':
             String(number)[1] == 1 && String(number)[2] == 2 ? ' twelve':
             String(number)[1] == 1 && String(number)[2] == 3 ? ' thirteen':
             String(number)[1] == 1 && String(number)[2] == 4 ? ' fourteen':
             String(number)[1] == 1 && String(number)[2] == 5 ? ' fifteen':
             String(number)[1] == 1 && String(number)[2] == 6 ? ' sixteen':
             String(number)[1] == 1 && String(number)[2] == 7 ? ' seventeen':
             String(number)[1] == 1 && String(number)[2] == 8 ? ' eighteen': ' nineteen';
             return(hundreds + dozens);
    };
    if (String(number).length === 2 && String(number)[0] != 1) {
             let dozens = String(number)[0] == 2 ? 'twenty':
             String(number)[0] == 3 ? 'thirty':
             String(number)[0] == 4 ? 'forty':
             String(number)[0] == 5 ? 'fifty':
             String(number)[0] == 6 ? 'sixty':
             String(number)[0] == 7 ? 'seventy':
             String(number)[0] == 8 ? 'eighty':
             String(number)[0] == 9 ? 'ninety': '';
         let unity = String(number)[1] == 1 ? ' one':
             String(number)[1] == 2 ? ' two':
             String(number)[1] == 3 ? ' three':
             String(number)[1] == 4 ? ' four':
             String(number)[1] == 5 ? ' five':
             String(number)[1] == 6 ? ' six':
             String(number)[1] == 7 ? ' seven':
             String(number)[1] == 8 ? ' eight':
             String(number)[1] == 9 ? ' nine': '';
             return(dozens + unity);
     };
    if (String(number).length === 2 && String(number)[0] == 1) {
        let dozens = String(number)[0] == 1 && String(number)[1] == 0 ? 'ten':
            String(number)[0] == 1 && String(number)[1] == 1 ? 'eleven':
            String(number)[0] == 1 && String(number)[1] == 2 ? 'twelve':
            String(number)[0] == 1 && String(number)[1] == 3 ? 'thirteen':
            String(number)[0] == 1 && String(number)[1] == 4 ? 'fourteen':
            String(number)[0] == 1 && String(number)[1] == 5 ? 'fifteen':
            String(number)[0] == 1 && String(number)[1] == 6 ? 'sixteen':
            String(number)[0] == 1 && String(number)[1] == 7 ? 'seventeen':
            String(number)[0] == 1 && String(number)[1] == 8 ? 'eighteen': 'nineteen';
            return(dozens);
    };
    if (String(number).length === 1) {
       let unity = String(number)[0] == 0 ? 'zero':
            String(number)[0] == 1 ? 'one':
            String(number)[0] == 2 ? 'two':
            String(number)[0] == 3 ? 'three':
            String(number)[0] == 4 ? 'four':
            String(number)[0] == 5 ? 'five':
            String(number)[0] == 6 ? 'six':
            String(number)[0] == 7 ? 'seven':
            String(number)[0] == 8 ? 'eight': 'nine';
            return(unity);
    };
    }    
