document.write(`
<header>
  <span class="heading">MADHAV BHALANI</span>
  <nav class="nav_links">
    <ul>
      <li id="home_link"><a href="index.html">Home</a></li>
      <li id="about_link"><a href="about.html">About</a></li>
      <li id="skills_link"><a href="skills.html">Skills</a></li>
    </ul>
  </nav>
  <a href="tel:8200158880"><button>Contact Me</button></a>
</header>
`)

console.log(location.pathname)
if(location.pathname === "/index.html" || location.pathname === "/"){
  let activeLink = document.getElementById("home_link")
  activeLink.className = "nav_links active"
}
else if(location.pathname === "/about.html"){
  let activeLink = document.getElementById("about_link")
  activeLink.className = "nav_links active"
}
else if(location.pathname === "/skills.html"){
  let activeLink = document.getElementById("skills_link")
  activeLink.className = "nav_links active"
}
