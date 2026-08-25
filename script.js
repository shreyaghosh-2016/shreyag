document.getElementById("year").textContent = new Date().getFullYear();

const pubList = document.getElementById("publicationList");
publications.forEach(p => {
  const el = document.createElement("article");
  el.className = "pub";
  const links = p.links.map(x => `<a href="${x.url}" ${x.url !== "#" ? 'target="_blank" rel="noreferrer"' : ""}>${x.label}</a>`).join("");
  el.innerHTML = `
    <div class="pub-year">${p.year}</div>
    <div>
      <h3>${p.title}</h3>
      <div class="authors">${p.authors}</div>
      <div class="venue">${p.venue}</div>
    </div>
    <div class="pub-links">${links}</div>`;
  pubList.appendChild(el);
});

const btn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
btn.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
