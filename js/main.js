/* Troque aqui o número do WhatsApp da Vitrine Bio, com 55 + DDD. Ex.: "5511999999999" */
var WHATSAPP_NUMBER = "";
var WA_TEXT = "Olá! Vi a Vitrine Bio e quero garantir o site da minha loja.";

(function () {
  var base = WHATSAPP_NUMBER ? "https://wa.me/" + WHATSAPP_NUMBER : "https://wa.me/";
  var url = base + "?text=" + encodeURIComponent(WA_TEXT);
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = url; a.target = "_blank"; a.rel = "noopener";
  });

  /* onda do áudio */
  var wave = document.getElementById("wave");
  var hs = [8,14,20,12,24,18,9,16,22,13,19,26,15,10,21,17,8,14,23,12,18,9,15,11];
  wave.innerHTML = hs.map(function (h) { return '<i style="height:' + h + 'px"></i>'; }).join("");

  /* pré-visualização local de vídeo e foto */
  document.querySelectorAll('.slot input[type=file]').forEach(function (inp) {
    inp.addEventListener("change", function () {
      var f = inp.files && inp.files[0]; if (!f) return;
      var slot = inp.closest(".slot");
      var src = URL.createObjectURL(f);
      var el;
      if (slot.dataset.kind === "video") { el = document.createElement("video"); el.controls = true; el.playsInline = true; el.src = src; }
      else { el = document.createElement("img"); el.alt = "Foto enviada"; el.src = src; }
      slot.style.borderStyle = "solid";
      slot.querySelector(".ph-in").hidden = true;
      slot.appendChild(el);
    });
  });

  /* demo do quiz */
  var stage = document.getElementById("stage");
  var COLORS = [
    { id: "azul", name: "Azul", hex: "#3b82f6", hex2: "#1d4ed8" },
    { id: "preto", name: "Preto", hex: "#3a3748", hex2: "#14121c" },
    { id: "vermelho", name: "Vermelho", hex: "#ef4444", hex2: "#991b1b" },
    { id: "laranja", name: "Laranja", hex: "#ff7a2f", hex2: "#c2410c" }
  ];
  var TYPES = [
    { id: "calca", name: "Calça jeans", path: "M8 3h8l1.5 18h-4L12 9l-1.5 12h-4z" },
    { id: "camiseta", name: "Camiseta", path: "M8 3l-5 3 2 4 3-1v12h8V9l3 1 2-4-5-3c-.5 1.3-1.8 2-4 2S8.5 4.3 8 3z" },
    { id: "vestido", name: "Vestido", path: "M9 3h6l-.5 5 3.5 13H6l3.5-13z" },
    { id: "jaqueta", name: "Jaqueta", path: "M9 3l-6 4v12h4V9l1 12h8l1-12v10h4V7l-6-4c-.5 1.4-1.7 2-3 2S9.5 4.4 9 3z" }
  ];
  var NAMES = {
    calca: ["Calça jeans reta", "Calça jeans skinny", "Calça jeans wide leg", "Calça jeans cargo"],
    camiseta: ["Camiseta básica", "Camiseta oversized", "Camiseta cropped", "Camiseta estampada"],
    vestido: ["Vestido midi", "Vestido curto", "Vestido longo", "Vestido evasê"],
    jaqueta: ["Jaqueta jeans", "Jaqueta bomber", "Jaqueta corta-vento", "Jaqueta puffer"]
  };
  var sel = { color: null, type: null };

  function svgType(t) { return '<svg viewBox="0 0 24 24"><path d="' + t.path + '"/></svg>'; }
  function dots(n) { return '<div class="dots">' + [0,1].map(function (i) { return '<i class="' + (i < n ? "on" : "") + '"></i>'; }).join("") + '</div>'; }

  function step1() {
    sel = { color: null, type: null };
    stage.innerHTML = dots(1) +
      '<h3>Qual cor você mais gosta?</h3><p class="sub">Pergunta 1 de 2</p><div class="opts">' +
      COLORS.map(function (c) { return '<button class="opt" data-c="' + c.id + '"><span class="sw" style="background:' + c.hex + '"></span>' + c.name + '</button>'; }).join("") + '</div>';
    stage.querySelectorAll("[data-c]").forEach(function (b) { b.onclick = function () { sel.color = b.dataset.c; step2(); }; });
  }
  function step2() {
    stage.innerHTML = dots(2) +
      '<h3>Qual peça você procura?</h3><p class="sub">Pergunta 2 de 2</p><div class="opts">' +
      TYPES.map(function (t) { return '<button class="opt" data-t="' + t.id + '">' + svgType(t) + t.name + '</button>'; }).join("") + '</div>';
    stage.querySelectorAll("[data-t]").forEach(function (b) { b.onclick = function () { sel.type = b.dataset.t; result(); }; });
  }
  function result() {
    var c = COLORS.filter(function (x) { return x.id === sel.color; })[0];
    var t = TYPES.filter(function (x) { return x.id === sel.type; })[0];
    var others = COLORS.filter(function (x) { return x.id !== c.id; });
    var cards = [
      { c: c, t: t, n: NAMES[t.id][0] }, { c: c, t: t, n: NAMES[t.id][1] },
      { c: c, t: TYPES[(TYPES.indexOf(t) + 1) % 4], n: null },
      { c: others[0], t: t, n: NAMES[t.id][2] }
    ];
    cards[2].n = NAMES[cards[2].t.id][3];
    stage.innerHTML = '<div class="result-head"><span class="chip o">' + c.name + '</span><span class="chip">' + t.name + '</span></div>' +
      '<h3>Seu catálogo está pronto</h3><div class="grid-p">' +
      cards.map(function (p, i) {
        return '<div class="prod" style="animation-delay:' + (i * 90) + 'ms"><div class="ph" style="background:linear-gradient(150deg,' + p.c.hex + ',' + p.c.hex2 + ')">' + svgType(p.t) + '</div><div class="meta"><b>' + p.n + '</b><span>' + p.c.name + '</span></div></div>';
      }).join("") + '</div><button class="again" id="again">Refazer o quiz</button>';
    document.getElementById("again").onclick = step1;
  }
  step1();
})();
