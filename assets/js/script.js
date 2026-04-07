const formulario = document.querySelector("#meu-formulario");
const containerProjetos = document.querySelector(".projetos-container");

const meusProjetos = [
    {
        titulo: "Projeto 01 - Portfólio em HTML, CSS e JavaScript",
        descricao: "Este portfólio foi desenvolvido com HTML, CSS e JavaScript puro, com foco em estrutura, estilo e responsividade.",
        link: "https://github.com/pedroalex/portfolio",
        categoria: "Frontend"
    },
    {
        titulo: "Projeto 02 - Portfólio com React",
        descricao: "Uma evolução deste mesmo projeto, mantendo a base visual e adicionando React para componentização e melhor organização da interface.",
        link: "https://github.com/pedroalex/portfolio-react",
        categoria: "React"
    }
];

function validarFormulario(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const msg = document.querySelector("#msg").value.trim();

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    formulario.reset();
}

function renderizarProjetos() {
    containerProjetos.innerHTML = "";

    meusProjetos.forEach((projeto) => {
        const cardHTML = `
            <article class="card-projeto">
                <p class="eyebrow">${projeto.categoria}</p>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank" rel="noreferrer">Ver no GitHub</a>
            </article>
        `;

        containerProjetos.innerHTML += cardHTML;
    });
}

formulario.addEventListener("submit", validarFormulario);
renderizarProjetos();
