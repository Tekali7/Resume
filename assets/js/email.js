function sendMail(contactForm) {
    emailjs.send("service_z18sgkh", "template_jx8anjf", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            // Show success alert
            Swal.fire({
                title: 'Success!',
                text: 'Your message has been sent successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            console.log("SUCCESS", response);
        },
        function(error) {
            // Show error alert
            Swal.fire({
                title: 'Error!',
                text: 'Failed to send email. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.log("FAILED", error);
        }
    );
    // Prevent the default form submission
    return false;
}
