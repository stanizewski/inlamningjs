let value = 0
function calc() {
    var description = document.querySelector("#description").value; //Hämtar element med id description med typen text i html
    var value1 = parseFloat(document.querySelector('#value1').value);
    console.log(description)
    console.log(value1)

    var oper = document.getElementById('operators').value; //hämtar id från operators
    console.log(oper)
    if (oper === '+') //om plus är vald när knappen trycks så händer nedanstående
    {
        value += value1;

        var plusList = document.getElementById("plusList");
        plusList.appendChild(createEntry("+", description, value));

    }
    else if (oper === '-') //om man trycker på minus händer nedanstående
    {
        value -= value1;

        var minusList = document.getElementById("minusList");
        minusList.appendChild(createEntry("-", description, value));
    }

    document.getElementById('winningText').innerText = "Vinst : " + value;
}


document.querySelector(".btn").addEventListener("click", calc)//hämtar element med btn

function createEntry(operator, text, value) 
{
    var paragraph = document.createElement("P");//här skapar jag ett nytt text element
    paragraph.innerText = operator + " " + text + " : " + value; 
    //här sätter jag texten till paragrafen, använder de parametrarna som funktionrn har. 
    // operator är "+" eller "-" text är min beskrivning och value är värdet.

    return paragraph;
}