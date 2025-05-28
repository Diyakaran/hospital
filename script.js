document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("successMsg").innerText = "Appointment submitted successfully!";
});
.btn.secondary {
  background: #fff;
  color: #00bcd4;
  border: 2px solid #00bcd4;
  margin: 5px;
}
