// ------------------------------------------------
// Author: dimsemenov
// Author URI: https://github.com/dimsemenov
// File name: gallery-init.js
// https://codepen.io/dimsemenov/pen/ZYbPJM
// ------------------------------------------------

var initPhotoSwipeFromDOM = function(gallerySelector) {

   // analiza los datos de la diapositiva (url, título, tamaño...) de los elementos DOM
    // (hijos de gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

            // Recorre cada nodo hijo
        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element

            // Solo procesa nodos que sean elementos (nodeType === 1)
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0];
 // Obtiene el tamaño de la imagen desde el atributo data-size
            size = linkEl.getAttribute('data-size').split('x');

            // crear objeto de diapositiva
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };


// Si existe un <figcaption>, añade el título a la diapositiva
            if(figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }

             //búsqueda de la imagen dentro del `div`
        var imgElement = linkEl.querySelector('div img');
        if(imgElement) {
            item.src = imgElement.getAttribute('src');
        }

        item.el = figureEl; 
        items.push(item);
    }
        return items;
    };

    // busca el elemento padre más cercano
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // se activa cuando el usuario hace clic en la miniatura
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // busca el elemento raíz de la diapositiva
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

       // encuentra el índice del elemento en el que se hizo clic recorriendo todos los nodos secundarios
        // alternativamente, puedes definir el índice mediante el atributo de datos
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) {
                continue;
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // abre PhotoSwipe si se encuentra un índice válido
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // analiza el índice de imágenes y el índice de la galería desde la URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

       // definir opciones (si es necesario)
        options = {

            showHideOpacity: true,

            
// definir el índice de la galería (para URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                
// Consulte la sección Opciones -> getThumbBoundsFn de la documentación para obtener más información
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        
// Pasar datos a PhotoSwipe e inicializarlos
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // recorrer todos los elementos de la galería y vincular eventos
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Analiza la URL y abre la galería si contiene #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// ejecutar la función anterior
initPhotoSwipeFromDOM('.my-gallery');
