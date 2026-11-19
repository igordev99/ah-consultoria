/* Anderson Hernandes - Interactive Accounting Firm Operational Maturity Diagnostic */
(function () {
  function initDiagnostic() {
    var root = document.getElementById('ah-maturity-diagnostic');
    if (!root) return;

    var checks = root.querySelectorAll('.ah-maturity-check');
    var clientSlider = document.getElementById('ah-client-count');
    var clientVal = document.getElementById('ah-client-count-val');
    var scoreNum = document.getElementById('ah-score-num');
    var scoreStage = document.getElementById('ah-score-stage');
    var scoreBar = document.getElementById('ah-score-bar');
    var hoursSavedEl = document.getElementById('ah-hours-recoverable');
    var recommendationEl = document.getElementById('ah-score-recommendation');

    function recalculate() {
      var total = checks.length || 6;
      var active = 0;
      checks.forEach(function (c) {
        if (c.checked) active += 1;
      });

      var clients = clientSlider ? parseInt(clientSlider.value || '180', 10) : 180;
      if (clientVal) clientVal.textContent = clients + ' CNPJs ativos';

      var score = Math.round((active / total) * 100);
      var gapRatio = (total - active) / total;
      var recoverableHours = Math.max(12, Math.round(clients * 0.42 * gapRatio));

      if (scoreNum) scoreNum.textContent = score + ' / 100';
      if (scoreBar) scoreBar.style.width = score + '%';
      if (hoursSavedEl) hoursSavedEl.textContent = recoverableHours + 'h / mês';

      if (score < 45) {
        if (scoreStage) scoreStage.textContent = 'Estágio 1: Operação Artesanal Dependente';
        if (recommendationEl) {
          recommendationEl.textContent = 'Prioridade Imediata: mapear onboarding e fechamento para estancar retrabalho antes de expandir equipe.';
        }
      } else if (score < 80) {
        if (scoreStage) scoreStage.textContent = 'Estágio 2: Padronização em Transição';
        if (recommendationEl) {
          recommendationEl.textContent = 'Próximo Passo: blindar SLAs interdepartamentais, acoplar agentes de IA e ativar linhas consultivas de margem alta.';
        }
      } else {
        if (scoreStage) scoreStage.textContent = 'Estágio 3: Escala Consultiva Orientada por Dados';
        if (recommendationEl) {
          recommendationEl.textContent = 'Excelência Operacional: foco em expansão de NRR, M&A contábil, BPO escalável e projetos de Reforma Tributária.';
        }
      }
    }

    checks.forEach(function (c) {
      c.addEventListener('change', recalculate);
    });
    if (clientSlider) {
      clientSlider.addEventListener('input', recalculate);
    }
    recalculate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDiagnostic);
  } else {
    initDiagnostic();
  }
})();
