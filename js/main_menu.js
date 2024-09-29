// Menu & Sections Behavior
var e = $("#menu-trigger"),
    t = $("#menu-trigger-headline"),
    n = $("#menu"),
    i = $("#header"),
    r = $("#main"),
    s = $("#about"),
    a = $("#works"),
    o = $("#contact"),
    c = $("#about-trigger"),
    d = $("#works-trigger"),
    u = $("#contact-trigger");

// Función para abrir el menú automáticamente al cargar la página
$(document).ready(function() {
    e.hide();

    // Simula un clic para abrir el menú al cargar la página
    i.addClass("menu-is-visible");
    e.addClass("menu-opened");
    n.addClass("animate-in");

    
    setTimeout(function() {
        $(".active, .blocks__scroll").animate({ scrollTop: 0 }, 100);
    }, 500);
    setTimeout(function() {
        $(".active").removeClass("animate-out animate-in");
    }, 1200);
});

// Evento para abrir/cerrar el menú cuando se hace clic en el menú-trigger
e.on("click", function(t) {
    t.preventDefault();
    if (n.hasClass("animate-in")) {
        // El menú está abierto, así que lo cerramos
        n.addClass("animate-out");
        setTimeout(function() {
            $(".active").addClass("animate-in");
           // Removemos la clase 'menu-opened' cuando se cierra el menú
            $(".menu").animate({ scrollTop: 0 }, 100);
        }, 500);
        setTimeout(function() {
            i.removeClass("menu-is-visible");
            n.removeClass("animate-in animate-out");
            if ($(".inner").hasClass("active")) {
                i.addClass("inner-is-visible");
            }
        }, 1500);
        e.hide(); // Ocultar el botón cuando el menú se cierra
    } else {
        // El menú está cerrado, así que lo abrimos
        $(".active").addClass("animate-out");
        i.addClass("menu-is-visible");
        e.addClass("menu-opened"); // Añadimos 'menu-opened' cuando se abre el menú
        e.show(); // Mostramos el botón cuando el menú se abre
        setTimeout(function() {
            n.addClass("animate-in");
            $(".active, .blocks__scroll").animate({ scrollTop: 0 }, 100);
            if ($(".inner").hasClass("active")) {
                i.removeClass("inner-is-visible");
            }
        }, 500);
        setTimeout(function() {
            $(".active").removeClass("animate-out animate-in");
        }, 1200);
    }
});

// Evento para abrir el menú desde el headline
t.on("click", function(t) {
    t.preventDefault();
    $(".active").addClass("animate-out");
    i.addClass("menu-is-visible");
    e.addClass("menu-opened");
    setTimeout(function() {
        n.addClass("animate-in");
        $(".active, .blocks__scroll").animate({ scrollTop: 0 }, 100);
        if ($(".inner").hasClass("active")) {
            i.removeClass("inner-is-visible");
        }
    }, 500);
    setTimeout(function() {
        $(".active").removeClass("animate-out animate-in");
    }, 1200);
});

// Comportamiento común al hacer clic en un elemento del menú
$(".navigation__link").on("click", function(t) {
    t.preventDefault(); // Evita el comportamiento por defecto
    $(".active").removeClass("active");
    $(".active-link").removeClass("active-link");
    n.addClass("animate-out");
    setTimeout(function() {
        e.removeClass("menu-opened");
        $(".menu").animate({ scrollTop: 0 }, 100);
    }, 500);
    setTimeout(function() {
        n.removeClass("animate-in animate-out");
        i.removeClass("menu-is-visible");
    }, 1500);
});


/*! home section open */
l.on("click", function(e) {
    e.preventDefault();
    setTimeout(function() {
        r.addClass("active animate-in");
        l.addClass("active-link");
    }, 500);
});

/*! about section open */
c.on("click", function(e) {
    e.preventDefault();
    setTimeout(function() {
        s.addClass("active animate-in");
        c.addClass("active-link");
    }, 500);
    setTimeout(function() {
        i.addClass("inner-is-visible");
    }, 1500);
});

/*! works section open */
d.on("click", function(e) {
    e.preventDefault();
    setTimeout(function() {
        a.addClass("active animate-in");
        d.addClass("active-link");
    }, 500);
    setTimeout(function() {
        i.addClass("inner-is-visible");
    }, 1500);
});

/*! contact section open */
u.on("click", function(e) {
    e.preventDefault();
    setTimeout(function() {
        o.addClass("active animate-in");
        u.addClass("active-link");
    }, 500);
    setTimeout(function() {
        i.addClass("inner-is-visible");
    }, 1500);
});