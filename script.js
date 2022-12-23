const fibSeqLength = 20;

function getNumFromFibonacciSequence(position) {
    let fibSeq = [];
    let num1 = 0, num2 = 1, nextNum;

    if (position <= fibSeqLength && position >= 0) {
        for (let i = 0; i <= fibSeqLength; i++) {
            fibSeq.push(num1);
            nextTerm = num1 + num2;
            num1 = num2;
            num2 = nextTerm;
        }
        return fibSeq[position];
    } else if (position > fibSeqLength) {
        return "Too big number.";
    } else {
        return "Incorrect input.";
    }
}

function calculate() {
    position = parseInt(document.getElementById('elementNumber').value);
    result = getNumFromFibonacciSequence(position);
    resultField = document.getElementById('resultField');

    if (result == "Too big number.") {
        resultField.style.color = "red";
        resultField.innerHTML = "Podano zbyt duży numer elementu. Program zwraca elementy ciągu do indeksu " + fibSeqLength + ".";
    } else if (result == "Incorrect input.") {
        resultField.style.color = "red";
        resultField.innerHTML = "Podano błędny numer elementu.";
    } else {
        resultField.style.color = "black";
        resultField.innerHTML = "Element Ciągu Fibbonacciego o indeksie równym " + position + " ma wartość " + "<strong>" + result + "</strong>";
    }
}