const products = {
    "WZ-554": {
        nome: "Warzone Extreme",
        descricao: "Acesso exclusivo Warzone — instale e aproveite.",
        link: "https://www.mediafire.com/file/v81m3092ifkpcub/Warzone.rar/file",
        senha: "1",
        video: "", 
        status: "Seguro",
        ultimaAtualizacao: "01/10/2025"
    },
        "FF-512": {
        nome: "FreeFire Extreme",
        descricao: "Acesso exclusivo Extreme — instale e aproveite.",
        link: "https://www.mediafire.com/file/5bftmfsjvql70le/FreeFire_Extreme.rar/file",
        senha: "1",
        video: "",
        status: "Atualizando",
        ultimaAtualizacao: "01/10/2025"
    },
    "FF-577": {
        nome: "FreeFire Premium",
        descricao: "Acesso exclusivo Premium — instale e aproveite.",
        link: "https://www.mediafire.com/file/o8bmoibuptpnf34/FreeFire_Premium.rar/file",
        senha: "1",
        video: "",
        status: "Atualizando",
        ultimaAtualizacao: "01/10/2025"
    },
        "FF-771": {
        nome: "FreeFire Comum",
        descricao: "Acesso exclusivo Comum — instale e aproveite.",
        link: "https://www.mediafire.com/file/92vn6zzt7ke6g1j/FreeFire_Comum.rar/filee",
        senha: "1",
        video: "",
        status: "Atualizando",
        ultimaAtualizacao: "01/10/2025"
            },
        "FF-504": {
        nome: "FreeFire Legit",
        descricao: "Acesso exclusivo Legit — instale e aproveite.",
        link: "https://www.mediafire.com/file/rnzk057ul2n3cjh/FreeFire_Legit.rar/file",
        senha: "1",
        video: "",
        status: "Atualizando",
        ultimaAtualizacao: "01/10/2025"
    },
        "FF-770": {
        nome: "FreeFire Internal",
        descricao: "Acesso exclusivo Internal — instale e aproveite.",
        link: "https://www.mediafire.com/file/h72ukmjcv2d17qm/FreeFire+Internal+V1.rar/file",
        senha: "1",
        video: "",
        status: "Seguro",
        ultimaAtualizacao: "01/10/2025"
            },
        "FF-400": {
        nome: "FreeFire Supreme",
        descricao: "Acesso exclusivo Supreme — instale e aproveite.",
        link: "https://www.mediafire.com/file/3jhtchvdezw0kea/FreeFire+Supreme.rar/file",
        senha: "1",
        video: "",
        status: "Seguro",
        ultimaAtualizacao: "01/10/2025"
                    },
        "FF-354": {
        nome: "FreeFire Bypass Mobile",
        descricao: "Acesso exclusivo Bypass Mobile — instale e aproveite.",
        link: "https://www.mediafire.com/file/ao97dkorjfgnyta/BypassMobile.rar/file",
        senha: "1",
        video: "",
        status: "Seguro",
        ultimaAtualizacao: "01/10/2025"
                            },
        "VA-324": {
        nome: "Valorant AimColor",
        descricao: "Acesso exclusivo AimColor — instale e aproveite.",
        link: "https://www.mediafire.com/file/hd9t7tkavvrnavb/Aim.rar/file",
        senha: "1",
        video: "",
        status: "Seguro",
        ultimaAtualizacao: "01/10/2025"
         },
        "VA-304": {
        nome: "Valorant Spoofer",
        descricao: "Acesso exclusivo Spoofer — instale e aproveite.",
        link: "https://www.mediafire.com/file/ag2esf4zihsjvvn/Spoof.rar/file",
        senha: "1",
        video: "",
        status: "Seguro",
        ultimaAtualizacao: "01/10/2025"
         },
        "OT-304": {
        nome: "Otimização",
        descricao: "Acesso exclusivo Otimização — instale e aproveite.",
        link: "https://www.mediafire.com/file/sm7jhuavvfpimqc/Optimizer.rar/file",
        senha: "1",
        video: "",
        status: "Seguro",
        ultimaAtualizacao: "01/10/2025"
    }
};

