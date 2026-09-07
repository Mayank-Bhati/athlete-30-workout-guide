import {
  CheckCircle2, Dumbbell, ExternalLink, Flame,
  HeartPulse, Info, PlayCircle, ShieldCheck, Sparkles, Timer, Zap,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Motion = 'pull' | 'row' | 'curl' | 'raise' | 'press' | 'fly' | 'squat' | 'hinge' | 'thrust' | 'lunge' | 'knee' | 'hip' | 'calf' | 'core' | 'triceps' | 'shrug';
type Exercise = { name: string; options: string[]; muscle: string; sets: string; reps: string; rest: string; motion: Motion; cue: string; avoid: string };
type Day = { id: string; short: string; eyebrow: string; title: string; focus: string; time: string; exercises: Exercise[] };

const ex = (name: string, options: string[], muscle: string, reps: string, rest: string, motion: Motion, cue: string, avoid: string, sets = '2'): Exercise => ({ name, options, muscle, sets, reps, rest, motion, cue, avoid });

const days: Day[] = [
  {
    id: 'tue', short: 'Tue', eyebrow: 'LOWER A', title: 'Strength + posterior chain', focus: 'Your heavier lower session: deep squatting, hip hinging and glute strength with four full days before cricket.', time: '65 min',
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
    id: 'wed', short: 'Wed', eyebrow: 'PUSH', title: 'Chest + shoulders + triceps', focus: 'Pressing strength, upper-chest fullness, shoulder width and four direct working sets for triceps.', time: '60 min',
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
    id: 'thu', short: 'Thu', eyebrow: 'PULL', title: 'Lats + mid-back + traps + biceps', focus: 'Your V-taper and posture day, with three rowing grips, direct trap work and two biceps movements.', time: '70 min',
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
    id: 'fri', short: 'Fri', eyebrow: 'LOWER B', title: 'Hips + moderate legs', focus: 'A cricket-friendly lower session: glute priority, moderate loads and every set stopped with about three reps in reserve.', time: '60 min',
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
    id: 'sat', short: 'Sat', eyebrow: 'UPPER', title: 'Physique-priority upper body', focus: 'A complete upper session for chest, lat width, mid-back, shoulders, traps, triceps and two more biceps movements.', time: '70 min',
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

const demoLinks: Record<string, { url: string; provider: string }> = {
  'Wide-grip lat pulldown': { url: 'https://www.youtube.com/watch?v=CAwf7n6Luuc', provider: 'YouTube form tutorial' },
  'Single-arm cable lat pulldown': { url: 'https://www.youtube.com/watch?v=8zA8DjHRaq0', provider: 'YouTube form tutorial' },
  'Neutral-grip seated row': { url: 'https://wger.de/media/exercise-video/512/fff4c294-93f0-4926-b3a2-bf59ad4afaa5.MOV', provider: 'Wger exercise video' },
  'Straight-arm cable pulldown': { url: 'https://www.catalystathletics.com/exercise/907/Straight-Arm-Pulldown/', provider: 'Catalyst Athletics demo' },
  'Chest-supported dumbbell row': { url: 'https://www.youtube.com/watch?v=_b6ch2nIchk', provider: 'YouTube form tutorial' },
  'Reverse pec-deck fly': { url: 'https://www.youtube.com/watch?v=dC7jhEk-29A', provider: 'YouTube form tutorial' },
  'Incline dumbbell curl': { url: 'https://www.youtube.com/watch?v=1gCfaEWk_Ds', provider: 'YouTube form tutorial' },
  'Hammer curl': { url: 'https://wger.de/media/exercise-video/272/df069052-2173-4f24-855f-a0eebe729f24.MOV', provider: 'Wger exercise video' },
  'Hanging knee raise': { url: 'https://support.runna.com/en/articles/6376285-hanging-knee-raise-exercise-tutorial', provider: 'Runna video tutorial' },
  'Incline machine press': { url: 'https://www.youtube.com/watch?v=i3e4CG5tnfs', provider: 'YouTube form tutorial' },
  'Flat dumbbell press': { url: 'https://wger.de/media/exercise-video/75/080c799b-8afd-4130-8d72-9cef0cd79f54.MOV', provider: 'Wger exercise video' },
  'Pec-deck fly': { url: 'https://www.youtube.com/watch?v=g3T7LsEeDWQ', provider: 'YouTube form tutorial' },
  'Seated dumbbell shoulder press': { url: 'https://wger.de/media/exercise-video/567/64f33c19-1d96-4b7c-af17-6c6a4941c614.MOV', provider: 'Wger exercise video' },
  'Cable lateral raise': { url: 'https://www.youtube.com/watch?v=C64pUMkv0jQ', provider: 'YouTube form tutorial' },
  'Rope pressdown': { url: 'https://wger.de/media/exercise-video/659/1f2eb3b6-3185-429f-8330-26dc88f39aff.MOV', provider: 'Wger exercise video' },
  'Overhead cable extension': { url: 'https://www.youtube.com/watch?v=mRozZKkGIfg', provider: 'YouTube form tutorial' },
  'Pallof press': { url: 'https://www.youtube.com/watch?v=axgv7H_VQOo', provider: 'YouTube form tutorial' },
  'Smith squat': { url: 'https://wger.de/media/exercise-video/341/0cbfeace-dda9-4166-8424-f51358e88a4f.MOV', provider: 'Wger exercise video' },
  'Smith Romanian deadlift': { url: 'https://wger.de/media/exercise-video/507/307e7276-a14d-4ea0-b579-f5b0dbc6f5af.MOV', provider: 'Wger exercise video' },
  'Hip-thrust machine': { url: 'https://wger.de/media/exercise-video/294/45bacf4b-1bb6-4d47-8bd1-9f00eddd4019.MOV', provider: 'Wger exercise video' },
  'Bulgarian split squat': { url: 'https://www.youtube.com/watch?v=-4LVK1crLSw', provider: 'YouTube form tutorial' },
  'Seated leg curl': { url: 'https://wger.de/media/exercise-video/366/43df4b79-d4c3-4fbf-bcb5-e0d825b84120.MOV', provider: 'Wger exercise video' },
  'Leg extension': { url: 'https://www.youtube.com/watch?v=qOONjLjl8_Y', provider: 'YouTube exercise video' },
  'Hip abductor machine': { url: 'https://www.youtube.com/watch?v=wrkc297otlA', provider: 'YouTube exercise video' },
  'Hip adductor machine': { url: 'https://wger.de/media/exercise-video/12/5148c579-5df2-4618-9a7b-a2e29ac4dd7d.MOV', provider: 'Wger exercise video' },
  'Machine calf raise': { url: 'https://wger.de/media/exercise-video/590/a325ae2e-686b-4a1f-aff2-ba37fa3fa157.MOV', provider: 'Wger exercise video' },
  'Neutral-grip lat pulldown': { url: 'https://www.youtube.com/watch?v=MY6Pe1Vq8WY', provider: 'YouTube form tutorial' },
  'Wide-grip machine row': { url: 'https://www.youtube.com/watch?v=ef0_Q9vomyQ', provider: 'YouTube form tutorial' },
  'Single-arm cable row': { url: 'https://wger.de/media/exercise-video/349/9896d82e-d8b6-48af-bdd5-b8545dc523e9.MOV', provider: 'Wger exercise video' },
  'Rope face pull': { url: 'https://wger.de/media/exercise-video/222/245a824b-cd39-45f2-b251-2c0b7efead0d.MOV', provider: 'Wger exercise video' },
  'Cable rear-delt fly': { url: 'https://www.youtube.com/watch?v=dC7jhEk-29A', provider: 'YouTube form tutorial' },
  'Cable Y-raise': { url: 'https://www.youtube.com/watch?v=NBkMIWWkIKQ', provider: 'YouTube form tutorial' },
  'Dumbbell shrug': { url: 'https://wger.de/media/exercise-video/570/bd1f14a3-9d2b-4ec0-b6b9-e82d739f7e60.MOV', provider: 'Wger exercise video' },
  'Preacher curl': { url: 'https://wger.de/media/exercise-video/465/b64ca95b-c677-4f3b-bb50-f75edc81aa74.MOV', provider: 'Wger exercise video' },
  'Cable curl': { url: 'https://wger.de/media/exercise-video/95/ab770931-47d3-44fd-aef0-ac7a64c3b794.MOV', provider: 'Wger exercise video' },
  'Flat Smith press': { url: 'https://www.youtube.com/watch?v=2TBOciYPzkk', provider: 'YouTube form tutorial' },
  'Incline dumbbell press': { url: 'https://wger.de/media/exercise-video/537/b9c937e9-daeb-42a9-be8e-7a77e368478c.MOV', provider: 'Wger exercise video' },
  'Low-to-high cable fly': { url: 'https://www.youtube.com/watch?v=KFl3Re5UbPo', provider: 'YouTube form tutorial' },
  'Machine shoulder press': { url: 'https://wger.de/media/exercise-video/543/dbfd396b-1aab-4a64-a50b-2c31ff0a2cf7.MOV', provider: 'Wger exercise video' },
  'Leaning cable lateral raise': { url: 'https://www.youtube.com/watch?v=v45w8UM43IY', provider: 'YouTube form tutorial' },
  'Close-grip Smith press': { url: 'https://www.youtube.com/watch?v=z8UWdGwtzRM', provider: 'YouTube form tutorial' },
  'Single-arm cable extension': { url: 'https://wger.de/media/exercise-video/803/99e0001f-217a-4b11-823c-014d24a5415e.MOV', provider: 'Wger exercise video' },
  'Ab-wheel rollout': { url: 'https://www.youtube.com/watch?v=nCh8VfWY5_g', provider: 'YouTube form tutorial' },
  'Seated cable fly': { url: 'https://www.youtube.com/watch?v=928aRhhPP8I&t=164s', provider: 'Routine video demonstration' },
  'High-cable lateral raise': { url: 'https://www.youtube.com/watch?v=928aRhhPP8I&t=414s', provider: 'Routine video demonstration' },
  'Cross-body cable Y-raise': { url: 'https://www.youtube.com/watch?v=c3pbe3qzatQ&t=492s', provider: 'Routine video demonstration' },
  'Supinated machine row': { url: 'https://www.youtube.com/watch?v=spKGN0XzErU&t=307s', provider: 'Routine video demonstration' },
  'Bottom-half dumbbell pullover': { url: 'https://www.youtube.com/watch?v=spKGN0XzErU&t=381s', provider: 'Routine video demonstration' },
  'EZ-bar curl': { url: 'https://www.youtube.com/watch?v=spKGN0XzErU&t=563s', provider: 'Routine video demonstration' },
  'Long-stride dumbbell walking lunge': { url: 'https://www.youtube.com/watch?v=H6mRkx1x77k&t=305s', provider: 'Routine video demonstration' },
  'Leg press': { url: 'https://wger.de/media/exercise-video/371/6aae16b4-01b9-4eb4-935c-3250f84d2c59.MOV', provider: 'Wger exercise video' },
  'Bayesian cable curl': { url: 'https://www.youtube.com/watch?v=928aRhhPP8I&t=706s', provider: 'Routine video demonstration' },
  'Cross-body hammer curl': { url: 'https://wger.de/media/exercise-video/272/df069052-2173-4f24-855f-a0eebe729f24.MOV', provider: 'Wger exercise video' },
};

function ExerciseCard({ exercise, index }: { exercise: Exercise; index: number }) {
  const demo = demoLinks[exercise.name];
  return (
    <article className="exercise-card">
      <a className="real-demo" href={demo.url} target="_blank" rel="noreferrer" aria-label={`Open real demonstration for ${exercise.name}`}>
        <PlayCircle />
        <span><b>Watch real demonstration</b><small>{demo.provider}</small></span>
        <ExternalLink />
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
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground"><Dumbbell /></span><div><p className="font-heading text-lg font-black tracking-tight">ATHLETE 30</p><p className="hidden text-xs text-muted-foreground sm:block">Five-day muscle & posture plan</p></div></div>
          <Badge className="h-7 bg-accent px-3 text-accent-foreground">Month 1 plan</Badge>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_390px] lg:items-end">
          <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">Your training week</p><h1 className="max-w-3xl font-heading text-4xl font-black leading-[1.03] tracking-[-0.04em] sm:text-6xl">Build width. Stand taller. Stay fast.</h1><p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">Two lower sessions, two complete upper-body exposures and four direct biceps movements. Cricket Sunday, full recovery Monday. Abs stay in your separate morning routine.</p></div>
          <div className="summary-panel">
            <div><Flame /><p className="summary-value">86</p><p className="summary-label">weekly sets</p></div>
            <div><Timer /><p className="summary-value">5</p><p className="summary-label">gym days</p></div>
            <div><Zap /><p className="summary-value">4</p><p className="summary-label">biceps moves</p></div>
          </div>
        </div>

        <nav className="day-tabs" aria-label="Jump to workout day">
          {days.map((day) => <a key={day.id} href={`#${day.id}`} className="day-tab"><span>{day.short}</span><small>{day.eyebrow}</small></a>)}
        </nav>
        {days.map((day) => (
            <section key={day.id} id={day.id} className="workout-day scroll-mt-32">
              <div className="day-heading"><div><p>{day.eyebrow}</p><h2>{day.title}</h2></div><p>{day.focus}</p></div>
              <div className="exercise-grid">{day.exercises.map((exercise, i) => <ExerciseCard key={`${day.id}-${exercise.name}`} exercise={exercise} index={i} />)}</div>
            </section>
        ))}

        <section className="recovery-section">
          <div><p className="section-kicker">THE OTHER TWO DAYS</p><h2>Recover like it is part of training.</h2></div>
          <div className="recovery-card"><span className="recovery-day">SUN</span><div><h3>Cricket only</h3><p>Two T20 matches are your conditioning. Prioritize carbohydrates, fluids and electrolytes.</p></div></div>
          <div className="recovery-card"><span className="recovery-day">MON</span><div><h3>Full rest</h3><p>Easy walking and gentle mobility are fine. No lifting and no hard running.</p></div></div>
        </section>

        <section className="notes-grid">
          <div className="feature-note"><ShieldCheck /><div><h3>Neck-safe rule</h3><p>Keep your head neutral, stop any movement that increases neck pain, and keep shrugs controlled. Radiating pain, tingling or weakness needs a qualified clinician.</p></div></div>
          <div className="feature-note"><HeartPulse /><div><h3>Abs handled separately</h3><p>No ab exercises are programmed here because you train them in your morning routine. Keep that work controlled and recoverable.</p></div></div>
          <div className="feature-note"><Sparkles /><div><h3>How to progress</h3><p>Tue/Wed/Thu/Sat: finish set one near 2 RIR and set two near 1 RIR. Friday stays near 3 RIR. Add the smallest weight when both sets reach the top of the range cleanly.</p></div></div>
        </section>
      </section>
      <footer><p>ATHLETE 30 · Built for a five-day gym week and Sunday cricket</p></footer>
    </main>
  );
}
