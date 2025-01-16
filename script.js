document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name && email && phone && message) {
       
        const whatsappMessage = `
            Sou o(a): ${name}
            Meu Gmail: ${email}
            Assunto: ${subject}
            Mensagem: ${message}
        `;
        
        const encodedMessage = encodeURIComponent(whatsappMessage.trim());

        const whatsappNumber = '5534997668356'; 

        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.location.href = whatsappLink;
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
});

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});