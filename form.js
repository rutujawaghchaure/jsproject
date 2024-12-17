
document.getElementById("submitBtn").onclick = function() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const division = document.getElementById("division").value;
    const comment = document.getElementById("comment").value;

    
    if (name && email && division && comment) {
        
        const outputHTML = `
            <h3>Feedback Submitted Successfully!</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Division:</strong> ${division}</p>
            <p><strong>Comment:</strong> ${comment}</p>
        `;
        document.getElementById("output").innerHTML = outputHTML;

        
        document.getElementById("feedbackForm").reset();
    } else {
        
        alert("Please fill out all fields before submitting.");
    }
};
