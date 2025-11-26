import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react";
import Starfield from "@/components/Starfield";
import HuggingFaceIcon from "@/components/icons/HuggingFaceIcon";
import MediumIcon from "@/components/icons/MediumIcon";

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
                  <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
                    Engineering that matters. Specializing in <span className="text-accent font-medium">LLMOps</span> and architecting <span className="text-accent font-medium">Custom AI Solutions</span>.
                  </p>
                  <a 
                    href="https://www.dropbox.com/scl/fi/g90tw5rpsnpxy9x6787qw/Amod-Sandeepa-Sahabandu-Resume-20251127.pdf?rlkey=o3xs8tyeye27wyczhbli9gj1x&st=pj31m3wz&dl=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
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
                    <p className="text-2xl font-bold text-accent">100k+</p>
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
                <HuggingFaceIcon className="w-5 h-5" />
                <span className="font-mono text-sm">HuggingFace</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/in/amod-sandeepa-sahabandu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <Linkedin className="w-5 h-5" />
                <span className="font-mono text-sm">LinkedIn</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://medium.com/@amodwrites" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <MediumIcon className="w-5 h-5" />
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
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">Mental Health Counseling Dataset</h3>
                  <a href="https://huggingface.co/datasets/Amod/mental_health_counseling_conversations" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent font-semibold">The world's most downloaded open-access mental health dataset.</span> 100k+ all-time downloads since 2023, with 10k+ downloads in November 2025 alone. Now commercially available under RAIL-D license. Fine-tuned Mistral7B/Falcon7B for therapy applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 bg-accent/20 text-accent-foreground font-mono text-xs rounded border border-accent/30">100k+ DLs</span>
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground font-mono text-xs rounded">RAIL-D License</span>
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground font-mono text-xs rounded">HuggingFace</span>
                  <span className="px-2 py-0.5 bg-muted text-muted-foreground font-mono text-xs rounded">Fine-tuning</span>
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

          {/* AI Forward Deployed Engineering Module */}
          <Card className="md:col-span-12 p-8 bg-card/80 backdrop-blur-sm border-border shadow-lg shadow-accent/5">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">AI Forward Deployed Engineering</h2>
            <div className="space-y-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                As an <span className="text-accent font-medium">AI Forward Deployed Engineer</span>, I serve as the technical bridge between AI capabilities and strategic customers, embedding directly with client teams to architect, deploy, and scale custom AI solutions in production environments. Think of it as being a hands-on AI startup CTO for high-stakes enterprise projects.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Customer Integration & Deployment</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Partner with enterprise customers to understand technical infrastructure, data pipelines, and business requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Design custom integrations between AI platforms and customer data environments (cloud, warehouses, APIs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Deploy AI models within customer security and compliance boundaries</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">AI Agent & Solution Development</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Develop production-grade AI agents for customer support, data analysis, and workflow automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Architect multi-agent systems orchestrating models, tools, and data sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Implement evaluation frameworks and human-in-the-loop workflows for continuous improvement</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Technical Leadership</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Serve as primary technical point of contact for strategic enterprise accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Provide technical training and knowledge transfer to customer teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Translate customer needs into product improvements</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Prompt Engineering & Optimization</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Create sophisticated prompt engineering strategies optimized for customer domains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Conduct systematic prompt experimentation and A/B testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Implement RAG systems and fine-tuning pipelines where appropriate</span>
                    </li>
                  </ul>
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
                  <p className="text-sm text-muted-foreground font-mono mt-1 md:mt-0">Jul 2025 - Present</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Consulting AI strategy for Vertical SaaS acquisitions and pipeline optimization. Toronto/Remote.
                </p>
              </div>

              {/* Experience 2 */}
              <div className="border-l-2 border-border pl-6 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">AI/ML Engineer</h3>
                    <p className="text-sm text-muted-foreground font-medium">Altrium</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mt-1 md:mt-0">May 2024 - Aug 2025</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Spearheaded the Automated AI Interview System for <a href="https://www.sentiva.ai/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Sentiva</a> and multi-agent architectures for <a href="https://planyear.ai/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PlanYear</a>.
                </p>
              </div>

              {/* Experience 3 */}
              <div className="border-l-2 border-border pl-6 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Associate Machine Learning Engineer</h3>
                    <p className="text-sm text-muted-foreground font-medium">Insighture</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mt-1 md:mt-0">2023 - May 2024</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Responsible for designing and deployment of all GenAI features in a novel DevOps Automation Suite (Stealth).
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
