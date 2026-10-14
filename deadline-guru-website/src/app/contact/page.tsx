import { Phone, MessageCircle, Clock3, Mail, MapPin, ArrowUpRight } from "lucide-react";

export const metadata = { title: "Contact Us | Deadline Guru", description: "Contact Deadline Guru about assignment guidance, dissertation support, and final-year projects." };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-page-hero"><div className="container"><span className="eyebrow"><span className="eyebrow-dot" /> CONTACT US</span><h1>Your next step starts<br /><span>with a conversation.</span></h1><p>Tell us about your assignment, dissertation, or project. We’ll help you work out what support may fit your needs.</p></div></section>
      <section className="section contact-section"><div className="container contact-grid">
        <div className="contact-intro"><span className="eyebrow">GET IN TOUCH</span><h2>We’re ready to<br /><span>hear from you.</span></h2><p>Call or message us with your requirements. To help us understand your task, you can share the subject, type of work, deadline, and any instructions you have.</p>
          <div className="contact-method"><span className="contact-method-icon"><Phone size={21} /></span><div><small>CALL US</small><a href="tel:8309629331">8309629331</a><a href="tel:9381326651">9381326651</a></div></div>
          <div className="contact-method"><span className="contact-method-icon whatsapp"><MessageCircle size={21} /></span><div><small>WHATSAPP</small><a href="https://wa.me/918309629331" target="_blank" rel="noreferrer">Chat with Deadline Guru <ArrowUpRight size={14} /></a><a href="https://wa.me/919381326651" target="_blank" rel="noreferrer">Message the second number <ArrowUpRight size={14} /></a></div></div>
          <div className="contact-method"><span className="contact-method-icon"><Clock3 size={21} /></span><div><small>HELP US PLAN</small><p>Share your deadline and requirements when you contact us.</p></div></div>
        </div>
        <div className="contact-form-card"><div className="form-card-heading"><span className="form-symbol"><Mail size={22} /></span><div><h3>Quick enquiry</h3><p>Opens a pre-filled WhatsApp message.</p></div></div>
          <form onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const data = new FormData(form);
            const message = [
              `Hello Deadline Guru, my name is ${data.get("name")}.`,
              `Service: ${data.get("service")}.`,
              data.get("deadline") ? `Deadline: ${data.get("deadline")}.` : "",
              data.get("message") ? `Requirements: ${data.get("message")}` : ""
            ].filter(Boolean).join("\\n");
            window.open(`https://wa.me/918309629331?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
          }}>
            <label htmlFor="name">Your name</label><input id="name" name="name" placeholder="Enter your name" required />
            <label htmlFor="service">What do you need help with?</label><select id="service" name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Assignment guidance</option><option>Dissertation support</option><option>Final-year project</option><option>Research and editing support</option><option>Other enquiry</option></select>
            <label htmlFor="deadline">Your deadline (optional)</label><input id="deadline" name="deadline" placeholder="e.g. 20 November" />
            <label htmlFor="message">Briefly describe your requirements</label><textarea id="message" name="message" rows={4} placeholder="Subject, course, project details..." />
            <button className="button button-primary form-submit" type="submit">Send enquiry on WhatsApp <ArrowUpRight size={18} /></button>
            <p className="form-disclaimer">Your message will be prepared for WhatsApp. You can review it before sending.</p>
          </form>
        </div>
      </div></section>
      <section className="contact-bottom"><div className="container contact-bottom-inner"><MapPin size={21} /><div><b>Have a quick question?</b><p>Call us directly and tell us how we can help.</p></div><a href="tel:8309629331">Call Deadline Guru <ArrowUpRight size={16} /></a></div></section>
    </>
  );
}