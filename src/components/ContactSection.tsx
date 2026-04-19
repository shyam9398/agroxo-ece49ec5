import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const CONTACT_EMAIL = "agroxo.founder@gmail.com";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name || "Website"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app to send the message ✉️");
  };

  return (
    <SectionWrapper id="contact" dark>
      <SectionHeading badge="Contact" title="Get in Touch" subtitle="Have questions or want to partner with us? Drop us a message." />
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">
        <Input placeholder="Your Name" className="bg-background" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <Input type="email" placeholder="Your Email" className="bg-background" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <Textarea placeholder="Your Message" rows={5} className="bg-background" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
        <Button size="lg" className="w-full gap-2" type="submit">
          Send Message <Send className="w-4 h-4" />
        </Button>
      </form>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mt-8 mx-auto flex items-center justify-center gap-2 max-w-fit px-5 py-2.5 rounded-full bg-primary text-primary-foreground border border-primary shadow-lg text-sm font-medium hover:bg-primary/90 hover:scale-105 transition-all"
      >
        <Mail className="w-4 h-4" /> Or contact us directly: {CONTACT_EMAIL}
      </a>
    </SectionWrapper>
  );
};

export default ContactSection;
