
document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile navigation
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navbar.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navbar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
      });
    });
  }

  // 2. Automatically update the copyright year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // 3. Help customers prepare a contact email
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        formStatus.textContent =
          "Please complete the required fields correctly.";
        return;
      }

      const customerName =
        document.getElementById("customer-name").value.trim();

      const customerEmail =
        document.getElementById("customer-email").value.trim();

      const projectMessage =
        document.getElementById("project-message").value.trim();

      if (!customerName || !customerEmail || !projectMessage) {
        formStatus.textContent =
          "Please fill in your name, email, and project details.";
        return;
      }

      const subject = encodeURIComponent(
        `New Star Tech enquiry from ${customerName}`
      );

      const body = encodeURIComponent(
        `Hello Star Tech,

My name: ${customerName}
My email: ${customerEmail}

Project details:
${projectMessage}`
      );

      const emailLink =
        `mailto:austindgreat08@gmail.com?subject=${subject}&body=${body}`;

      formStatus.textContent =
        "Your email app should open with your message prepared. Please review it and press Send to contact Star Tech.";

      window.location.href = emailLink;
    });
  }
});
