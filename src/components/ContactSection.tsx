import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const ContactSection = () => (
  <SectionWrapper id="contact" dark>
    <SectionHeading badge="Contact" title="Get in Touch" subtitle="Have questions or want to partner with us? Drop us a message." />
    <form onSubmit={(e) => e.preventDefault()} className="max-w-lg mx-auto space-y-5">
      <Input placeholder="Your Name" className="bg-background" />
      <Input type="email" placeholder="Your Email" className="bg-background" />
      <Textarea placeholder="Your Message" rows={5} className="bg-background" />
      <Button size="lg" className="w-full gap-2">
        Send Message <Send className="w-4 h-4" />
      </Button>
    </form>
  </SectionWrapper>
);

export default ContactSection;
