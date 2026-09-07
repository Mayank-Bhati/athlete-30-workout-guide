(() => {
  // A new key intentionally clears the previous version's forced "Push yesterday" default.
  const storageKey = 'athlete30:last-completed:v2';
  const workouts = [
    { id: 'session-1', name: 'Push' },
    { id: 'session-2', name: 'Pull' },
    { id: 'session-3', name: 'Lower A' },
    { id: 'session-4', name: 'Upper' },
    { id: 'session-5', name: 'Lower B' },
  ];

  const readState = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
      if (saved && workouts.some((workout) => workout.id === saved.id)) return saved;
    } catch { /* Device storage may be unavailable or malformed. */ }
    return null;
  };

  const writeState = (state) => {
    try {
      if (state) localStorage.setItem(storageKey, JSON.stringify(state));
      else localStorage.removeItem(storageKey);
    } catch { /* Device storage may be unavailable. */ }
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
    const completedIndex = state ? workouts.findIndex((workout) => workout.id === state.id) : -1;
    const completed = completedIndex >= 0 ? workouts[completedIndex] : null;
    const next = completed ? workouts[(completedIndex + 1) % workouts.length] : workouts[0];

    document.querySelectorAll('[data-workout-id]').forEach((element) => {
      element.classList.toggle('is-last-completed', Boolean(completed && element.dataset.workoutId === completed.id));
    });
    document.querySelectorAll('[data-nav-workout]').forEach((element) => {
      const selected = Boolean(completed && element.dataset.navWorkout === completed.id);
      element.classList.toggle('is-last-completed', selected);
      if (selected) element.setAttribute('aria-current', 'step');
      else element.removeAttribute('aria-current');
    });
    document.querySelectorAll('[data-mark-workout]').forEach((button) => {
      const selected = Boolean(completed && button.dataset.markWorkout === completed.id);
      button.classList.toggle('is-complete', selected);
      button.setAttribute('aria-pressed', String(selected));
      const label = button.querySelector('span');
      if (label) label.textContent = selected ? 'Unmark completed' : 'Mark as last completed';
    });

    const lastWorkout = document.querySelector('[data-last-workout]');
    const lastDetail = document.querySelector('[data-last-detail]');
    const lastCard = document.querySelector('[data-last-workout-card]');
    const clearButton = document.querySelector('[data-clear-workout]');
    const nextWorkout = document.querySelector('[data-next-workout]');
    const nextDetail = document.querySelector('[data-next-detail]');
    const nextLink = document.querySelector('[data-next-link]');

    if (lastWorkout) lastWorkout.textContent = completed ? `${completed.name} · ${relativeDate(state.completedAt)}` : 'No workout marked';
    if (lastDetail) lastDetail.textContent = completed ? 'Saved on this device. Clear it here or unmark it below.' : 'Mark a workout below after you finish it.';
    if (lastCard) lastCard.classList.toggle('is-empty', !completed);
    if (clearButton) clearButton.disabled = !completed;
    if (nextWorkout) nextWorkout.textContent = next.name;
    if (nextDetail) {
      nextDetail.textContent = !completed
        ? 'Start the week with Monday Push.'
        : completed.id === 'session-5'
          ? 'Saturday is rest, Sunday is cricket, then restart with Push.'
          : `Next in sequence after ${completed.name}.`;
    }
    if (nextLink) nextLink.setAttribute('href', `#${next.id}`);
  };

  const initialize = () => {
    let state = readState();
    render(state);

    document.querySelectorAll('[data-mark-workout]').forEach((button) => {
      button.addEventListener('click', () => {
        state = state && state.id === button.dataset.markWorkout
          ? null
          : { id: button.dataset.markWorkout, completedAt: new Date().toISOString() };
        writeState(state);
        render(state);
      });
    });

    const clearButton = document.querySelector('[data-clear-workout]');
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        state = null;
        writeState(state);
        render(state);
      });
    }

    window.addEventListener('storage', (event) => {
      if (event.key === storageKey) {
        state = readState();
        render(state);
      }
    });
  };

  const startAfterHydration = () => window.setTimeout(initialize, 120);
  if (document.readyState === 'complete') startAfterHydration();
  else window.addEventListener('load', startAfterHydration, { once: true });
})();