const recommendedItems = {
    "Emuladores": [
        { nome: "BlueStacks 5.22 (Tela Parada)", link: "https://www.mediafire.com/file/ctsfv4bxteaixv2/BlueStacks+5.22.51.rar/file", descricao: "Versão mais usada para estabilidade e FPS." },
        { nome: "MSI App Player 5.12 (Normal)", link: "https://www.mediafire.com/file/b1b6qhwvia7ygj9/Msi+5.12.120.6303.exe/file", descricao: "Recomendado para PCs de baixo desempenho." }
    ],
    "FreeFire": [
        { nome: "FreeFire MAX", link: "https://www.mediafire.com/file/4p40m6mkzoppuj0/FreeFire+MAX.rar/file", descricao: "Versão para telas paradas." },
        { nome: "FreeFire V7A (APK)", link: "https://www.mediafire.com/file/2ntvkbcniv99z3u/Free+Fire+V7A.rar/file", descricao: "Versão oficial mais recente." }
    ],
    "Drivers e Ferramentas": [
        { nome: "Microsoft DirectX", link: "https://www.mediafire.com/file/2lkw2z39quj9e8x/Microsoft+DirectX.rar/file", descricao: "Pacotes essenciais para rodar jogos e software." },
        { nome: "Microsoft Visual C++", link: "https://www.mediafire.com/file/pgwkbwv17cln9br/Microsoft+Visual+C++.rar/file", descricao: "Pacotes essenciais para rodar jogos e software." },
        { nome: "dControl (Senha: sordum)", link: "https://drive.usercontent.google.com/download?id=1jxmKjN820qP_cLZLgbeBi-aP5DUbROle&export=download&authuser=0", descricao: "Desativador de Windows Defender" }
    ]
};


const customSelect = document.getElementById('customSelect');
const trigger = document.getElementById('trigger');
const selectedTextEl = document.getElementById('selectedText');
const dropdown = document.getElementById('dropdown');
const optionsList = document.getElementById('optionsList');
const enterBtn = document.getElementById('enterBtn');
const loginScreen = document.getElementById('login-screen');
const contentScreen = document.getElementById('content-screen');
const logoutBtn = document.getElementById('logoutBtn');
const modal = document.getElementById('tutorialModal');
const closeTutorial = document.getElementById('closeTutorial');
const tutorialVideo = document.getElementById('tutorialVideo');
const notifyContainer = document.getElementById('notifyContainer');
const modalSenhaEl = document.getElementById('modalSenha'); 
const recommendedBtn = document.getElementById('recommendedBtn'); 

let selectedCode = "";        
let openState = false;
let hoverIndex = -1;          
let optionElements = [];

function buildOptions(){
    optionElements = [];
    optionsList.innerHTML = "";
    for(const code in products){
        const li = document.createElement('li');
        li.className = 'custom-option';
        li.setAttribute('role','option');
        li.setAttribute('data-value', code);
        li.tabIndex = -1;
        li.innerText = `${products[code].nome} (${code})`;
        
        li.addEventListener('click', () => {
            selectValue(code);
            closeDropdown();
        });
        
        li.addEventListener('mousemove', () => {
            clearHover();
            li.classList.add('active');
            hoverIndex = optionElements.indexOf(li);
        });
        
        optionElements.push(li);
        optionsList.appendChild(li);
    }
}

/** Abre o dropdown. */
function openDropdown(){
    customSelect.classList.add('open');
    customSelect.setAttribute('aria-expanded','true');
    dropdown.style.display = 'block';
    openState = true;
    hoverIndex = selectedCode ? optionElements.findIndex(el => el.dataset.value === selectedCode) : 0;
    setHover(hoverIndex);
    setTimeout(()=> dropdown.scrollTop = optionElements[hoverIndex] ? optionElements[hoverIndex].offsetTop - 12 : 0, 0);
}

function closeDropdown(){
    customSelect.classList.remove('open');
    customSelect.setAttribute('aria-expanded','false');
    openState = false;
    clearHover();
    setTimeout(()=> dropdown.style.display = 'none', 180);
}

