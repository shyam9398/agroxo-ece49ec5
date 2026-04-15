import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-background">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Leaf className="w-5 h-5" /> Agroxo
        </a>
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#technology" className="hover:text-primary transition-colors">Technology</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Agroxo. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
