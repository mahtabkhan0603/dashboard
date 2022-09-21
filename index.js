const LOCAL_RECORDS = "LOCAL_RECORDS";
const clearButton = document.getElementById("clearBtn");
const enrollmentForm = document.getElementById("enrollment-form");
const enrollmentRecords = document.getElementById("enrollment-records");

// Function to fetch records
const getStoredRecords = () =>{
    return localStorage.getItem(LOCAL_RECORDS);
}

// Function to store records
const storeRecords = (data) =>{
    const prevRecords = getStoredRecords();
    arr = prevRecords ? JSON.parse(prevRecords) : []
    arr.push(data);
    localStorage.setItem(LOCAL_RECORDS, JSON.stringify(arr));
}

// Function to display record
const showRecords = (data) =>{
    const td1 = enrollmentRecords;
    td1.innerHTML += data;

}

//function to remove all user data
const clearData = () => {
    localStorage.clear();
    window.location.reload();
    clearButton.style.display = 'none';
}

// Creating data and storing it
const handleSumbit = (e) => {
    // Preventing from refreshing
    e.preventDefault();

    var formInput = enrollmentForm;
    var name = formInput.name.value;
    var email = formInput.email.value;
    var gender = formInput.gender.value;
    var website = formInput.website.value;
    var imageLink = formInput.imageLink.value;
    var skills = [];
    if (document.getElementById("java").checked) {
        skills.push("Java")
    }
    if (document.getElementById("html").checked) {
        skills.push("HTML")
    }
    if (document.getElementById("css").checked) {
        skills.push("CSS")
    }

    const rec = {name, email, gender, website, imageLink, skills}
    //Adding new enrollment
    addNewEnrollment(rec);

    //  Displaying delete button
    clearButton.style.display = 'block';

    //Resseting the form
    e.target.reset();
}

// Adding new enrollment data
const addNewEnrollment = (rec) =>{
    const {name, email, gender, website, imageLink, skills} = rec;
    newData =
        `
        <tr class="record">
          <td class="border-end">
                <div>
                    <p class="m-0"><b>${name}</b></p>
                    <p class="m-0">${email}</p>
                    <a class="m-0" target="_blank" href=${website}>
                        Website
                    </a>
                    <p class="m-0">${gender}</p>
                    <p>${skills.join(", ")}</p>
                </div>
          </td>
          <td>
                <div class="h-100 w-100">
                    <img
                        src=${imageLink}
                        class="img-fluid w-100 h-100 border rounded"
                        alt="image"
                    />
                </div>
            </td>
        </tr>
    `.trim();

    // saving data to local storage
    storeRecords(newData);
    // showRecords();
    showRecords(newData);
}

// Lets display the previous data if present
const dispStored = () =>{
    clearButton.style.display = 'none';
    let prevRecords = getStoredRecords();
    arr = prevRecords ? JSON.parse(prevRecords) : []
    arr.forEach((rec) => showRecords(rec));
}

dispStored();
// showRecords();






















// Function without Local storage implementation
function foo(){
    console.log("Foo called")
    var x = document.getElementById("stu_form")
    const td = document.getElementById("table-data")
    var name = x.name.value;
    var email = x.email.value;
    var gender = x.gender.value;
    var web = x.website.value;
    var img = x.img_url.value;
    
    var skill = "";
    if(document.getElementById("java").checked == true)
        {console.log("Java is selected");
        skill+="Java";
        }
    if(document.getElementById("css").checked == true)
        {console.log("css is selected");
        skill+=",CSS";
        }
    
    if(document.getElementById("html").checked == true)
        {console.log("html is selected");
        skill+=",HTML";
        }
    
        td.innerHTML +=
        
        `
        <tr>
        <td scope="col" >
            <b>${name}</b><br>
            ${gender}<br>
            ${email}<br>
            <a href="${web}">Website</a><br>
            ${skill}
        </td>
        <td class="d-flex" style="height: 120px">
        <img class="img w-100 h-100" style="object-fit: contain" src=${img} alt="lol"/></td>
      </tr>
     
        `
    
    document.getElementById("stu_form").reset();
    }











    // const showRecords = () => {
    //     let prevRecords = getStoredRecords();
    //     if (prevRecords == '[]' || prevRecords == null) { 
    //         clearButton.style.display = 'none';
    //         return;
    //         }   
    //     else {
    //         listarr = JSON.parse(prevRecords);
    //         clearButton.style.display = 'block';
    //         console.log(listarr);
    //     }
    //     let newData = '';
    
    //     listarr.forEach((element,index) => {
    //         newData+=element;
    //     });
    //     const td = enrollmentRecords;
    //     td.innerHTML = newData;
    // }