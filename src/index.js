module.exports = function toReadable (number) {
    let units = '',
    decades = '',
    hundreds = '',
    numberSymb = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    numberName = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    numberSymbDec = ['2', '3', '4', '5', '6', '7', '8', '9'],
    numberNameDec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    numberSymbDec1 = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
    numberNameDec1 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    result = '',
    myNumber = number.toString(),
    numberLength = myNumber.length;
    if (numberLength === 1) {
        let i = numberSymb.indexOf(myNumber[0]);
        units = `${numberName[i]}`;
        result = units;
        return result;
    }
        if (numberLength === 3){
        let j = numberSymb.indexOf(myNumber[0]);
        if (myNumber[0]) {
        hundreds = `${numberName[j]} hundred`;
        }  
        if (myNumber[1] !== '0') {
            let i = numberSymbDec.indexOf(myNumber[1]);
            decades = `${numberNameDec[i]}`;
        } else {
            decades = ``;
        }
        if (myNumber[2] !== '0') {
        let i = numberSymb.indexOf(myNumber[2]);
        units = `${numberName[i]}`;
        } else {
            units = ``;
        }
        if (hundreds !== ``)  result = hundreds;
        if (decades !== ``) result = result + ' ' + decades;
        if (units !== ``) result = result + ' ' +  units;
        if (myNumber[1] === '1') {
        let dec1 = myNumber[1] + myNumber[2];
        let k = numberSymbDec1.indexOf(dec1);
        decades = `${numberNameDec1[k]}`;
        if (hundreds !== ``)  result = hundreds;
        if (decades !== ``) result = result + ' ' + decades;
        }
    return result
    }
    if (numberLength === 2){
        if (myNumber[0] !== '0') {
            let i = numberSymbDec.indexOf(myNumber[0]);
            decades = `${numberNameDec[i]}`;
        } else {
            decades = ``;
        }
        if (myNumber[1] !== '0') {
            let i = numberSymb.indexOf(myNumber[1]);
            units = `${numberName[i]}`;
            } else {
            units = ``;
            }
            if (decades !== ``) result = decades;
            if (units !== ``) result = result + ' ' + units;
        if (myNumber[0] === '1') {
            let dec1 = myNumber[0] + myNumber[1];
            let k = numberSymbDec1.indexOf(dec1);
            decades = `${numberNameDec1[k]}`;
            result = decades;
            }
    return result;
    }
}
