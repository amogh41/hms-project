// script.js

let patients = [];

function addPatient() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let disease = document.getElementById("disease").value;
    let phone = document.getElementById("phone").value;

    if(name == "" || age == "" || disease == "" || phone == "") {
        alert("Please fill all fields");
        return;
    }

    let patient = {
        name: name,
        age: age,
        disease: disease,
        phone: phone
    };

    patients.push(patient);

    displayPatients();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("disease").value = "";
    document.getElementById("phone").value = "";
}

function displayPatients() {

    let table = document.getElementById("patientTable");

    table.innerHTML = "";

    for(let i = 0; i < patients.length; i++) {

        table.innerHTML += `
            <tr>
                <td>${patients[i].name}</td>
                <td>${patients[i].age}</td>
                <td>${patients[i].disease}</td>
                <td>${patients[i].phone}</td>
            </tr>
        `;
    }
}