function toggleDropdown(){
    if(openState) closeDropdown(); else openDropdown();
}

function clearHover(){
    optionElements.forEach(el => el.classList.remove('active'));
    hoverIndex = -1;
}

function setHover(index){
    if(index < 0 || index >= optionElements.length) return;
    clearHover();
    optionElements[index].classList.add('active');
    hoverIndex = index;
    const el = optionElements[index];
    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;
    if(top < dropdown.scrollTop) dropdown.scrollTop = top - 8;
    if(bottom > dropdown.scrollTop + dropdown.clientHeight) dropdown.scrollTop = bottom - dropdown.clientHeight + 8;
}

function selectValue(code){
    selectedCode = code;
    const prod = products[code];
    selectedTextEl.textContent = prod ? `${prod.nome} (${code})` : 'Selecionar';

    enterBtn.setAttribute('data-product-code', code); 

    optionElements.forEach(el => {
        el.classList.toggle('selected', el.dataset.value === code);
    });
}

trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
});

customSelect.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowDown'){
        e.preventDefault();
        if(!openState) openDropdown();
        setHover((hoverIndex + 1 + optionElements.length) % optionElements.length);
    } else if(e.key === 'ArrowUp'){
        e.preventDefault();
        if(!openState) openDropdown();
        setHover((hoverIndex - 1 + optionElements.length) % optionElements.length);
    } else if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        if(!openState){
            openDropdown();
        } else {
            const el = optionElements[hoverIndex];
            if(el) { selectValue(el.dataset.value); closeDropdown(); }
        }
    } else if(e.key === 'Escape'){
        if(openState) { e.preventDefault(); closeDropdown(); }
    }
});

document.addEventListener('click', (e) => {
    if(!customSelect.contains(e.target)) closeDropdown();
});

trigger.addEventListener('focus', () => trigger.classList.add('focus'));
trigger.addEventListener('blur', () => trigger.classList.remove('focus'));

function statusBadge(status) {
    const statusLower = status.toLowerCase();
    let icon = '';
    const map = { 
        "seguro": "status-seguro", 
        "atualizando": "status-atualizando", 
        "em risco": "status-em-risco" 
    };

    if (statusLower === 'seguro') {
        icon = '<i class="fa-solid fa-shield-halved"></i>';
    } else if (statusLower === 'atualizando') {
        icon = '<i class="fa-solid fa-hourglass-half"></i>';
    } else if (statusLower === 'em risco') {
        icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
    }
    
    const cls = map[statusLower] || "";
    return `<span class="status-badge ${cls}">${icon}${status}</span>`;
}

function showProduct(produto) {
    loginScreen.style.display = 'none';
    contentScreen.style.display = 'block';
    logoutBtn.classList.add('show');

    const updatesPanel = document.getElementById("updateFloat");
    if (updatesPanel) updatesPanel.style.display = "none";

    let downloadButtonClass = "btn";
    let downloadButtonText = '<i class="fa-solid fa-download" style="margin-right:6px;"></i> ⬇ Baixar Produto';
    let riskWarning = '';
    
    const statusLower = produto.status.toLowerCase();


    if (statusLower === 'em risco') {
        downloadButtonClass += " btn-risk"; 
        downloadButtonText = '<i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> Baixar (Em Risco)';
        riskWarning = '<p class="risk-notice">⚠️ **ALERTA DE RISCO:** Este produto está em período de instabilidade. Use por sua conta e risco.</p>';
        showNotify(`ATENÇÃO: ${produto.nome} está em risco!`, "error");
    } else if (statusLower === 'atualizando') {
        downloadButtonText = '<i class="fa-solid fa-wrench" style="margin-right:6px;"></i> Baixar (Em Atualização)';
        showNotify(`Nota: ${produto.nome} está em fase de atualização.`, "warning", 5000);
    } else {
        showNotify(`Bem-vindo ao Download do ${produto.nome}`, "success");
    }
    
    let buttonsHTML = `
        <div class="two-btns">
            <a class="${downloadButtonClass}" href="${produto.link}" target="_blank">${downloadButtonText}</a>
            <button class="btn outline" id="openTutorial"><i class="fa-solid fa-book" style="margin-right:6px;"></i> 📘 Ver Tutorial</button>
        </div>
    `;

    contentScreen.innerHTML = `
        <h2>${produto.nome}</h2>
        ${riskWarning}
        <p>${produto.descricao}</p>
        <div class="info-line"><span><strong>Status do produto:</strong></span>${statusBadge(produto.status)}</div>
        <div class="info-line"><span><strong>Última atualização:</strong></span><span>${produto.ultimaAtualizacao}</span></div>
        <div class="info-line"><span><strong>Senha do arquivo:</strong></span><span>${produto.senha}</span></div>
        ${buttonsHTML}
    `;

    const openTutorialBtn = document.getElementById('openTutorial');
    if (openTutorialBtn) {
        openTutorialBtn.addEventListener('click', () => {
            tutorialVideo.src = produto.video; 
            modalSenhaEl.textContent = produto.senha; 
            modal.style.display = 'flex';
            modal.setAttribute('aria-hidden','false');
        });
    }
}

