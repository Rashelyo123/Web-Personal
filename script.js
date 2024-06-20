document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  // Event listener untuk form submit
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Mengambil nilai input dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validasi input form
    if (name && email && message) {
      console.log("Mengirim email...");

      // Mengirim email menggunakan EmailJS
      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
          from_name: name,
          from_email: email,
          message: message,
        })
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Terima kasih, " + name + "! Pesan Anda telah terkirim.");
            form.reset(); // Mengosongkan form setelah berhasil
          },
          function (error) {
            console.log("FAILED...", error);
            alert("Terjadi kesalahan. Silakan coba lagi.");
          }
        );
    } else {
      alert("Harap isi semua bidang.");
    }
  });

  // Smooth scroll untuk tautan jangkar
  const links = document.querySelectorAll("nav ul li a");

  for (const link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah perilaku default link

      const targetId = this.getAttribute("href").substring(1); // Mengambil id target dari href
      const targetElement = document.getElementById(targetId);

      // Scroll ke elemen target dengan smooth scroll
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    });
  }
});
