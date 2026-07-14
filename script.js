// WhatsApp Configuration
const whatsappNumber = "919835536664"; // Country code '91' ke sath aapka number

// 1. Jab koi kisi specific product ke 'Buy Now' par click karega
function orderWhatsApp(productName, price) {
    let message = `Hello Urban Threads, Mujhe ye order karna hai:\n\n` + 
                  `🛍️ *Product:* ${productName}\n` + 
                  `💰 *Price:* ${price}\n\n` +
                  `Kripya aage ki billing details share karein.`;
    
    let encodedMessage = encodeURIComponent(message);
    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Naye tab me WhatsApp chat open hogi
    window.open(whatsappURL, '_blank');
}

// 2. Jab koi bottom ke Form section se custom details fill karke submit karega
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Page reload hone se rokne ke liye
    
    let name = document.getElementById('custName').value;
    let category = document.getElementById('custProduct').value;
    let address = document.getElementById('custAddress').value;

    let formMessage = `✨ *NEW INQUIRY / ORDER* ✨\n\n` +
                      `👤 *Name:* ${name}\n` +
                      `📦 *Category:* ${category}\n` +
                      `📍 *Address:* ${address}\n\n` +
                      `Kripya mujhe is product ki nayi designs WhatsApp par share karein!`;

    let encodedFormMessage = encodeURIComponent(formMessage);
    let whatsappFormURL = `https://wa.me/${whatsappNumber}?text=${encodedFormMessage}`;
    
    // WhatsApp par redirect karega
    window.open(whatsappFormURL, '_blank');
});
