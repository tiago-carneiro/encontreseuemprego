(function ($) {
    "use strict";

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

    var adjustButtonSizes = function () {
        let maxWidth = 0;

        // Calcula o maior tamanho
        $('.header-button').each(function () {
            maxWidth = Math.max(maxWidth, $(this).outerWidth());
        });

        // Aplica o maior tamanho em todos os botões
        $('.header-button').css('width', maxWidth + 'px');
    }

    $(document).ready(function () {
        adjustButtonSizes();
        $(window).resize(adjustButtonSizes);
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
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    var smoothScrollAndHighlight = function (targetSelector, highlightSelector) {
        const navbarHeight = $('nav').outerHeight(true);

        $('.navbar-nav .nav-link').removeClass('active');

        if (highlightSelector) {
            $(highlightSelector).addClass('active');
        }

        $('html, body').animate({
            scrollTop: $(targetSelector).offset().top - navbarHeight
        }, 1500, 'easeInOutExpo');
    }

    $('.navbar-nav .nav-link').on('click', function (event) {
        event.preventDefault();
        const targetId = $(this).attr('href');
        smoothScrollAndHighlight(targetId, this);
        $('.navbar-collapse').collapse('hide');
    });

    $('.linksolucoes').on('click', function (event) {
        event.preventDefault();
        smoothScrollAndHighlight('#solucoes', '.linksobre');
    });

    const itensPorPagina = 6;
    let paginaAtual = 1;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const urlRegex = /^(https?:\/\/|www\.)[^\s/$.?#].[^\s]*$/;

    var criarRegexIgnorandoAcentos = function (texto) {
        // Normaliza o texto para remover acentos
        const textoNormalizado = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // Cria uma expressão regular ignorando maiúsculas e minúsculas
        return new RegExp(textoNormalizado, "i");
    }

    var createJobCard = function (item) {

        const formato = (item) => {
            switch (item.formato) {
                case 'P':
                    return '<span class="text-truncate me-3"><i class="fa fa-building-user text-primary me-2"></i>Presencial</span>';
                case 'R':
                    return '<span class="text-truncate me-3"><i class="fa fa-house-laptop text-primary me-2"></i>Remoto</span>';
                case 'H':
                    return '<span class="text-truncate me-3"><i class="fa fa-house-circle-check text-primary me-2"></i>Híbrido</span>';
                default:
                    return '';
            }
        };

        const jobCard = `<h5 class="mb-3">${item.titulo}</h5>
                                ${item.empresa ? `<span class="text-truncate me-3"><i class="fa fa-building text-primary me-2"></i>${item.empresa}</span>` : ''}
                                ${item.cidade ? `<span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>${item.cidade} - ${item.pais}</span>` : ''}
                                ${formato(item)}`;
        return jobCard;
    }

    let vagas = $.vagas;

    var createJobItems = function (reset) {
        const $container = $('#job-container');
        if (reset) {
            $container.html('');
            paginaAtual = 1;
        }

        const inicio = (paginaAtual - 1) * itensPorPagina;
        const fim = inicio + itensPorPagina;

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
                    const regex = criarRegexIgnorandoAcentos(filtro);
                    return regex.test(vaga.titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ||
                        regex.test(vaga.descricao.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) ||
                        vaga.requisitos.some(requisito => regex.test(requisito.normalize("NFD").replace(/[\u0300-\u036f]/g, "")))
                });
            });
        }

        if (cidadePais.length > 0) {
            filteredItems = filteredItems.filter(f => cidadePais.includes(`${f.cidade} - ${f.pais}`));
        }

        if (formato.length > 0) {
            filteredItems = filteredItems.filter(f => formato.includes(f.formato));
        }

        const itensPagina = filteredItems.slice(inicio, fim);

        if (itensPagina.length > 0) {
            $.each(itensPagina, function (index, item) {
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

                    const cadastro = emailRegex.test(item.aplicacao) ? `Enviar email para <span class="text-primary" style="cursor: default; text-decoration: underline;">${item.aplicacao}</span>` :
                        urlRegex.test(item.aplicacao) ? `Para acessar o site de aplicação <a href="${item.aplicacao}" target="_blank" rel="noopener noreferrer" class="text-primary">clique aqui</a>` :
                            item.aplicacao.includes('+') ? `Entrar em contato pelo número: ${item.aplicacao}` :
                                '';

                    $("#modalBody").html($(`<h4 class="mb-3">Descrição</h4>
                                        ${item.descricao ? `<p>${item.descricao}</p>` : ''}
                                        ${item.requisitos.length > 0 ? createLista(item.requisitos) : ''}
                                        <h4 class="mb-3">Cadastro</h4><p>${cadastro}</p>`));
                });

                $jobItem.find('#verMaisDiv').append($button);

                $container.append($jobItem);
            });
        }
        else {
            $container.append('<p class="mb-5 mt-4 fs-5">Nenhuma vaga encontrada com os filtros selecionados</p>');
        }

        if (fim >= filteredItems.length)
            $('#verMaisVagas').hide();
        else
            $('#verMaisVagas').show();
    }

    var createLista = function (items) {
        const $ul = $('<ul class="list-unstyled"></ul>');
        items.forEach(item => {
            const $li = $(`<li><i class="fa fa-angle-right text-primary me-2"></i>${item}</li>`);
            $ul.append($li);
        });
        return $ul.prop('outerHTML');;
    }

    $('#verMaisVagas').click(function () {
        paginaAtual++;
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

        // Converte o objeto em array para ordenar os países
        const paisesOrdenados = Object.keys(paisesLocais).sort();

        // Gera o HTML dinâmico para o dropdown
        paisesOrdenados.forEach(pais => {
            // Adiciona o cabeçalho do país
            $('#cidadeList').append(`
            <li>
                <div class="dropdown-header">
                    <label class="w-100">${pais}</label>
                </div>
            </li>
        `);

            // Converte o Set de cidades em array e ordena
            const cidadesOrdenadas = Array.from(paisesLocais[pais]).sort();

            // Adiciona cada cidade ao dropdown
            cidadesOrdenadas.forEach(cidade => {
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