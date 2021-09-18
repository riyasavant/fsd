function dayTitle(dayName) {
    document.write("<td align=center width-35 bgcolor=lightblue><b>" + dayName + "</b></td>");
}
function fillTable(month, monthLen) {
    let day = 1;
    document.write("<table border=1 cellspacing=3 cellpadding=3%>");
    document.write("<tr><td colspan=7 align=center bgcolor=red><b>" + month + " " + year + "</b></td></tr>");
    dayTitle("Sun");
    dayTitle("Mon");
    dayTitle("Tue");
    dayTitle("Wed");
    dayTitle("Thu");
    dayTitle("Fri");
    dayTitle("Sat");
    document.write("</tr><tr>");
    for (var i = 1; i < start_day; i++) {
        document.write("<td>");
    }
    for (var i = start_day; i <= 7; i++) {
        document.write("<td align=center bgcolor=silver>" + day + "</td>");
        day++;
    }
    document.write("<tr>");
    while (day <= monthLen) {
        for (var i = 1; i <= 7 && day <= monthLen; i++) {
            document.write("<td align=center bgcolor=silver>" + day + "</td>");
            day++;
        }
        document.write("<tr>");
        start_day = i;
    }
    document.write("</tr></table>");
}

let year = prompt("enter 4 digit year ", 2021);
let today = new Date("January 1, " + year);
let start_day = today.getDay() + 1;

fillTable("January", 31);

if (year % 4 == 0)
    fillTable("February", 29);
else
    fillTable("February", 28);

fillTable("March", 31);
fillTable("April", 30);
fillTable("May", 31);
fillTable("June", 30);
fillTable("July", 31);
fillTable("August", 31);
fillTable("September", 30);
fillTable("October", 31);
fillTable("November", 30);
fillTable("December", 31);