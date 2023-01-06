// Initialization
// Variables
let fromCity,
    toCity,
    tocode,
    fromcode,
    fromdate,
    travelClass,
    adults,
    childs,
    totalPassengers = 0,
    validatePass = false;
let btn = document.getElementsByClassName("btn-book");

let autocomplete = (inp, arr) => {
    let currentFocus;
    inp.addEventListener("input", function (e) {
        let a,
            b,
            i,
            val = this.value;
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items list-group text-left");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (
                arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
            ) {
                b = document.createElement("DIV");
                b.setAttribute(
                    "class",
                    "list-group-item list-group-item-action"
                );
                b.innerHTML =
                    "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    let x = this.getElementsByTagName("input")[0].value;
                    let y = cities[x];
                    inp.value = y + "-" + airports[y];
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    let addActive = (x) => {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        x[currentFocus].classList.add("active");
    };
    let removeActive = (x) => {
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("active");
        }
    };
    let closeAllLists = (elmnt) => {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    };
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
};

// Place validate
function placeValidate() {
    var fromCity = document.getElementById("myInput");
    var toCity = document.getElementById("myInput2");
    if (
        fromCity.value != toCity.value &&
        fromCity.value != "" &&
        toCity.value != ""
    ) {
        document.getElementById("alert").style.display = "none";
        return true;
    } else {
        document.getElementById("alert").innerHTML =
            "Departure and Arrival places cannot be same/null !";
        document.getElementById("alert").style.display = "block";
        return false;
    }
}
// Depart & Return date validate
function departDateValidate() {
    var date = new Date();
    Date = date.getDate();
    if (Date < 10) {
        Date = "0" + Date;
    }
    month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    year = date.getUTCFullYear();
    var min = year + "-" + month + "-" + Date;
    document.getElementById("returnDate").min = min;
    document.getElementById("returnDate").value = min;
    document.getElementById("departDate").value = min;
    document.getElementById("departDate").min = min;
    document.getElementById("alert2").style.display = "none";
}

// Child validate
function childValidate() {
    let adc = document.getElementById("adult").value;
    let child = document.getElementById("child");
    let x = "<option value='0'>0</option>";
    for (var i = 1; i < 10 - parseInt(adc); i++) {
        x += `<option value=${i}>${i}</option>`;
    }
    child.innerHTML = x;
}

let reveal = () => {
    if (document.getElementById("round").checked == true)
        document.getElementById("return").style.display = "block";
    else document.getElementById("return").style.display = "none";
};

// Verifying wether date field is filled
let dateVerify = () => {
    if (document.getElementById("departDate").value != "") {
        document.getElementById("alert2").style.display = "none";
        return true;
    } else {
        document.getElementById("alert2").style.display = "block";
        document.getElementById("alert2").innerHTML = "Please select date!";
        return false;
    }
};

// Select flight
let selectFlight = (id) => {
    document.getElementById("fromcity1").innerHTML = fromCity;
    document.getElementById("tocity1").innerHTML = toCity;
    document.getElementById("flightno").innerHTML = flightsArr[id].flightno;
    document.getElementById("departure1").innerHTML = flightsArr[id].departure;
    document.getElementById("fromcity11").innerHTML = airports[fromcode];
    document.getElementById("fromcode1").innerHTML = fromcode;
    document.getElementById("duration1").innerHTML = flightsArr[id].duration;
    document.getElementById("arrival1").innerHTML = flightsArr[id].arrival;
    document.getElementById("tocode1").innerHTML = tocode;
    document.getElementById("tocity11").innerHTML = airports[tocode];
    document.getElementById("adults").innerHTML = adults;
    document.getElementById("childs").innerHTML = childs;
    document.getElementById("paycard_img").src = flightsArr[id].Image;
    document.getElementById("passengers").innerHTML = totalPassengers;
    document.getElementById("basefare").innerHTML = Math.ceil(
        flightsArr[id].price
    );
    document.getElementById("taxfare").innerHTML = Math.ceil(
        flightsArr[id].price * 0.15
    );
    document.getElementById("totalprice").innerHTML = Math.ceil(
        flightsArr[id].price * 1.15 * totalPassengers
    );
    document.getElementById("containernew").style.display = "flex";
    document.getElementById("containernew").style.scale = "0.8";
    document.getElementById("flightdisplay").style.display = "none";
    document.getElementById("flight_header").style.display = "none";
};

let validatePassengers = () => {
    passengerArr = [];
    nameflag = false;
    ageflage = false;
    genderflag = false;
    for (let i = 1; i <= totalPassengers; i++) {
        let name = document.getElementById("name" + i);
        let age = document.getElementById("age" + i);
    }
    for (let i = 1; i <= totalPassengers; i++) {
        passengersObj = document.getElementById("pass" + i);
        // Name shouldnot have numbers
        let name = document.getElementById("name" + i);
        let age = document.getElementById("age" + i);
        let gender = document.getElementById("gender" + i);
        // console.log(name, age, gender);
        passengers.name = name.value;
        passengers.age = age.value;
        passengers.gender = gender.value;
        // console.log("obj", passengers);
        passengerArr.push({ ...passengers });
        if (!name.value.match(/^[A-Za-z\s]+$/) || name == "") {
            name.style.borderColor = "red";
            nameflag = false;
        } else {
            nameflag = true;
            name.style.borderColor = "white";
            console.log("matched");
        }
        if (age.value <= 0) {
            age.style.borderColor = "red";
            ageflage = false;
        } else {
            console.log("matched");
            age.style.borderColor = "white";
            ageflage = true;
        }
    }
    if (
        ageflage &&
        nameflag &&
        document.getElementById("tandc").checked == true
    ) {
        validatePass = true;
    }
    console.log("arr", passengerArr);
    if (validatePass) {
        payment();
    }
};

let payment = () => {
    document.getElementById("wrapper").style.display = "block";
    document.getElementById("containernew").style.display = "none";
    document.getElementById("passengerDetails").style.display = "none";
};

let booking = () => {
    // Add passenger details
    let passengerDetails = document.getElementById("passengerDetails");
    let x = `<div class="pass" style="visibility:hidden;font-size:10px;z-index:99; display: flex; gap: 0.25rem;">
    <div class="form1">
    <form action="" id="`;
    x += "0" + passengerFields_02 + "0" + passengerFields_03;
    passengerDetails.innerHTML = x;
    for (let i = 1; i <= totalPassengers; i++) {
        passengerDetails.innerHTML +=
            passengerFields_01 +
            i +
            passengerFields_02 +
            i +
            passengerFields_03 +
            i +
            passengerFields_04 +
            i +
            passengerFields_05 +
            i +
            passengerFields_06;
    }
    passengerDetails.innerHTML += `<input type="checkbox" id="tandc" ><label for="">&nbsp;&nbsp;&nbsp;Accept Terms and Conditions</label>`;
    passengerDetails.innerHTML += `<input type="button" style="margin-left:24rem" value="Proceed to Payment" class="btn-book"  id="" onclick="validatePassengers()">`;
    passengerDetails.style.display = "block";
    document.getElementById("passengersDisplay").click;
    // Validate passengers
    if (validatePass) {
        // Navigate to payment page
    }
};

// Change flight
let changeFlight = () => {
    document.getElementById("flightdisplay").style.display = "block";
    document.getElementById("passengerDetails").style.display = "none";
    document.getElementById("containernew").style.display = "none";
    document.getElementById("flight_header").style.display = "block";
    // document.getElementById("flightdisplaylink").click;
};

let searchFlights = () => {
    if (placeValidate() && dateVerify()) {
        adults = document.getElementById("adult").value;
        childs = document.getElementById("child").value;
        totalPassengers = parseInt(adults) + parseInt(childs);
        fromdate = document.getElementById("departDate").value;
        fromCity = document.getElementById("myInput").value;
        toCity = document.getElementById("myInput2").value;
        travelClass = document.getElementById("travelClass").value;
        document.getElementById("flightdisplay").style.display = "block";
        document.getElementById("form").style.display = "none";
        document.getElementById("adcarddiv").style.display = "none";
        document.getElementById("containernew").style.display = "none";
        document.getElementById("flight_header").style.display = "block";
        document.getElementById("passengerDetails").style.display = "none";
        addFlights(fromCity, toCity, fromdate, travelClass);
    }
    return false;
};
let showForm = () => {
    document.getElementById("form").style.display = "block";
    document.getElementById("adcarddiv").style.display = "block";
    document.getElementById("flight_header").style.display = "none";
};
let addFlights = (fromCity, toCity, fromdate, travelClass) => {
    // 1. From, to city code attatchment
    fromcode = fromCity.slice(0, 3);
    tocode = toCity.slice(0, 3);
    let x = "";
    toCity = toCity.split(",");
    toCity = toCity.slice(toCity.length - 2, toCity.length);
    fromCity = fromCity.split(",");
    fromCity = fromCity.slice(fromCity.length - 2, fromCity.length);
    for (let index = 0; index < flightsArr.length; index++) {
        // todate = fromdate + parseInt(flightsArr[index].todate);
        let todate = fromdate;
        if (flightsArr[index].todate == 1) {
            todate = fromdate + "<br><strong>+1D</strong> " + " ";
        }
        x +=
            s1 +
            " " +
            flightsArr[index].Image +
            " " +
            s2 +
            " " +
            flightsArr[index].flightno +
            " " +
            s3 +
            " " +
            travelClass +
            " " +
            s4 +
            " " +
            fromcode +
            " " +
            s5 +
            " " +
            flightsArr[index].departure +
            " " +
            s6 +
            " " +
            fromdate +
            " " +
            s7 +
            " " +
            fromCity +
            " " +
            s8 +
            " " +
            flightsArr[index].duration +
            " " +
            s9 +
            " " +
            tocode +
            " " +
            s10 +
            " " +
            flightsArr[index].arrival +
            " " +
            s11 +
            " " +
            todate +
            s12 +
            " " +
            toCity.join(",") +
            " " +
            s13 +
            "#" +
            " " +
            s14 +
            `${index}` +
            s15;
    }
    // 2. Flights arrays access
    // 3. Html insertion
    document.getElementById("flightdisplay").innerHTML = x;
};

// Payment validations
var open = document.getElementById("popup");
let login = () => {
    var username = document.getElementById("firstname");
    var regx1 = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
    var cardNo = document.getElementById("cardnum");
    var regx2 = /(^[0-9]{16}$)/;
    var cvvNo = document.getElementById("cvv");
    var regx5 = /([0-9]{3})$/;

    if (regx1.test(username.value)) {
        username.style.borderColor = "black";
        if (regx2.test(cardNo.value)) {
            cardNo.style.borderColor = "black";
            if (regx5.test(cvvNo.value)) {
                open.style.display = "inline";
                cvvNo.style.borderColor = "black";
            } else {
                cvvNo.style.borderColor = "red";
            }
        } else {
            cardNo.style.borderColor = "red";
        }
    } else {
        username.style.borderColor = "red";
    }
};
