import {
  CheckCircle2, Dumbbell, ExternalLink, Flame,
  HeartPulse, Info, PlayCircle, ShieldCheck, Sparkles, Timer, Zap,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Motion = 'pull' | 'row' | 'curl' | 'raise' | 'press' | 'fly' | 'squat' | 'hinge' | 'thrust' | 'lunge' | 'knee' | 'hip' | 'calf' | 'core' | 'triceps' | 'shrug';
type Exercise = { name: string; options: string[]; muscle: string; sets: string; reps: string; rest: string; motion: Motion; cue: string; avoid: string };
type Day = { id: string; short: string; eyebrow: string; title: string; focus: string; time: string; exercises: Exercise[] };
type CycleStep = { kind: 'workout'; day: Day } | { kind: 'recovery'; id: string; short: string; eyebrow: string; title: string; focus: string };

const ex = (name: string, options: string[], muscle: string, reps: string, rest: string, motion: Motion, cue: string, avoid: string, sets = '2'): Exercise => ({ name, options, muscle, sets, reps, rest, motion, cue, avoid });

const days: Day[] = [
  {
    id: 'session-3', short: '03', eyebrow: 'WEDNESDAY · LOWER A', title: 'Strength + posterior chain', focus: 'Your heavier lower session: deep squatting, hip hinging and glute strength.', time: '65 min',
    exercises: [
      ex('Seated leg curl', ['Lying leg curl', 'Single-leg curl'], 'Hamstrings', '10-15', '75 sec', 'knee', 'Curl smoothly and squeeze without lifting the hips.', 'Do not let the stack crash down.'),
      ex('Smith squat', ['Leg press', 'Smith box squat'], 'Quads + glutes', '6-10', '2-3 min', 'squat', 'Use the deepest controlled range you can own; brace and drive through mid-foot.', 'Do not let your knees collapse inward or your pelvis tuck sharply.'),
      ex('Smith Romanian deadlift', ['Dumbbell Romanian deadlift', 'Cable pull-through'], 'Hamstrings + glutes', '6-10', '2-3 min', 'hinge', 'Push your hips back with soft knees and keep the bar close.', 'Do not chase depth by rounding your back.'),
      ex('Hip-thrust machine', ['Smith hip thrust', 'Dumbbell hip thrust'], 'Glutes', '8-12', '2 min', 'thrust', 'Pause at full hip extension with ribs down and a slight pelvic tuck.', 'Do not finish by hyperextending your lower back.'),
      ex('Leg extension', ['Single-leg extension', 'Slow-tempo leg extension'], 'Quads', '10-15', '75 sec', 'knee', 'Align the machine pivot with your knee and extend smoothly.', 'Do not kick explosively into lockout.'),
      ex('Hip adductor machine', ['Cable standing adduction', 'Copenhagen plank'], 'Inner thighs', '12-20', '60 sec', 'hip', 'Close the legs smoothly and control the return.', 'Do not force a painful stretch.'),
      ex('Hip abductor machine', ['Cable standing abduction', 'Lateral band walk'], 'Side glutes', '15-20', '60 sec', 'hip', 'Open from the hips and pause; a slight forward lean may help you feel the glutes.', 'Do not bounce or lean far back.'),
      ex('Machine calf raise', ['Leg-press calf raise', 'Smith standing calf raise'], 'Calves', '10-15', '75 sec', 'calf', 'Pause in the stretch and rise onto the big toe.', 'Do not bounce through the bottom.'),
    ],
  },
  {
    id: 'session-1', short: '01', eyebrow: 'MONDAY · PUSH', title: 'Chest + shoulders + triceps', focus: 'Start the week with pressing strength, upper-chest fullness, shoulder width and four direct working sets for triceps.', time: '60 min',
    exercises: [
      ex('Incline machine press', ['Smith incline press', 'Incline dumbbell press'], 'Upper chest', '6-10', '90 sec', 'press', 'Set a moderate incline; press up and slightly inward.', 'Do not flare elbows straight sideways.'),
      ex('Flat Smith press', ['Flat dumbbell press', 'Flat machine press'], 'Chest', '6-10', '2 min', 'press', 'Plant your feet and lower the bar toward mid-chest with stacked wrists.', 'Do not bounce the bar or shorten the bottom range.'),
      ex('Seated cable fly', ['Pec-deck fly', 'Single-arm cable fly'], 'Chest', '10-15', '75 sec', 'fly', 'Bring your upper arms together in a controlled arc while keeping the chest lifted.', 'Do not force an excessive shoulder stretch.'),
      ex('Machine shoulder press', ['Seated dumbbell press', 'Smith shoulder press'], 'Front + side delts', '8-12', '2 min', 'press', 'Keep ribs stacked and press without craning your neck.', 'Do not overarch the lower back.'),
      ex('High-cable lateral raise', ['Leaning cable lateral raise', 'Dumbbell lateral raise'], 'Side delts', '10-15', '60 sec', 'raise', 'Lead with your elbow and keep the shoulder away from your ear.', 'Do not shrug the weight upward.'),
      ex('Cross-body cable Y-raise', ['Incline-bench Y-raise', 'Wall slide with lift-off'], 'Side delts + lower traps', '12-15', '60 sec', 'raise', 'Raise into a Y with a light load and a long, neutral neck.', 'Do not turn it into a shrug.'),
      ex('Overhead cable extension', ['Rope overhead extension', 'Single-dumbbell extension'], 'Long-head triceps', '8-12', '75 sec', 'triceps', 'Keep upper arms angled forward and extend completely.', 'Do not flare the elbows aggressively.'),
      ex('Rope pressdown', ['Straight-bar pressdown', 'Single-arm pressdown'], 'Triceps', '10-15', '60 sec', 'triceps', 'Pin elbows to your sides and fully straighten.', 'Do not let the shoulders roll forward.'),
    ],
  },
  {
    id: 'session-2', short: '02', eyebrow: 'TUESDAY · PULL', title: 'Lats + mid-back + traps + biceps', focus: 'Your V-taper and posture session, with three rowing grips, direct trap work and two biceps movements.', time: '70 min',
    exercises: [
      ex('Neutral-grip lat pulldown', ['Medium overhand pulldown', 'Assisted pull-up'], 'Lats', '6-10', '2 min', 'pull', 'Keep your chest tall and drive elbows down toward your ribs.', 'Do not swing or pull behind your neck.'),
      ex('Wide-grip machine row', ['Chest-supported high row', 'Wide cable row'], 'Upper + mid-back', '8-12', '90 sec', 'row', 'Let the shoulder blades reach, then row toward the upper ribs.', 'Do not jut your head forward.', '1'),
      ex('Neutral-grip seated row', ['Close machine row', 'Chest-supported dumbbell row'], 'Mid-back', '8-12', '90 sec', 'row', 'Pause with the shoulder blades gently together and your neck long.', 'Do not turn it into a lower-back swing.', '1'),
      ex('Supinated machine row', ['Underhand cable row', 'One-arm supinated row'], 'Lats + mid-back', '8-12', '90 sec', 'row', 'Keep elbows close and pull toward the lower ribs.', 'Do not curl the handle with your wrists.', '1'),
      ex('Single-arm cable lat pulldown', ['Half-kneeling one-arm pulldown', 'One-arm high cable row'], 'Lower lats', '10-12 / side', '75 sec', 'pull', 'Reach fully, then pull your elbow toward your back pocket.', 'Keep the shoulder away from your ear.'),
      ex('Bottom-half dumbbell pullover', ['Cable pullover', 'Straight-arm cable pulldown'], 'Lats', '10-15', '75 sec', 'pull', 'Use the stretched half of the motion while keeping ribs down.', 'Do not turn it into a triceps extension.'),
      ex('Rope face pull', ['Low cable angle', 'Mid cable angle', 'High cable angle'], 'Rear delts + mid traps', '12-15', '60 sec', 'row', 'Do one set from each cable height and finish with thumbs behind you.', 'Do not shrug or overextend your neck.', '3'),
      ex('Dumbbell shrug', ['Smith shrug', 'Cable shrug'], 'Upper traps', '8-12', '90 sec', 'shrug', 'Lift your shoulders straight up, pause, then lower fully.', 'Never roll the shoulders in circles.'),
      ex('EZ-bar curl', ['Cable curl', 'Alternating dumbbell curl'], 'Biceps', '6-10', '75 sec', 'curl', 'Keep your upper arms still and control the full lowering phase.', 'Do not lean backward to move the bar.'),
      ex('Preacher curl', ['Machine preacher curl', 'Spider curl'], 'Biceps', '10-12', '60-75 sec', 'curl', 'Keep the upper arm supported and lower under control.', 'Do not hyperextend the elbow at the bottom.'),
    ],
  },
  {
    id: 'session-5', short: '05', eyebrow: 'FRIDAY · LOWER B', title: 'Hips + moderate legs', focus: 'A cricket-friendly lower session: glute priority, moderate loads and every set stopped with about three reps in reserve.', time: '60 min',
    exercises: [
      ex('Hip-thrust machine', ['Smith hip thrust', 'Dumbbell hip thrust'], 'Glutes', '8-12', '2 min', 'thrust', 'Pause at full hip extension with ribs down and a slight pelvic tuck.', 'Do not finish by hyperextending your lower back.'),
      ex('Long-stride dumbbell walking lunge', ['Reverse dumbbell lunge', 'Smith split squat'], 'Glutes + quads', '8-10 / side', '90 sec', 'lunge', 'Take a long stride, keep the front heel grounded and push through it.', 'Do not rush or push off the back foot.'),
      ex('Leg press', ['Smith squat', 'Single-leg press'], 'Quads + glutes', '10-15', '90 sec', 'squat', 'Lower under control while keeping your pelvis and lower back supported.', 'Do not lock the knees forcefully.'),
      ex('Seated leg curl', ['Lying leg curl', 'Single-leg curl'], 'Hamstrings', '10-15', '75 sec', 'knee', 'Curl smoothly and squeeze without lifting the hips.', 'Do not let the stack crash down.'),
      ex('Leg extension', ['Single-leg extension', 'Slow-tempo leg extension'], 'Quads', '12-15', '60 sec', 'knee', 'Align the machine pivot with your knee and extend smoothly.', 'Do not kick explosively into lockout.'),
      ex('Hip abductor machine', ['Cable standing abduction', 'Lateral band walk'], 'Side glutes', '15-20', '60 sec', 'hip', 'Open from the hips and pause without bouncing.', 'Do not lean far back to manufacture range.'),
      ex('Hip adductor machine', ['Cable standing adduction', 'Copenhagen plank'], 'Inner thighs', '15-20', '60 sec', 'hip', 'Close the legs smoothly and control the return.', 'Do not force a painful stretch.'),
      ex('Machine calf raise', ['Leg-press calf raise', 'Smith standing calf raise'], 'Calves', '12-20', '60 sec', 'calf', 'Pause in the stretch and rise onto the big toe.', 'Do not bounce through the bottom.'),
    ],
  },
  {
    id: 'session-4', short: '04', eyebrow: 'THURSDAY · UPPER', title: 'Physique-priority upper body', focus: 'A complete upper session for chest, lat width, mid-back, shoulders, traps, triceps and two more biceps movements.', time: '70 min',
    exercises: [
      ex('Incline machine press', ['Incline Smith press', 'Incline dumbbell press'], 'Upper chest', '6-10', '2 min', 'press', 'Use a low-to-moderate incline and control the descent.', 'Do not turn it into a vertical shoulder press.'),
      ex('Seated cable fly', ['Pec-deck fly', 'Single-arm cable fly'], 'Chest', '10-15', '75 sec', 'fly', 'Bring your upper arms together in a controlled arc.', 'Do not force an excessive shoulder stretch.'),
      ex('Neutral-grip lat pulldown', ['Weighted pull-up', 'Assisted pull-up'], 'Lats', '6-10', '2 min', 'pull', 'Keep the chest tall and drive elbows down toward your ribs.', 'Do not swing or jut your head forward.'),
      ex('Wide-grip machine row', ['Chest-supported high row', 'Wide cable row'], 'Upper + mid-back', '8-12', '90 sec', 'row', 'Row toward the upper ribs and pause without shrugging.', 'Do not pull the elbows far behind your torso.'),
      ex('High-cable lateral raise', ['Leaning cable lateral raise', 'Dumbbell lateral raise'], 'Side delts', '10-15', '60 sec', 'raise', 'Lead with your elbow and keep the shoulder away from your ear.', 'Do not shrug the weight upward.'),
      ex('Reverse pec-deck fly', ['Cable rear-delt fly', 'Chest-supported rear-delt raise'], 'Rear delts', '12-20', '60 sec', 'fly', 'Reach wide and keep the shoulder blades controlled.', 'Do not thrust the chest off the pad.'),
      ex('Dumbbell shrug', ['Smith shrug', 'Cable shrug'], 'Upper traps', '10-15', '75 sec', 'shrug', 'Lift your shoulders straight up, pause, then lower fully.', 'Never roll the shoulders in circles.'),
      ex('Overhead cable extension', ['Rope overhead extension', 'Single-dumbbell extension'], 'Long-head triceps', '10-12', '75 sec', 'triceps', 'Keep upper arms angled forward and extend completely.', 'Do not flare the elbows aggressively.'),
      ex('Bayesian cable curl', ['Incline dumbbell curl', 'Facing-away cable curl'], 'Biceps', '10-12', '60-75 sec', 'curl', 'Keep your upper arm behind your torso and curl without moving the shoulder.', 'Do not step so far forward that the shoulder feels strained.'),
      ex('Cross-body hammer curl', ['Rope hammer curl', 'Standard hammer curl'], 'Biceps + brachialis', '10-12', '60-75 sec', 'curl', 'Curl across your torso with a neutral grip and control the lowering phase.', 'Do not throw the dumbbell up with your hips.'),
    ],
  },
];

const cycleSteps: CycleStep[] = [
  { kind: 'workout', day: days[1] },
  { kind: 'workout', day: days[2] },
  { kind: 'workout', day: days[0] },
  { kind: 'workout', day: days[4] },
  { kind: 'workout', day: days[3] },
  { kind: 'recovery', id: 'saturday-rest', short: 'SAT', eyebrow: 'SATURDAY · REST', title: 'Full recovery day.', focus: 'No lifting and no hard running. Easy walking and gentle mobility are fine.' },
  { kind: 'recovery', id: 'sunday-cricket', short: 'SUN', eyebrow: 'SUNDAY · CRICKET', title: 'Cricket is the workout.', focus: 'Your matches replace gym training and conditioning. Prioritize carbohydrates, fluids and electrolytes.' },
];

const demoLinks: Record<string, { url: string; provider: string }> = {
  'Seated leg curl': { url: 'https://www.youtube.com/shorts/xdbEG3xGLI8', provider: 'YouTube Short · form tutorial' },
  'Smith squat': { url: 'https://www.youtube.com/shorts/fUNkEW3N_ug', provider: 'YouTube Short · Smith squat tutorial' },
  'Smith Romanian deadlift': { url: 'https://www.youtube.com/shorts/d-hn_0sEpRQ', provider: 'YouTube Short · Squat University' },
  'Hip-thrust machine': { url: 'https://www.youtube.com/shorts/fv6EfDZ0E28', provider: 'YouTube Short · Mind Pump TV' },
  'Leg extension': { url: 'https://www.youtube.com/shorts/ztNBgrGy6FQ', provider: 'YouTube Short · technique guide' },
  'Hip adductor machine': { url: 'https://www.youtube.com/shorts/iPLvw74e7Tk', provider: 'YouTube Short · Planet Fitness' },
  'Hip abductor machine': { url: 'https://www.youtube.com/shorts/S_FGYHNHJ_c', provider: 'YouTube Short · Jeff Nippard' },
  'Machine calf raise': { url: 'https://www.youtube.com/shorts/Si2z1bf4_IQ', provider: 'YouTube Short · form tutorial' },
  'Incline machine press': { url: 'https://www.youtube.com/shorts/VXaBbUYMfIs', provider: 'YouTube Short · incline press tutorial' },
  'Flat Smith press': { url: 'https://www.youtube.com/shorts/hWbUlkb5Ms4', provider: 'YouTube Short · Jeff Nippard' },
  'Seated cable fly': { url: 'https://www.youtube.com/shorts/vZI5VIZpG58', provider: 'YouTube Short · cable fly tutorial' },
  'Machine shoulder press': { url: 'https://www.youtube.com/shorts/PM1hB_2xNBU', provider: 'YouTube Short · Planet Fitness' },
  'High-cable lateral raise': { url: 'https://www.youtube.com/shorts/HeovYNoZDRg', provider: 'YouTube Short · Jeff Nippard' },
  'Cross-body cable Y-raise': { url: 'https://www.youtube.com/shorts/G1KfOutH0VM', provider: 'YouTube Short · cable Y-raise' },
  'Overhead cable extension': { url: 'https://www.youtube.com/shorts/7hx0-DZgdl8', provider: 'YouTube Short · Colossus Fitness' },
  'Rope pressdown': { url: 'https://www.youtube.com/shorts/aHfbuBf1TJk', provider: 'YouTube Short · Planet Fitness' },
  'Neutral-grip lat pulldown': { url: 'https://www.youtube.com/shorts/z-lxcsIN4T4', provider: 'YouTube Short · Davis Diley' },
  'Wide-grip machine row': { url: 'https://www.youtube.com/shorts/2fFIRmW5Quw', provider: 'YouTube Short · row grip guide' },
  'Neutral-grip seated row': { url: 'https://www.youtube.com/shorts/LjP2Ut-Rczs', provider: 'YouTube Short · cable row guide' },
  'Supinated machine row': { url: 'https://www.youtube.com/shorts/2fFIRmW5Quw', provider: 'YouTube Short · row grip guide' },
  'Single-arm cable lat pulldown': { url: 'https://www.youtube.com/shorts/k6-4AiJR3w4', provider: 'YouTube Short · single-arm lat tutorial' },
  'Bottom-half dumbbell pullover': { url: 'https://www.youtube.com/shorts/A0xPR47jn_0', provider: 'YouTube Short · pullover tutorial' },
  'Rope face pull': { url: 'https://www.youtube.com/shorts/sHSY0Ao8QHs', provider: 'YouTube Short · ATHLEAN-X & Huberman' },
  'Dumbbell shrug': { url: 'https://www.youtube.com/watch?v=AAy1Fax6Bns', provider: 'YouTube · Ryan Humiston' },
  'EZ-bar curl': { url: 'https://www.youtube.com/shorts/d2r5TCqnR4Y', provider: 'YouTube Short · ATHLEAN-X' },
  'Preacher curl': { url: 'https://www.youtube.com/shorts/5u9qWmE7c2Y', provider: 'YouTube Short · ATHLEAN-X & Huberman' },
  'Long-stride dumbbell walking lunge': { url: 'https://www.youtube.com/shorts/5eQd_hsXESI', provider: 'YouTube Short · Mind Pump TV' },
  'Leg press': { url: 'https://www.youtube.com/shorts/BnacvXdaxq8', provider: 'YouTube Short · leg press guide' },
  'Reverse pec-deck fly': { url: 'https://www.youtube.com/shorts/hWrcGjjd9VU', provider: 'YouTube Short · rear-delt fly tutorial' },
  'Bayesian cable curl': { url: 'https://www.youtube.com/shorts/j5f_0rNkPwU', provider: 'YouTube Short · Jeff Nippard' },
  'Cross-body hammer curl': { url: 'https://www.youtube.com/shorts/Ms4KcMab-DU', provider: 'YouTube Short · ATHLEAN-X' },
};

const exerciseImages: Record<string, string> = {
  'Seated leg curl': './exercises/seated-leg-curl.jpg',
  'Smith squat': './exercises/smith-squat.jpg',
  'Smith Romanian deadlift': './exercises/smith-romanian-deadlift.jpg',
  'Hip-thrust machine': './exercises/hip-thrust-machine.jpg',
  'Leg extension': './exercises/leg-extension.jpg',
  'Hip adductor machine': './exercises/hip-adductor-machine.jpg',
  'Hip abductor machine': './exercises/hip-abductor.jpg',
  'Machine calf raise': './exercises/machine-calf-raise.jpg',
  'Incline machine press': './exercises/incline-machine-press.jpg',
  'Flat Smith press': './exercises/flat-smith-press.jpg',
  'Seated cable fly': './exercises/seated-cable-fly.jpg',
  'Machine shoulder press': './exercises/machine-shoulder-press.jpg',
  'High-cable lateral raise': './exercises/high-cable-lateral-raise.jpg',
  'Cross-body cable Y-raise': './exercises/cross-body-cable-y-raise.jpg',
  'Overhead cable extension': './exercises/overhead-cable-extension.jpg',
  'Rope pressdown': './exercises/rope-pressdown.jpg',
  'Neutral-grip lat pulldown': './exercises/neutral-grip-lat-pulldown.jpg',
  'Wide-grip machine row': './exercises/wide-grip-machine-row.jpg',
  'Neutral-grip seated row': './exercises/neutral-grip-seated-row.jpg',
  'Supinated machine row': './exercises/supinated-machine-row.jpg',
  'Single-arm cable lat pulldown': './exercises/single-arm-cable-lat-pulldown.jpg',
  'Bottom-half dumbbell pullover': './exercises/bottom-half-dumbbell-pullover.jpg',
  'Rope face pull': './exercises/rope-face-pull.jpg',
  'Dumbbell shrug': './exercises/dumbbell-shrug.jpg',
  'EZ-bar curl': './exercises/ez-bar-curl.jpg',
  'Preacher curl': './exercises/preacher-curl.jpg',
  'Long-stride dumbbell walking lunge': './exercises/long-stride-dumbbell-walking-lunge.jpg',
  'Leg press': './exercises/leg-press.jpg',
  'Reverse pec-deck fly': './exercises/reverse-pec-deck-fly.jpg',
  'Bayesian cable curl': './exercises/bayesian-cable-curl.jpg',
  'Cross-body hammer curl': './exercises/cross-body-hammer-curl.jpg',
};

function ExerciseCard({ exercise, index }: { exercise: Exercise; index: number }) {
  const demo = demoLinks[exercise.name];
  return (
    <article className="exercise-card">
      <a className="real-demo" href={demo.url} target="_blank" rel="noreferrer" aria-label={`Open real demonstration for ${exercise.name}`}>
        <img src={exerciseImages[exercise.name]} alt={`${exercise.name} demonstration`} loading="lazy" width="640" height="480" />
        <span className="media-scrim" aria-hidden="true" />
        <span className="play-button"><PlayCircle /></span>
        <span className="watch-copy"><b>Watch technique</b><small>{demo.provider}</small></span>
        <ExternalLink className="external-icon" />
      </a>
      <div className="exercise-body">
        <div className="mb-3">
          <div><p className="exercise-number">{String(index + 1).padStart(2, '0')} / {exercise.muscle}</p><h3>{exercise.name}</h3></div>
        </div>
        <div className="prescription"><span><b>{exercise.sets}</b> sets</span><span><b>{exercise.reps}</b> reps</span><span><b>{exercise.rest}</b> rest</span></div>
        <p className="cue"><CheckCircle2 /> {exercise.cue}</p>
        <p className="avoid"><Info /> {exercise.avoid}</p>
        <div className="alternatives"><b>Other options:</b> {exercise.options.join(' · ')}</div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="site-main min-h-screen bg-background text-foreground">
      <header className="site-header sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground"><Dumbbell /></span><div><p className="font-heading text-lg font-black tracking-tight">ATHLETE 30</p><p className="hidden text-xs text-muted-foreground sm:block">Five workouts + cricket week</p></div></div>
          <Badge className="h-7 bg-accent px-3 text-accent-foreground">Weekly sequence</Badge>
        </div>
      </header>

      <section className="site-shell mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10">
        <div className="hero mb-8 grid gap-6 lg:grid-cols-[1fr_390px] lg:items-end">
          <div className="hero-copy"><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">Your weekly training sequence</p><h1 className="max-w-3xl font-heading text-4xl font-black leading-[1.03] tracking-[-0.04em] sm:text-6xl">Push. Pull. Legs. <span>Build and perform.</span></h1><p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">Train Push, Pull, Lower A, Upper and Lower B in that order. Saturday is full recovery and Sunday is reserved for cricket.</p></div>
          <div className="summary-panel">
            <div><Flame /><p className="summary-value">86</p><p className="summary-label">sets per cycle</p></div>
            <div><Timer /><p className="summary-value">5</p><p className="summary-label">workout sessions</p></div>
            <div><Zap /><p className="summary-value">4</p><p className="summary-label">biceps moves</p></div>
          </div>
        </div>

        <section className="tracker-panel" aria-live="polite">
          <div className="next-workout-card">
            <p>NEXT WORKOUT</p>
            <h2 data-next-workout>Pull</h2>
            <span data-next-detail>Next in sequence after Push.</span>
            <a href="#session-2" data-next-link>Jump to workout <span aria-hidden="true">↓</span></a>
          </div>
          <div className="last-workout-card">
            <span className="status-dot" aria-hidden="true" />
            <div><p>LAST COMPLETED</p><h3 data-last-workout>Push · yesterday</h3><span>Saved on this device. Mark any workout below to update it.</span></div>
          </div>
        </section>

        <nav className="day-tabs" aria-label="Jump to workout cycle step">
          {cycleSteps.map((step) => step.kind === 'workout'
            ? <a key={step.day.id} href={`#${step.day.id}`} data-nav-workout={step.day.id} className={`day-tab${step.day.id === 'session-1' ? ' is-last-completed' : ''}`}><span>{step.day.short}</span><small>{step.day.eyebrow.split(' · ')[1]}</small></a>
            : <a key={step.id} href={`#${step.id}`} className="day-tab cycle-rest-tab"><span>{step.short}</span><small>{step.eyebrow.split(' · ')[1]}</small></a>)}
        </nav>
        {cycleSteps.map((step) => step.kind === 'workout' ? (
          <section key={step.day.id} id={step.day.id} data-workout-id={step.day.id} data-workout-name={step.day.eyebrow.split(' · ')[1]} className={`workout-day scroll-mt-32${step.day.id === 'session-1' ? ' is-last-completed' : ''}`}>
            <div className="day-heading"><div><p>{step.day.eyebrow}</p><h2>{step.day.title}</h2><span className="session-time"><Timer /> {step.day.time}</span></div><div className="day-summary"><p>{step.day.focus}</p><button type="button" className={`mark-complete${step.day.id === 'session-1' ? ' is-complete' : ''}`} data-mark-workout={step.day.id} aria-pressed={step.day.id === 'session-1'}><CheckCircle2 /><span>{step.day.id === 'session-1' ? 'Completed last time' : 'Mark as last completed'}</span></button></div></div>
            <div className="exercise-grid">{step.day.exercises.map((exercise, i) => <ExerciseCard key={`${step.day.id}-${exercise.name}`} exercise={exercise} index={i} />)}</div>
          </section>
        ) : (
          <section key={step.id} id={step.id} className="cycle-break scroll-mt-32">
            <span className="cycle-break-number">{step.short}</span>
            <div><p>{step.eyebrow}</p><h2>{step.title}</h2><span>{step.focus}</span></div>
          </section>
        ))}

        <section className="recovery-section">
          <div><p className="section-kicker">FIXED WEEKEND</p><h2>Recovery, then match day.</h2></div>
          <div className="recovery-card"><span className="recovery-day">SAT</span><div><h3>Full rest</h3><p>No lifting and no hard running. Easy walking and gentle mobility are fine.</p></div></div>
          <div className="recovery-card"><span className="recovery-day">SUN</span><div><h3>Cricket only</h3><p>Your matches replace lifting and conditioning. Prioritize carbohydrates, fluids and electrolytes.</p></div></div>
        </section>

        <section className="notes-grid">
          <div className="feature-note"><ShieldCheck /><div><h3>Neck-safe rule</h3><p>Keep your head neutral, stop any movement that increases neck pain, and keep shrugs controlled. Radiating pain, tingling or weakness needs a qualified clinician.</p></div></div>
          <div className="feature-note"><HeartPulse /><div><h3>Abs handled separately</h3><p>No ab exercises are programmed here because you train them in your morning routine. Keep that work controlled and recoverable.</p></div></div>
          <div className="feature-note"><Sparkles /><div><h3>How to progress</h3><p>Push, Pull, Lower A and Upper: finish set one near 2 RIR and set two near 1 RIR. Friday’s Lower B stays near 3 RIR. Add the smallest weight when both sets reach the top of the range cleanly.</p></div></div>
        </section>
      </section>
      <script src="./tracker.js" defer />
      <footer><p>ATHLETE 30 · Push · Pull · Lower A · Upper · Lower B · Rest · Cricket</p></footer>
    </main>
  );
}
