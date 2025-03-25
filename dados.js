
let dados = [
    {   nome : "RedBull",
        descricao : "As camisas da Red Bull Racing de 2023 são feitas principalmente de poliéster, garantindo leveza e respirabilidade.Alguns modelos incluem algodão para maior conforto e elastano para elasticidade. Além disso, podem contar com tecnologias como dryCELL, para absorção de umidade, e miDori® bioWick, um acabamento biodegradável.",
        link : "https://www.extremedesigns.com.br/camiseta-equipe-red-bull-f1-2024?sku=CRBE24-Preto-m-dry&utm_source=Site&utm_medium=GoogleShopping&utm_campaign=IntegracaoGoogle&srsltid=AfmBOopzlggAe5klOVKcNpeHeeqHMDR4CZnPsrFY_t6uI6vQBeXS8_ykS2I",
        img:""
    },
    {
        nome : "Ferrari",
        descricao : "As camisas da Ferrari de Fórmula 1 são feitas de poliéster leve e respirável, algodão macio e tecidos técnicos como dry-fit e proteção UV. Priorizam conforto, durabilidade e desempenho, atendendo tanto pilotos quanto fãs.",
        link : "https://shopee.com.br/product/1197137094/19597993066?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDSXh2Q0JJaXUzckxTeUZlTThYVGlNRkhvVmRvSE1oNmIzTnNrK1FZRzhOVThzS0dKaG53ZkV6MnlwTG5RQWt0SXVBSGRXaGNHNU9RUUwxd2hjNXFFcTRaRXBJQU90Vy9Wbjg4eFpmTmlTUmF3PT0",
        img: "",
    },
    {
        nome : "Mercedes",
        descricao : "As camisas da Mercedes-AMG Petronas Fórmula 1 combinam estilo, conforto e desempenho, refletindo a sofisticação da equipe. Feitas principalmente de poliéster, são leves, duráveis e respiráveis, com tecnologias como DryCell para controle da umidade. O design inclui as cores da equipe, logotipos da Mercedes-Benz e patrocinadores. Fabricadas pela Puma com materiais de alta qualidade, garantem durabilidade e conforto, sendo populares entre os fãs de Fórmula 1.",
        link : "https://produto.mercadolivre.com.br/MLB-3955293079-camiseta-f1-mercedes-team-proteco-uv-treino-ou-casual-_JM?matt_tool=45821161&matt_word=&matt_source=google&matt_campaign_id=22090354238&matt_ad_group_id=173090545836&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882728411&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=661799796&matt_product_id=MLB3955293079&matt_product_partition_id=2389560417810&matt_target_id=pla-2389560417810&cq_src=google_ads&cq_cmp=22090354238&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gclid=Cj0KCQjwqIm_BhDnARIsAKBYcmtmAajLCgdBGmn6PclF76j9lsnVa71ccR7ZgGwsaFpmauQCqoO9X8gaAhtsEALw_wcB",
        img: ""
    },
    {
        nome : "Mclaren",
        descricao : "As camisas da McLaren F1 unem estilo, tecnologia e conforto. Feitas de poliéster de alta performance e tecidos técnicos, garantem respirabilidade e proteção UV. Modelos casuais em algodão premium oferecem maciez. O design destaca o laranja papaia, logotipos e um ajuste ergonômico para máximo desempenho e comodidade.",
        link : "https://www.extremedesigns.com.br/camiseta-equipe-mclaren-f1-2025?sku=CEML250225-Laranja-g4-algodao&utm_source=Site&utm_medium=GoogleShopping&utm_campaign=IntegracaoGoogle&srsltid=AfmBOord5c4teghJUPt0xwN005z6IT3XwGKcaI5DHcAxb-OpI-jYNaWk0Nw",
        img: "",
    },
    {
        nome : "Williams",
        descricao : "As camisas da Williams Racing na Fórmula 1 são feitas principalmente de poliéster, proporcionando leveza, respirabilidade e rápida evaporação da umidade. Algumas peças casuais incluem algodão para maior conforto. Tecnologias como dry fit ajudam no controle da umidade e proteção UV. As estampas utilizam a tecnologia DTF, garantindo cores vivas e durabilidade.",
        link : "https://www.extremedesigns.com.br/camiseta-equipe-williams-f1-2025?sku=CEW250225-Branco-g3-algodao&utm_source=Site&utm_medium=GoogleShopping&utm_campaign=IntegracaoGoogle&srsltid=AfmBOord6WMlmZ5ggSN08HKMIT-bz1DtzJgv5h9nOsnQloLbp0m5LjrNayQ",
        img: "",
    },
    {
        nome : "Aston Martin",
        descricao : "As camisas da Aston Martin F1 combinam poliéster leve, tecidos técnicos com proteção UV e algodão premium para conforto e desempenho. O design destaca o verde emblemático da equipe, logotipos e um ajuste preciso para pilotos e fãs.",
        link : "https://www.extremedesigns.com.br/camiseta-equipe-aston-martin-f1-2025?sku=CEAM250225-Branco-p-dry&utm_source=Site&utm_medium=GoogleShopping&utm_campaign=IntegracaoGoogle&srsltid=AfmBOoqRkVK0WaCaLhmLJcr5Xg-RE9P9oql9R4pQ6sm06IBy15bTTdxvjAA",
        img: "",
    },
    {
        nome : "Kick Sauber",
        descricao : "As camisas da Kick Sauber F1 combinam poliéster leve, tecidos técnicos com proteção UV e algodão para conforto e desempenho. O design destaca as cores da equipe, logotipos e um ajuste confortável para pilotos e fãs.",
        link : "https://www.extremedesigns.com.br/camiseta-equipe-sauber-f1-2025?sku=CES250225-Preto-g1&utm_source=Site&utm_medium=GoogleShopping&utm_campaign=IntegracaoGoogle&srsltid=AfmBOooo_gbyxG2o6Rf3ABtX7zo8e9-4IwUoLkTofuDEtvmiLgLndxCSzDQ",
        img: "",
    },
    {
        nome : "Haas",
        descricao : "As camisas da Haas F1 combinam poliéster leve, tecidos técnicos e proteção UV para conforto e desempenho. O design inclui cores da equipe, logotipos e um ajuste confortável para pilotos e fãs.",
        link : "https://www.extremedesigns.com.br/camiseta-f1-equipe-haas-2023?sku=CHAAS23-Branco-m&utm_source=Site&utm_medium=GoogleShopping&utm_campaign=IntegracaoGoogle&srsltid=AfmBOoqGUfeEVaYG3J8TreybDZR8y3M6_2J7u2rsOGZz0ji3syBIwcFII2g",
        img: "",
    },
    {
        nome : "Alpine",
        descricao : "As camisas da Alpine F1 combinam poliéster leve, tecidos técnicos com proteção UV e algodão para conforto e desempenho. O design destaca as cores da equipe, logotipos e um ajuste confortável para pilotos e fãs.",
        link : "https://www.extremedesigns.com.br/camiseta-f1-alpine-equipe-2023?sku=CAE23-Azul-p&utm_source=Site&utm_medium=GoogleShopping&utm_campaign=IntegracaoGoogle&srsltid=AfmBOor6T4xod749qGg7pRO__g8HQeqdx6VeLaKSAcktfilVjOcMSjh_A20",
        img: "",
    },
    {
        nome : "Racing Bulls",
        descricao : "As camisas da Racing Bulls combinam poliéster leve, tecidos técnicos e proteção UV para oferecer conforto e desempenho. O design inclui cores da equipe, logotipos e um ajuste confortável para pilotos e fãs.",
        link : "https://shopee.com.br/product/966006457/13698416602?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMXllc3YrRWJkU3daQTVkMHVrT1VIRzNocm5TUVZaRWVVbVRRZjBxVERZYjdXTkpYK2V0SDV6RXJxZ0krMnJhWG1JalN0WlR6MStZZFpMN2ZUWW9vVXFYWGNvK2pXUm9JYjJkdnJ4S0J6djNBPT0",
        img: "",
    }
];
