(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  var theme = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  function apply(t) {
    root.setAttribute("data-theme", t);
    btn.textContent = t === "dark" ? "Light" : "Dark";
    try { localStorage.setItem("theme", t); } catch (e) {}
  }
  apply(theme);
  btn.addEventListener("click", function () {
    apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
})();
