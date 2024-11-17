(function ($) {
    /*
        {
           "titulo":"",
           "empresa":"",
           "aplicacao":"",
           "formato":"P",
           "local":"",
           "descricao":"",
           "requisitos": []
        }
    */
    "use strict";
    $.vagas = [
        {
            "titulo": "Assistente Administrativo",
            "empresa": "Muller Brasil",
            "aplicacao": "oportunidades@mullerbrasil.com",
            "formato": "P",
            "cidade": "Gravataí",
            "pais": "Brasil",
            "descricao": "Segunda a sexta das 8:00 ás 18:00 - Remuneração compatível com o mercado - Benefícios",
            "requisitos":
                [
                    "Experiência com uso de e-mail, word e excel",
                    "Curso técnico ou superior sera um diferencial"
                ]
        },
        {
            "titulo": "Assistente de ARH",
            "empresa": "Grupo Incopostes",
            "aplicacao": "arh.sc@incopostes.com.br",
            "formato": "P",
            "cidade": "Campo Alegre",
            "pais": "Brasil",
            "descricao": "Requisitos: Preferencialmente graduados em Administração, Psicologia ou Contabilidade.",
            "requisitos": ["Apoiar os processos de admissão, integração e desligamento", "Elaboração e preenchimento de planilhas de controles", "Controle e acompanhamento dos programs de saúde e segurança do trabalho", "Suporte as rotinas do departamento pessoal."]
        },
        {
            "titulo": "Android Developer",
            "empresa": "Snaptech Solutions",
            "aplicacao": "leticia.almeida@snaptechsolutions.io",
            "formato": "R",
            "cidade": "Portugal",
            "pais": "Portugal",
            "descricao": "Residir em Portugal - Diferenciais: Experiência com Test-Driven Development (TDD), fluência em Inglês",
            "requisitos": ["3+ anos de experiencia com Kotlin para desenvolvimento Android", "Familiaridade com arquitetura MVVM e desenvolvimento de UI"]
        },
        {
            "titulo": "iOS Developer",
            "empresa": "Snaptech Solutions",
            "aplicacao": "leticia.almeida@snaptechsolutions.io",
            "formato": "R",
            "cidade": "Portugal",
            "pais": "Portugal",
            "descricao": "Residir em Portugal - Forte foco na qualidade e atenção aos detalhes",
            "requisitos": ["3+ anos de experiência em Swift para desenvolvimento iOS", "Proficiência em arquitetura MVVM e testes de UI", "Inglês avançado para interações com executivos de nível C"]
        },
        {
            "titulo": ".NET Developer",
            "empresa": "Snaptech Solutions",
            "aplicacao": "leticia.almeida@snaptechsolutions.io",
            "formato": "H",
            "cidade": "Portugal",
            "pais": "Portugal",
            "descricao": "Residir em Portugal - Habilidades de Resolução de problemas - Diferenciais: Metodologia Ágil, fluência em Inglês",
            "requisitos": ["3+ anos de experiencia com C#, ASP.NET, e/ou .NET Core", "Conhecimentos com React ou Angular"]
        },
        {
            "titulo": "Java Developer",
            "empresa": "Snaptech Solutions",
            "aplicacao": "leticia.almeida@snaptechsolutions.io",
            "formato": "H",
            "cidade": "Portugal",
            "pais": "Portugal",
            "descricao": "Residir em Portugal - Habilidades de Resolução de problemas - Diferenciais: CI/CD, Metodologia Ágil, fluência em Inglês",
            "requisitos": ["3+ anos de experiencia com Java e Spring Framework.,"]
        },
        {
            "titulo": "Especialista de Projetos",
            "empresa": "bpbioenergy",
            "aplicacao": "www.vagas.com/v2693258",
            "formato": "P",
            "cidade": "Santa Juliana",
            "pais": "Brasil",
            "descricao": "Experiência com gestão de projetos em áreas industriais/mineração/ óleo e gás - disponibilidade para residir em Uberaba-MG;",
            "requisitos": ["Ensino Superior Completo (Adm, Eng da produção, mecânica, Elétrica, Quimica e áreas afins)", "Inglês a partir do Intermediário"]
        },
        {
            "titulo": "Vaga para SDR",
            "empresa": "Adapta",
            "aplicacao": "+55 11 91027-4695",
            "formato": "H",
            "cidade": "São Paulo",
            "pais": "Brasil",
            "descricao": "Remuneração: R$ 2.800,00 + variável - Segunda a sexta, das 09h às 18h - Vila Gomes Cardim, São Paulo/SP - 2 dias na empresa 3 home office - Contratação: Efetiva - Benefícios: Vale Transporte, Vale Refeição, Assistência Médica e Odontológica, Seguro de Vida, Auxílio Creche",
            "requisitos": ["Identificação de Oportunidades: Encontrar e qualificar leads promissores", "Construção de Relacionamentos: Ser a voz da Apdata no primeiro contato com os leads", "Qualificação de Leads: Analisar leads e identificar os melhores potenciais", "Agendamento de Reuniões: Organizar encontros entre leads e nossa equipe de vendas", "Manutenção do Pipeline: Garantir um fluxo constante de leads qualificados", "Uso de Ferramentas de Vendas: Dominar CRM e automação para agilizar o processo", "Análise de Desempenho: Monitorar métricas e sugerir melhorias", "Atendimento ao Cliente: Ser o primeiro ponto de contato e garantir uma experiência positiva", "Validação de Propostas: Conferir propostas de vendas para assegurar padrões da empresa", "Superior completo ou cursando (Administração, Marketing, Gestão Comercial ou áreas correlatas)", "Conhecimento no Pacote Office\nCurso de vendas (desejável)", "Experiência com produtos de tecnologia (SaaS, Cloud, sistemas etc. - desejável)"]
        },
        {
            "titulo": "Porteiro",
            "empresa": "Grupo Bravote",
            "aplicacao": "+55 11 93703-6620",
            "formato": "P",
            "cidade": "São Paulo",
            "pais": "Brasil",
            "descricao": "Necessário experiência na área e conhecimento básico em Informática - Ter conhecimento em reparos básicos em elétrica, hidráulica e limpeza - Escala 6x1 revezamento;",
            "requisitos": []
        },
        {
            "titulo": "ESTÁGIO DE ATENDIMENTO EM LOJA - CACHOEIRINHA/RS",
            "empresa": "Work Estágios",
            "aplicacao": "https://jobs.quickin.io/workestagios/jobs/66f1a2563128a80012211747",
            "formato": "P",
            "cidade": "Cachoeirinha",
            "pais": "Brasil",
            "descricao": "Segunda a sexta, 5 horas diarias, podendo alternar entre manhã e tarde - Ser comunicativo, Pró-ativo - Residir em Cachoeirinha - R$ 700 de bolsa - Auxilio no valor da passagem, se necessário.",
            "requisitos": ["Organização da loja e estoque", "Atendimento e recepção de clientes em loja", "Limpeza do ambiente de trabalho", "Estar cursando Ensino Medio no periodo da noite"]
        },
        {
            "titulo": "Estágio em Direito",
            "empresa": "Work Estágios",
            "aplicacao": "https://jobs.quickin.io/workestagios/jobs/66f6e6c0fee13f0013531834",
            "formato": "P",
            "cidade": "Gravataí",
            "pais": "Brasil",
            "descricao": "Segunda á sexta: 08:10 as 15:40 - 1:30 almoço - Atenção concentrada, iniciativa, comunicação, trabalho em equipe, flexibilidade - Residir em Gravataí, Cachoeirinha, Alvorada ou Viamão- RS - Bolsa R$ 1.100,00, Vale alimentação/refeição/Vale-transporte.",
            "requisitos": ["Contato com repartições publicas para solicitar e diligenciar documentos", "Elaboração de petições judiciais", "Elaboração de petições administrativas", "Contato com cliente", "Cursando a partir do 3º semestre de Direito", "Ter conhecimento Jurídico"]
        },
        {
            "titulo": "Advogado Closer",
            "empresa": "Confidencial",
            "aplicacao": "http://www.amgestaodetalentos.com.br",
            "formato": "P",
            "cidade": "Barueri",
            "pais": "Brasil",
            "descricao": "",
            "requisitos": ["Formação completa em Direito", "OAB ativo (será um diferencial)", "Afinidade com a área de atuação", "Perfil comercial;"]
        },
        {
            "titulo": "Recepcionista",
            "empresa": "Confidencial (Academia)",
            "aplicacao": "http://www.amgestaodetalentos.com.br",
            "formato": "P",
            "cidade": "Caxias do Sul",
            "pais": "Brasil",
            "descricao": "Habilidades de comunicação verbal e escrita - Disponibilidade de horários",
            "requisitos": ["Ensino Médio completo"]
        },
        {
            "titulo": "Orçamentista",
            "empresa": "Confidencial (uma fábrica de móveis)",
            "aplicacao": "http://www.amgestaodetalentos.com.br",
            "formato": "P",
            "cidade": "Caxias do Sul",
            "pais": "Brasil",
            "descricao": "",
            "requisitos": ["Experiência anterior na função", "Conhecimento em negociação de compra", "Ensino Superior completo ou cursando Adm, Logística e correlatas"]
        },
        {
            "titulo": "Auxiliar Administrativo JR",
            "empresa": "SWEDA Automação Comercial",
            "aplicacao": "rh1@sweda.com.br",
            "formato": "P",
            "cidade": "São Paulo",
            "pais": "Brasil",
            "descricao": "Disponibilidade para trabalhar ao sábados quando precisar - Residir próximo a Vila Mariana/SP",
            "requisitos": ["Ensino Médio Completo ou Cursando Adm, Gestão de Projetos e correlatas", "Experiência em atendimento ao cliente via telefone ou chat"]
        },
        {
            "titulo": "Especialista em Fibra",
            "empresa": "Alegria Telecom",
            "aplicacao": "https://alegriatelecom.gupy.io/jobs/7950169",
            "formato": "P",
            "cidade": "Rio de Janeiro",
            "pais": "Brasil",
            "descricao": "Visitas a Lojas na região do Rio de Janeiro (09 lojas) - Análise de Indicadores - Relatório - Acompanhamento de Vendas - Treinamento e Suporte - Salário Fixo + Comissionamento sem teto, Auxílio médico e Odontológico, Vale Refeição, Vale Alimentação, Programa de saúde e bem-estar: Gympass / Conexa / PsicologiaViva, Vale Transporte, Convênios com instituições de ensino.",
            "requisitos": ["Ensino médio completo", "Experiencia anterior com vendas (conhecimento em venda de fibra ótica ou telecomunicações será um diferencial)", "Disponibilidade para Viagens"]
        },
        {
            "titulo": "Coordenador de DP",
            "empresa": "PRP soluções",
            "aplicacao": "https://forms.gle/vrd8ULmgmMf9erJ4A",
            "formato": "P",
            "cidade": "Porto Alegre",
            "pais": "Brasil",
            "descricao": "COORDENADOR DP - Presencial: Porto Alegre, RS - Segunda à das 8h às 12h - 13h às 17h30min - Você está pronto para uma emocionante jornada na Area Contábil? Junte-se a uma empresa parceira da WakeUp que tem uma sólida trajetória de mais de uma década na prestação de serviços contábeis, financeiros, previdenciários, tributários, de recursos humanos e outsourcing, atendendo grandes empresas em todo o Brasil. Se você é um profissional talentoso e apaixonado pelas demandas de DP, esta vaga pode ser o seu próximo passo rumo ao sucesso - Como Coord. De DP você desempenhará um papel crucial na nossa equipe, promovendo um ambiente de trabalho positivo, garantindo a conformidade legal e otimizando a gestão de recursos humanos - Boa comunicação, trabalhar bem em equipe, construir pensamentos lógicos e críticos; ser inovador e criativo, ser ávido pelo aprendizado contínuo - Ter experiência em escritório contábil será um diferencial - Salário: A partir de R$ 4.000,00 - VR R$ 800,00 - Plano de saúde (sem custo para o funcionário) - Plano odontológico (sem custo para o funcionário) - VT - Seguro de Vida - Plano Previdenciário Complementar - Gympass",
            "requisitos": ["Supervisionar e executar os serviços de administração de pessoas", "Coordenar o departamento pessoal", "Estabelecer e acompanhar rotinas e processos da área, quais sejam: folha de pagamento, admissão, rescisão, gfip e outras conexas", "Prestar suporte e orientação para a equipe no desenvolvimento dos trabalhos", "Apurar folha de pagamento", "Entregar todas as obrigações trabalhistas e previdenciárias", "Supervisionar e executar os serviços de administração de pessoal, controlando e calculando folha de pagamento, recolhimento de tributos, admissões e rescisões contratuais e férias de funcionários", "Gerir a demanda e rotina do departamento pessoal", "Acompanhar os resultados e indicadores", "Elaborar relatórios e participar de reuniões", "Coordenar a realização de todas as solicitações das áreas, em conformidade com as leis trabalhistas, dentro dos prazos pré-estabelecidos a fim de atender as solicitações da empresa e contratos", "Graduado em Ciências Contábeis", "Excel avançado", "Conhecimento no Sistema Domínio"]
        },
        {
            "titulo": "Administrativo de Obras",
            "empresa": "Comdarpe Engenharia",
            "aplicacao": "rh@comdarpe.com.br",
            "formato": "P",
            "cidade": "Hortolândia",
            "pais": "Brasil",
            "descricao": "Disponibilidade de viajar é essencial",
            "requisitos": []
        },
        {
            "titulo": "Analista de RH",
            "empresa": "Comdarpe Engenharia",
            "aplicacao": "rh@comdarpe.com.br",
            "formato": "P",
            "cidade": "Embu das Artes",
            "pais": "Brasil",
            "descricao": "",
            "requisitos": []
        },
        {
            "titulo": "Virtual Assistant",
            "empresa": "Elevate Teams",
            "aplicacao": "https://www2.jobdiva.com/portal/?a=q7jdnwmfuhwg1b0e2u2vnmw2gstgyl0a9dj7tb39bzytr7vcefuh1cks3cydc0x7&compid=1#/jobs/22564255?jobtitle=*Elevate+Teams+-+Virtual+Assistant&utm_source=headhunter&utm_medium=fernanda&utm_campaign=br",
            "formato": "R",
            "cidade": "",
            "pais": "Brasil",
            "descricao": "Adicionar \"Fernanda Lara - Headhunter\" no campo \"referral\"",
            "requisitos": []
        }
    ];
})(jQuery);