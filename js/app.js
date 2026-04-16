/* ============================================
   GASTROCONTROL — JS MÍNIMO
   Apenas navegação suave e micro-interações
   Sem lógica de negócio, sem backend.
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* -------------------------------------------
     1. Fade-in suave ao carregar a página
  ------------------------------------------- */
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.25s ease';
  setTimeout(() => { document.body.style.opacity = '1'; }, 30);

  /* -------------------------------------------
     2. Highlight do nav-item ativo
  ------------------------------------------- */
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href && href === currentPath) {
      item.classList.add('active');
    }
  });

  /* -------------------------------------------
     3. Checkboxes da lista de compras — toggle visual
  ------------------------------------------- */
  document.querySelectorAll('.checkbox-empty, .checkbox-checked').forEach(function (box) {
    box.style.cursor = 'pointer';
    box.addEventListener('click', function () {
      const row = this.closest('tr');
      if (!row) return;

      if (this.classList.contains('checkbox-empty')) {
        this.classList.remove('checkbox-empty');
        this.classList.add('checkbox-checked');
        this.textContent = '✓';
        row.classList.add('tr-done');
        row.classList.remove('tr-urgent');
        // Atualiza badge para Comprado
        const badge = row.querySelector('.badge');
        if (badge) {
          badge.className = 'badge badge--green';
          badge.textContent = '✓ Comprado';
        }
        // Tacha o nome
        const nameCell = row.querySelector('td:nth-child(2)');
        if (nameCell) nameCell.style.textDecoration = 'line-through';
      } else {
        this.classList.remove('checkbox-checked');
        this.classList.add('checkbox-empty');
        this.textContent = '';
        row.classList.remove('tr-done');
        // Reverte badge
        const badge = row.querySelector('.badge');
        if (badge) {
          badge.className = 'badge badge--gray';
          badge.textContent = '◷ Pendente';
        }
        const nameCell = row.querySelector('td:nth-child(2)');
        if (nameCell) nameCell.style.textDecoration = '';
      }
    });
  });

  /* -------------------------------------------
     4. Botão de exportar — feedback visual
  ------------------------------------------- */
  const exportBtn = document.querySelector('.btn-ghost');
  if (exportBtn && exportBtn.textContent.includes('Exportar')) {
    exportBtn.addEventListener('click', function () {
      const original = this.textContent;
      this.textContent = '✓ Exportado!';
      this.style.color = '#16A34A';
      setTimeout(() => {
        this.textContent = original;
        this.style.color = '';
      }, 2000);
    });
  }

  /* -------------------------------------------
     5. Hover nas barras do gráfico (tooltip)
  ------------------------------------------- */
  document.querySelectorAll('.bar').forEach(function (bar) {
    bar.addEventListener('mouseenter', function () {
      const tip = this.getAttribute('title');
      if (tip) {
        this.setAttribute('data-tip', tip);
      }
    });
  });

});
