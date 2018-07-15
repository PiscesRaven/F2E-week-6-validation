let eMail = document.querySelector('#email');
let passWord = document.querySelector('#pwd');
let checkPassWord = document.querySelector('#comfirmpwd');
let submit = document.querySelector('#submit-btn');
var reg;
let mailReg = '/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/';

addEventListener('keyup', check);


function check(witckcheck) {
    const witckCheck = witckcheck.target.id;
    if (witckCheck === 'email') {
        console.log(witckCheck);
        if (mailReg.search(email.value)) {
            console.log('aa');
        }
    }
}