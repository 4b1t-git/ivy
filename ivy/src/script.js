const bg = document.querySelector('.ascii-bg');

const chars = '.:!+*#@░▒▓';

let content = '';

for (let i = 0; i < 3000; i++) {
  const char = chars[Math.floor(Math.random() * chars.length)];
  content += char;
}

bg.textContent = content;
const columns = document.querySelector('.columns-ascii');

const col = `
█░░█░█░░░░░░░░░░█░░█
█░░█░█░░░░░░░░░░█░░█
████░█░░░░░░░░░░████
█░░█░█░░░░░░░░░░█░░█
█░░█░████████████░░█
░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░
█████████████████████
`;

columns.textContent = col.repeat(3);