/* =========================================================
   Données du cursus 42 — regroupées par rang
   ========================================================= */
const REPO = "https://github.com/rjacquet31/";

const RANKS = [
  {
    rank: "00",
    title: "Les fondations",
    projects: [
      { name: "Libft", icon: "📚", stack: "C", url: REPO + "Libft",
        desc: "Première bibliothèque en C : réécriture des fonctions de la libc et d'utilitaires sur les listes chaînées. La boîte à outils réutilisée dans tous les projets suivants." },
    ],
  },
  {
    rank: "01",
    title: "Outils & système",
    projects: [
      { name: "get_next_line", icon: "📄", stack: "C", url: REPO + "get_next_line",
        desc: "Lire un fichier ligne par ligne depuis un descripteur, en gérant un buffer statique persistant entre les appels." },
      { name: "ft_printf", icon: "🖨️", stack: "C · variadic", url: REPO + "ft_printf",
        desc: "Recoder printf : gestion des conversions (%d, %s, %x…) et des arguments variables via va_list." },
      { name: "Born2beRoot", icon: "🐧", stack: "Linux · VM", url: REPO + "Born2beRoot",
        desc: "Initiation à l'administration système : machine virtuelle, partitionnement LVM, durcissement de la sécurité et services Linux." },
    ],
  },
  {
    rank: "02",
    title: "Algorithmes & graphisme",
    projects: [
      { name: "push_swap", icon: "🔀", stack: "C · algo", url: REPO + "Push_swap",
        desc: "Trier une pile avec un nombre minimal d'opérations, en s'appuyant sur une seconde pile. Tout est question de stratégie de tri." },
      { name: "minitalk", icon: "📡", stack: "C · signaux", url: REPO + "minitalk",
        desc: "Un client et un serveur qui communiquent uniquement par signaux UNIX (SIGUSR1 / SIGUSR2), bit par bit." },
      { name: "fract-ol", icon: "🌀", stack: "C · MiniLibX", url: REPO + "fract-ol",
        desc: "Explorateur graphique de fractales (Mandelbrot, Julia) avec zoom et déplacement, rendu via la MiniLibX." },
    ],
  },
  {
    rank: "03",
    title: "Concurrence & shell",
    projects: [
      { name: "minishell", icon: "💻", stack: "C · parsing", url: REPO + "MiniShell",
        desc: "Un mini shell façon bash : parsing de la ligne de commande, pipes, redirections, variables d'environnement et commandes builtin." },
      { name: "philosophers", icon: "🍝", stack: "C · threads", url: REPO + "Philosophers",
        desc: "Le dîner des philosophes : threads, mutex et gestion de la concurrence sans interblocage ni famine." },
    ],
  },
  {
    rank: "04",
    title: "Rendu, réseau & C++",
    projects: [
      { name: "miniRT", icon: "🔦", stack: "C · raytracing", url: REPO + "miniRT",
        desc: "Un moteur de ray tracing : sphères, plans et cylindres, avec lumières, ombres et calcul de l'éclairage." },
      { name: "NetPractice", icon: "🌐", stack: "TCP/IP", url: REPO + "NetPractice",
        desc: "Comprendre les réseaux : sous-réseaux, masques et routage à diagnostiquer et corriger sur des topologies données." },
      { name: "CPP 00", icon: "➕", stack: "C++ · POO", url: REPO + "Cpp00",
        desc: "Premiers pas en C++ : namespaces, classes, fonctions membres et flux d'entrée/sortie." },
      { name: "CPP 01", icon: "➕", stack: "C++ · mémoire", url: REPO + "Cpp01",
        desc: "Allocation mémoire, références, pointeurs sur fonctions membres et switch." },
      { name: "CPP 02", icon: "➕", stack: "C++ · opérateurs", url: REPO + "Cpp02",
        desc: "Polymorphisme ad-hoc, surcharge d'opérateurs et classe de nombres à virgule fixe." },
      { name: "CPP 03", icon: "➕", stack: "C++ · héritage", url: REPO + "Cpp03",
        desc: "L'héritage : classes dérivées, héritage en diamant et réutilisation du code." },
      { name: "CPP 04", icon: "➕", stack: "C++ · abstrait", url: REPO + "Cpp04",
        desc: "Polymorphisme, classes abstraites et interfaces." },
    ],
  },
  {
    rank: "05",
    title: "Réseau, conteneurs & C++ avancé",
    projects: [
      { name: "irc", icon: "💬", stack: "C++ · sockets", url: REPO + "irc",
        desc: "Un serveur IRC conforme au protocole, gérant plusieurs clients simultanés, canaux, opérateurs et commandes." },
      { name: "inception", icon: "🐳", stack: "Docker", url: REPO + "inception",
        desc: "Une infrastructure Docker multi-conteneurs (NGINX, WordPress, MariaDB) orchestrée avec docker-compose." },
      { name: "CPP 05", icon: "➕", stack: "C++ · exceptions", url: REPO + "Cpp05",
        desc: "Répétition, formulaires bureaucratiques et gestion des exceptions." },
      { name: "CPP 06", icon: "➕", stack: "C++ · casts", url: REPO + "Cpp06",
        desc: "Les conversions de type en C++ : static, dynamic, reinterpret et const cast." },
      { name: "CPP 07", icon: "➕", stack: "C++ · templates", url: REPO + "Cpp07",
        desc: "Les templates de fonctions et de classes pour du code générique." },
      { name: "CPP 08", icon: "➕", stack: "C++ · STL", url: REPO + "Cpp08",
        desc: "Conteneurs templatés, itérateurs et algorithmes de la bibliothèque standard." },
      { name: "CPP 09", icon: "➕", stack: "C++ · STL", url: REPO + "Cpp09",
        desc: "Mise en pratique des conteneurs de la STL sur des cas concrets." },
    ],
  },
  {
    rank: "06",
    title: "Projet final",
    projects: [
      { name: "transcendence", icon: "🏓", stack: "Full-stack web", url: REPO + "transcendence",
        desc: "Le projet final : une application web full-stack — un Pong multijoueur en temps réel avec chat, comptes et authentification." },
    ],
  },
];

