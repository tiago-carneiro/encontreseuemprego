(function ($) {
    "use strict";
    //https://docs.google.com/spreadsheets/d/e/2PACX-1vR2qP4G1dW3K-q3bkfvL-OQNJQpFEtNJR3hU3gMYWKECbOjPiomAhNPMjsxLfcWQ9Y_grPpVoUnTxff/pubhtml

    const currentPolicyVersion = "1.0";
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

    $(window).scroll(function () {

        let scrollPosition = $(window).scrollTop();
        const navbarHeight = $('nav').outerHeight(true);

        // Sticky Navbar
        if (scrollPosition > 300) {
            $('.sticky-top').css('top', '0px');
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.sticky-top').css('top', '-100px');
            $('.back-to-top').fadeOut('slow');
        }

        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            $('nav a').removeClass('active');
            $(`nav a[href="#contato"]`).addClass('active');
        }
        else {
            $('.section').each(function () {
                let sectionTop = $(this).offset().top - navbarHeight - 5;
                let sectionHeight = $(this).outerHeight();
                let sectionId = $(this).attr('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    $('nav a').removeClass('active');
                    $(`nav a[href="#${sectionId}"]`).addClass('active');
                }
            });
        }
    });

    var adjustButtonSizes = function () {
        let maxWidth = 0;

        $('.header-button').each(function () {
            maxWidth = Math.max(maxWidth, $(this).outerWidth());
        });

        $('.header-button').css('min-width', maxWidth + 'px');
    }

    $(document).ready(function () {
        adjustButtonSizes();
        $(window).resize(adjustButtonSizes);

        const savedPolicyVersion = localStorage.getItem('privacyPolicyVersion');

        if (savedPolicyVersion === currentPolicyVersion) {
            $('#privacyBanner').hide();
            $('#privacyOverlay').hide();
            $('body').removeClass('block-scroll');
        } else {
            $('body').addClass('block-scroll');
        }

        $('#acceptPrivacy').on('click', function () {
            localStorage.setItem('privacyPolicyVersion', currentPolicyVersion);

            $('#privacyBanner').hide();
            $('#privacyOverlay').hide();

            $('body').removeClass('block-scroll');
        });
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    var smoothScrollAndHighlight = function (targetSelector) {
        const navbarHeight = $('nav').outerHeight(true);

        $('html, body').animate({
            scrollTop: $(targetSelector).offset().top - navbarHeight
        }, 1500, 'easeInOutExpo');
    }

    $('nav a').on('click', function (event) {
        event.preventDefault();
        const targetId = $(this).attr('href');
        smoothScrollAndHighlight(targetId);
        $('.navbar-collapse').collapse('hide');
    });

    $('.linksolucoes').on('click', function (event) {
        event.preventDefault();
        smoothScrollAndHighlight('#solucoes');
    });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const urlRegex = /^(https?:\/\/|www\.)[^\s/$.?#].[^\s]*$/;
    const phoneRegex = /^(\+?\d{1,4}[\s\-]?)?(\(?\d{2,3}\)?[\s\-]?)?[\d\s\-]{6,14}$/;

    var normalizeText = function (value) {
        return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    var regexNormalizedText = function (value) {
        return new RegExp(normalizeText(value), "i");
    }

    var createJobCard = function (item) {

        const formato = (item) => {
            switch (item.formato) {
                case 'Presencial':
                    return '<span class="text-truncate me-3"><i class="fa fa-building-user text-primary me-2"></i>Presencial</span>';
                case 'Remoto':
                    return '<span class="text-truncate me-3"><i class="fa fa-house-laptop text-primary me-2"></i>Remoto</span>';
                case 'Híbrido':
                    return '<span class="text-truncate me-3"><i class="fa fa-house-circle-check text-primary me-2"></i>Híbrido</span>';
                default:
                    return '';
            }
        };

        const jobCard = `<h5 class="mb-3">${item.titulo}</h5>
                        ${item.empresa ? `<span class="text-truncate me-3"><i class="fa fa-building text-primary me-2"></i>${item.empresa}</span>` : ''}
                        <span class="text-truncate me-3">
                            <i class="fa fa-map-marker-alt text-primary me-2"></i>
                            ${item.cidade ? `${item.cidade} - ` : ''}${item.pais}
                        </span>
                        ${formato(item)}
                    `;

        return jobCard;
    }

    let vagas = $.vagas;
    const maxItems = 6;
    let currentPage = 1;

    var createJobItems = function (reset) {
        const $container = $('#job-container');
        if (reset) {
            $container.html('');
            currentPage = 1;
        }

        const startIndex = (currentPage - 1) * maxItems;
        const endIndex = startIndex + maxItems;

        let filteredItems = vagas;
        const filtro = $('#filtro').val();

        const formato = $(`.form-check-input.formato`)
            .filter(':checked')
            .map(function () { return $(this).attr('data-search'); })
            .get();

        const cidadePais = $(`.form-check-input.cidade`)
            .filter(':checked')
            .map(function () { return $(this).attr('data-search'); })
            .get();

        if (filtro) {
            const filtroList = filtro.split(',').map(f => f.trim());

            filteredItems = filteredItems.filter(vaga => {
                return filtroList.some(filtro => {
                    const regex = regexNormalizedText(filtro);
                    return regex.test(normalizeText(vaga.titulo)) ||
                        regex.test(normalizeText(vaga.descricao))
                });
            });
        }

        if (cidadePais.length > 0) {
            filteredItems = filteredItems.filter(f => cidadePais.includes(`${f.cidade} - ${f.pais}`));
        }

        if (formato.length > 0) {
            filteredItems = filteredItems.filter(f => formato.includes(f.formato));
        }

        const paginatedItems = filteredItems.slice(startIndex, endIndex);

        if (paginatedItems.length > 0) {
            $.each(paginatedItems, function (index, item) {
                const $jobItem = $(`
                <div class="job-item p-4 mb-4">
                    <div class="row g-4">
                        <div class="col-sm-12 col-md-8 d-flex align-items-center">
                            <div class="text-start ps-4">
                              ${createJobCard(item)}
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div class="d-flex mb-3" id="verMaisDiv">
                            </div>
                        </div>
                    </div>
                </div>
            `);

                const $button = $('<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Detalhes</button>');
                $button.click(function () {
                    $("#modalHeader").html(createJobCard(item));

                    const aplicacao = emailRegex.test(item.aplicacao) ? `Enviar email para <span class="text-primary" style="cursor: default; text-decoration: underline;">${item.aplicacao}</span>` :
                        urlRegex.test(item.aplicacao) ? `Para acessar o site de aplicação <a href="${item.aplicacao}" target="_blank" rel="noopener noreferrer" class="text-primary">clique aqui</a>` :
                            phoneRegex.test(item.aplicacao) ? `Entrar em contato pelo número: ${item.aplicacao}` :
                                '';

                    $("#modalBody").html($(`<h4 class="mb-3">Descrição</h4>
                                        ${item.descricao ? `<p>${item.descricao.replace(/\n/g, '<br>')}</p>` : ''}
                                        <h4 class="mb-3 mt-5">Cadastro</h4><p>${aplicacao}</p>`));
                });

                $jobItem.find('#verMaisDiv').append($button);

                $container.append($jobItem);
            });
        }
        else {
            $container.append('<p class="mb-5 mt-4 fs-5">Nenhuma vaga encontrada com os filtros selecionados</p>');
        }

        if (endIndex >= filteredItems.length)
            $('#verMaisVagas').hide();
        else
            $('#verMaisVagas').show();
    }

    $('#verMaisVagas').click(function () {
        currentPage++;
        createJobItems();
    });

    var createJobItemsWithDelay = function () {
        clearTimeout(timeout);

        timeout = setTimeout(function () {
            createJobItems(true);
        }, 1400);
    }

    createJobItems();

    //Filtro
    let timeout;

    $('#filtro').on('input', function () {
        createJobItemsWithDelay(true);
    });

    $(".filter-dropdown").click(function (event) {
        event.stopPropagation();
    });

    var createFiltroCidadePais = function () {

        let paisesLocais = {};
        vagas.forEach(vaga => {
            if (vaga.cidade && vaga.pais) {
                if (vaga.pais) {
                    if (!paisesLocais[vaga.pais]) paisesLocais[vaga.pais] = new Set();
                    paisesLocais[vaga.pais].add(vaga.cidade.trim());
                }
            }
        });

        const paisesOrdenados = Object.keys(paisesLocais).sort();

        paisesOrdenados.forEach(pais => {
            $('#cidadeList').append(`
            <li>
                <div class="dropdown-header">
                    <label class="w-100">${pais}</label>
                </div>
            </li>
        `);

            const sortedItems = Array.from(paisesLocais[pais]).sort();

            sortedItems.forEach(cidade => {
                const id = cidade.toLowerCase().replace(/ /g, "-");
                $('#cidadeList').append(`
                <li>
                    <div class="dropdown-item">
                        <div class="form-check">
                            <input class="form-check-input cidade" type="checkbox" data-search="${cidade} - ${pais}" value="${cidade}" id="${id}">
                            <label class="form-check-label w-100" for="${id}">${cidade}</label>
                        </div>
                    </div>
                </li>
            `);
            });
        });

    }

    createFiltroCidadePais();

    var updateDropdownText = function (tag) {
        const checkboxes = $(`.form-check-input.${tag}`);
        const selected = checkboxes
            .filter(':checked')
            .map(function () { return $(this).val(); })
            .get();

        const dropdownText = $(`#${tag}Title`);

        dropdownText.html(selected.length > 0 ? selected.join(', ') : dropdownText.data('default'));

        createJobItemsWithDelay(true);
    }

    $('.form-check-input.cidade').on('change', function () {
        updateDropdownText('cidade');
    });

    $('.form-check-input.formato').on('change', function () {
        updateDropdownText('formato');
    });

})(jQuery);