module.exports = function toReadable(number) {
    if (number == 0) return 'zero';
    let str = '';
    str += number < 100 ? '' : number % 100 == 0 ? single[Math.floor(number / 100)] + ' hundred' : single[Math.floor(number / 100)] + ' hundred ';
    str += Math.floor(number % 100 < 20) ? single[Math.floor(number % 100)] :
        number % 10 == 0 ? double[Math.floor(number % 100 / 10)] :
        double[Math.floor(number % 100 / 10)] + ' ' + single[Math.floor(number % 10)];
    return str;
}

const single = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const double = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];