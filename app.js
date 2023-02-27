const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
//const bouttonSend = document.getElementById('send');



function PageTransitions(){
    for(let i=0 ; i < sectBtn.length ; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            sections.forEach((section)=>{
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        let image = document.querySelector('.image img');

        image.style.filter = 'none';
        element.classList.toggle('light-mode');
    });
}

function sendMail(){
    const parameters = {
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        message : document.querySelector("#message").value
    };

    const serviceID = "service_x8hhaih";
    const templateID = "template_7lmn8yo";

    emailjs.send(serviceID, templateID, parameters)
    .then(function(response){
        console.log('SUCCESS!', response.status, response.text);
    },function(error){
        console.log('FAILED...', error);
    });
}

PageTransitions();
