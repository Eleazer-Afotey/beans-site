function sendMail(){
    //take params from index.html
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("phone_number").value,
        message: document.getElementById("message").value,
    }

    // take ids from emailjs
    const serviceId = "service_wsbtyht";
    const templateId = "template_whn3bjn";

//use emailjs function to send message
emailjs.send(serviceId, templateId, params).then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone_number").value = "";
        document.getElementById("message").value = "";
        console.log(res);
    alert("Your message has been successfully delievered to BEANs Inc. ")
}).catch((err) => console.log(err));
}