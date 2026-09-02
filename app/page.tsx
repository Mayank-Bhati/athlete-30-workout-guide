'use client';

import { useMemo, useState } from 'react';
import {
  Check, CheckCircle2, ChevronRight, Circle, Dumbbell, Flame,
  HeartPulse, Info, RotateCcw, ShieldCheck, Sparkles, Timer, Zap,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

function MovementDemo({ motion, name }: { motion: Motion; name: string }) {
  return (
    <div className={`demo demo-${motion}`} role="img" aria-label={`Looping movement guide for ${name}`}>
      <span className="demo-path" />
      <span className="demo-tool" />
      <div className="figure">
        <span className="head" /><span className="torso" />
        <span className="arm arm-left" /><span className="arm arm-right" />
        <span className="forearm forearm-left" /><span className="forearm forearm-right" />
        <span className="leg leg-left" /><span className="leg leg-right" />
        <span className="lower-leg lower-leg-left" /><span className="lower-leg lower-leg-right" />
      </div>
      <span className="demo-label">START <ChevronRight className="size-3" /> FINISH</span>
    </div>
  );
}

function ExerciseCard({ exercise, index, dayId, completed, onToggle }: { exercise: Exercise; index: number; dayId: string; completed: boolean; onToggle: () => void }) {
  const [variant, setVariant] = useState(0);
  const names = [exercise.name, ...exercise.options];
  const activeName = names[variant];
  const rotate = () => setVariant((variant + 1) % names.length);
  return (
    <article className={`exercise-card ${completed ? 'is-complete' : ''}`}>
      <MovementDemo motion={exercise.motion} name={activeName} />
      <div className="exercise-body">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div><p className="exercise-number">{String(index + 1).padStart(2, '0')} / {exercise.muscle}</p><h3>{activeName}</h3></div>
          <Button variant={completed ? 'default' : 'outline'} size="icon" aria-label={completed ? `Mark ${activeName} incomplete` : `Mark ${activeName} complete`} onClick={onToggle}>{completed ? <Check /> : <Circle />}</Button>
        </div>
        <div className="prescription"><span><b>{exercise.sets}</b> sets</span><span><b>{exercise.reps}</b> reps</span><span><b>{exercise.rest}</b> rest</span></div>
        <p className="cue"><CheckCircle2 /> {exercise.cue}</p>
        <p className="avoid"><Info /> {exercise.avoid}</p>
        <Button variant="ghost" size="sm" className="mt-4 px-0 text-primary hover:bg-transparent hover:text-primary/80" onClick={rotate} aria-label={`Change variation for exercise ${index + 1} on ${dayId}`}><RotateCcw /> Change variation</Button>
        <div className="mt-2 flex flex-wrap gap-1.5" aria-label="Available variations">{names.map((name, i) => <span key={name} className={`variant-dot ${i === variant ? 'active' : ''}`} title={name} />)}</div>
      </div>
    </article>
  );
}

export default function Home() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [activeDay, setActiveDay] = useState('tue');
  const current = useMemo(() => days.find((d) => d.id === activeDay) ?? days[0], [activeDay]);
  const done = current.exercises.filter((_, i) => completed[`${current.id}-${i}`]).length;
  const toggle = (key: string) => setCompleted((value) => ({ ...value, [key]: !value[key] }));

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
            <div><Flame /><p className="summary-value">{current.exercises.length * 2}</p><p className="summary-label">working sets</p></div>
            <div><Timer /><p className="summary-value">{current.time.replace(' min', '')}</p><p className="summary-label">minutes</p></div>
            <div><Zap /><p className="summary-value">{done}/{current.exercises.length}</p><p className="summary-label">completed</p></div>
          </div>
        </div>

        <Tabs value={activeDay} onValueChange={setActiveDay}>
          <TabsList className="day-tabs">
            {days.map((day) => <TabsTrigger key={day.id} value={day.id} className="day-tab"><span>{day.short}</span><small>{day.eyebrow}</small></TabsTrigger>)}
          </TabsList>
          {days.map((day) => (
            <TabsContent key={day.id} value={day.id}>
              <div className="day-heading"><div><p>{day.eyebrow}</p><h2>{day.title}</h2></div><p>{day.focus}</p></div>
              <div className="exercise-grid">{day.exercises.map((exercise, i) => <ExerciseCard key={`${day.id}-${exercise.name}`} exercise={exercise} index={i} dayId={day.id} completed={!!completed[`${day.id}-${i}`]} onToggle={() => toggle(`${day.id}-${i}`)} />)}</div>
            </TabsContent>
          ))}
        </Tabs>

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
