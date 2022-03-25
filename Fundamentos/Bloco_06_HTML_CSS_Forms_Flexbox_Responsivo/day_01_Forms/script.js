const btnMan = document.querySelector("#sendBtn");
let email, completeName, destination, reason, agreement, mailList;

function sendBtn(event) {
  event.preventDefault();
  completeName = document.querySelector("#input-name");
  email = document.querySelector("#input-email");
  destination = document.querySelector('input[name = "Option"]:checked').value;
  reason = document.querySelector('textarea[name="reason"]').value;
  agreement = document.querySelector('input[name = "agreement"]:checked');
  mailList = document.querySelector('input[name = "mail-list"]:checked').value;
  if (agreement) {
    console.log(
      completeName.value,
      email.value,
      destination,
      reason,
      agreement,
      mailList
    );
  }
}

btnMan.addEventListener("click", sendBtn);
