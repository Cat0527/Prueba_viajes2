
//tooltip
document.addEventListener('DOMContentLoaded', function () {
    const tooltips = document.querySelectorAll('.tooltips_form');

    tooltips.forEach(function (tooltip) {
        tooltip.addEventListener('mouseover', function () {
            this.querySelector('.tooltips_form').style.visibility = 'visible';
            this.querySelector('.tooltips_form').style.opacity = '1';
    });

        tooltip.addEventListener('mouseout', function () {
            this.querySelector('.tooltips_form').style.visibility = 'hidden';
            this.querySelector('.tooltips_form').style.opacity = '0';
        });
    });
});

//modal

var modal = document.getElementById("miModal");

    var label = document.getElementById("terminosLabel");

    var span = document.getElementsByClassName("close")[0];

    label.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

//alert

const botonEnviar = document.getElementById('button-send');

botonEnviar.addEventListener('click', () => {
    alert('Mensaje enviado');
});