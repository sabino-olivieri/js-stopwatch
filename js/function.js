function printElem(whatPrint, wherePrint) {

    wherePrint.innerText = whatPrint;
}

function editStr(element, nextItem = -1) {
    let string = "";

    if (nextItem > -1) {
        string = (element < 10) ? (":0" + element) : (":" + element);
    } else {
        string = (element < 10) ? ("0" + element) : (element.toString());

    }
    return string

}