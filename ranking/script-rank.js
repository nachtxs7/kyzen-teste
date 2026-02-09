const ranking = [
  "ᴷᶻᴺ 𝓡𝓪𝓷𝓷𝓲",
  "Jack, Top 1 SA",
  "obartax",
  "ᴷᶻᴺ Akuma",
  "nachtxs7",
  "Aki",
  "RoosTV",
  "Mumu",
  "Supapilas15",
  "Rafa"
];

const list = document.getElementById("ranking-list");

ranking.forEach((name, index) => {
  const li = document.createElement("li");
  li.style.animationDelay = `${index * 0.08}s`;

  let medal = "";
  if (index === 0) medal = "🥇";
  else if (index === 1) medal = "🥈";
  else if (index === 2) medal = "🥉";
  else medal = `#${index + 1}`;

  if (index <= 2) li.classList.add("top");

  li.innerHTML = `
    <div class="player">
      <span class="position">${medal}</span>
      <span class="name">${name}</span>
    </div>
  `;

  list.appendChild(li);
});