/* =========================================================
   Construction du board
   ========================================================= */
const board = document.getElementById("board");
const allCards = [];

RANKS.forEach((group) => {
  const section = document.createElement("section");
  section.className = "rank";

  section.innerHTML = `
    <div class="rank__head">
      <span class="rank__num">RANG ${group.rank}</span>
      <h2 class="rank__title">${group.title}</h2>
      <span class="rank__line"></span>
    </div>
    <div class="grid"></div>
  `;

  const grid = section.querySelector(".grid");

  group.projects.forEach((p) => {
    const card = document.createElement("button");
    card.className = "card" + (p.name.startsWith("CPP") ? " card--cpp" : "");
    card.dataset.name = p.name;
    card.dataset.desc = p.desc;
    card.dataset.stack = p.stack;
    card.dataset.url = p.url;
    card.innerHTML = `
      <span class="card__arrow">↗</span>
      <span class="card__icon">${p.icon}</span>
      <span class="card__name">${p.name}</span>
      <span class="card__stack">${p.stack}</span>
    `;
    grid.appendChild(card);
    allCards.push(card);
  });

  board.appendChild(section);
});

/* Stats du hero */
const totalProjects = RANKS.reduce((n, g) => n + g.projects.length, 0);
document.getElementById("heroStats").innerHTML = `
  <div class="stat"><b>${totalProjects}</b><span>PROJETS</span></div>
  <div class="stat"><b>${RANKS.length}</b><span>RANGS</span></div>
  <div class="stat"><b>C / C++</b><span>LANGAGES</span></div>
`;

/* =========================================================
   Panneau d'information au survol
   ========================================================= */
const info = document.getElementById("infoCard");
const infoTitle = document.getElementById("infoTitle");
const infoDesc  = document.getElementById("infoDesc");
const infoStack = document.getElementById("infoStack");

const isTouch = window.matchMedia("(hover: none)").matches;

function showInfo(card) {
  infoTitle.textContent = card.dataset.name;
  infoDesc.textContent  = card.dataset.desc;
  infoStack.textContent = card.dataset.stack;
  info.classList.add("is-visible");
  info.setAttribute("aria-hidden", "false");
}

function hideInfo() {
  info.classList.remove("is-visible");
  info.setAttribute("aria-hidden", "true");
}

function positionInfo(x, y) {
  const pad = 16;
  const w = info.offsetWidth;
  const h = info.offsetHeight;
  let left = x + 22;
  let top = y - 10;
  if (left + w + pad > window.innerWidth)  left = x - w - 22;
  if (top + h + pad > window.innerHeight)  top = window.innerHeight - h - pad;
  if (top < pad) top = pad;
  info.style.left = left + "px";
  info.style.top  = top + "px";
}

allCards.forEach((card) => {
  // Effet de lueur qui suit le curseur sur la carte
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", (e.clientX - r.left) + "px");
    card.style.setProperty("--my", (e.clientY - r.top) + "px");
  });

  if (!isTouch) {
    card.addEventListener("mouseenter", (e) => {
      showInfo(card);
      positionInfo(e.clientX, e.clientY);
    });
    card.addEventListener("mousemove", (e) => positionInfo(e.clientX, e.clientY));
    card.addEventListener("mouseleave", hideInfo);
  }

  // Clic = ouvrir le dépôt GitHub
  card.addEventListener("click", () => {
    window.open(card.dataset.url, "_blank", "noopener");
  });
});

/* =========================================================
   Animation d'apparition des cartes au scroll
   ========================================================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const card = entry.target;
      const delay = (card.dataset.delay || 0) * 1;
      setTimeout(() => card.classList.add("is-in"), delay);
      io.unobserve(card);
    }
  });
}, { threshold: 0.1 });

allCards.forEach((card, i) => {
  card.dataset.delay = (i % 6) * 60; // léger décalage en cascade
  io.observe(card);
});