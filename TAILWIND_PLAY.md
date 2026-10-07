# Atividades — Tailwind Play

## Atividade 1 — Cartão de perfil

**Conceitos:** `flex`, `items-center`, `gap-4`, `rounded-2xl`, `shadow-lg`, `hover:` e `focus-visible:`.

### Código HTML (cole na aba HTML do Tailwind Play)

```html
<main
  class="flex min-h-screen items-center justify-center bg-slate-100 p-6 text-slate-900"
>
  <article
    class="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-lg"
  >
    <div class="flex items-center gap-4">
      <div
        class="grid size-16 shrink-0 place-items-center rounded-full bg-indigo-600 text-xl font-bold text-white"
        aria-hidden="true"
      >
        WG
      </div>

      <div class="min-w-0">
        <span
          class="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700"
        >
          Sistemas para Internet
        </span>
        <h1 class="mt-2 text-2xl font-bold tracking-tight">
          Wanessa Gonçalves
        </h1>
        <p class="mt-1 text-sm text-slate-500">
          Estudante de TSI · React · Tailwind CSS
        </p>
      </div>
    </div>

    <p class="mt-6 text-sm leading-6 text-slate-600">
      Explorando o desenvolvimento de interfaces responsivas e acessíveis com
      HTML, componentes e classes utilitárias do Tailwind CSS.
    </p>

    <div class="mt-6 flex flex-wrap gap-3">
      <button
        type="button"
        class="flex-1 rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Seguir
      </button>
      <button
        type="button"
        class="rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Ver perfil
      </button>
    </div>
  </article>
</main>
```

## Atividade 2 — Grade responsiva de produtos

**Objetivo:** criar três cartões com CSS Grid e testar a adaptação da grade a diferentes larguras de tela.

**Conceitos:** `grid`, `grid-cols-1`, `sm:grid-cols-2`, `lg:grid-cols-3`, `group-hover:`, `focus-visible:` e `disabled:`.

### Código HTML (cole na aba HTML do Tailwind Play)

```html
<main class="min-h-screen bg-slate-950 p-6 text-white">
  <section class="mx-auto max-w-6xl py-8">
    <header class="mb-8">
      <span class="text-sm font-bold uppercase tracking-widest text-cyan-400"
        >Tailwind Play · Wanessa</span
      >
      <h1 class="mt-2 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
        Grade responsiva de planos
      </h1>
      <p class="mt-3 max-w-2xl text-slate-400">
        Exemplo com breakpoints, CSS Grid e estados de interação em botões.
      </p>
    </header>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
      >
        <div
          class="grid aspect-[16/10] place-items-center bg-cyan-500 text-6xl font-black text-slate-950 transition duration-500 group-hover:scale-105"
        >
          01
        </div>
        <div class="p-6">
          <span
            class="text-xs font-semibold uppercase tracking-wider text-cyan-300"
            >Iniciante</span
          >
          <h2 class="mt-2 text-xl font-bold">Fundamentos de UI</h2>
          <p class="mt-2 min-h-12 text-sm leading-6 text-slate-300">
            Espaçamento, tipografia, cores e organização visual.
          </p>
          <button
            type="button"
            class="mt-6 w-full rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            Selecionar
          </button>
        </div>
      </article>

      <article
        class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-rose-400/50"
      >
        <div
          class="grid aspect-[16/10] place-items-center bg-rose-500 text-6xl font-black text-white transition duration-500 group-hover:scale-105"
        >
          02
        </div>
        <div class="p-6">
          <span
            class="text-xs font-semibold uppercase tracking-wider text-rose-300"
            >Intermediário</span
          >
          <h2 class="mt-2 text-xl font-bold">Interfaces responsivas</h2>
          <p class="mt-2 min-h-12 text-sm leading-6 text-slate-300">
            Breakpoints, Flexbox, Grid e estados interativos.
          </p>
          <button
            type="button"
            class="mt-6 w-full rounded-xl bg-rose-500 px-4 py-3 font-semibold text-white transition hover:bg-rose-400 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
          >
            Selecionar
          </button>
        </div>
      </article>

      <article
        class="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50"
      >
        <div
          class="grid aspect-[16/10] place-items-center bg-emerald-500 text-6xl font-black text-slate-950 transition duration-500 group-hover:scale-105"
        >
          03
        </div>
        <div class="p-6">
          <span
            class="text-xs font-semibold uppercase tracking-wider text-emerald-300"
            >Avançado</span
          >
          <h2 class="mt-2 text-xl font-bold">Componentes avançados</h2>
          <p class="mt-2 min-h-12 text-sm leading-6 text-slate-300">
            Plano demonstrativo indisponível no momento.
          </p>
          <button
            type="button"
            disabled
            class="mt-6 w-full cursor-not-allowed rounded-xl bg-slate-700 px-4 py-3 font-semibold text-slate-400 opacity-60"
          >
            Indisponível
          </button>
        </div>
      </article>
    </div>
  </section>
</main>
```

## Como testar no Tailwind Play

1. Abra [play.tailwindcss.com](https://play.tailwindcss.com/).
2. Copie **somente o conteúdo dentro do bloco `html`** de uma atividade.
3. Cole na aba **HTML** do Tailwind Play, substituindo o exemplo anterior.
4. Observe o resultado na prévia e redimensione a janela para testar a responsividade.
5. Repita com a segunda atividade.

## O que foi praticado

- Classes utilitárias para espaçamento, cores, tipografia, bordas e sombras.
- Layouts com Flexbox e CSS Grid.
- Breakpoints responsivos (`sm:` e `lg:`).
- Estados de interação (`hover:`, `active:`, `focus-visible:` e `disabled`).
- Estruturação semântica básica com `main`, `section`, `article` e `header`.

**Nota:** os exemplos são demonstrações estáticas. As adaptações devem ser testadas e compreendidas antes da entrega.
