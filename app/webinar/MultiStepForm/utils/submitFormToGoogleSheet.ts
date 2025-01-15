const submitFormToGoogleSheet = async (data: any) => {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbypwPy0ya2rt8CvWyxVXY0D9ixvIHt7MFY6jGaUH0cGdwYpRfMfuXK3hiMGkQ4G2y0/exec";

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.status === "success") {
      alert("Form data successfully submitted!");
    } else {
      alert("Error submitting form. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error submitting form. Please try again.");
  }
};

export default submitFormToGoogleSheet;
