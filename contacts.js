const form = document.getElementById("contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  const form = event.target;
  const formData = new FormData(form);

  try {
    // Send the form data using fetch
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // If the response is successful, hide the form and show the success message
      form.style.display = "none";
      document.querySelector(".announcement").style.display = "block";
    } else {
      alert("Oops! There was a problem submitting your form");
    }
  } catch (error) {
    alert("Error submitting form. Please try again later.");
  }
});
