let fields = ["First-Name", "Last-Name", "Email", "UserID", "Password", "Confirm-Password"];
let errors = ["errFirst-Name", "errLast-Name", "errEmail", "errUserID", "errPassword", "errConfirm-Password"];

const validate = () => {
    var inputs = new Array();
    for (let i = 0; i < 6; i++) {
        inputs[i] = document.getElementById(fields[i]).value;
    }
    for(let i = 0; i < 6; i++) {
        if(inputs[i] == "")
            document.getElementById(errors[i]).innerHTML = fields[i] + " cannot be blank!";
        else if(i == 2)
        {
            let mail = /^([a-zA-Z0-9-\._]+)@([a-zA-Z0-9]+)\.([a-z]+)(\.[a-z]+)?$/;
            if(mail.test(inputs[i]))
                document.getElementById(errors[i]).innerHTML = "OK!";
            else
                document.getElementById(errors[i]).innerHTML = "Invalid Email."
        }
        else if(i == 5) {
            if(inputs[4] != inputs[5])
                document.getElementById(errors[5]).innerHTML = "Passwords do not match.";
            else
                document.getElementById(errors[5]).innerHTML = "OK!";
        }
        else
            document.getElementById(errors[i]).innerHTML = "OK!";
    }
}

function Submit() {
    document.getElementById("Success-Message").innerHTML = "";

    let verified = 0;
    for(let i = 0; i < 6; i++) {
        if(document.getElementById(errors[i]).innerHTML == "OK!")
            verified = verified + 1 ;

        if(verified == 6)
            document.getElementById("Success-Message").innerHTML = "<span style='color:green'>All data verified </span>";
        else
        document.getElementById("Success-Message").innerHTML = "Recheck the details";
    }
}