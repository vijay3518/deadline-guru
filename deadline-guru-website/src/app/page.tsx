import Link from "next/link";
import { ArrowRight, BookOpenCheck, GraduationCap, Lightbulb, FileText, FlaskConical, MessageCircle, ShieldCheck, Clock3, UsersRound } from "lucide-react";

const services = [
  { icon: FileText, title: "Assignments", text: "Planning, research direction, structure, referencing, and editing support." },
  { icon: BookOpenCheck, title: "Dissertations", text: "Support with topic development, research design, analysis planning, and formatting." },
  { icon: FlaskConical, title: "Final-year projects", text: "Project ideation, technical guidance, documentation, and presentation preparation." }
];

const benefits = [
  { icon: ShieldCheck, title: "Quality-focused", text: "Clear, organised support tailored to your brief." },
  { icon: UsersRound, title: "Personal guidance", text: "Talk through your requirements with a real person." },
  { icon: Clock3, title: "Deadline-aware", text: "Plan milestones and work towards your submission date." }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> YOUR ACADEMIC SUPPORT PARTNER</span>
            <h1>Big ideas.<br /><span>Clear direction.</span><br />Better submissions.</h1>
            <p className="hero-description">Get structured academic guidance for assignments, dissertations, and final-year projects — from the first idea to the final review.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Discuss your project <ArrowRight size={18} /></Link>
              <a className="button button-secondary" href="https://wa.me/918309629331" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a>
            </div>
            <div className="hero-trust"><span><ShieldCheck size={17} /> Confidential communication</span><span><GraduationCap size={18} /> Student-focused support</span></div>
          </div>
          <div className="hero-art" aria-label="Academic planning illustration">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="floating-card card-top"><span className="mini-icon orange"><Lightbulb size={20} /></span><span><b>Start with an idea</b><small>Build a clear plan</small></span></div>
            <div className="study-board">
              <div className="board-top"><span className="board-dot" /><span className="board-dot" /><span className="board-dot" /><span className="board-label">YOUR NEXT MILESTONE</span></div>
              <div className="board-title">Project roadmap</div>
              <div className="roadmap-row"><span className="step-check">✓</span><span><b>Understand the brief</b><small>Define your requirements</small></span><span className="step-status">DONE</span></div>
              <div className="roadmap-row"><span className="step-check">2</span><span><b>Research & plan</b><small>Organise your next steps</small></span><span className="step-status active">NEXT</span></div>
              <div className="roadmap-row"><span className="step-number">3</span><span><b>Review & refine</b><small>Prepare for submission</small></span></div>
              <div className="progress-label"><span>Progress starts with a plan</span><span>↗</span></div>
              <div className="progress-track"><span /></div>
            </div>
            <div className="floating-card card-bottom"><span className="mini-icon teal"><BookOpenCheck size={20} /></span><span><b>From idea to submission</b><small>One step at a time</small></span></div>
            <div className="art-spark spark-one">✳</div><div className="art-spark spark-two">✦</div>
          </div>
        </div>
        <div className="container hero-bottom"><span>ASSIGNMENTS</span><i /><span>DISSERTATIONS</span><i /><span>FINAL-YEAR PROJECTS</span><i /><span>RESEARCH GUIDANCE</span></div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">HOW WE CAN HELP</span><h2>Support for every stage<br /><span>of your academic journey.</span></h2><p>Practical guidance to help you understand the task, organise your ideas, and move forward with confidence.</p></div>
          <div className="service-grid">
            {services.map((service, index) => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className={`service-icon service-icon-${index}`}><Icon size={25} /></div><span className="card-index">0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p><Link href="/contact" className="text-link">Ask about this service <ArrowRight size={16} /></Link></article>; })}
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container approach-grid">
          <div className="approach-visual"><div className="approach-circle circle-a" /><div className="approach-circle circle-b" /><div className="approach-note"><span className="note-icon"><GraduationCap size={28} /></span><b>Make your next step a clear one.</b><p>Good work begins with good planning.</p><div className="note-lines"><i /><i /><i /></div></div><span className="approach-sticker">IDEA → PLAN → PROGRESS</span></div>
          <div className="approach-copy"><span className="eyebrow">THE DEADLINE GURU APPROACH</span><h2>Less confusion.<br /><span>More direction.</span></h2><p>Every brief is different. We help you break down your requirements, identify the next steps, and focus on the parts that need attention.</p><div className="benefit-list">{benefits.map(({icon: Icon, title, text}) => <div className="benefit-row" key={title}><span className="benefit-icon"><Icon size={20} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><Link className="button button-primary" href="/about">Get to know us <ArrowRight size={18} /></Link></div>
        </div>
      </section>

      <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow eyebrow-light">READY TO GET STARTED?</span><h2>Let’s talk about<br />your next submission.</h2><p>Share your requirements and deadline. We’ll help you understand the next steps.</p></div><Link className="button button-white" href="/contact">Contact Deadline Guru <ArrowRight size={18} /></Link><div className="cta-decoration">DG</div></div></section>
    </>
  );
}