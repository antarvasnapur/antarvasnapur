/* pagination.js */
'use strict';
class Paginator {
  constructor({ containerId, paginationId, items=[], perPage=10, renderFn }) {
    this.containerId = containerId;
    this.paginationId = paginationId;
    this.items = items;
    this.perPage = perPage;
    this.renderFn = renderFn;
    this.page = 1;
  }
  setItems(items) { this.items = items; this.page = 1; this.render(); }
  goTo(p) { this.page = p; this.render(); window.scrollTo({top:0,behavior:'smooth'}); }
  render() {
    const el = document.getElementById(this.containerId);
    if (!el) return;
    const start = (this.page-1)*this.perPage;
    const slice = this.items.slice(start, start+this.perPage);
    el.innerHTML = slice.length ? slice.map(this.renderFn).join('') :
      `<div class="empty-state"><div class="empty-state-icon">📭</div><h3>No stories found</h3></div>`;
    this.renderPagination();
  }
  renderPagination() {
    const el = document.getElementById(this.paginationId);
    if (!el) return;
    const total = Math.ceil(this.items.length / this.perPage);
    if (total <= 1) { el.innerHTML=''; return; }
    let html = `<button class="page-btn" onclick="this.closest('[id]');paginator_${this.containerId}.goTo(${this.page-1})" ${this.page===1?'disabled':''}>‹</button>`;
    for (let i=1; i<=total; i++) {
      if (i===1||i===total||Math.abs(i-this.page)<=1) {
        html += `<button class="page-btn${i===this.page?' active':''}" onclick="paginator_${this.containerId}.goTo(${i})">${i}</button>`;
      } else if (Math.abs(i-this.page)===2) {
        html += `<span class="page-btn" style="cursor:default;border:none">…</span>`;
      }
    }
    html += `<button class="page-btn" onclick="paginator_${this.containerId}.goTo(${this.page+1})" ${this.page===total?'disabled':''}>›</button>`;
    el.innerHTML = html;
  }
}
window.Paginator = Paginator;
