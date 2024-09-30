document.addEventListener('DOMContentLoaded',
function(){
    //array de proyectos
    var projects = [
        {
        nombre: 'Proyecto 1',
        descripcion: 'Descripcion breve del proyecto 1.',
        enlace: 'url-al-proyecto-1.html'
        },
        // agregar mas proyectos aqui
    ];
    // funcion para agregar proyectos al DOM

    function addProjectsToDOM(){
        var projectList =
        document.getElementById('project-list');
        projects.forEach(function(proyecto) {
            var div = document.createElement('div');
            div.className = 'project';
            div.innerHTML = '<h3>' + proyecto.nombre + '</h3><p>' + proyecto.descripcion + '</p><a href="' + proyecto.enlace + '">Ver Proyecto</a>';
            projectList.appendChild(div);
        });
    }

    //llamada a la funcion para qgregar proyectos
    addProjectsToDOM();
} );