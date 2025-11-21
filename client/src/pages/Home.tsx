import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Globe, ExternalLink } from "lucide-react";
import Starfield from "@/components/Starfield";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans relative overflow-hidden">
      {/* Cosmic Starfield Background */}
      <Starfield />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 pointer-events-none z-0" />
      
      <div className="container py-8 md:py-12 relative z-10">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
          
          {/* Hero Module with Profile Image */}
          <Card className="md:col-span-8 md:row-span-2 p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border shadow-lg shadow-accent/5">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Profile Image */}
                <div className="shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg shadow-accent/20 ring-2 ring-accent/10">
                    <img 
                      src="/profile.jpg" 
                      alt="Amod Sandeepa Sahabandu" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Hero Text */}
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
                    Amod Sandeepa Sahabandu
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                    Engineering that matters. Specializing in <span className="text-accent font-medium">LLMOps</span> and architecting <span className="text-accent font-medium">Custom AI Solutions</span>.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 mt-6">
                <div className="space-y-2 font-mono text-sm text-muted-foreground">
                  <p><span className="text-primary">Status:</span> Consultant GenAI Engineer @ Arcadea Group (Toronto/Remote)</p>
                  <p><span className="text-primary">Location:</span> Earth (Base: Sri Lanka)</p>
                </div>
                
                {/* Key Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4 border-t border-border/50">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-accent">77k+</p>
                    <p className="text-xs text-muted-foreground">Dataset Downloads</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-accent">3+</p>
                    <p className="text-xs text-muted-foreground">Years in AI/ML</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-accent">10+</p>
                    <p className="text-xs text-muted-foreground">Production Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Links/Socials Module */}
          <Card className="md:col-span-4 md:row-span-1 p-6 bg-card/80 backdrop-blur-sm border-border shadow-lg shadow-accent/5">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Connect</h2>
            <div className="space-y-3">
              <a href="https://github.com/amod-ml" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <Github className="w-5 h-5" />
                <span className="font-mono text-sm">GitHub</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://huggingface.co/Amod" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <Globe className="w-5 h-5" />
                <span className="font-mono text-sm">HuggingFace</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/in/amod-sandeepa-sahabandu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <Linkedin className="w-5 h-5" />
                <span className="font-mono text-sm">LinkedIn</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://medium.com/@amodwrites" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <Globe className="w-5 h-5" />
                <span className="font-mono text-sm">Medium</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="mailto:amodwrites@gmail.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <Mail className="w-5 h-5" />
                <span className="font-mono text-sm">Email</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </Card>

          {/* Stack Module - Visual */}
          <Card className="md:col-span-4 md:row-span-1 p-6 bg-card/80 backdrop-blur-sm border-border shadow-lg shadow-accent/5">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Stack</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Core</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">FastAPI</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">Rust</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">SvelteKit</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Agentic</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-accent/20 text-accent-foreground font-mono text-xs rounded border border-accent/30">Agno</span>
                  <span className="px-2 py-1 bg-accent/20 text-accent-foreground font-mono text-xs rounded border border-accent/30">PydanticAI</span>
                  <span className="px-2 py-1 bg-accent/20 text-accent-foreground font-mono text-xs rounded border border-accent/30">CrewAI</span>
                  <span className="px-2 py-1 bg-accent/20 text-accent-foreground font-mono text-xs rounded border border-accent/30">Google ADK</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">ML/LLM</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">QLoRA</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">PEFT</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">PyTorch</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">HuggingFace</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">RAG</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Infra</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">AWS Lambda</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">Fargate</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">Vercel</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground font-mono text-xs rounded">GCP Vertex</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Featured Work Module - 3 Projects */}
          <Card className="md:col-span-12 p-8 bg-card/80 backdrop-blur-sm border-border shadow-lg shadow-accent/5">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Project 1 */}
              <div className="space-y-3 group">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">amod.live</h3>
                  <a href="https://amod.live" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A privacy-aware, serverless transcription service built with SvelteKit and deployed on Vercel. Features technical jargon recognition ("CrewAI", "LLM") and strict no-logs policy on EU infra.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground font-mono text-xs rounded">SvelteKit</span>
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground font-mono text-xs rounded">Vercel</span>
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground font-mono text-xs rounded">Privacy-first</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="space-y-3 group">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">Mental Health Dataset</h3>
                  <a href="https://huggingface.co/Amod" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Created the most downloaded mental health conversational dataset on Hugging Face (77k+ downloads). Fine-tuned Mistral7B/Falcon7B for therapy applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground font-mono text-xs rounded">HuggingFace</span>
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground font-mono text-xs rounded">Fine-tuning</span>
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground font-mono text-xs rounded">77k+ DLs</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="space-y-3 group">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">Multi-Agent Support</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Architected a serverless (AWS Lambda/SQS) multi-agent system using CrewAI that handles real-time event streaming and FIFO workflows.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground font-mono text-xs rounded">CrewAI</span>
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground font-mono text-xs rounded">AWS Lambda</span>
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground font-mono text-xs rounded">SQS</span>
                </div>
              </div>

            </div>
          </Card>

          {/* Experience Timeline Module */}
          <Card className="md:col-span-12 p-8 bg-card/80 backdrop-blur-sm border-border shadow-lg shadow-accent/5">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Experience</h2>
            <div className="space-y-6">
              
              {/* Experience 1 */}
              <div className="border-l-2 border-accent pl-6 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Consultant Generative AI Engineer</h3>
                    <p className="text-sm text-accent font-medium">Arcadea Group</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mt-1 md:mt-0">2025 - Present</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leading AI strategy for Vertical SaaS acquisitions and pipeline optimization. Toronto/Remote.
                </p>
              </div>

              {/* Experience 2 */}
              <div className="border-l-2 border-border pl-6 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Industrial AI & Math Modeling Advisory</h3>
                    <p className="text-sm text-muted-foreground font-medium">AyistGroup</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mt-1 md:mt-0">2024 - Present</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Developing digital-twin frameworks and MLOps architecture.
                </p>
              </div>

              {/* Experience 3 */}
              <div className="border-l-2 border-border pl-6 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">AI/ML Engineer</h3>
                    <p className="text-sm text-muted-foreground font-medium">Altrium</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mt-1 md:mt-0">2024 - Present</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Spearheaded the Automated AI Interview System (Sentiva) and multi-agent architectures.
                </p>
              </div>

            </div>
          </Card>

        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © 2025 Amod Sandeepa Sahabandu. Built with precision.
          </p>
        </div>
      </div>
    </div>
  );
}
