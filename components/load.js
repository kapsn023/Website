fetch('/components/header.html')
    .then(r => r.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
        document.querySelector('.title-bar').textContent = document.title;
    });

fetch('/components/footer.html')
    .then(r => r.text())
    .then(html => document.getElementById('footer').innerHTML = html);
