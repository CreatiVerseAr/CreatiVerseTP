document.addEventListener("DOMContentLoaded", function() {
    var spanishLink = document.getElementById('spanish');
    var englishLink = document.getElementById('english');

    var translations = {
        "es": {
            "inicio": "Inicio",
            "nosotros": "Nosotros",
            "cursos": "Cursos",
            "registrate": "Registrate",
            "promocion": "Desbloquea tu potencial y haz realidad tus sueños digitales!",
            "texto_con_animacion": "Texto con Animación",
            "bienvenidos": "Bienvenidos",
            "creativerse": "CreatiVerse",
            "envianos_correo": "Envíanos un correo",
            "todos_derechos_reservados": "Todos los derechos reservados",
            "aviso_derecho_autor": "Aviso de derecho de autor",
            "politica_privacidad": "Política de Privacidad"
        },
        "en": {
            "inicio": "Home",
            "nosotros": "About Us",
            "cursos": "Courses",
            "registrate": "Sign Up",
            "promocion": "Unlock your potential and make your digital dreams come true!",
            "texto_con_animacion": "Animated Text",
            "bienvenidos": "Welcome",
            "creativerse": "CreatiVerse",
            "envianos_correo": "Send us an email",
            "todos_derechos_reservados": "All rights reserved",
            "aviso_derecho_autor": "Copyright Notice",
            "politica_privacidad": "Privacy Policy"
        }
    };

    function setLanguage(language) {
        document.querySelectorAll('[data-lang]').forEach(function(element) {
            var key = element.getAttribute('data-lang');
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }

    spanishLink.addEventListener('click', function() {
        setLanguage('es');
    });

    englishLink.addEventListener('click', function() {
        setLanguage('en');
    });

    // Set default language to Spanish
    setLanguage('es');
});
