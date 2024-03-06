const qrinput = document.querySelector('#qr-input');
const qrimage = document.querySelector('#qr-img');
const qrbutton = document.querySelector('#qr-button');

qrbutton.addEventListener('click',()=>{
    const inputvalue = qrinput.value;
    console.log(inputvalue);
    if(!inputvalue){
        alert('Input is empty')
    }
    else{
        qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${inputvalue}`;
    }
})