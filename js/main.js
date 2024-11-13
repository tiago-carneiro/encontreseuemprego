(function ($) {
    "use strict";
    /* 
    https://linktr.ee/hrfernandalara
    https://www.roberthalf.com/br/pt
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

    var synchronizeButtonWidths = function () {
        const referenceWidth = $('#btn-maior').outerWidth();
        $('.header-button').css('width', referenceWidth);
    }

    $(window).on('load resize', synchronizeButtonWidths);

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

    $('.navbar-nav .nav-link').on('click', function (event) {
        const navbarHeight = $('nav').outerHeight(true);
        event.preventDefault();

        $('.navbar-nav .nav-link').removeClass('active');

        $(this).addClass('active');
        $('.navbar-collapse').collapse('hide');

        const targetId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetId).offset().top - navbarHeight
        }, 1500, 'easeInOutExpo');
    });

    const itensPorPagina = 6;
    let paginaAtual = 1;
    let vagas = [
        {
            "dataHora": "10/1/2024 9:16:48",
            "titulo": "Estágio em Departamento técnico",
            "empresa": "Saint Gobain",
            "aplicacao": "https://startrh-estagio.gupy.io/jobs/7875910",
            "abrangencia": "N",
            "formato": "P",
            "local": "Jandira - Brasil",
            "contato": "jessica@startrh.io",
            "descricao": "Superior cursando em Engenharia química, Engenharia de materiais, Engenharia mecânica, Engenharia de produção ou Engenharia ambiental. Cursar no período noturno e com previsão de conclusão a partir de 12/2026.",
            "requisitos":
                [
                    "Inglês básico, intermediário será um diferencial",
                    "Pacote office intermediário - Mandatório",
                    "Power Point básico a intermediário",
                    "Conhecimento em sistema SAP será um diferencial"
                ]
        },
        {
            "dataHora": "10/1/2024 11:18:47",
            "titulo": "OPERADOR TÉCNICO",
            "empresa": "DMSYS SISTEMAS INTEGRADOS",
            "aplicacao": "curriculos@dmsys.com.br",
            "abrangencia": "N",
            "formato": "P",
            "local": "Rio de Janeiro - Brasil",
            "contato": "",
            "descricao": "Realizar o monitoramento dos empreendimentos através do controle de CFTV, SDAI, SCA e Automação.",
            "requisitos":
                [
                    "Observar e registrar ocorrências",
                    "Elaborar relatórios diários"
                ]
        },
        {
            "dataHora": "10/1/2024 11:27:29",
            "titulo": "ANALISTA DE SISTEMAS",
            "empresa": "Best Corporate Partners - BCP",
            "aplicacao": "https://encurtador.com.br/bbdcK",
            "abrangencia": "I",
            "formato": "R",
            "local": "",
            "contato": "Natalia Nobre  https://www.linkedin.com/in/nataliasnobre/",
            "descricao": "Precisa ser fluente em inglês e espanhol, como também ter o mínimo de 5 anos de experiência",
            "requisitos": []
        },
        {
            "dataHora": "10/1/2024 11:29:28",
            "titulo": "SENIOR DATA ENGINEER",
            "empresa": "Best Corporate Partners - BCP",
            "aplicacao": "https://encurtador.com.br/2dsaK",
            "abrangencia": "I",
            "formato": "R",
            "local": "",
            "contato": "Natalia Nobre https://www.linkedin.com/in/nataliasnobre/",
            "descricao": "Precisa ter inglês fluente (C1) e mínimo de 7 anos de experiência",
            "requisitos": []
        },
        {
            "dataHora": "10/1/2024 11:35:44",
            "titulo": "TÉCNICO DE MANUTENÇÃO ",
            "empresa": "Consultoria JR Recursos Humanos",
            "aplicacao": "rhjuscileneramos@gmail.com",
            "abrangencia": "N",
            "formato": "P",
            "local": "Chapecó - Brasil",
            "contato": "",
            "descricao": "",
            "requisitos":
                [
                    "Manutenção preventiva e corretiva GLB",
                    "Análise de Chamados Técnicos",
                    "Elaboração e Inspeção de procedimentos",
                    "Controle de indicadores",
                    "Conhecimento com solda"
                ]
        },
        {
            "dataHora": "10/1/2024 15:36:51",
            "titulo": "CONSULTOR DE VENDAS ",
            "empresa": "",
            "aplicacao": "curriculo@alinelacerda.com",
            "abrangencia": "N",
            "formato": "P",
            "local": "Maringá - Brasil",
            "contato": "",
            "descricao": "Contratação PJ com possibilidade de altos ganhos. Ajuda de custo inicial e Cursos de atualização em produtos financeiros",
            "requisitos":
                [
                    "Experiência em vendas",
                    "CNH B e veículo próprio + Disponibilidade para viagens",
                    "Foco em resultados e expansão da empresal"
                ]
        },
        {
            "dataHora": "10/1/2024 15:39:51",
            "titulo": "Especialista em Sistemas I (Desenvolvedor de Sistema/Lider) ",
            "empresa": "Claro",
            "aplicacao": "https://lnkd.in/ggyjdu3s",
            "abrangencia": "N",
            "formato": "P",
            "local": "São Paulo - Brasil",
            "contato": "",
            "descricao": "Buscamos alguém que: Pensa e age a partir das perspectivas dos clientes. Demonstra interesse e curiosidade de conhecer os clientes, seus comportamentos e preferências para atender e superar suas expectativas; Demonstra compromisso permanente em aprender, ensinar e desenvolver, contribuindo para um ambiente descontraído, respeitoso e colaborativo, incentivando a diversidade; É flexível para se desprender de paradigmas e modelos mentais existentes. Busca soluções inovadoras e sustentáveis, para criar vantagens competitivas para o negócio, equilibrando os interesses econômicos, ambientais e sociais. ",
            "requisitos": []
        },
        {
            "dataHora": "10/1/2024 15:40:36",
            "titulo": "Analista Projetos Estratégicos Sr. (Consultor SAP SD / s/4 hanna)",
            "empresa": "Claro",
            "aplicacao": "https://claro.gupy.io/jobs/7326441",
            "abrangencia": "N",
            "formato": "P",
            "local": "São Paulo - Brasil",
            "contato": "",
            "descricao": "",
            "requisitos":
                [
                    "Grande vivência em projetos SAP",
                    "Formação completa em Ciências da Computação, Sistemas de Informação, Contábeis ou similares",
                    "Parametrização de novos cenários no SD",
                    "Parametrização de estrutura organizacional/centro",
                    "Conhecer processo de fretes",
                    "Conhecer Nota fiscal eletrônica (entrada e saída) / SAP GRC",
                    "Experiência com SAP",
                    "Formação Acadêmica: Ciências da Computação, Sistemas de Informação, Ciências Contábeis, Economia ou correlatas",
                    "Inglês técnico",
                    "Experiência nos módulos GL/AP/AR",
                    "Especificações funcionais para desenvolvimentos ABAP",
                    "Desejável conhecimento em SAP RE, BPC/BW, TRM e CM (Cash Management)",
                    "Conhecimento ou vivência em metodologias ágeis"
                ]
        },
        {
            "dataHora": "10/1/2024 15:41:20",
            "titulo": "Especialista em Segurança da Informação II ",
            "empresa": "Claro",
            "aplicacao": "https://claro.gupy.io/jobs/7868627",
            "abrangencia": "N",
            "formato": "P",
            "local": "São Paulo - Brasil",
            "contato": "",
            "descricao": "",
            "requisitos":
                [
                    "Formação superior em Ciência da Computação, Engenharia da Computação, Sistemas de Informação ou áreas relacionadas",
                    "Experiência comprovada em engenharia de segurança da informação ou em funções semelhantes",
                    "Conhecimento profundo de redes, protocolos de comunicação e sistemas operacionais Windows, Linux",
                    "Conhecimento avançado de funcionamento e implementação de ferramentas e plataformas de segurança, tais como: - Security Information and Event Management - SIEM - Firewalls de Rede - Web Application Firewall - WAF - Zero Trust Network Access - ZTNA",
                    "Detecção e Prevenção de Intrusão - IDS/IPS",
                    "Ferramentas de Gestão de Identidade e Acesso IAM, IGA",
                    "Prevenção de Vazamento de Dados DLP - Monitoração de Acesso à Cloud - CASB - Endpoint Protection EDR / XDR / MDR",
                    "Microssegmentação de Rede - Proteção de Application Program Interface API",
                    "Capacidade de realizar análises de segurança e identificar melhorias necessárias",
                    "Experiência em ambientes de nuvem AWS, Azure, Google Cloud",
                    "Conhecimento em DevSecOps e automação de segurança",
                    "Experiência com conformidade e regulamentações de segurança, como GDPR, LGPD, PCI-DSS",
                    "É diferencial: Conhecimento no mercado de Telecom",
                    "Certificações relevantes como CISSP, CompTIA Security+",
                    "Pós-graduação ou MBA será um diferencial"
                ]
        },
        {
            "dataHora": "10/2/2024 13:19:28",
            "titulo": "APPLICATION SECURITY EXPERT (PORTO / HYBRID) ",
            "empresa": "iTRecruiter",
            "aplicacao": "https://itrecruiter.jobs.recrut.ai/job/GKVA34",
            "abrangencia": "I",
            "formato": "H",
            "local": "Porto - Portugal",
            "contato": "",
            "descricao": "",
            "requisitos": [
                "Mecanismos de autenticação/SSO: OAUth2, SAMLv2, Kerberos, 2FA",
                "Mecanismos de criptografia: HTTPS, VPN",
                "Segurança de APIs, para API REST e API Gateway",
                "OWASP TOP10, ISO27002, ISO27005"
            ]
        },
        {
            "dataHora": "10/2/2024 13:20:45",
            "titulo": "ARQUITETO DE INTEGRAÇÃO SENIOR",
            "empresa": "iTRecruiter",
            "aplicacao": "https://itrecruiter.jobs.recrut.ai/job/JRUH41",
            "abrangencia": "I",
            "formato": "H",
            "local": "Lisboa - Portugal",
            "contato": "",
            "descricao": "Empresa portuguesa contrata para trabalho híbrido. Só serão aceitas inscrições de quem já mora em Portugal ou está a caminho. Inglês desejável mas não rejeitamos opções sem Inglês para já",
            "requisitos":
                [
                    "PORTUGUÊS (C1/C2) E INGLÊS (B1+)",
                    "Sénior (arquitecto ou próximo) de Integração/ Webmethods",
                    "+ 5 anos de experiência em desenvolvimento na área de Integração (com webmethods e/ ou outra ferramenta ESB)",
                    "Análise de software existente para determinar áreas de melhoria contínua",
                    "Participação em iniciativas de análise funcional e técnica",
                    "Assessoria técnica e liderança",
                    "Excelente capacidade analítica e de resolução de problemas",
                    "Capacidade de priorizar o trabalho e cumprir prazos"
                ]
        },
        {
            "dataHora": "10/2/2024 13:21:58",
            "titulo": "PERFORMANCE JAVA ENGINEER (REMOTE)",
            "empresa": "iTRecruiter",
            "aplicacao": "https://itrecruiter.jobs.recrut.ai/job/YQI5MI",
            "abrangencia": "I",
            "formato": "R",
            "local": "",
            "contato": "",
            "descricao": "Remoto com intenção de ir para Portugal",
            "requisitos":
                [
                    "Mínimo 4 anos de experiência em testes de performance e experiência em JAVA (obrigatório)",
                    "Experiência em resolução de problemas e análise das causas raiz de problemas de perfomance",
                    "Experiência em CI/CD",
                    "Jmeter e servidores Linux"
                ]
        },
        {
            "dataHora": "10/2/2024 13:22:49",
            "titulo": "SALESFORCE COMMERCE CLOUD DEVELOPER SENIOR (REMOTE)",
            "empresa": "iTRecruiter",
            "aplicacao": "https://itrecruiter.jobs.recrut.ai/job/DUW3U9",
            "abrangencia": "I",
            "formato": "R",
            "local": "",
            "contato": "",
            "descricao": "Please send only CV in English. A Fullstack that has leadership characteristics and with proven experience in:",
            "requisitos":
                [
                    "FLUENT PORTUGUESE AND ENGLISH (B2)",
                    "Salesforce Commerce Cloud Developer",
                    "Minimum 5 years of experience as a Fullstack",
                    "Leadership experience in development teams with Agile methodologies",
                    "Advanced Back and Frontend View"
                ]
        },
        {
            "dataHora": "10/2/2024 13:24:21",
            "titulo": "Engenharia Elétrica",
            "empresa": "IMAE",
            "aplicacao": "rh@imae.com.br",
            "abrangencia": "N",
            "formato": "P",
            "local": "Parque Tecnológico Univap",
            "contato": "",
            "descricao": "Cursar o 7º ou 8º de Engenharia Mecânica. Bom desempenho (ainda que não tenha concluído) nas disciplinas de circuito elétricos, geração, transmissão e distribuição de energia elétrica e eficiência energética e qualidade de energia.",
            "requisitos":
                [
                    "Leitura de texto técnico em inglês (com boa compreensão)"
                ]
        },
        {
            "dataHora": "10/2/2024 15:38:28",
            "titulo": " Analista Fiscal",
            "empresa": "Connectabil",
            "aplicacao": "https://www.connectabil.com/",
            "abrangencia": "N",
            "formato": "P",
            "local": "São Paulo - Brasil",
            "contato": "",
            "descricao": "",
            "requisitos":
                [
                    "Formação superior em Ciências Contábeis, Direito e/ou áreas correlatas",
                    "Vivência com a entrega de obrigações acessórias e apuração de impostos",
                    "Experiência com fechamento Fiscal",
                    "Conhecimento da área Contábil"
                ]
        },
        {
            "dataHora": "10/2/2024 15:39:45",
            "titulo": " Assistente Legal",
            "empresa": "Connectabil",
            "aplicacao": "http://connectabil.com",
            "abrangencia": "N",
            "formato": "P",
            "local": "Novo Hamburgo - Brasil",
            "contato": "",
            "descricao": "Experiência no setor de contabilidade",
            "requisitos": []
        }
    ];

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
                                ${item.local ? `<span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>${item.local}</span>` : ''}
                                ${formato(item)}`;
        return jobCard;
    }

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
        const abrangencia = $('#abrangencia').val();
        const formato = $('#formato').val();

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

        if (abrangencia) {
            filteredItems = filteredItems.filter(f => f.abrangencia === abrangencia);
        }

        if (formato) {
            filteredItems = filteredItems.filter(f => f.formato === formato);
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

                    const cadastro = emailRegex.test(item.aplicacao) ? `Envie email para <span class="text-primary" style="cursor: default; text-decoration: underline;">${item.aplicacao}</span>` :
                        urlRegex.test(item.aplicacao) ? `Para acessar o site de aplicação <a href="${item.aplicacao}" target="_blank" class="text-primary">clique aqui</a>` :
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

    let timeout;
    $('#abrangencia, #formato').on('change', function () {
        createJobItemsWithDelay(true);
    });

    $('#filtro').on('input', function () {
        createJobItemsWithDelay(true);
    });

    var createJobItemsWithDelay = function () {
        clearTimeout(timeout);

        timeout = setTimeout(function () {
            createJobItems(true);
        }, 1400);
    }

    createJobItems();

    $(".filter-dropdown").click(function (event) {
        event.stopPropagation();
    });

    function updateDropdownText(tag, defaultText) {
        console.log(tag);
        const checkboxes = document.querySelectorAll(`.form-check-input.${tag}`);
        const selected = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const dropdownText = document.getElementById(`dropdownText${tag}`);
        dropdownText.textContent = selected.length > 0 ? selected.join(', ') : defaultText;
    }

    document.querySelectorAll('.form-check-input.cidade').forEach(checkbox => {
        checkbox.addEventListener('change', function () { updateDropdownText('cidade', 'Cidade - País') });
    });

    document.querySelectorAll('.form-check-input.formato').forEach(checkbox => {
        checkbox.addEventListener('change', function () { updateDropdownText('formato', 'Presencial, Híbrido, Remoto') });
    });

})(jQuery);

