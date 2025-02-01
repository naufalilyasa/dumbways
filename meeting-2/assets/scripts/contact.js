function submitContactForm(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let skill = document.getElementById("skill").value;
  let massege = document.getElementById("massege").value;

  let emailTo = "naufal.ilyasa7@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${emailTo}?subject:${subject}&body${`Halo nama saya, ${name}, silahkan hubungi saya di ${email}, Skill saya adalah ${skill}. Berikut yang ingin saya sampaikan: ${massege}.`}`;

  a.click();
}
