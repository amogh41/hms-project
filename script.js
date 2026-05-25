const SUPABASE_URL = "https://ekqzqlamjalakueuozxv.supabase.co";
const SUPABASE_KEY = "sb_publishable_Yso3unAMOzjoLNHVxqxmkw_SJ17c2qH";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function addPatient() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const disease = document.getElementById("disease").value;
    const phone = document.getElementById("phone").value;

    if (!name || !age || !disease || !phone) {
        alert("Please fill all fields");
        return;
    }

    const { error } = await supabase
        .from("patients")
        .insert([
            {
                name: name,
                age: age,
                disease: disease,
                phone: phone
            }
        ]);

    if (error) {
        console.log(error);
        alert("Error saving patient");
    } else {
        alert("Patient Saved Successfully");
        loadPatients();

        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("disease").value = "";
        document.getElementById("phone").value = "";
    }
}

async function loadPatients() {

    const { data, error } = await supabase
        .from("patients")
        .select("*");

    const table = document.getElementById("patientTable");

    table.innerHTML = "";

    data.forEach(patient => {

        table.innerHTML += `
            <tr>
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.disease}</td>
                <td>${patient.phone}</td>
            </tr>
        `;
    });
}

loadPatients();
