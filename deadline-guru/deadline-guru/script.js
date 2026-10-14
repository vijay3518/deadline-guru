document.getElementById('yr').textContent = new Date().getFullYear();

const due = document.getElementById('due');
const $ = id => document.getElementById(id);
let timer, start = Date.now();

function tick() {
  const end = new Date(due.value).getTime();
  if (!end) return;
  const left = end - Date.now();
  if (left <= 0) {
    ['d','h','m','s'].forEach(k => $(k).textContent = '0');
    $('hint').textContent = 'This deadline has passed. Pick a new date.';
    $('fill').style.width = '100%';
    return;
  }
  const p = n => String(n).padStart(2, '0');
  $('d').textContent = Math.floor(left / 864e5);
  $('h').textContent = p(Math.floor(left % 864e5 / 36e5));
  $('m').textContent = p(Math.floor(left % 36e5 / 6e4));
  $('s').textContent = p(Math.floor(left % 6e4 / 1e3));
  $('hint').textContent = 'Time left to plan, draft and submit.';
  $('fill').style.width = Math.min(100, (Date.now() - start) / (end - start) * 100) + '%';
}

due.addEventListener('change', () => {
  start = Date.now();
  clearInterval(timer);
  tick();
  timer = setInterval(tick, 1000);
});

// Contact form opens the visitor's email app. Replace the address below with yours.
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get('msg')}\n\nFrom: ${f.get('name')} (${f.get('email')})`;
  location.href = `mailto:your-email@example.com?subject=${encodeURIComponent('Deadline Guru request')}&body=${encodeURIComponent(body)}`;
});
