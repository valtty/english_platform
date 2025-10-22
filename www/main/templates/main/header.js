document.getElementById('toggle-options').addEventListener('click', function() {  
    const options = document.getElementById('lang-options');  
    options.style.display = options.style.display === 'block' ? 'none' : 'block';  
});  

document.querySelectorAll('.lang-option[data-lang]').forEach(item => {  
    item.addEventListener('click', function() {  
        const selectedLang = this.getAttribute('data-lang');  
        document.getElementById('current-lang').textContent = selectedLang.toUpperCase();  
        document.getElementById('lang-options').style.display = 'none';  
        // Здесь добавьте код для смены языка на сайте  
    });  
});  

// Закрываем опции при клике вне блока  
window.addEventListener('click', function(event) {  
    const options = document.getElementById('lang-options');  
    if (!document.querySelector('.language-switcher').contains(event.target)) {  
        options.style.display = 'none';  
    }  
});  