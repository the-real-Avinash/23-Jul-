let nameError = document.getElementById('name-error');
let companyError = document.getElementById('comp-name');
let emailError = document.getElementById('email-id');
let phoneError = document.getElementById('phone-number');
let genderError = document.getElementById('gendermf');
let languageError = document.getElementById('lang');
let agreeError = document.getElementById('tnc');
let submitError = document.getElementById('submit-error');

/*Validate Name Function */
function validateName(){
    const name = document.getElementById('fname').value;
    var spcCount = 0;
    var numCount = 0;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var charCount = 0;
    
    if(format.test(name)){
        charCount++;
    }

    var mtcptrn = name.match(/\d+/g);
    if(mtcptrn != null){
        numCount++;
    }

    for(var i = 0;i<name.length;i++){
        if(name[i] == ' '){
            spcCount++;
        }
    }

    if(name === "" || name == null){
        nameError.innerHTML = "First Name Field is Required";
        return false;
    }else if(spcCount > 0){
        nameError.innerHTML = "First Name cannot Contain Space";
        return false;
    }else if(numCount>0){
        nameError.innerHTML = "First Name cannot contain number";
        return false;   
    }else if(charCount>0){
        nameError.innerHTML = "First Name cannot contain special characters";
        return false;
    }
    else{
    nameError.innerHTML = "Correct";
    return true;
    }
}

// Validate LastName Function
function validateLname(){
    const name = document.getElementById('lname').value;
    var spcCount = 0;
    var numCount = 0;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var charCount = 0;

    if(format.test(name)){
        charCount++;
    }

    var mtcptrn = name.match(/\d+/g);
    if(mtcptrn != null){
        numCount++;
    }

    for(var i = 0;i<name.length;i++){
        if(name[i] == ' '){
            spcCount++;
        }
    }

    if(name === "" || name == null){
        nameError.innerHTML = "Last Name Field is Required";
        return false;
    }else if(spcCount > 0){
        nameError.innerHTML = "Last Name cannot Contain Space";
        return false;
    }else if(numCount>0){
        nameError.innerHTML = "Last Name cannot contain number";
        return false;   
    }else if(charCount>0){
        nameError.innerHTML = "First Name cannot contain special characters";
        return false;
    }
    else{
    nameError.innerHTML = "Correct";
    return true;
    }



}


/* Validate Company Name */

function validateComp(){
    var name = document.getElementById('cname').value;
    

    if(name === "" || name == null){
        companyError.innerHTML = "Company Name Field is Required";
        return false;
    }
    else{
    companyError.innerHTML = "Correct";
    return true;
    }
}

/* Validate Phone Number */

function validatePhoneNo(){
    var num = document.getElementById('phncountry').value;

    var isnum = /^\d+$/.test(num);
    if(!isnum){
        phoneError.innerHTML = "Number Field Only";
        return false;
    }else{
        phoneError.innerHTML = "";
        return true;
    }

}

function validatePhnnum(){
    var num = document.getElementById('phnumber').value;

    var isnum = /^\d+$/.test(num);
    var numcnt = 10;
    if(!isnum){
        phoneError.innerHTML = "Number Field Only";
        return false;
    }else if(num.length > numcnt || num.length < numcnt){
        phoneError.innerHTML = "10 numbers are allowed";
        return true;
    }else{
        phoneError.innerHTML = "";
        return true;
    }
}   

function validateGender(){
    let cnt = 0;
    if(document.getElementById('fmale').checked || document.getElementById('male').checked){
        cnt++;
    }

    if(cnt == 0){
        genderError.innerHTML = "Not Checked";
        return false;
    }
    else{
        genderError.innerHTML = "Checked";
        return true;
    }
}

function validateLang(){
    let cnt = 0;
    if(document.getElementById('eng').checked || document.getElementById('mar').checked || document.getElementById('othr')){
        cnt++;
    }

    if(cnt == 0){
        languageError.innerHTML = "Must Select One Field";
        return false
    }
    else{
        languageError.innerHTML = "Selected";
        return true;
    }
}

function validateAgree(){
    let cnt = 0;
    if(document.getElementById('terncon').checked){
        cnt++;
    }
    if(cnt == 0){
        agreeError.innerHTML = "Must Agree All terms and condition";
        return false;
    }
    else{
        agreeError.innerHTML = "All terms and conditions agreed";
        return true;
    }
}

function validateForm(){

    if(!validateName() || !validateLname() || !validateComp() || !validatePhoneNo() || !validatePhnnum() || !validateGender() || !validateLang() || !validateAgree()){
        submitError.innerHTML = "Please Fill all Details";
        alert("Please Fill the required fields");
        return false;
    }
    else{
        alert("Registration successfully");
        return true;
    }
}