const API_URL = "https://hms-project-j1fz.onrender.com/patients";

async function addPatient() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let disease = document.getElementById("disease").value;
    let phone = document.getElementById("phone").value;

    if (!name || !age || !disease || !phone) {
        alert("Please fill all fields");
        return;
    }

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age, disease, phone })
    });

    loadPatients();
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("disease").value = "";
    document.getElementById("phone").value = "";
}

async function loadPatients() {
    const res = await fetch(API_URL);
    const patients = await res.json();
    let table = document.getElementById("patientTable");
    table.innerHTML = "";
    for (let p of patients) {
        table.innerHTML += `<tr><td>${p.name}</td><td>${p.age}</td><td>${p.disease}</td><td>${p.phone}</td></tr>`;
    }
}

loadPatients();
