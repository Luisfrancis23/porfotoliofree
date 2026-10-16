const courses = [
  { title: "Modern Web Foundations", tag: "Beginner", desc: "HTML, CSS, and JS the modern way — flex, grid, modules, and deploy." },
  { title: "Design Systems in Practice", tag: "Intermediate", desc: "Build a reusable component library with tokens and docs." },
  { title: "Fullstack with Node", tag: "Advanced", desc: "APIs, auth, and deployment for real products." },
  { title: "UI Motion & Polish", tag: "Design", desc: "Micro-interactions that make interfaces feel alive." },
];

const grid = document.getElementById('courseGrid');
grid.innerHTML = courses
  .map(c => `<article class="card"><span class="badge">${c.tag}</span><h3>${c.title}</h3><p>${c.desc}</p></article>`)
  .join('');

const btn = document.getElementById('themeToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  btn.textContent = document.body.classList.contains('light') ? '☾' : '☀︎';
});
