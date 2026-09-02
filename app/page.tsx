import {
  CheckCircle2, Dumbbell, ExternalLink, Flame,
  HeartPulse, Info, PlayCircle, ShieldCheck, Sparkles, Timer, Zap,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Motion = 'pull' | 'row' | 'curl' | 'raise' | 'press' | 'fly' | 'squat' | 'hinge' | 'thrust' | 'lunge' | 'knee' | 'hip' | 'calf' | 'core' | 'triceps' | 'shrug';
type Exercise = { name: string; options: string[]; muscle: string; sets: string; reps: string; rest: string; motion: Motion; cue: string; avoid: string };
type Day = { id: string; short: string; eyebrow: string; title: string; focus: string; time: string; exercises: Exercise[] };

const ex = (name: string, options: string[], muscle: string, reps: string, rest: string, motion: Motion, cue: string, avoid: string): Exercise => ({ name, options, muscle, sets: '2', reps, rest, motion, cue, avoid });

const days: Day[] = [
  {
    id: 'tue', short: 'Tue', eyebrow: 'PULL A', title: 'Lat width + biceps', focus: 'Build the V-taper with vertical pulls, then give biceps four direct working sets.', time: '60 min',
    exercises: [
      ex('Wide-grip lat pulldown', ['Neutral-grip pulldown', 'Underhand pulldown'], 'Lats', '6-10', '90 sec', 'pull', 'Chest tall; drive elbows down toward your ribs.', 'Do not swing or pull the bar behind your neck.'),
      ex('Single-arm cable lat pulldown', ['Half-kneeling one-arm pulldown', 'One-arm high cable row'], 'Lower lats', '8-12 / side', '75 sec', 'pull', 'Reach fully, then pull your elbow toward the back pocket.', 'Keep the shoulder away from your ear.'),
      ex('Neutral-grip seated row', ['Wide overhand machine row', 'Supinated machine row'], 'Mid-back', '8-12', '90 sec', 'row', 'Pause for one second with shoulder blades gently together.', 'Do not turn it into a lower-back swing.'),
      ex('Straight-arm cable pulldown', ['Rope pulldown', 'Dumbbell pullover'], 'Lats', '10-15', '60 sec', 'pull', 'Keep arms nearly straight and finish with hands by thighs.', 'Do not bend the elbows into a pressdown.'),
      ex('Chest-supported dumbbell row', ['Chest-supported machine row', 'Incline-bench high row'], 'Mid-back', '8-12', '90 sec', 'row', 'Let shoulder blades reach, then row without lifting your chest.', 'Do not shrug at the top.'),
      ex('Reverse pec-deck fly', ['Cable rear-delt fly', 'Incline rear-delt raise'], 'Rear delts', '12-20', '60 sec', 'fly', 'Lead with elbows and open the arms in a wide arc.', 'Use a load that does not pull your head forward.'),
      ex('Incline dumbbell curl', ['Facing-away cable curl', 'Alternating dumbbell curl'], 'Biceps', '8-12', '75 sec', 'curl', 'Keep the upper arm still and reach a full elbow extension.', 'Do not roll the shoulders forward.'),
      ex('Hammer curl', ['Rope hammer curl', 'Cross-body hammer curl'], 'Biceps + brachialis', '10-15', '60 sec', 'curl', 'Use a neutral grip and control the lowering phase.', 'Do not throw the dumbbells up with your hips.'),
      ex('Hanging knee raise', ['Captain-chair knee raise', 'Cable crunch'], 'Core', '10-15', '60 sec', 'core', 'Curl the pelvis up instead of only lifting the thighs.', 'Avoid swinging between reps.'),
    ],
  },
  {
    id: 'wed', short: 'Wed', eyebrow: 'PUSH A', title: 'Chest + shoulders + triceps', focus: 'Upper-chest fullness, round delts and four direct sets for triceps.', time: '55 min',
    exercises: [
      ex('Incline machine press', ['Smith incline press', 'Incline dumbbell press'], 'Upper chest', '6-10', '90 sec', 'press', 'Set a moderate incline; press up and slightly inward.', 'Do not flare elbows straight sideways.'),
      ex('Flat dumbbell press', ['Flat machine press', 'Smith flat press'], 'Chest', '8-12', '90 sec', 'press', 'Plant feet and lower with forearms close to vertical.', 'Do not bounce or shorten the bottom range.'),
      ex('Pec-deck fly', ['Mid-height cable fly', 'Single-arm cable fly'], 'Chest', '10-15', '60 sec', 'fly', 'Bring upper arms together while keeping chest lifted.', 'Do not force an excessive shoulder stretch.'),
      ex('Seated dumbbell shoulder press', ['Machine shoulder press', 'Smith shoulder press'], 'Front + side delts', '6-10', '90 sec', 'press', 'Keep ribs stacked and press without craning your neck.', 'Do not overarch the lower back.'),
      ex('Cable lateral raise', ['Dumbbell lateral raise', 'Leaning cable lateral raise'], 'Side delts', '12-20', '60 sec', 'raise', 'Lead with elbows and stop near shoulder height.', 'Do not shrug the weight upward.'),
      ex('Rope pressdown', ['Straight-bar pressdown', 'Single-arm pressdown'], 'Triceps', '8-12', '60 sec', 'triceps', 'Pin elbows to your sides and fully straighten.', 'Do not let the shoulders roll forward.'),
      ex('Overhead cable extension', ['Rope overhead extension', 'Single-dumbbell extension'], 'Long-head triceps', '10-15', '60 sec', 'triceps', 'Keep upper arms angled forward and extend completely.', 'Do not flare the elbows aggressively.'),
      ex('Pallof press', ['Tall-kneeling Pallof press', 'Forearm plank'], 'Core', '10-12 / side', '45 sec', 'core', 'Brace, exhale, and resist rotation as arms extend.', 'Do not twist toward the cable.'),
    ],
  },
  {
    id: 'thu', short: 'Thu', eyebrow: 'LOWER', title: 'Legs + hip priority', focus: 'The only hard leg day: glutes and hips lead, with enough time to recover before Sunday cricket.', time: '65 min',
    exercises: [
      ex('Smith squat', ['Leg press', 'Smith box squat'], 'Quads + glutes', '6-10', '120 sec', 'squat', 'Brace first; sit between your hips and drive through mid-foot.', 'Do not let knees collapse inward.'),
      ex('Smith Romanian deadlift', ['Dumbbell Romanian deadlift', 'Cable pull-through'], 'Hamstrings + glutes', '8-10', '90 sec', 'hinge', 'Push hips backward with a long spine and soft knees.', 'Do not chase depth by rounding your back.'),
      ex('Hip-thrust machine', ['Smith hip thrust', 'Dumbbell hip thrust'], 'Glutes', '8-12', '90 sec', 'thrust', 'Tuck the pelvis slightly and pause at full hip extension.', 'Do not finish by arching your lower back.'),
      ex('Bulgarian split squat', ['Reverse dumbbell lunge', 'Smith split squat'], 'Glutes + quads', '8-12 / side', '90 sec', 'lunge', 'Use a long enough stance to keep the front heel grounded.', 'Do not push off the back foot.'),
      ex('Seated leg curl', ['Lying leg curl', 'Single-leg curl'], 'Hamstrings', '10-15', '60 sec', 'knee', 'Curl smoothly and squeeze without lifting the hips.', 'Do not let the stack crash down.'),
      ex('Leg extension', ['Single-leg extension', 'Slow-tempo leg extension'], 'Quads', '10-15', '60 sec', 'knee', 'Align the machine pivot with your knee and extend smoothly.', 'Do not kick explosively into lockout.'),
      ex('Hip abductor machine', ['Cable standing abduction', 'Lateral band walk'], 'Side glutes', '12-20', '45 sec', 'hip', 'Open from the hips and pause without bouncing.', 'Do not lean far back to manufacture range.'),
      ex('Hip adductor machine', ['Cable standing adduction', 'Copenhagen plank'], 'Inner thighs', '12-20', '45 sec', 'hip', 'Close the legs smoothly and control the return.', 'Do not force a painful stretch.'),
      ex('Machine calf raise', ['Leg-press calf raise', 'Smith standing calf raise'], 'Calves', '10-15', '60 sec', 'calf', 'Pause in the stretch and rise onto the big toe.', 'Do not bounce through the bottom.'),
    ],
  },
  {
    id: 'fri', short: 'Fri', eyebrow: 'PULL B', title: 'Mid-back + traps + biceps', focus: 'Posture-oriented pulling, trap development and another four direct biceps sets.', time: '60 min',
    exercises: [
      ex('Neutral-grip lat pulldown', ['Close underhand pulldown', 'Assisted pull-up'], 'Lats', '8-12', '90 sec', 'pull', 'Pull shoulders down first, then bring elbows toward ribs.', 'Do not lead by jutting your chin forward.'),
      ex('Wide-grip machine row', ['Chest-supported high row', 'Wide cable row'], 'Mid-back', '8-12', '90 sec', 'row', 'Row toward upper ribs and pause without shrugging.', 'Do not pull the elbows far behind your torso.'),
      ex('Single-arm cable row', ['One-arm dumbbell row', 'Split-stance cable row'], 'Lats + mid-back', '10-12 / side', '75 sec', 'row', 'Stay square and let the shoulder blade move naturally.', 'Do not twist through your waist.'),
      ex('Rope face pull', ['Cable high row to face', 'Band face pull'], 'Rear delts + mid traps', '12-20', '60 sec', 'row', 'Pull toward eyebrow level and rotate thumbs behind you.', 'Do not shrug or overextend the neck.'),
      ex('Cable rear-delt fly', ['Reverse pec deck', 'Incline rear-delt raise'], 'Rear delts', '12-20', '60 sec', 'fly', 'Open wide with soft elbows and a quiet torso.', 'Do not turn it into a heavy row.'),
      ex('Cable Y-raise', ['Incline-bench Y-raise', 'Wall slide with lift-off'], 'Lower traps', '12-15', '45 sec', 'raise', 'Raise arms in a Y with shoulders kept away from ears.', 'Do not use momentum or a heavy load.'),
      ex('Dumbbell shrug', ['Smith shrug', 'Cable shrug'], 'Upper traps', '10-15', '75 sec', 'shrug', 'Lift shoulders straight up, pause, then lower fully.', 'Never roll the shoulders in circles.'),
      ex('Preacher curl', ['Machine preacher curl', 'Spider curl'], 'Biceps', '8-12', '75 sec', 'curl', 'Keep the upper arm supported and lower under control.', 'Do not hyperextend the elbow at the bottom.'),
      ex('Cable curl', ['EZ-bar curl', 'Supinating dumbbell curl'], 'Biceps', '10-15', '60 sec', 'curl', 'Keep constant tension and squeeze without moving elbows.', 'Do not lean backward as fatigue rises.'),
    ],
  },
  {
    id: 'sat', short: 'Sat', eyebrow: 'PUSH B', title: 'Shoulders + chest + triceps', focus: 'Finish the week with delt width, triceps thickness and controlled pressing before match day.', time: '55 min',
    exercises: [
      ex('Flat Smith press', ['Flat dumbbell press', 'Flat machine press'], 'Chest', '6-10', '90 sec', 'press', 'Set the bench so the bar reaches mid-chest.', 'Keep wrists stacked instead of bent backward.'),
      ex('Incline dumbbell press', ['Incline machine press', 'Low-incline Smith press'], 'Upper chest', '8-12', '90 sec', 'press', 'Use a low-to-moderate incline and control the descent.', 'Do not turn it into a vertical shoulder press.'),
      ex('Low-to-high cable fly', ['Pec-deck fly', 'Incline cable fly'], 'Upper chest', '10-15', '60 sec', 'fly', 'Sweep hands upward and inward while keeping ribs down.', 'Do not bend and straighten the elbows each rep.'),
      ex('Machine shoulder press', ['Arnold press', 'Seated dumbbell press'], 'Delts', '8-12', '90 sec', 'press', 'Keep head neutral and stop before losing rib position.', 'Do not press through neck pain.'),
      ex('Leaning cable lateral raise', ['Dumbbell lateral raise', 'Machine lateral raise'], 'Side delts', '12-20', '60 sec', 'raise', 'Raise in the shoulder-blade plane with a soft elbow.', 'Do not lead with the hand above the elbow.'),
      ex('Reverse pec-deck fly', ['Cable rear-delt fly', 'Chest-supported rear-delt raise'], 'Rear delts', '12-20', '60 sec', 'fly', 'Reach wide and keep the shoulder blades controlled.', 'Do not thrust the chest off the pad.'),
      ex('Close-grip Smith press', ['Assisted dip', 'Close-grip dumbbell press'], 'Triceps', '6-10', '90 sec', 'press', 'Keep elbows about 30 degrees from the body and press firmly.', 'Do not make the grip painfully narrow.'),
      ex('Single-arm cable extension', ['Rope overhead extension', 'Cross-body extension'], 'Triceps', '10-15 / side', '60 sec', 'triceps', 'Fix the upper arm and straighten the elbow completely.', 'Do not twist the shoulder to finish.'),
      ex('Ab-wheel rollout', ['Stability-ball rollout', 'Cable woodchop'], 'Core', '8-15', '60 sec', 'core', 'Squeeze glutes and extend only as far as you can brace.', 'Do not let the lower back sag.'),
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
          <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">Your training week</p><h1 className="max-w-3xl font-heading text-4xl font-black leading-[1.03] tracking-[-0.04em] sm:text-6xl">Build width. Stand taller. Stay fast.</h1><p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">Two direct biceps exercises on both pull days. Two hard sets per movement. Cricket Sunday, full recovery Monday.</p></div>
          <div className="summary-panel">
            <div><Flame /><p className="summary-value">88</p><p className="summary-label">weekly sets</p></div>
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
          <div className="recovery-card"><span className="recovery-day">MON</span><div><h3>Full rest</h3><p>Easy walking and the posture reset are fine. No lifting and no hard running.</p></div></div>
        </section>

        <section className="notes-grid">
          <div className="feature-note"><ShieldCheck /><div><h3>Neck-safe rule</h3><p>Keep your head neutral, stop any movement that increases neck pain, and keep shrugs controlled. Radiating pain, tingling or weakness needs a qualified clinician.</p></div></div>
          <div className="feature-note"><HeartPulse /><div><h3>Posture reset</h3><p>Most days: chin tucks, wall slides, thoracic extension and a doorway chest stretch for 1-2 easy sets.</p></div></div>
          <div className="feature-note"><Sparkles /><div><h3>How to progress</h3><p>Leave 1-2 good reps in reserve. When both sets reach the top of the range, add the smallest available weight next time.</p></div></div>
        </section>
      </section>
      <footer><p>ATHLETE 30 · Built for a five-day gym week and Sunday cricket</p></footer>
    </main>
  );
}
