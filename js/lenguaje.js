document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event triggered');
    const languageSelect = document.getElementById('language-select');
    const textsToTranslate = document.querySelectorAll('[data-lang]');

    // Traducciones
    const translations = {
        es: {
            inicio: "Inicio",
            nosotros: "Nosotros",
            cursos: "Cursos",
            registrate: "Regístrate",
            promocion: "Desbloquea tu potencial y haz realidad tus sueños digitales!",
            bienvenidos: "Bienvenidos",
            creativerse: "CreatiVerse",
            envianos_correo: "Envíanos un correo",
            todos_derechos_reservados: "Todos los derechos reservados",
            aviso_derecho_autor: "Aviso de derecho de autor",
            politica_privacidad: "Política de Privacidad"
        },
        en: {
            inicio: "Home",
            nosotros: "About Us",
            cursos: "Courses",
            registrate: "Sign Up",
            promocion: "Unlock your potential and make your digital dreams come true!",
            bienvenidos: "Welcome",
            creativerse: "CreatiVerse",
            envianos_correo: "Send us an email",
            todos_derechos_reservados: "All rights reserved",
            aviso_derecho_autor: "Copyright Notice",
            politica_privacidad: "Privacy Policy"
        }
    };

    // Para cambiar el idioma
    function changeLanguage(language) {
        textsToTranslate.forEach(function(element) {
            const key = element.getAttribute('data-lang');
            element.textContent = translations[language][key];
        });
    }

    // Evento idioma
    languageSelect.addEventListener('change', function() {
        const selectedLang = this.value;
        changeLanguage(selectedLang);
        alert('Idioma cambiado a: ' + selectedLang);
    });

    // Configuración 
    const initialLang = languageSelect.value;
    changeLanguage(initialLang);
});
