(function ($) {
    "use strict";
/* 
const text = "Natalia Nobre  https://www.linkedin.com/in/nataliasnobre/";
const regex = /(.+?)\s+(https?:\/\/\S+)/;
const match = text.match(regex);

if (match) {
    const name = match[1];
    const link = match[2];
    console.log("Nome:", name);
    console.log("Link:", link);
} else {
    console.log("Nenhum match encontrado.");
}
*/
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    $('.navbar-nav .nav-link').on('click', function() {
        // Remove a classe 'active' de todos os itens do menu
        $('.navbar-nav .nav-link').removeClass('active');
        
        // Adiciona a classe 'active' apenas ao item clicado
        $(this).addClass('active');
        $('.navbar-collapse').collapse('hide');
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    var items = 0;
    var loadJobItems = function(page) {
        $.ajax({
            url: `https://my-json-server.typicode.com/tiago-carneiro/encontreseuemprego?_page=${page}&_limit=6`,
            method: 'GET',
            dataType: 'json',
            success: function(jobList) {
                createJobItems(jobList);
                items = jobList.length + items;
                
                if(items == 16)
                    $('#verMaisVagas').hide();
            }
        });
    };

    function createJobItems(jobList) {
        const $container = $('#job-container');
    
        $.each(jobList, function(index, job) {
            const $jobItem = $(`
                <div class="job-item p-4 mb-4">
                    <div class="row g-4">
                        <div class="col-sm-12 col-md-8 d-flex align-items-center">
                            <div class="text-start ps-4">
                                <h5 class="mb-3">${job.titulo}</h5>
                                ${job.empresa ? `<span class="text-truncate me-3"><i class="fa fa-building text-primary me-2"></i>${job.empresa}</span>` : ''}
                                <span class="text-truncate me-3"><i class="fa fa-globe text-primary me-2"></i>${job.abrangencia == 'N' ? 'Nacional' : 'Internacional'}</span>
                                 ${job.local ? `<span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>${job.local}</span>` : ''}
                                ${createFormato(job.formato)}
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div class="d-flex mb-3">
                                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Detalhes</button>
                            </div>
                        </div>
                    </div>
                </div>
            `);
    
            $container.append($jobItem);
        });
    }

    var createFormato = function(value)
    {
        switch(value) {
            case 'P':
                return '<span class="text-truncate me-3"><i class="fa fa-building-user text-primary me-2"></i>Presencial</span>';
            case 'R':
                return '<span class="text-truncate me-3"><i class="fa fa-house-laptop text-primary me-2"></i>Remoto</span>';
            case 'H':
                return '<span class="text-truncate me-3"><i class="fa fa-house-circle-check text-primary me-2"></i>Híbrido</span>';
            default:
                return '';
          } 
    }
    
    loadJobItems(0);
    
})(jQuery);