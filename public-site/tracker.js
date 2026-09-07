(() => {
  const storageKey = 'athlete30:last-completed';
  const workouts = [
    { id: 'session-1', name: 'Push' },
    { id: 'session-2', name: 'Pull' },
    { id: 'session-3', name: 'Lower A' },
    { id: 'session-4', name: 'Upper' },
    { id: 'session-5', name: 'Lower B' },
  ];

  const defaultState = () => ({
    id: 'session-1',
    completedAt: new Date(Date.now() - 86400000).toISOString(),
  });

  const readState = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
      if (saved && workouts.some((workout) => workout.id === saved.id)) return saved;
      const initial = defaultState();
      localStorage.setItem(storageKey, JSON.stringify(initial));
      return initial;
    } catch {
      return defaultState();
    }
  };

  const writeState = (state) => {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch { /* Device storage may be unavailable. */ }
  };

  const relativeDate = (isoDate) => {
    const date = new Date(isoDate);
    const today = new Date();
    const dayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const difference = Math.round((dayStart.getTime() - dateStart.getTime()) / 86400000);
    if (difference === 0) return 'today';
    if (difference === 1) return 'yesterday';
    return new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' }).format(date);
  };

  const render = (state) => {
    const completedIndex = workouts.findIndex((workout) => workout.id === state.id);
    const completed = workouts[completedIndex] || workouts[0];
    const next = workouts[(completedIndex + 1) % workouts.length];

    document.querySelectorAll('[data-workout-id]').forEach((element) => {
      element.classList.toggle('is-last-completed', element.dataset.workoutId === completed.id);
    });
    document.querySelectorAll('[data-nav-workout]').forEach((element) => {
      const selected = element.dataset.navWorkout === completed.id;
      element.classList.toggle('is-last-completed', selected);
      if (selected) element.setAttribute('aria-current', 'step');
      else element.removeAttribute('aria-current');
    });
    document.querySelectorAll('[data-mark-workout]').forEach((button) => {
      const selected = button.dataset.markWorkout === completed.id;
      button.classList.toggle('is-complete', selected);
      button.setAttribute('aria-pressed', String(selected));
      const label = button.querySelector('span');
      if (label) label.textContent = selected ? 'Completed last time' : 'Mark as last completed';
    });

    const lastWorkout = document.querySelector('[data-last-workout]');
    const nextWorkout = document.querySelector('[data-next-workout]');
    const nextDetail = document.querySelector('[data-next-detail]');
    const nextLink = document.querySelector('[data-next-link]');
    if (lastWorkout) lastWorkout.textContent = `${completed.name} · ${relativeDate(state.completedAt)}`;
    if (nextWorkout) nextWorkout.textContent = next.name;
    if (nextDetail) nextDetail.textContent = completed.id === 'session-5'
      ? 'After Saturday rest and Sunday cricket, begin the new week with Push.'
      : `Next in sequence after ${completed.name}.`;
    if (nextLink) nextLink.setAttribute('href', `#${next.id}`);
  };

  const initialize = () => {
    let state = readState();
    render(state);
    document.querySelectorAll('[data-mark-workout]').forEach((button) => {
      button.addEventListener('click', () => {
        state = { id: button.dataset.markWorkout, completedAt: new Date().toISOString() };
        writeState(state);
        render(state);
      });
    });
    window.addEventListener('storage', (event) => {
      if (event.key === storageKey) render(readState());
    });
  };

  const startAfterHydration = () => window.setTimeout(initialize, 120);
  if (document.readyState === 'complete') startAfterHydration();
  else window.addEventListener('load', startAfterHydration, { once: true });
})();