function showRecommendedScreen() {
    loginScreen.style.display = 'none';
    contentScreen.style.display = 'block';
    logoutBtn.classList.add('show');

    const updatesPanel = document.getElementById("updateFloat");
    if (updatesPanel) updatesPanel.style.display = "none";
    
    showNotify("Bem-vindo à Central de Drivers e FreeFire Recomendados.", "success");

    let itemsHTML = '';

    for (const category in recommendedItems) {
        itemsHTML += `
            <h3 class="category-title"><i class="fa-solid fa-list-check" style="margin-right: 8px;"></i>${category}</h3>
            <div class="category-grid">
        `;
        
        recommendedItems[category].forEach(item => {
            itemsHTML += `
                <div class="recommended-item">
                    <p class="item-name"><strong>${item.nome}</strong></p>
                    <p class="item-desc">${item.descricao}</p>
                    <a class="btn small-btn" href="${item.link}" target="_blank">
                        <i class="fa-solid fa-download"></i> Baixar
                    </a>
                </div>
            `;
        });

        itemsHTML += `</div>`;
    }

    contentScreen.innerHTML = `
        <h2>Drivers, Emuladores e FreeFire Recomendados</h2>
        <p class="small" style="margin-bottom: 20px;">Utilize as opções abaixo para garantir a melhor performance e compatibilidade com nossos produtos.</p>
        
        ${itemsHTML}
        
        <p class="risk-notice" style="margin-top: 25px; font-size:0.85rem;">⚠️ Nota: Nenhum produto nesta seção é um "cheat". São apenas software de terceiros e versões do jogo recomendadas.</p>
        <div class="info-line" style="margin-top: 15px;">
            <span><strong>Status Geral:</strong></span>
            ${statusBadge("Seguro")}
        </div>
        
        <div class="two-btns" style="margin-top: 25px;">
            <button class="btn outline" onclick="location.reload()">⬅ Voltar para Seleção</button>
        </div>
    `;
}


enterBtn.addEventListener('click', () => {
    const code = enterBtn.getAttribute('data-product-code'); 

    if(!code){
        showNotify("Selecione um produto válido!", "error");
        return;
    }
    showProduct(products[code]);
});

if (recommendedBtn) {
    recommendedBtn.addEventListener('click', showRecommendedScreen);
}

logoutBtn.addEventListener('click', () => {
    location.reload();
});

closeTutorial.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden','true');
    tutorialVideo.src = "";
});

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden','true');
        tutorialVideo.src = "";
    }
});

function showNotify(msg, type="error", duration=3600) {
    const div = document.createElement("div");
    div.className = `notify ${type}`;
    div.textContent = msg;
    notifyContainer.appendChild(div);
    setTimeout(() => div.classList.add("show"), 50);
    setTimeout(() => {
        div.classList.remove("show");
        setTimeout(() => div.remove(), 420);
    }, duration);
}


(function init() {
    buildOptions();
    selectValue("");

})();

