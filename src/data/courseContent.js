export const courseContent = [
  {
    id: 'module-0',
    title: 'INTRODUCTION TO AI, AUTOMATION & VIBE CODING',
    description: 'Understanding what AI, automation, and vibe coding are, how they connect, and what you\'ll be able to build.',
    sections: [
      {
        id: 'section-0-1',
        title: 'What This Course Is About',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'Welcome! You\'re about to learn three interconnected skills that are transforming how people build software and automate their work.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'The Three Skills',
            text: 'AI (Artificial Intelligence) - Using smart computer programmes to understand, generate, and make decisions. Automation - Setting up systems that work without you, handling repetitive tasks automatically. Vibe Coding - Building applications by describing what you want in plain English, rather than writing traditional code.'
          },
          {
            type: 'paragraph',
            text: 'Here\'s the truth: You don\'t need a computer science degree. You don\'t need to memorise programming syntax. You just need to understand what\'s possible, how to communicate what you want, and how to connect the right tools together.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'What You\'ll Be Able to Do After This Course'
          },
          {
            type: 'list',
            items: [
              'Build complete web applications using AI assistants',
              'Automate business processes that currently waste hours of manual work',
              'Connect different services together (email, databases, Slack, etc.) without coding',
              'Use AI to make decisions in your workflows (categorising, analysing, generating content)',
              'Deploy your creations to the internet for others to use',
              'Understand enough to hire developers or explain what you need built'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'What This Course Is NOT'
          },
          {
            type: 'list',
            items: [
              'Not a traditional programming course (we\'re not memorising syntax)',
              'Not just theory (you\'ll build real things)',
              'Not about replacing developers (it\'s about empowering you to build and prototype)'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'The Philosophy',
            text: 'Technology should serve you. You shouldn\'t have to become a computer scientist to make technology do what you want. This course teaches you to be the architect - AI and automation tools are your builders.'
          }
        ]
      },
      {
        id: 'section-0-2',
        title: 'Understanding AI - The Different Types',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'AI (Artificial Intelligence) is software that can perform tasks that typically require human intelligence - understanding language, recognising patterns, making decisions, generating content. But "AI" is a broad term. Let\'s break down what people actually mean.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'AI Terminology You\'ll Hear'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Machine Learning (ML)',
            text: 'Teaching computers to learn from examples rather than explicit programming. Show a computer 10,000 photos of cats and dogs, it learns to tell them apart. You use tools built with ML, you don\'t build ML yourself.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Natural Language Processing (NLP)',
            text: 'Teaching computers to understand and generate human language. This is what makes "vibe coding" possible - you describe what you want in plain English.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Large Language Models (LLMs)',
            text: 'AI systems trained on massive amounts of text that can understand and generate human-like text. Examples: Claude, ChatGPT, Gemini. These are your AI assistants - you give instructions, they execute.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Generative AI',
            text: 'AI that creates new content (text, images, code, music). Most AI categorises or predicts; generative AI creates something new. This is what powers vibe coding.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'AI Tools vs AI Agents'
          },
          {
            type: 'comparison',
            title: 'Understanding the Difference',
            headers: ['AI Tool', 'AI Agent'],
            rows: [
              ['You ask, it responds', 'You give a goal, it figures out how'],
              ['Every interaction needs your input', 'Makes multiple decisions autonomously'],
              ['Example: ChatGPT for a question', 'Example: AI that monitors and adjusts pricing'],
              ['You control every step', 'You set goals and boundaries']
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'The AI Tools You\'ll Use'
          },
          {
            type: 'list',
            items: [
              'Claude (Anthropic) - Your primary AI assistant for coding and reasoning',
              'Claude Code - AI that writes code directly to files on your computer',
              'Cursor - Code editor with AI built in for ongoing development',
              'n8n - Visual workflow builder with AI integration',
              'Vercel - Hosts your applications on the internet'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Start Simple',
            text: 'You don\'t need all of these at once. Start with Claude and n8n - they cover 80% of use cases.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Common AI Misconceptions'
          },
          {
            type: 'list',
            items: [
              '"AI is all-knowing" - Reality: AI makes mistakes and hallucinates facts. Your job is to verify outputs.',
              '"AI will replace human creativity" - Reality: AI is a tool that amplifies human capability. You provide direction.',
              '"You need to understand how AI works internally" - Reality: You just need to know what it can do and how to communicate with it.',
              '"AI can read your mind" - Reality: Clear instructions get better results. Garbage in, garbage out.'
            ]
          }
        ]
      },
      {
        id: 'section-0-3',
        title: 'Understanding Automation - From Simple to Intelligent',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'Automation is setting up systems that perform tasks automatically, without human intervention for each instance. There\'s a spectrum from simple to intelligent.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Level 1: Simple Automation (No Intelligence)'
          },
          {
            type: 'paragraph',
            text: 'IF this happens, THEN do that - fixed rules, no variation.'
          },
          {
            type: 'list',
            items: [
              'When email arrives from boss, forward to team',
              'Every Monday at 9am, send a reminder email',
              'When form submitted, add row to spreadsheet'
            ]
          },
          {
            type: 'paragraph',
            text: 'Strengths: Reliable, predictable, cheap. Limitations: Can\'t handle exceptions.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Level 2: Conditional Automation (Basic Logic)'
          },
          {
            type: 'paragraph',
            text: 'IF this THEN that, with multiple conditions and branches.'
          },
          {
            type: 'list',
            items: [
              'If email contains "urgent" → priority queue, else → normal queue',
              'If amount > $1000 → require approval, else → auto-approve',
              'If weekend → don\'t send, else → send at 9am'
            ]
          },
          {
            type: 'paragraph',
            text: 'Strengths: Handles different scenarios. Limitations: You must predefine every scenario.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Level 3: Agentic Automation (AI-Enhanced)'
          },
          {
            type: 'paragraph',
            text: 'Automation that uses AI to make intelligent decisions at key points.'
          },
          {
            type: 'list',
            items: [
              'Email arrives → AI reads and categorises by intent → Routes based on understanding',
              'Support ticket → AI assesses urgency from context → Assigns to appropriate team',
              'Content uploaded → AI checks quality → Approves or flags for review'
            ]
          },
          {
            type: 'paragraph',
            text: 'Strengths: Handles nuance, adapts to variations. Limitations: More expensive (AI API calls cost money).'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Level 4: Autonomous Agents (Full Intelligence)'
          },
          {
            type: 'paragraph',
            text: 'Give a goal, agent determines strategy and executes.'
          },
          {
            type: 'list',
            items: [
              'Goal: "Increase social media engagement" → Agent researches, creates content, monitors, adjusts',
              'Goal: "Keep competitor pricing updated" → Agent finds sites, extracts prices, alerts on changes',
              'Goal: "Qualify incoming leads" → Agent researches, scores, drafts outreach'
            ]
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'The Automation Decision Framework',
            text: 'Is the process always exactly the same? → Simple automation. Can you define all variations? → Conditional. Does it require understanding context? → Agentic. Is the goal clear but path variable? → Autonomous agents.'
          }
        ]
      },
      {
        id: 'section-0-4',
        title: 'What is Vibe Coding?',
        estimatedTime: '12 min',
        content: [
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Vibe Coding Definition',
            text: 'Vibe coding is building software by describing what you want in natural language (plain English) rather than writing code syntax yourself. AI assistants translate your descriptions into working code.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Traditional Way vs Vibe Coding'
          },
          {
            type: 'comparison',
            title: 'The Difference',
            headers: ['Traditional Coding', 'Vibe Coding'],
            rows: [
              ['Learn JavaScript, React, CSS, database queries', 'Describe what you want in plain English'],
              ['Write hundreds of lines of precise code', 'AI writes all the code'],
              ['Debug syntax errors, logic errors, quirks', 'Review: Does it do what you wanted?'],
              ['Weeks to months to build simple app', 'Hours to build simple app']
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'What You Still Need to Know'
          },
          {
            type: 'list',
            items: [
              'You MUST understand: What you\'re trying to build (the goal)',
              'You MUST understand: How it should work from user\'s perspective (the flow)',
              'You MUST understand: Whether it\'s working correctly (testing)',
              'You MUST understand: Basic concepts (what\'s a database, API, component)',
              'You DON\'T need: Exact syntax, memorised functions, framework conventions'
            ]
          },
          {
            type: 'highlight',
            variant: 'example',
            title: 'The Analogy',
            text: 'Traditional coding = Being both architect AND construction worker. Vibe coding = Being the architect with skilled AI builders. You design the building, AI constructs it, you verify it meets your vision.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Vibe Coding Workflow'
          },
          {
            type: 'numbered-list',
            items: [
              'Describe what you want: "I need a form that collects name, email, message, validates email, saves to database, styled with Tailwind"',
              'AI generates the code: Creates files, components, database connection, styling',
              'You test it: Does form appear? Does validation work? Does data save?',
              'You iterate: "Make submit button bigger on mobile, add success message"',
              'AI updates: Modifies code, you test again, repeat until perfect'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'What Makes Good Instructions'
          },
          {
            type: 'list',
            items: [
              'Bad: "Make a website" (too vague)',
              'Better: "Make a portfolio website" (AI knows type)',
              'Even better: "Portfolio with About, Projects, Contact sections" (clear structure)',
              'Best: Specific layout, styling preferences, functionality details (AI can execute confidently)'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'When Vibe Coding Shines'
          },
          {
            type: 'list',
            items: [
              'Perfect for: Internal business tools, prototypes, automation workflows, personal projects',
              'Not ideal for: Complex large-scale apps, systems needing deep optimization, highly specialized algorithms',
              'The 80/20 rule: Vibe coding handles 80% of software needs'
            ]
          }
        ]
      },
      {
        id: 'section-0-5',
        title: 'How These Three Connect - Your New Superpowers',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'The magic happens when you combine AI + Automation + Vibe Coding together.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Superpower 1: Build Custom Tools Instantly'
          },
          {
            type: 'comparison',
            title: 'Old Way vs New Way',
            headers: ['Old Way', 'New Way'],
            rows: [
              ['Hire developer (weeks, $$$)', 'Describe to Claude Code (minutes)'],
              ['Explain requirements (often misunderstood)', 'Test and iterate (hours)'],
              ['Wait for development (weeks)', 'Deploy to Vercel (minutes)'],
              ['Total: Months and thousands of dollars', 'Total: Same day, essentially free']
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Superpower 2: Automate With Intelligence'
          },
          {
            type: 'highlight',
            variant: 'example',
            title: 'Example',
            text: 'Customer email arrives → AI reads → Determines it\'s a refund request → Checks return policy → Auto-approves (under $100) or escalates → Drafts response → Human reviews. Result: 80% of tickets handled in seconds.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Superpower 3: Rapid Experimentation'
          },
          {
            type: 'paragraph',
            text: '"I wonder if we could..." → Build prototype in hours → Test with real data → Keep if it works, discard if not. Total investment: A few hours, not thousands of dollars.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Superpower 4: Bridge Business and Technology'
          },
          {
            type: 'paragraph',
            text: 'Business people know what they need but can\'t build it. Developers can build but misunderstand requirements. Your new role: Understand the business need AND prototype the solution. You become the translator and accelerator.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Reality Check'
          },
          {
            type: 'list',
            items: [
              'WON\'T make you: A senior software engineer, expert in CS theory, able to optimize complex algorithms',
              'WILL make you: Capable of building functional apps, able to automate work, dangerous enough to prototype ideas, better communicator with tech teams, self-sufficient for internal tools'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'The Goal',
            text: 'You shouldn\'t need to hire a developer for every simple need. You shouldn\'t be blocked from testing ideas. You should be empowered to build and automate at the speed of thought.'
          }
        ]
      },
      {
        id: 'section-0-6',
        title: 'What You Need to Get Started',
        estimatedTime: '5 min',
        content: [
          {
            type: 'heading',
            level: 3,
            text: 'Required (Free)'
          },
          {
            type: 'list',
            items: [
              'Computer (Mac, Windows, or Linux)',
              'Internet connection',
              'Claude.ai account (free tier is fine to start)',
              'Text editor (we\'ll set up later)',
              'Curiosity and willingness to experiment'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Helpful But Not Required'
          },
          {
            type: 'list',
            items: [
              'ChatGPT account (free tier)',
              'Google account (for Google AI Studio)',
              'GitHub account (free - we\'ll set up)',
              'Vercel account (free - we\'ll set up)'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'NOT Required'
          },
          {
            type: 'list',
            items: [
              'Prior coding experience',
              'Computer science degree',
              'Math beyond basic arithmetic',
              'Expensive software'
            ]
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Time Commitment',
            text: 'Course material: ~20 hours to complete. Practice projects: As much as you want. Expect to feel productive by Week 2. Expect to build real tools by Week 4.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Learning Approach'
          },
          {
            type: 'list',
            items: [
              'Read concepts (to understand)',
              'Follow examples (to see patterns)',
              'Build projects (to internalize)',
              'Break things (to learn debugging)',
              'Ship things (to build confidence)'
            ]
          }
        ]
      },
      {
        id: 'section-0-7',
        title: 'How to Use This Course',
        estimatedTime: '5 min',
        content: [
          {
            type: 'heading',
            level: 3,
            text: 'The Structure'
          },
          {
            type: 'list',
            items: [
              'Modules: Big topics (like "Understanding AI Tools")',
              'Sections: Specific concepts within modules',
              'Quizzes: Test understanding before moving forward',
              'Projects: Hands-on application of concepts',
              'Glossary: Reference for terminology'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Learning Path'
          },
          {
            type: 'numbered-list',
            items: [
              'Read the module - Understand concepts',
              'Take the quiz - Verify understanding (must pass 70% to continue)',
              'Do the project (if included) - Apply what you learned',
              'Move to next module - Build on your knowledge'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Study Tips'
          },
          {
            type: 'list',
            items: [
              'Don\'t rush - Understanding beats speed',
              'Take notes - Build your personal reference guide',
              'Experiment - Try things not explicitly in the course',
              'Break things - Debugging teaches you more than success',
              'Build what interests you - Motivation matters'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'When You Get Stuck'
          },
          {
            type: 'list',
            items: [
              'Re-read the relevant section',
              'Check the glossary for terminology',
              'Search for the error message (Google is your friend)',
              'Break down the problem into smaller pieces',
              'Ask AI (Claude, ChatGPT) to explain differently'
            ]
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Suggested Pacing',
            text: 'Week 1: Module 0-2 (Foundations + Terminal). Week 2: Modules 3-4 (Connecting + Tools). Week 3: Modules 5-7 (Building + Decisions). Week 4: Modules 8-9 (Mindset + Projects). Weeks 5-6: Modules 10-12 (Next Steps + Setup). Week 7+: Build your own projects.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Success Metrics'
          },
          {
            type: 'list',
            items: [
              'Can you explain concepts to someone else?',
              'Can you build something without referencing the course?',
              'Do error messages make sense to you now?',
              'Are you comfortable experimenting?'
            ]
          },
          {
            type: 'paragraph',
            text: 'If yes to these → You\'re succeeding. Let\'s begin!'
          }
        ]
      },
      {
        id: 'section-0-8',
        title: 'Google AI Ultra (Gemini 2.0) - The Next Generation',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'Google AI Ultra (officially Gemini 2.0 Ultra) is Google\'s most advanced AI model, representing the cutting edge of multimodal AI capabilities. Understanding where it fits helps you see the full AI landscape.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Gemini Family Hierarchy'
          },
          {
            type: 'comparison',
            title: 'Gemini Models Compared',
            headers: ['Model', 'Speed', 'Cost', 'Best For'],
            rows: [
              ['Gemini Flash', 'Fastest', 'Cheapest', 'Simple tasks, speed matters'],
              ['Gemini Pro', 'Balanced', 'Moderate', 'Most daily tasks'],
              ['Gemini Ultra', 'Slower', 'Highest', 'Complex reasoning, quality critical']
            ]
          },
          {
            type: 'highlight',
            variant: 'example',
            title: 'Car Engine Analogy',
            text: 'Flash = 4-cylinder (efficient daily driver). Pro = V6 (balanced power and efficiency). Ultra = V8 (maximum power when needed).'
          },
          {
            type: 'heading',
            level: 3,
            text: 'What Ultra Excels At'
          },
          {
            type: 'list',
            items: [
              'Complex reasoning: Multi-step logic, scientific analysis, strategic planning',
              'Long-context understanding: Analyzing entire codebases (100,000+ lines), multiple long documents',
              'Multimodal fusion: Analyzing video + audio + transcript together, understanding image sequences',
              'Advanced code generation: Production-quality code, understanding large codebases, debugging complex issues'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'When to Use Each Model'
          },
          {
            type: 'list',
            items: [
              'Use Flash for: Simple categorization, quick translations, basic extraction, chatbot responses',
              'Use Pro for: Content generation, moderate coding, document analysis, most daily AI tasks',
              'Use Ultra for: Strategic analysis, complex code refactoring, legal/medical documents, research synthesis'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Cost Reality'
          },
          {
            type: 'paragraph',
            text: 'Ultra is significantly more expensive than Flash/Pro. Example - analyzing 10 documents (100K tokens): Flash ~$0.10, Pro ~$0.50, Ultra ~$1.50. For most tasks, Pro or Flash is sufficient. Use Ultra strategically.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Ultra vs Claude Opus vs GPT-4'
          },
          {
            type: 'list',
            items: [
              'Google Ultra strengths: Multimodal (video, audio), longest context window, Google ecosystem integration',
              'Claude Opus strengths: Nuanced writing, following complex instructions, careful reasoning',
              'GPT-4 strengths: Broad knowledge, plugin ecosystem, established reputation',
              'Reality: All three are extremely capable. Choice often comes down to ecosystem, task requirements, cost, and preference'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'For This Course',
            text: 'You\'ll primarily use Claude because it\'s great for learning and coding with clear explanations. But knowing Ultra exists helps you understand the competitive landscape and multimodal possibilities. Don\'t overthink model choice - most models handle most tasks well.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Future Direction'
          },
          {
            type: 'paragraph',
            text: 'Ultra represents where AI is heading: multimodal by default (not just text), massive context (entire codebases), specialized reasoning (science, math, code), and agentic capabilities (tool use, autonomous behavior). Understanding Ultra helps you see what\'s possible and coming next.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-1',
    title: 'ABSOLUTE BASICS',
    description: 'Understanding the fundamental concepts of programming and how computers process instructions.',
    sections: [
      {
        id: 'section-1-1',
        title: 'What Is a Computer Programme?',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'A computer programme is simply a set of instructions that tells a computer what to do. Think of it like a recipe - just as a recipe tells you step-by-step how to make a cake, a programme tells the computer step-by-step how to complete a task.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Key Insight',
            text: 'Computers are incredibly fast but incredibly literal. They do exactly what you tell them - nothing more, nothing less. This is both their greatest strength and the source of most bugs.'
          },
          {
            type: 'paragraph',
            text: 'Every app on your phone, every website you visit, and every game you play is running programmes. These programmes range from simple (a calculator) to incredibly complex (a video game or social media platform).'
          },
          {
            type: 'code',
            language: 'text',
            title: 'A Simple Programme in Plain English',
            code: '1. Start\n2. Ask the user for their name\n3. Store what they typed\n4. Display "Hello, " followed by their name\n5. End'
          },
          {
            type: 'paragraph',
            text: 'This is essentially what every programme does - it takes some input, processes it in some way, and produces output. Understanding this input-process-output model is fundamental to all programming.'
          }
        ]
      },
      {
        id: 'section-1-2',
        title: 'How Code Becomes Action',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'When you write code, it goes through several transformations before the computer can actually execute it. Understanding this process helps demystify what happens when you run a programme.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'The Translation Process',
            text: 'Computers only understand binary (1s and 0s). Programming languages are translated into binary through compilation or interpretation.'
          },
          {
            type: 'paragraph',
            text: 'There are two main ways code gets transformed:'
          },
          {
            type: 'list',
            items: [
              'Compiled languages (C, Go, Rust): Code is translated all at once into machine code before running',
              'Interpreted languages (Python, JavaScript): Code is translated line-by-line as it runs'
            ]
          },
          {
            type: 'diagram',
            variant: 'flow',
            title: 'Code Execution Flow',
            steps: ['Source Code', 'Compiler/Interpreter', 'Machine Code', 'CPU Execution', 'Output']
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Why This Matters for Vibe Coding',
            text: 'When using AI tools to write code, you don\'t need to understand every line - but knowing that code must be valid and executable helps you spot when AI output needs fixing.'
          }
        ]
      },
      {
        id: 'section-1-3',
        title: 'What is Vibe Coding?',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'Vibe coding is a revolutionary approach to software development where you describe what you want in natural language, and AI tools help you create it. Instead of memorizing syntax and writing every line yourself, you collaborate with AI to build software faster.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'The Core Principle',
            text: 'Vibe coding shifts your role from "person who writes code" to "person who directs AI to write code." Your job becomes problem definition, quality control, and creative direction.'
          },
          {
            type: 'paragraph',
            text: 'This doesn\'t mean programming knowledge is obsolete. Understanding how programmes work, what good code looks like, and how to test your creations are more valuable than ever. You become the architect, and AI becomes your construction crew.'
          },
          {
            type: 'comparison',
            title: 'Traditional vs Vibe Coding',
            headers: ['Aspect', 'Traditional Coding', 'Vibe Coding'],
            rows: [
              ['Primary Skill', 'Syntax memorization', 'Clear communication'],
              ['Speed', 'Slower, manual', 'Faster, AI-assisted'],
              ['Entry Barrier', 'High (years of learning)', 'Lower (weeks to start)'],
              ['Still Needed', 'Deep understanding', 'Understanding + direction']
            ]
          },
          {
            type: 'highlight',
            variant: 'warning',
            title: 'Important Caveat',
            text: 'Vibe coding is powerful but not magic. You still need to understand what you\'re building, verify the AI\'s output, and know enough to fix issues when they arise.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-2',
    title: 'TERMINAL EXPLAINED',
    description: 'Master the command line interface - your gateway to powerful development tools.',
    sections: [
      {
        id: 'section-2-1',
        title: 'What Is the Terminal?',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'The terminal (also called command line, console, or shell) is a text-based interface for interacting with your computer. Instead of clicking buttons and icons, you type commands.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Why Use Terminal?',
            text: 'The terminal gives you more power and precision than graphical interfaces. Many development tools only work through the terminal, and it\'s essential for vibe coding.'
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Your First Terminal Commands',
            code: '# Print current directory\npwd\n\n# List files in current directory\nls\n\n# Change to a different directory\ncd Documents\n\n# Go back up one directory\ncd ..'
          },
          {
            type: 'paragraph',
            text: 'Don\'t worry about memorizing everything - you\'ll learn commands naturally as you use them, and AI can help remind you of commands you\'ve forgotten.'
          }
        ]
      },
      {
        id: 'section-2-2',
        title: 'Essential Commands',
        estimatedTime: '20 min',
        content: [
          {
            type: 'paragraph',
            text: 'Here are the essential terminal commands you\'ll use daily as a vibe coder. Focus on understanding what each does rather than memorizing exact syntax.'
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Navigation Commands',
            code: '# Show current location\npwd                    # Print Working Directory\n\n# List contents\nls                     # List files and folders\nls -la                 # List with details and hidden files\n\n# Move around\ncd folder-name         # Enter a folder\ncd ..                  # Go up one level\ncd ~                   # Go to home directory\ncd /                   # Go to root directory'
          },
          {
            type: 'code',
            language: 'bash',
            title: 'File Operations',
            code: '# Create\nmkdir new-folder       # Make a directory\ntouch newfile.txt      # Create an empty file\n\n# Copy and Move\ncp file.txt backup.txt # Copy a file\nmv old.txt new.txt     # Rename/move a file\n\n# Delete (careful!)\nrm file.txt            # Delete a file\nrm -r folder           # Delete a folder and contents'
          },
          {
            type: 'highlight',
            variant: 'warning',
            title: 'Danger Zone',
            text: 'The rm command permanently deletes files - there\'s no recycle bin! Always double-check before running delete commands, especially with the -r flag.'
          }
        ]
      },
      {
        id: 'section-2-3',
        title: 'Terminal for AI Tools',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'Most AI coding tools are accessed through the terminal. Understanding how to install and run these tools is essential for your vibe coding journey.'
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Common AI Tool Commands',
            code: '# Run Claude Code (after installation)\nclaude\n\n# Start a conversation with context\nclaude "help me build a todo app"\n\n# Use with a specific file\nclaude "review this code" < myfile.js'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Pro Tip',
            text: 'Keep a notes file of commands you use frequently. Over time, you\'ll build a personal reference that\'s faster than searching online.'
          },
          {
            type: 'paragraph',
            text: 'The terminal might feel intimidating at first, but within a few days of practice, it becomes second nature. Start with basic navigation and file operations, then expand from there.'
          }
        ]
      },
      {
        id: 'section-2-4',
        title: 'How Terminal Commands Actually Build Your App',
        estimatedTime: '12 min',
        content: [
          {
            type: 'highlight',
            variant: 'concept',
            title: 'The Question You\'re Probably Asking',
            text: '"I type words in Terminal... and somehow that becomes a website I can see in my browser. How??"'
          },
          {
            type: 'paragraph',
            text: 'The simple answer: Terminal is like a remote control for tools that live on your computer. When you type commands, you\'re telling those tools what to do.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'What Happens When You Type: npm run dev'
          },
          {
            type: 'paragraph',
            text: 'Let\'s break down exactly what happens, step by step:'
          },
          {
            type: 'heading',
            level: 4,
            text: 'Step 1: Terminal Reads Your Command'
          },
          {
            type: 'list',
            items: [
              'You type: npm run dev',
              'Terminal understands: "Run the \'dev\' script using npm"',
              'npm is a program installed on your computer (it came with Node.js)'
            ]
          },
          {
            type: 'heading',
            level: 4,
            text: 'Step 2: npm Looks in package.json'
          },
          {
            type: 'paragraph',
            text: 'Every project has a package.json file. Inside it, there\'s a "scripts" section that tells npm what commands mean:'
          },
          {
            type: 'code',
            language: 'json',
            title: 'Inside package.json',
            code: '{\n  "scripts": {\n    "dev": "vite",\n    "build": "vite build",\n    "preview": "vite preview"\n  }\n}'
          },
          {
            type: 'paragraph',
            text: 'So "npm run dev" actually means "run the program called vite"'
          },
          {
            type: 'heading',
            level: 4,
            text: 'Step 3: Vite Starts Up'
          },
          {
            type: 'list',
            items: [
              'Vite is a "development server" - a program that serves your website locally',
              'It reads all your code files (HTML, CSS, JavaScript, React components)',
              'It bundles them together in a way browsers can understand',
              'It starts a mini web server on your computer'
            ]
          },
          {
            type: 'heading',
            level: 4,
            text: 'Step 4: A Local Server Is Running'
          },
          {
            type: 'paragraph',
            text: 'You see a message like: "Local: http://localhost:5173"'
          },
          {
            type: 'list',
            items: [
              'localhost means "this computer" (not the internet)',
              '5173 is a "port" - like a numbered door into your computer',
              'Your website is now being served through that door'
            ]
          },
          {
            type: 'heading',
            level: 4,
            text: 'Step 5: Browser Shows Your App'
          },
          {
            type: 'list',
            items: [
              'Open your browser and go to http://localhost:5173',
              'Browser asks: "Hey localhost, give me what\'s behind door 5173"',
              'Vite responds: "Here\'s the website!" and sends all the files',
              'Browser displays your app!'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'The Magic Part: Hot Reload',
            text: 'While Vite is running, it watches your files. Edit your code, save, and Vite instantly updates the browser. No need to restart or refresh - it happens automatically!'
          },
          {
            type: 'diagram',
            variant: 'flow',
            title: 'The Complete Flow',
            steps: ['You type: npm run dev', 'npm reads package.json', 'Vite starts', 'Server runs on localhost:5173', 'Browser displays your app']
          },
          {
            type: 'heading',
            level: 3,
            text: 'What About npm install?'
          },
          {
            type: 'paragraph',
            text: 'When you type npm install, here\'s what happens:'
          },
          {
            type: 'list',
            items: [
              'npm reads package.json to see what packages your project needs',
              'It downloads those packages from the internet (npmjs.com)',
              'It puts them all in a folder called node_modules',
              'Now your project has all its dependencies ready to use'
            ]
          },
          {
            type: 'highlight',
            variant: 'warning',
            title: 'node_modules is HUGE',
            text: 'The node_modules folder often contains thousands of files. That\'s why we never upload it to GitHub (it\'s in .gitignore). When someone else downloads your project, they run npm install to recreate it.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Why Can\'t I Just Double-Click My Files?'
          },
          {
            type: 'paragraph',
            text: 'Good question! Here\'s why modern web apps need a development server:'
          },
          {
            type: 'list',
            items: [
              'React/Vue/etc. code isn\'t plain HTML - it needs to be transformed first',
              'Modern JavaScript features need to be converted for older browsers',
              'CSS files might use preprocessors like Tailwind that need processing',
              'The server handles all this transformation automatically'
            ]
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Think of It Like This',
            text: 'Your source code is like raw ingredients. The development server is like a kitchen that cooks them into a finished meal (your website) that the browser can consume.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Key Insight'
          },
          {
            type: 'paragraph',
            text: 'Terminal commands don\'t create your app - they run TOOLS that do the work. You\'re not writing magic spells. You\'re pressing buttons on a very powerful remote control.'
          },
          {
            type: 'list',
            items: [
              'npm = the remote control for JavaScript packages',
              'git = the remote control for version history',
              'claude = the remote control for AI assistance',
              'vite/webpack = the remote control for bundling code'
            ]
          },
          {
            type: 'paragraph',
            text: 'Once you understand this, Terminal becomes much less mysterious. You\'re just telling tools what to do!'
          }
        ]
      }
    ]
  },
  {
    id: 'module-3',
    title: 'CONNECTING THINGS',
    description: 'Learn how different parts of a system communicate and work together.',
    sections: [
      {
        id: 'section-3-1',
        title: 'APIs Explained Simply',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'An API (Application Programming Interface) is like a waiter in a restaurant. You (the customer) don\'t go into the kitchen to make your food. Instead, you tell the waiter what you want, and they communicate with the kitchen for you.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'API = Contract',
            text: 'An API defines what requests you can make and what responses you\'ll get back. It\'s a contract between systems that allows them to communicate without knowing each other\'s internal details.'
          },
          {
            type: 'diagram',
            variant: 'flow',
            title: 'API Communication',
            steps: ['Your App', 'API Request', 'External Service', 'API Response', 'Your App Updates']
          },
          {
            type: 'code',
            language: 'text',
            title: 'Real World API Example',
            code: 'You want weather data for London:\n\n1. You send: GET weather for "London"\n2. API processes your request\n3. API responds with:\n   - Temperature: 15°C\n   - Conditions: Cloudy\n   - Humidity: 78%'
          }
        ]
      },
      {
        id: 'section-3-2',
        title: 'Authentication Basics',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'When you use an API, you usually need to prove who you are. This is authentication - like showing ID to enter a club. Without it, anyone could use the API and potentially abuse it.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'API Keys',
            text: 'An API key is a unique string that identifies you to a service. It\'s like a password that you include with every request. Keep your API keys secret!'
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Setting an API Key',
            code: '# Store in environment variable (recommended)\nexport OPENAI_API_KEY="sk-your-key-here"\n\n# Or in a .env file\nOPENAI_API_KEY=sk-your-key-here'
          },
          {
            type: 'highlight',
            variant: 'warning',
            title: 'Security Alert',
            text: 'Never commit API keys to Git or share them publicly. If a key is exposed, anyone can use it (and you\'ll get the bill). Rotate compromised keys immediately.'
          }
        ]
      },
      {
        id: 'section-3-3',
        title: 'Environment Variables',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'Environment variables are values stored outside your code that your programme can access. They\'re perfect for configuration that changes between environments (development vs production) or secrets like API keys.'
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Working with Environment Variables',
            code: '# Set a variable (temporary, current session only)\nexport MY_VAR="some value"\n\n# View a variable\necho $MY_VAR\n\n# View all environment variables\nenv\n\n# Use in a command\ncurl -H "Authorization: Bearer $API_KEY" https://api.example.com'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Best Practice',
            text: 'Create a .env.example file showing what variables are needed (without real values) and add .env to your .gitignore.'
          }
        ]
      },
      {
        id: 'section-3-4',
        title: 'Files and Folders',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'Understanding file systems is crucial for development. Your code lives in files, organized in folders (directories), and the structure you choose affects how maintainable your project is.'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Typical Project Structure',
            code: 'my-project/\n├── src/              # Source code\n│   ├── components/   # UI components\n│   ├── utils/        # Helper functions\n│   └── index.js      # Entry point\n├── tests/            # Test files\n├── docs/             # Documentation\n├── package.json      # Dependencies\n├── .env              # Environment variables\n└── README.md         # Project description'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Path Types',
            text: 'Absolute paths start from root (/Users/you/project). Relative paths start from current location (./src/file.js). Use relative paths in code for portability.'
          }
        ]
      },
      {
        id: 'section-3-5',
        title: 'Dependencies and Packages',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'Modern software is built on top of code that others have written. Instead of reinventing the wheel, you use packages (also called libraries or dependencies) that provide pre-built functionality.'
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Package Management',
            code: '# JavaScript (npm)\nnpm install lodash     # Add a package\nnpm install            # Install all dependencies\n\n# Python (pip)\npip install requests   # Add a package\npip install -r requirements.txt  # Install all'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'package.json / requirements.txt',
            text: 'These files list all dependencies your project needs. They\'re checked into Git so anyone can install the same packages and run your code.'
          },
          {
            type: 'highlight',
            variant: 'warning',
            title: 'Dependency Caution',
            text: 'Every dependency is code you\'re trusting. Use well-maintained, popular packages. Check for security vulnerabilities regularly.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-4',
    title: 'UNDERSTANDING TOOLS',
    description: 'A comprehensive overview of AI coding tools and when to use each one.',
    sections: [
      {
        id: 'section-4-1',
        title: 'The AI Tool Landscape',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'The AI coding tool space is evolving rapidly. Understanding the different types of tools and their strengths helps you choose the right one for each task.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Tool Categories',
            text: 'AI coding tools generally fall into: Chat interfaces (Claude, ChatGPT), IDE integrations (Cursor, GitHub Copilot), and CLI tools (Claude Code, Aider).'
          },
          {
            type: 'comparison',
            title: 'Tool Type Comparison',
            headers: ['Type', 'Best For', 'Examples'],
            rows: [
              ['Chat Interface', 'Learning, explanations, planning', 'Claude.ai, ChatGPT'],
              ['IDE Integration', 'Code completion, refactoring', 'Cursor, Copilot'],
              ['CLI Tools', 'Full project work, automation', 'Claude Code, Aider']
            ]
          }
        ]
      },
      {
        id: 'section-4-2',
        title: 'Claude Code Deep Dive',
        estimatedTime: '20 min',
        content: [
          {
            type: 'paragraph',
            text: 'Claude Code is a CLI tool that brings Claude\'s capabilities directly to your terminal. It can read and write files, run commands, and help you build complete projects.'
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Getting Started with Claude Code',
            code: '# Install Claude Code\nnpm install -g @anthropic-ai/claude-code\n\n# Start in a project directory\ncd my-project\nclaude\n\n# Or start with a specific request\nclaude "create a REST API for user management"'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Effective Prompting',
            text: 'Be specific about what you want. Instead of "make it better", say "add input validation to the email field that checks for valid email format".'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Good vs Bad Prompts',
            code: 'BAD:  "Fix the bug"\nGOOD: "The login form submits even when email is empty. Add validation to prevent submission if email field is blank."\n\nBAD:  "Make a website"\nGOOD: "Create a landing page with a hero section, three feature cards, and a contact form. Use Tailwind CSS for styling."'
          }
        ]
      },
      {
        id: 'section-4-3',
        title: 'Cursor IDE',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'Cursor is a code editor (based on VS Code) with AI deeply integrated. It offers inline completions, chat, and the ability to edit code across multiple files.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Key Features',
            text: 'Cursor shines at: Tab completion that understands context, multi-file editing with Cmd+K, and codebase-aware chat.'
          },
          {
            type: 'list',
            items: [
              'Tab: Accept AI suggestions as you type',
              'Cmd+K: Edit selected code with instructions',
              'Cmd+L: Open chat with current file context',
              'Cmd+Shift+L: Add files to chat context'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Best Practice',
            text: 'Use Cursor for active coding sessions where you need quick completions and edits. Use Claude Code for larger tasks that span many files.'
          }
        ]
      },
      {
        id: 'section-4-4',
        title: 'GitHub Copilot',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'GitHub Copilot is an AI pair programmer that integrates into VS Code, JetBrains IDEs, and other editors. It\'s particularly good at code completion and understanding context from your current file.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Copilot Strengths',
            text: 'Copilot excels at: Completing functions based on names and comments, writing tests for existing code, and suggesting boilerplate code.'
          },
          {
            type: 'code',
            language: 'javascript',
            title: 'How Copilot Works',
            code: '// Write a comment describing what you want\n// Function to validate email format\nfunction validateEmail(email) {\n  // Copilot will suggest the implementation\n}'
          }
        ]
      },
      {
        id: 'section-4-5',
        title: 'ChatGPT and Claude.ai',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'Web-based chat interfaces are great for learning, getting explanations, and planning. They\'re less suited for direct coding but excellent for understanding concepts.'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Best Uses',
            text: 'Use chat interfaces for: Explaining code you don\'t understand, learning new concepts, debugging error messages, planning architecture, and getting code reviews.'
          },
          {
            type: 'paragraph',
            text: 'Copy-pasting code to and from chat interfaces works, but it\'s slower than using integrated tools. Use chat when you need to learn or think through a problem.'
          }
        ]
      },
      {
        id: 'section-4-6',
        title: 'Specialized Tools',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'Beyond general AI coding tools, specialized tools exist for specific tasks. Knowing these can dramatically speed up particular workflows.'
          },
          {
            type: 'comparison',
            title: 'Specialized Tools',
            headers: ['Tool', 'Purpose', 'When to Use'],
            rows: [
              ['v0.dev', 'UI component generation', 'Creating React components visually'],
              ['Bolt.new', 'Full-stack app scaffolding', 'Starting new projects quickly'],
              ['Replit Agent', 'Browser-based development', 'Prototyping without local setup'],
              ['Codeium', 'Free code completion', 'Alternative to Copilot']
            ]
          }
        ]
      },
      {
        id: 'section-4-7',
        title: 'Choosing the Right Tool',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'With so many options, how do you choose? Here\'s a decision framework based on what you\'re trying to accomplish.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Decision Framework',
            text: 'Ask yourself: Am I learning, coding, or building? Learning = chat. Active coding = IDE integration. Building features = CLI tool.'
          },
          {
            type: 'list',
            items: [
              'Learning a new concept → Claude.ai or ChatGPT',
              'Quick code completion → Cursor or Copilot',
              'Building a feature across files → Claude Code',
              'Creating UI components → v0.dev',
              'Starting a new project → Bolt.new or Claude Code',
              'Debugging errors → Chat with the error message'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Don\'t Overthink It',
            text: 'You don\'t need all these tools. Start with one (Claude Code is a great choice), learn it well, then explore others as needed.'
          }
        ]
      },
      {
        id: 'section-4-8',
        title: 'Google AI Studio - Experimental Playground',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'Google AI Studio is Google\'s experimental interface for testing Gemini models. Think of it as a playground where you can experiment with AI capabilities before building production systems.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Key Capability',
            text: 'Google AI Studio excels at multimodal testing - combining text, images, video, and audio in a single prompt. This makes it perfect for prototyping AI features that work with multiple input types.'
          },
          {
            type: 'paragraph',
            text: 'The prompt engineering lab lets you adjust parameters like temperature (0-2 for creativity), top-k, top-p, and max tokens. This helps you understand how different settings affect AI responses before committing to code.'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Instant Code Generation',
            text: 'After perfecting your prompt, Google AI Studio automatically generates production-ready code in Python, JavaScript, or cURL. No manual translation needed.'
          },
          {
            type: 'comparison',
            title: 'When to Use Google AI Studio',
            headers: ['Use For', 'Don\'t Use For'],
            rows: [
              ['Testing multimodal prompts', 'Building complete apps'],
              ['Comparing model versions', 'Connecting services'],
              ['Prompt optimization', 'Production deployments'],
              ['Prototyping AI features', 'End-user applications']
            ]
          },
          {
            type: 'comparison',
            title: 'Tool Comparison',
            headers: ['Tool', 'Best For'],
            rows: [
              ['Google AI Studio', 'Multimodal testing, prototyping'],
              ['Claude.ai', 'Reasoning, detailed explanations'],
              ['ChatGPT', 'Plugins, broad knowledge'],
              ['Cursor/Claude Code', 'Actually building apps']
            ]
          },
          {
            type: 'paragraph',
            text: 'Getting started is simple: access aistudio.google.com, create a freeform prompt, test with various media types, then save and export your code when ready.'
          },
          {
            type: 'highlight',
            variant: 'warning',
            title: 'Limitations',
            text: 'Free tier limits: 60 requests/minute, images up to 20MB, videos up to 2GB. Remember this is experimental - APIs and features may change.'
          },
          {
            type: 'highlight',
            variant: 'example',
            title: 'Real Business Use Case',
            text: 'Envato used Google AI Studio to test AI quality checks for digital assets before building their production review system. They validated prompt effectiveness with real images before writing any backend code.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-5',
    title: 'BUILDING WORKFLOW',
    description: 'Develop an efficient personal workflow for AI-assisted development.',
    sections: [
      {
        id: 'section-5-1',
        title: 'Planning Before Prompting',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'The biggest mistake beginners make is jumping straight into prompting without planning. Taking a few minutes to think through what you\'re building saves hours of rework.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'The Planning Framework',
            text: 'Before any AI interaction, answer: What am I building? What inputs does it need? What outputs should it produce? How will I test it works?'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Planning Template',
            code: '## What I\'m Building\nA contact form that sends emails\n\n## Inputs\n- Name (required)\n- Email (required, must be valid)\n- Message (required, min 10 characters)\n\n## Outputs\n- Success message to user\n- Email sent to admin\n\n## How to Test\n- Submit with valid data → email received\n- Submit with invalid email → error shown\n- Submit with empty fields → validation errors'
          }
        ]
      },
      {
        id: 'section-5-2',
        title: 'Iterative Development',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'Don\'t try to build everything at once. Break your project into small pieces and build them one at a time. This makes debugging easier and keeps AI responses focused.'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'The Rule of One',
            text: 'Each prompt should accomplish ONE clear thing. "Add a button that logs \'clicked\' to console" is better than "add a button that logs, validates form, and submits data".'
          },
          {
            type: 'list',
            items: [
              '1. Build the smallest working version first',
              '2. Test that it works',
              '3. Add one feature',
              '4. Test again',
              '5. Repeat until complete'
            ]
          },
          {
            type: 'highlight',
            variant: 'warning',
            title: 'Avoid the Big Bang',
            text: 'Asking AI to "build a complete e-commerce site" will fail. Break it down: first product listing, then cart, then checkout, then payment.'
          }
        ]
      },
      {
        id: 'section-5-3',
        title: 'Testing and Verification',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'AI can write code that looks correct but doesn\'t work. You must verify everything. Testing isn\'t optional - it\'s how you ensure quality.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Verification Mindset',
            text: 'Treat AI output like code from a junior developer - review it, test it, and don\'t assume it works just because it looks right.'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Testing Checklist',
            code: '□ Does it do what I asked?\n□ Does it handle edge cases?\n  - Empty inputs\n  - Invalid inputs\n  - Very large inputs\n□ Does it work in different browsers/devices?\n□ Are there any obvious security issues?\n□ Does it break existing functionality?'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Quick Testing',
            text: 'For web apps, always test: the happy path, empty inputs, invalid inputs, and rapid clicking/submitting. This catches most bugs.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-6',
    title: 'WHEN TO USE WHAT',
    description: 'Strategic guidance on selecting the right approach for different scenarios.',
    sections: [
      {
        id: 'section-6-1',
        title: 'Problem Type Analysis',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'Different problems call for different approaches. Learning to categorize problems helps you choose the most effective strategy and tools.'
          },
          {
            type: 'comparison',
            title: 'Problem Types',
            headers: ['Problem Type', 'Characteristics', 'Best Approach'],
            rows: [
              ['Bug Fix', 'Something broken that worked before', 'Describe the bug, share error messages'],
              ['New Feature', 'Adding functionality to existing code', 'Explain context, specify requirements'],
              ['Greenfield', 'Building something from scratch', 'Start with structure, build incrementally'],
              ['Refactoring', 'Improving existing code without changing behavior', 'Explain goals, provide current code'],
              ['Learning', 'Understanding how something works', 'Ask questions, request explanations']
            ]
          }
        ]
      },
      {
        id: 'section-6-2',
        title: 'Scope Matching',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'Match the scope of your request to the capabilities of your tool. Small, focused requests get better results than large, vague ones.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Scope Levels',
            text: 'Think in terms of: Single function → Single file → Feature → Full application. Start at the smallest scope that makes sense.'
          },
          {
            type: 'list',
            items: [
              'Single function: Perfect for chat or completion tools',
              'Single file: Good for IDE integrations',
              'Feature (multiple files): Best for Claude Code or similar',
              'Full application: Break down into features first'
            ]
          },
          {
            type: 'highlight',
            variant: 'warning',
            title: 'Scope Creep',
            text: 'If you find yourself saying "while you\'re at it, also..."—stop. Complete the current task first, then start a new one.'
          }
        ]
      },
      {
        id: 'section-6-3',
        title: 'Knowing When to Stop',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'Sometimes AI isn\'t the right solution. Recognizing when to step back, do research, or try a different approach is an important skill.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Warning Signs',
            text: 'If you\'ve tried 3-4 variations of a prompt and still aren\'t getting good results, it\'s time to try a different approach.'
          },
          {
            type: 'list',
            items: [
              'You\'re not sure what you\'re trying to build',
              'The AI keeps making the same mistake',
              'You can\'t verify if the output is correct',
              'The task requires real-time or external data',
              'You need guaranteed correctness (financial, medical)'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Alternative Approaches',
            text: 'When AI isn\'t working: search for existing solutions, read documentation, ask in developer communities, or simplify your requirements.'
          }
        ]
      },
      {
        id: 'section-6-4',
        title: 'Understanding AI Agents and Agentic Workflows',
        estimatedTime: '35 min',
        content: [
          {
            type: 'paragraph',
            text: 'As AI tools mature, you\'ll encounter two related but distinct concepts: agentic workflows and AI agents. Understanding the difference helps you choose the right approach for each task.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'What is an AI Agent?',
            text: 'An AI agent is software that perceives its environment, makes decisions, and takes actions autonomously to achieve goals. You define the goal; the agent determines how to reach it.'
          },
          {
            type: 'paragraph',
            text: 'Think of the evolution in three levels: Level 1 (AI Chat) where humans drive every step, Level 2 (Agentic Workflows) where AI makes decisions within a predefined workflow, and Level 3 (AI Agents) where the agent autonomously determines its strategy.'
          },
          {
            type: 'highlight',
            variant: 'example',
            title: 'The GPS Analogy',
            text: 'An agentic workflow is like a GPS route you programmed - it follows your predetermined path with smart decisions at intersections. An AI agent is like a driver who knows the destination and chooses their own route entirely.'
          },
          {
            type: 'comparison',
            title: 'When You Need Each',
            headers: ['Need an Agent When', 'Workflow Sufficient When'],
            rows: [
              ['Path to goal isn\'t predetermined', 'Workflow is consistent'],
              ['Strategy adapts based on results', 'Steps clearly defined'],
              ['Multiple approaches exist', 'One-time task'],
              ['Autonomous operation for extended periods', 'Human judgment critical at each step'],
              ['Multi-step reasoning required', 'Predictable decision trees']
            ]
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Cost Consideration',
            text: 'Agentic workflows are cheaper and more predictable to run. Full AI agents are more expensive but adaptive. Choose based on task complexity and budget.'
          },
          {
            type: 'paragraph',
            text: 'The practical reality: 80% of business use cases are handled well by agentic workflows. Only 20% truly benefit from autonomous agents.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Platform Comparison'
          },
          {
            type: 'paragraph',
            text: 'Multiple platforms exist because each excels at different jobs. Here\'s how they compare:'
          },
          {
            type: 'comparison',
            title: 'AI Agent & Workflow Platforms',
            headers: ['Platform', 'What It Is', 'Best For'],
            rows: [
              ['Relevance AI', 'No-code agent platform with multi-agent orchestration', 'Non-technical teams, research agents, managed AI'],
              ['Reworkd', 'Specialized web automation agents', 'Data extraction, market research, lead generation'],
              ['n8n', 'Visual workflow automation with AI integration', 'Defined processes with AI enhancement, cost-effective'],
              ['Google AI Studio', 'Testing playground for Gemini', 'Prototyping, prompt testing, comparing models']
            ]
          },
          {
            type: 'highlight',
            variant: 'example',
            title: 'Relevance AI Use Case',
            text: 'A competitive intelligence agent that daily researches competitor pricing and automatically updates your spreadsheet. No coding required - just define the goal and data sources.'
          },
          {
            type: 'highlight',
            variant: 'example',
            title: 'Reworkd Use Case',
            text: 'Monitor 50 competitor job postings daily, automatically extracting title, salary, location, and required skills. Handles JavaScript-heavy sites and adapts when layouts change.'
          },
          {
            type: 'highlight',
            variant: 'example',
            title: 'n8n Use Case',
            text: 'Support ticket arrives → AI categorizes priority → Routes to appropriate team → Logs to database → Sends notifications. Full control over logic, self-hostable, cost-effective.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Platform Selection Framework'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'There is No "Better"',
            text: '"Better" means better fit for YOUR specific use case, technical capability, budget, and goals. Don\'t optimize prematurely - start with one, expand when you hit clear limitations.'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Decision Tree',
            code: 'IF you need web data extraction → Reworkd\nIF you need no-code agent deployment → Relevance AI\nIF you need cost-effective workflow automation → n8n\nIF you need to test AI capabilities first → Google AI Studio\n\nIF you need adaptive, autonomous behavior → Relevance AI (agents)\nIF you need defined process with AI decisions → n8n (workflows)\nIF you need specialized web automation → Reworkd\nIF you\'re prototyping before building → Google AI Studio'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'The Pragmatic Approach',
            text: 'Month 1: Pick ONE platform (usually n8n - cost-effective, flexible). Month 2-3: Build several workflows, understand limitations. Month 4+: Add second platform ONLY if you hit a specific limitation.'
          },
          {
            type: 'list',
            items: [
              'Good combination: Google AI Studio (testing) + n8n (production) - test prompts, deploy workflows',
              'Good combination: n8n (general automation) + Reworkd (specialized web scraping) - different jobs',
              'Bad combination: Relevance AI + Reworkd for same job - redundant',
              'Bad combination: All four for every project - overcomplicated'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Multi-Agent Networks'
          },
          {
            type: 'paragraph',
            text: 'Multiple AI agents can work together, each with specialized roles. Think of an orchestra: one conductor (orchestrator) coordinating multiple musicians (specialized agents).'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Example: Content Generation System',
            code: 'Agent 1 (Research): Monitors industry news, identifies trends, compiles data\nAgent 2 (Writing): Takes research, writes draft blog post, optimizes for SEO\nAgent 3 (Editor): Reviews draft, checks facts and tone, suggests improvements\nAgent 4 (Publishing): Formats for CMS, schedules optimal time, shares to social\nOrchestrator: Coordinates all agents, ensures deadline met, handles failures'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Why Multiple Agents?',
            text: 'Each can be optimized for its specific task. Easier to debug - isolate which agent failed. More modular - swap one agent without affecting others. Can use different AI models for different agents (cheap model for research, powerful for writing).'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Building Agentic Capabilities'
          },
          {
            type: 'numbered-list',
            items: [
              'Start with single decision point (AI categorizes, workflow routes)',
              'Add more AI decision points as confidence grows',
              'Eventually chain multiple AI decisions',
              'Finally, give agent autonomy for entire process'
            ]
          },
          {
            type: 'highlight',
            variant: 'warning',
            title: 'Safety and Control',
            text: 'Always define spending/action limits. Log all agent decisions with reasoning. Human-in-the-loop for high-stakes decisions. Gradual autonomy increase (80% human review → 20% → exceptions only). Build rollback capability.'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Cost Management',
            text: 'Set maximum API call limits per task. Use cheaper models for routine decisions, expensive for complex ones. Cache repetitive analyses. Monitor cost per OUTCOME, not just per API call.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-7',
    title: 'FUNDAMENTAL CONCEPTS',
    description: 'Core programming concepts that help you understand and direct AI-generated code.',
    sections: [
      {
        id: 'section-7-1',
        title: 'Variables and Data Types',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'Variables are containers for storing data. Understanding data types helps you specify what kind of information your code should handle.'
          },
          {
            type: 'code',
            language: 'javascript',
            title: 'Common Data Types',
            code: '// Strings - text\nlet name = "Alice";\n\n// Numbers\nlet age = 30;\nlet price = 19.99;\n\n// Booleans - true/false\nlet isActive = true;\n\n// Arrays - lists\nlet colors = ["red", "green", "blue"];\n\n// Objects - structured data\nlet user = {\n  name: "Alice",\n  age: 30,\n  email: "alice@example.com"\n};'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'In Prompts',
            text: 'Specifying data types helps AI write better code. "Store the user\'s age as a number" is clearer than just "store the age".'
          }
        ]
      },
      {
        id: 'section-7-2',
        title: 'Functions and Logic',
        estimatedTime: '18 min',
        content: [
          {
            type: 'paragraph',
            text: 'Functions are reusable blocks of code that do specific things. They take inputs (parameters), process them, and return outputs.'
          },
          {
            type: 'code',
            language: 'javascript',
            title: 'Function Anatomy',
            code: '// Function definition\nfunction calculateTotal(price, quantity) {\n  const subtotal = price * quantity;\n  const tax = subtotal * 0.1;\n  return subtotal + tax;\n}\n\n// Function call\nconst total = calculateTotal(25, 3);\nconsole.log(total); // 82.5'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Conditional Logic',
            text: 'If/else statements let code make decisions. Understanding these helps you describe the behavior you want.'
          },
          {
            type: 'code',
            language: 'javascript',
            title: 'Conditional Logic',
            code: 'function getDiscount(totalSpent) {\n  if (totalSpent > 100) {\n    return 0.2; // 20% discount\n  } else if (totalSpent > 50) {\n    return 0.1; // 10% discount\n  } else {\n    return 0; // No discount\n  }\n}'
          }
        ]
      },
      {
        id: 'section-7-3',
        title: 'Loops and Iteration',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'Loops let you repeat actions. When you need to process a list of items or repeat until a condition is met, you use loops.'
          },
          {
            type: 'code',
            language: 'javascript',
            title: 'Loop Types',
            code: '// For each item in a list\nconst names = ["Alice", "Bob", "Charlie"];\nfor (const name of names) {\n  console.log(`Hello, ${name}!`);\n}\n\n// While a condition is true\nlet count = 0;\nwhile (count < 5) {\n  console.log(count);\n  count++;\n}'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'In Prompts',
            text: '"For each user in the list, send an email" tells AI to use a loop. Being explicit about iteration helps generate correct code.'
          }
        ]
      },
      {
        id: 'section-7-4',
        title: 'State and Events',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'State is data that changes over time. Events are things that happen (clicks, key presses, data loading). Understanding these is key for interactive applications.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'State',
            text: 'State is the "current situation" of your app. Is the user logged in? What items are in the cart? Is the form valid? These are all state.'
          },
          {
            type: 'code',
            language: 'javascript',
            title: 'State in React',
            code: 'function Counter() {\n  // count is state, setCount updates it\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Describing Behavior',
            text: 'Use state language in prompts: "When the button is clicked, update the count" or "If the user is logged in, show the dashboard".'
          }
        ]
      }
    ]
  },
  {
    id: 'module-8',
    title: 'LEARNING MINDSET',
    description: 'Develop the mental models and attitudes that accelerate learning.',
    sections: [
      {
        id: 'section-8-1',
        title: 'Embracing Errors',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'Errors are not failures—they\'re information. Every error message is the computer telling you exactly what went wrong. Learning to read and appreciate errors accelerates your growth.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Error Anatomy',
            text: 'Most errors tell you: what went wrong, where it happened (file and line number), and often suggest a fix. Read the whole message!'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Reading an Error',
            code: 'TypeError: Cannot read property \'name\' of undefined\n    at getUserName (user.js:15)\n    at main (index.js:42)\n\nWhat this tells us:\n- Type: TypeError (we tried to access something that doesn\'t exist)\n- What: Tried to read \'name\' from undefined\n- Where: user.js line 15, called from index.js line 42\n- Fix: Check why the object is undefined before accessing .name'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'AI Error Help',
            text: 'Copy-paste the full error message to AI. "I got this error: [paste]. Here\'s my code: [paste]. What\'s wrong?" is an effective pattern.'
          }
        ]
      },
      {
        id: 'section-8-2',
        title: 'The Art of Googling',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'Professional developers spend significant time searching for solutions. Knowing how to search effectively is a core skill—even with AI, you\'ll still search.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Search Strategies',
            text: 'Include the technology name, be specific about the problem, and include error messages. "React useState not updating" beats "state doesn\'t work".'
          },
          {
            type: 'list',
            items: [
              'Include technology: "javascript sort array by date"',
              'Quote error messages: "Cannot read property of undefined"',
              'Add context: "react hook form validation on blur"',
              'Use site search: "site:stackoverflow.com react useEffect"',
              'Add year for recent info: "react best practices 2024"'
            ]
          }
        ]
      },
      {
        id: 'section-8-3',
        title: 'Building Intuition',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'Over time, you\'ll develop an intuition for code—you\'ll sense when something is wrong before you even test it. This comes from exposure and deliberate practice.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Code Smell',
            text: 'A "code smell" is when something feels wrong even if it works. Trust these instincts and investigate. Often, they point to real problems.'
          },
          {
            type: 'list',
            items: [
              'Read code even when you don\'t have to',
              'When AI writes code, try to predict what it does before testing',
              'When something works, ask "why does this work?"',
              'When something breaks, understand the fix—don\'t just apply it',
              'Build small projects to reinforce concepts'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'The 20% Rule',
            text: 'Spend 20% of your time learning fundamentals without AI. This builds the foundation that makes your AI-assisted 80% more effective.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-9',
    title: 'YOUR FIRST WEEK',
    description: 'A structured 7-day programme to kickstart your vibe coding journey.',
    sections: [
      {
        id: 'section-9-1',
        title: 'Day 1: Setup',
        estimatedTime: '60 min',
        content: [
          {
            type: 'paragraph',
            text: 'Today is about getting your environment ready. A well-configured setup eliminates friction and lets you focus on building.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Day 1 Goals',
            text: 'Install your tools, verify everything works, and complete your first AI interaction.'
          },
          {
            type: 'list',
            items: [
              'Install a code editor (VS Code or Cursor)',
              'Install Node.js (for JavaScript development)',
              'Install Claude Code',
              'Create a test folder and navigate to it in terminal',
              'Run claude and have a simple conversation',
              'Ask it to create a "Hello World" HTML file',
              'Open the file in a browser—celebrate!'
            ]
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Day 1 Commands',
            code: '# Create your workspace\nmkdir ~/vibe-coding\ncd ~/vibe-coding\n\n# Start Claude Code\nclaude\n\n# Your first prompt:\n"Create a simple HTML file that displays Hello World with nice styling"'
          }
        ]
      },
      {
        id: 'section-9-2',
        title: 'Day 2: Terminal Practice',
        estimatedTime: '45 min',
        content: [
          {
            type: 'paragraph',
            text: 'Today we build terminal confidence. By the end of the day, navigating directories and managing files should feel comfortable.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Day 2 Goals',
            text: 'Navigate without getting lost, create project structures, and run commands with confidence.'
          },
          {
            type: 'list',
            items: [
              'Practice: Navigate to different folders using cd',
              'Practice: List contents with ls and ls -la',
              'Create: A project folder with proper structure',
              'Practice: Create, rename, and delete files',
              'Challenge: Navigate to a folder using only terminal commands'
            ]
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Day 2 Practice',
            code: '# Create a project structure\nmkdir my-first-project\ncd my-first-project\nmkdir src tests docs\ntouch src/index.js\ntouch README.md\n\n# View what you created\nls -la\nls -la src/'
          }
        ]
      },
      {
        id: 'section-9-3',
        title: 'Day 3: First Real Project',
        estimatedTime: '90 min',
        content: [
          {
            type: 'paragraph',
            text: 'Today we build something real. A simple to-do list teaches essential concepts: state, events, and user interaction.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Day 3 Goals',
            text: 'Build a working to-do list application using AI assistance, understanding each piece as you go.'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Project Specification',
            code: 'Todo List Features:\n- Add new todos (text input + button)\n- Mark todos as complete (checkbox)\n- Delete todos (delete button)\n- Show count of remaining todos\n- Persist todos in localStorage'
          },
          {
            type: 'list',
            items: [
              'Start with Claude Code in a new folder',
              'Ask: "Help me build a todo list with React"',
              'Review each file as it\'s created',
              'Test each feature as it\'s added',
              'Ask Claude to explain any code you don\'t understand'
            ]
          }
        ]
      },
      {
        id: 'section-9-4',
        title: 'Day 4: Debugging Practice',
        estimatedTime: '60 min',
        content: [
          {
            type: 'paragraph',
            text: 'Today we intentionally break things and fix them. This builds the debugging skills that are essential for real development.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Day 4 Goals',
            text: 'Understand common errors, learn to read error messages, and practice fixing bugs with AI assistance.'
          },
          {
            type: 'list',
            items: [
              'Introduce a syntax error and read the message',
              'Remove a required import and understand the error',
              'Make a typo in a variable name and trace the bug',
              'Practice copying errors to Claude for help',
              'Fix each bug and understand why the fix works'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Debugging Workflow',
            text: 'Read error → Find line number → Look at that code → Identify issue → Fix → Test. If stuck, ask AI with full error message and context.'
          }
        ]
      },
      {
        id: 'section-9-5',
        title: 'Day 5: API Integration',
        estimatedTime: '75 min',
        content: [
          {
            type: 'paragraph',
            text: 'Today we connect to the outside world. Fetching data from APIs is how real applications get dynamic content.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Day 5 Goals',
            text: 'Understand API calls, handle loading and error states, and display fetched data.'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Project: Weather Display',
            code: 'Weather App Features:\n- Text input for city name\n- Button to fetch weather\n- Display temperature and conditions\n- Loading indicator while fetching\n- Error message if city not found\n\nUse a free API like wttr.in or OpenWeatherMap'
          },
          {
            type: 'list',
            items: [
              'Ask Claude to create a weather lookup app',
              'Understand the fetch call and promise handling',
              'Add loading state that shows while waiting',
              'Add error handling for invalid cities',
              'Test with various inputs including edge cases'
            ]
          }
        ]
      },
      {
        id: 'section-9-6',
        title: 'Day 6: Styling and Polish',
        estimatedTime: '60 min',
        content: [
          {
            type: 'paragraph',
            text: 'Today we focus on making things look good. Understanding CSS basics helps you direct AI to create the visual results you want.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Day 6 Goals',
            text: 'Learn CSS fundamentals, use Tailwind CSS, and polish one of your earlier projects.'
          },
          {
            type: 'list',
            items: [
              'Review: How CSS selectors work',
              'Practice: Use Tailwind utility classes',
              'Add responsive design (works on mobile and desktop)',
              'Add animations and transitions',
              'Create a consistent color scheme'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Style Prompts',
            text: '"Make it look professional with a blue color scheme" or "Add hover effects to all buttons" helps AI understand what you want visually.'
          }
        ]
      },
      {
        id: 'section-9-7',
        title: 'Day 7: Review and Plan',
        estimatedTime: '60 min',
        content: [
          {
            type: 'paragraph',
            text: 'The final day is for consolidation. Review what you\'ve learned, identify gaps, and plan your continued learning journey.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Day 7 Goals',
            text: 'Review your work, identify what needs more practice, and set goals for the next month.'
          },
          {
            type: 'list',
            items: [
              'Review each project you built this week',
              'List concepts you understand well',
              'List concepts that need more practice',
              'Choose your next project to build',
              'Set up a regular practice schedule'
            ]
          },
          {
            type: 'code',
            language: 'text',
            title: 'Week 1 Reflection',
            code: 'Questions to Answer:\n\n1. What was the most challenging part?\n2. What clicked and felt easy?\n3. What do I want to build next?\n4. What concept do I need to review?\n5. How can I maintain momentum?'
          }
        ]
      }
    ]
  },
  {
    id: 'module-10',
    title: 'NEXT STEPS',
    description: 'Continue your journey with advanced topics and resources.',
    sections: [
      {
        id: 'section-10-1',
        title: 'Project Ideas',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'The best way to learn is by building. Here are project ideas organized by complexity to keep you growing.'
          },
          {
            type: 'comparison',
            title: 'Project Ideas by Level',
            headers: ['Level', 'Project', 'Skills Practiced'],
            rows: [
              ['Beginner', 'Personal portfolio', 'HTML, CSS, responsive design'],
              ['Beginner', 'Quiz app', 'State management, user interaction'],
              ['Intermediate', 'Blog with CMS', 'Database, CRUD operations'],
              ['Intermediate', 'Chat application', 'Real-time updates, WebSockets'],
              ['Advanced', 'E-commerce store', 'Payment integration, auth'],
              ['Advanced', 'SaaS dashboard', 'Charts, complex state, APIs']
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Project Selection',
            text: 'Choose projects you\'d actually use. Personal motivation keeps you going when things get difficult.'
          }
        ]
      },
      {
        id: 'section-10-2',
        title: 'Learning Resources',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'While AI accelerates learning, traditional resources still have value. Use them to build deeper understanding.'
          },
          {
            type: 'list',
            items: [
              'MDN Web Docs - The definitive reference for web technologies',
              'freeCodeCamp - Free courses with hands-on projects',
              'JavaScript.info - Deep dive into JavaScript',
              'React documentation - Official React learning path',
              'CSS-Tricks - Practical CSS tutorials and guides'
            ]
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Learning Strategy',
            text: 'Use AI for building, traditional resources for understanding. Both together are more powerful than either alone.'
          }
        ]
      },
      {
        id: 'section-10-3',
        title: 'Staying Current',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'The AI and development landscape changes rapidly. Building habits to stay current ensures your skills remain relevant.'
          },
          {
            type: 'list',
            items: [
              'Follow key accounts on X/Twitter for AI tool updates',
              'Subscribe to newsletters (TLDR, Bytes, etc.)',
              'Join communities (Discord servers, Reddit)',
              'Experiment with new tools as they launch',
              'Share what you learn—teaching reinforces knowledge'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Avoiding FOMO',
            text: 'You don\'t need every new tool. Master your core tools first. Add new ones only when they solve a real problem you have.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-11',
    title: 'PROJECT SETUP BEST PRACTICES',
    description: 'Learn how to set up projects for success with AI-assisted development.',
    sections: [
      {
        id: 'section-11-1',
        title: 'Repository Structure',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'A well-organized repository makes AI tools more effective. Clear structure helps AI understand your project and generate appropriate code.'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Recommended Structure',
            code: 'my-project/\n├── .env.example        # Environment template\n├── .gitignore          # Files to exclude from git\n├── README.md           # Project documentation\n├── package.json        # Dependencies and scripts\n├── src/\n│   ├── components/     # UI components\n│   ├── hooks/          # Custom React hooks\n│   ├── utils/          # Helper functions\n│   ├── services/       # API calls\n│   ├── context/        # State management\n│   └── pages/          # Page components\n├── tests/              # Test files\n└── docs/               # Additional documentation'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Why Structure Matters',
            text: 'AI reads your folder structure to understand context. "components/Button.jsx" tells AI it\'s a UI component. "services/api.js" tells it this handles API calls.'
          }
        ]
      },
      {
        id: 'section-11-2',
        title: 'Configuration Files',
        estimatedTime: '18 min',
        content: [
          {
            type: 'paragraph',
            text: 'Essential configuration files set up your development environment and help maintain code quality.'
          },
          {
            type: 'code',
            language: 'json',
            title: 'Essential package.json',
            code: '{\n  "name": "my-project",\n  "version": "1.0.0",\n  "scripts": {\n    "dev": "vite",\n    "build": "vite build",\n    "test": "vitest",\n    "lint": "eslint src/"\n  },\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0"\n  }\n}'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Essential .gitignore',
            code: 'node_modules/\n.env\n.env.local\ndist/\n.DS_Store\n*.log'
          },
          {
            type: 'highlight',
            variant: 'warning',
            title: 'Critical: .gitignore',
            text: 'Always add .env and node_modules to .gitignore before your first commit. Never commit secrets or dependencies to Git.'
          }
        ]
      },
      {
        id: 'section-11-3',
        title: 'Documentation Practices',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'Good documentation helps both AI and future-you understand the project. Even a simple README dramatically improves AI assistance quality.'
          },
          {
            type: 'code',
            language: 'markdown',
            title: 'Minimal README Template',
            code: '# Project Name\n\nOne-line description of what this does.\n\n## Setup\n\n```bash\nnpm install\nnpm run dev\n```\n\n## Features\n\n- Feature 1\n- Feature 2\n\n## Tech Stack\n\n- React\n- Tailwind CSS\n- Vite'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'AI Context',
            text: 'When AI reads your README, it understands what your project does and can generate more relevant code. A 30-second README saves hours of clarification.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-12',
    title: 'CONNECTING YOUR TOOLS',
    description: 'Set up seamless integration between your development tools.',
    sections: [
      {
        id: 'section-12-1',
        title: 'Git Essentials',
        estimatedTime: '20 min',
        content: [
          {
            type: 'paragraph',
            text: 'Git is version control—it tracks changes to your code over time. It\'s essential for professional development and collaborating with AI tools.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Why Git Matters',
            text: 'Git lets you: undo mistakes, see what changed, work on features without breaking your main code, and collaborate with others (including AI).'
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Essential Git Commands',
            code: '# Start tracking a project\ngit init\n\n# See what\'s changed\ngit status\n\n# Stage changes\ngit add filename.js\ngit add .                # Add all changes\n\n# Commit (save a snapshot)\ngit commit -m "Add login form"\n\n# View history\ngit log --oneline\n\n# Undo unstaged changes\ngit checkout filename.js\n\n# Create a branch\ngit checkout -b new-feature'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Commit Often',
            text: 'Commit after each working change. "Add header" then "Add navigation" then "Add footer"—not one giant "Add entire homepage" commit.'
          }
        ]
      },
      {
        id: 'section-12-2',
        title: 'GitHub Setup',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'GitHub hosts your Git repositories online. It\'s where most open source lives and where you can back up and share your projects.'
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Connecting to GitHub',
            code: '# Create a repo on GitHub first, then:\n\n# Link your local repo to GitHub\ngit remote add origin https://github.com/username/repo.git\n\n# Push your code\ngit push -u origin main\n\n# Pull changes from GitHub\ngit pull origin main'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'SSH vs HTTPS',
            text: 'SSH keys let you push without entering a password each time. Set up SSH for a smoother workflow.'
          }
        ]
      },
      {
        id: 'section-12-3',
        title: 'Editor Integration',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'Your code editor is your home base. Setting it up properly with the right extensions makes development faster and more enjoyable.'
          },
          {
            type: 'list',
            items: [
              'ESLint - Catch errors as you type',
              'Prettier - Auto-format your code',
              'GitLens - See Git history inline',
              'Error Lens - Show errors right on the line',
              'Tailwind CSS IntelliSense - Autocomplete for Tailwind'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Settings Sync',
            text: 'VS Code can sync settings across computers. Enable this to keep your setup consistent everywhere.'
          }
        ]
      },
      {
        id: 'section-12-4',
        title: 'Claude Code Configuration',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'Configuring Claude Code properly helps it understand your preferences and project context.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Project Context',
            text: 'Claude Code reads your project files to understand context. Well-organized code with good names helps it generate better suggestions.'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Effective Claude Code Usage',
            code: 'Good practices:\n\n1. Start Claude Code in your project root\n2. Reference specific files when relevant\n3. Be explicit about what you want\n4. Review changes before accepting\n5. Commit working code before major changes'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Safety Tip',
            text: 'Always commit your working code before asking Claude to make big changes. This lets you easily undo if something goes wrong.'
          }
        ]
      },
      {
        id: 'section-12-5',
        title: 'Workflow Integration',
        estimatedTime: '18 min',
        content: [
          {
            type: 'paragraph',
            text: 'The tools work best when they work together. Here\'s how to combine them into an efficient workflow.'
          },
          {
            type: 'diagram',
            variant: 'flow',
            title: 'Development Workflow',
            steps: ['Plan Feature', 'Create Branch', 'Build with Claude', 'Test & Review', 'Commit', 'Push & PR']
          },
          {
            type: 'code',
            language: 'bash',
            title: 'Typical Session',
            code: '# Start a new feature\ngit checkout -b add-user-profile\n\n# Work with Claude Code\nclaude "add a user profile page with avatar, name, and bio fields"\n\n# Review and test the changes\n# ...\n\n# Commit when it works\ngit add .\ngit commit -m "Add user profile page"\n\n# Push to GitHub\ngit push -u origin add-user-profile'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'The Rhythm',
            text: 'Plan → Branch → Build → Test → Commit → Repeat. This rhythm keeps you moving forward while maintaining a clean history.'
          }
        ]
      },
      {
        id: 'section-12-6',
        title: 'Model Context Protocol (MCP)',
        estimatedTime: '18 min',
        content: [
          {
            type: 'paragraph',
            text: 'Model Context Protocol (MCP) is a protocol that lets AI models access external tools and data sources securely. It extends AI capabilities beyond text generation to interacting with real systems.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'Why MCP Matters',
            text: 'MCP transforms AI from a text-only assistant into one that can read files, query databases, search the web, execute code, and interact with your specific systems - all within a single conversation.'
          },
          {
            type: 'paragraph',
            text: 'How it works: MCP servers expose tools (functions the AI can call). The AI decides when to use them based on your task. Unlike regular APIs where you make predefined calls, MCP lets the AI discover and use tools dynamically.'
          },
          {
            type: 'highlight',
            variant: 'example',
            title: 'MCP in Action',
            text: 'You say: "Analyze this spreadsheet and update the database." With MCP, Claude can read the file, process the data, and write to your database - all in one conversation. Without MCP, you\'d need to manually copy data back and forth.'
          },
          {
            type: 'code',
            language: 'text',
            title: 'Common MCP Servers',
            code: 'File System Access - Read and write local files\nDatabase Queries - Connect to PostgreSQL, SQLite, etc.\nWeb Search - Search the internet for current information\nCalculator - Perform complex calculations\nCode Execution - Run code snippets safely\nGitHub - Interact with repositories and issues'
          },
          {
            type: 'paragraph',
            text: 'Setting up MCP with Claude Desktop: Configure MCP servers in the app settings, and Claude automatically uses the tools when relevant to your request.'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Custom MCP Servers',
            text: 'For advanced users: you can create custom MCP servers exposing your own tools and APIs. This lets Claude interact with your proprietary systems.'
          },
          {
            type: 'comparison',
            title: 'When to Use MCP',
            headers: ['Use MCP When', 'Skip MCP When'],
            rows: [
              ['AI needs to interact with your systems', 'Simple text-only tasks'],
              ['You want more than text responses', 'Using web interface only'],
              ['Building AI-powered workflows with tool access', 'Quick one-off questions'],
              ['Need AI to read/write files or databases', 'No system integration needed']
            ]
          },
          {
            type: 'highlight',
            variant: 'warning',
            title: 'Current Limitations',
            text: 'MCP requires Claude Desktop app or API integration - not available in the web interface. It\'s still an evolving standard, so expect changes. Always review what tools you\'re exposing and their permissions.'
          },
          {
            type: 'paragraph',
            text: 'MCP represents the future of AI assistance - moving from chat-only to genuine collaboration where AI can take actions in your real environment. As you advance, explore MCP to unlock more powerful AI workflows.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-13',
    title: 'BUILDING AGENTIC AI NETWORKS',
    description: 'Learn to create systems where multiple AI agents work together to accomplish complex tasks.',
    sections: [
      {
        id: 'section-13-1',
        title: 'Why Use Multiple Agents?',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'So far, you\'ve worked with single AI interactions - one prompt, one response. But what if you need different "experts" for different parts of a task? That\'s where agent networks come in.'
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'The Multi-Agent Advantage',
            text: 'Instead of one AI trying to do everything, you create specialized agents that each excel at one thing. A research agent finds information. An analysis agent interprets it. A writing agent creates content. Together, they\'re more effective than one generalist.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Single Agent vs Multi-Agent'
          },
          {
            type: 'comparison',
            title: 'When to Use Each Approach',
            headers: ['Single Agent', 'Multi-Agent Network'],
            rows: [
              ['Simple, well-defined tasks', 'Complex, multi-step processes'],
              ['One type of expertise needed', 'Multiple specializations required'],
              ['Quick, one-off responses', 'Ongoing, coordinated work'],
              ['Simple: easy to debug', 'Complex: harder to debug but more capable']
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Real-World Multi-Agent Examples'
          },
          {
            type: 'highlight',
            variant: 'example',
            title: 'Competitor Intelligence System',
            text: 'Agent 1 (Web Monitor): Checks competitor websites daily for changes. Agent 2 (News Scanner): Searches for competitor mentions in news. Agent 3 (Analysis): Combines findings into insights. Agent 4 (Report Writer): Creates executive summary. Result: Daily competitive intelligence with no manual work.'
          },
          {
            type: 'highlight',
            variant: 'example',
            title: 'Content Production Pipeline',
            text: 'Agent 1 (Research): Gathers facts and sources. Agent 2 (Outliner): Creates content structure. Agent 3 (Writer): Drafts the content. Agent 4 (Editor): Reviews and polishes. Agent 5 (SEO): Optimizes for search. Result: High-quality content at scale.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Why Specialization Works'
          },
          {
            type: 'list',
            items: [
              'Different models for different tasks: Use cheap/fast models for simple work, powerful models for complex analysis',
              'Optimized prompts: Each agent has prompts tuned for its specific job',
              'Better quality control: Each output can be reviewed before moving to next stage',
              'Fault isolation: If one agent fails, others can continue or retry',
              'Parallel execution: Independent agents can work simultaneously'
            ]
          }
        ]
      },
      {
        id: 'section-13-2',
        title: 'Agent Network Patterns',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'There are several common patterns for organizing multiple agents. Each has its strengths depending on your use case.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Pattern 1: Sequential Pipeline'
          },
          {
            type: 'paragraph',
            text: 'Agents execute one after another, each passing output to the next. Like an assembly line.'
          },
          {
            type: 'diagram',
            variant: 'flow',
            title: 'Sequential Flow',
            steps: ['Input', 'Agent A', 'Agent B', 'Agent C', 'Output']
          },
          {
            type: 'list',
            items: [
              'Best for: Processes where each step depends on the previous',
              'Example: Research → Analysis → Report → Review',
              'Pros: Simple to understand, easy to debug',
              'Cons: Slow (must wait for each step), one failure blocks all'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Pattern 2: Parallel Execution with Aggregator'
          },
          {
            type: 'paragraph',
            text: 'Multiple agents work simultaneously on different subtasks. An aggregator combines their outputs.'
          },
          {
            type: 'list',
            items: [
              'Best for: Independent subtasks that can run simultaneously',
              'Example: Check 5 competitor websites in parallel, then combine findings',
              'Pros: Fast (parallel execution), fault tolerant',
              'Cons: More complex coordination, aggregation can be tricky'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Pattern 3: Hierarchical (Manager + Workers)'
          },
          {
            type: 'paragraph',
            text: 'A manager agent coordinates specialized worker agents, routing tasks based on type.'
          },
          {
            type: 'list',
            items: [
              'Best for: Varied task types needing different specialists',
              'Example: Support manager routes to billing, technical, or shipping agents',
              'Pros: Flexible routing, specialized handling',
              'Cons: Manager is single point of failure, routing logic can get complex'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Pattern 4: Feedback Loop'
          },
          {
            type: 'paragraph',
            text: 'One agent creates, another reviews, feedback cycles until quality threshold met.'
          },
          {
            type: 'list',
            items: [
              'Best for: Quality-critical content that benefits from iteration',
              'Example: Writer creates draft → Reviewer critiques → Writer revises → repeat until approved',
              'Pros: High quality output, self-improving',
              'Cons: Can loop forever (need termination conditions), expensive'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Pattern 5: Orchestrator Pattern'
          },
          {
            type: 'paragraph',
            text: 'A central orchestrator agent decides dynamically which agents to call, in what order, based on the task.'
          },
          {
            type: 'list',
            items: [
              'Best for: Complex, variable workflows where the path isn\'t predetermined',
              'Example: Orchestrator assesses task → decides to use research, skip analysis, go straight to writing',
              'Pros: Most flexible, adapts to situation',
              'Cons: Most complex to build, orchestrator needs to be smart'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Start Simple',
            text: 'Begin with sequential pipelines. Add complexity (parallel, hierarchical) only when needed. Many real problems are solved with simple 3-4 agent sequential flows.'
          }
        ]
      },
      {
        id: 'section-13-3',
        title: 'Building Your First Agent Network',
        estimatedTime: '18 min',
        content: [
          {
            type: 'paragraph',
            text: 'Let\'s build a practical 3-agent network: a simple content research and creation pipeline.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'The Goal'
          },
          {
            type: 'paragraph',
            text: 'Create a system that takes a topic, researches it, analyzes the findings, and produces a summary. Three specialized agents working together.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Agent 1: Research Agent'
          },
          {
            type: 'list',
            items: [
              'Job: Find relevant information about the topic',
              'Input: Topic name/question',
              'Output: List of key facts, sources, and data points',
              'Model: Can use faster/cheaper model (GPT-3.5, Claude Haiku)',
              'Why separate: Research requires breadth, not depth'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Agent 2: Analysis Agent'
          },
          {
            type: 'list',
            items: [
              'Job: Interpret research, find patterns, draw conclusions',
              'Input: Research Agent\'s output',
              'Output: Key insights, trends, recommendations',
              'Model: Use more capable model (GPT-4, Claude Opus)',
              'Why separate: Analysis requires deep reasoning'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Agent 3: Writer Agent'
          },
          {
            type: 'list',
            items: [
              'Job: Turn analysis into polished, readable content',
              'Input: Analysis Agent\'s insights',
              'Output: Final summary/report',
              'Model: Model good at writing (Claude, GPT-4)',
              'Why separate: Writing style differs from analytical thinking'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Implementation with n8n'
          },
          {
            type: 'numbered-list',
            items: [
              'Create workflow with trigger (manual or scheduled)',
              'Add first AI node: Research Agent with research-focused prompt',
              'Connect output to second AI node: Analysis Agent',
              'Connect to third AI node: Writer Agent',
              'Add output (email, Slack, save to file)'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Prompt Engineering for Agents',
            text: 'Each agent needs a focused system prompt. Research Agent: "You are a research specialist. Find factual information. List sources. Be thorough but concise." Analysis Agent: "You are an analyst. Identify patterns and insights. Draw conclusions. Be logical." Writer Agent: "You are a writer. Create clear, engaging content. Use the analysis provided. Match the requested tone."'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Testing Your Network'
          },
          {
            type: 'numbered-list',
            items: [
              'Run with simple topic first ("Benefits of remote work")',
              'Check each agent\'s output individually',
              'Verify handoffs: Does Agent 2 receive Agent 1\'s output correctly?',
              'Evaluate final output: Is it better than single-agent approach?',
              'Iterate on prompts based on results'
            ]
          }
        ]
      },
      {
        id: 'section-13-4',
        title: 'Agent Communication Methods',
        estimatedTime: '12 min',
        content: [
          {
            type: 'paragraph',
            text: 'Agents need to share data with each other. Here are the main approaches, from simple to complex.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Method 1: Shared File System'
          },
          {
            type: 'list',
            items: [
              'How it works: Agents read/write to shared folder or cloud storage',
              'Example: Research Agent writes to research_output.json, Analysis Agent reads it',
              'Pros: Simple, easy to debug (just look at files), works everywhere',
              'Cons: Not real-time, can have race conditions',
              'Best for: Sequential pipelines, batch processing'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Method 2: Database'
          },
          {
            type: 'list',
            items: [
              'How it works: Agents read/write to shared database',
              'Example: Each agent updates status in Supabase table',
              'Pros: Structured data, query capabilities, concurrent access',
              'Cons: Requires database setup, more complexity',
              'Best for: Production systems, when you need to query history'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Method 3: Message Queue'
          },
          {
            type: 'list',
            items: [
              'How it works: Agents publish/subscribe to message queues',
              'Example: Research Agent publishes to "research-complete" queue',
              'Pros: Decoupled, scalable, handles failures well',
              'Cons: Most complex, requires queue infrastructure',
              'Best for: High-volume, distributed systems'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Method 4: Direct API Calls'
          },
          {
            type: 'list',
            items: [
              'How it works: One agent calls another agent\'s API endpoint',
              'Example: Orchestrator calls /research-agent endpoint',
              'Pros: Fully decoupled, can use different technologies',
              'Cons: Most complex, requires hosting each agent',
              'Best for: Microservices architecture'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Recommendation for Beginners',
            text: 'Start with Shared File System (Method 1). It\'s simple to understand, easy to debug (just look at files), and works for most use cases. Upgrade to database when you need history or concurrent access.'
          }
        ]
      },
      {
        id: 'section-13-5',
        title: 'Error Handling and Monitoring',
        estimatedTime: '15 min',
        content: [
          {
            type: 'paragraph',
            text: 'Agent networks can fail in various ways. Here\'s how to handle common problems.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Problem 1: Agent Fails'
          },
          {
            type: 'paragraph',
            text: 'Example: Web scraping agent hits rate limit'
          },
          {
            type: 'list',
            items: [
              'Retry logic: Try 3 times with increasing delays (1s, 5s, 15s)',
              'Fallback behavior: Use cached data if available',
              'Alert human: If repeatedly fails, send notification',
              'Circuit breaker: Stop trying after too many failures'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Problem 2: Agent Produces Bad Output'
          },
          {
            type: 'paragraph',
            text: 'Example: Analysis agent hallucinates facts'
          },
          {
            type: 'list',
            items: [
              'QA agent: Add a review agent that checks outputs',
              'Confidence scores: Agent rates its own certainty',
              'Human review: Flag high-stakes outputs for manual check',
              'Validation rules: Check output format and required fields'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Problem 3: Agents Get Stuck in Loop'
          },
          {
            type: 'paragraph',
            text: 'Example: Creator and Reviewer keep rejecting each other\'s work'
          },
          {
            type: 'list',
            items: [
              'Max iteration limits: Stop after 5 rounds',
              'Progressive acceptance: Lower standards each round',
              'Human arbitration: Escalate after threshold',
              'Timeout: Abort after X minutes regardless'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Problem 4: One Agent Delays Entire Pipeline'
          },
          {
            type: 'paragraph',
            text: 'Example: News agent takes 30 minutes, blocks others'
          },
          {
            type: 'list',
            items: [
              'Timeouts: If agent takes >10 minutes, skip it',
              'Parallel execution: Run independent agents simultaneously',
              'Caching: Reuse recent results when acceptable',
              'Async processing: Don\'t wait, continue and merge later'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Monitoring Your Network'
          },
          {
            type: 'list',
            items: [
              'Track: Agent status, execution time, cost per agent, success rate',
              'Simple setup: Each agent logs to shared spreadsheet',
              'Columns: timestamp, agent_name, status, duration, cost',
              'Weekly review: Which agents are slowest? Most expensive? Most error-prone?'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Start Simple',
            text: 'Begin with spreadsheet logging. Add real-time dashboards (Grafana, Datadog) and Slack alerts only when scale demands it.'
          }
        ]
      },
      {
        id: 'section-13-6',
        title: 'Cost Optimization for Agent Networks',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'Agent networks can get expensive quickly. Here are strategies to optimize costs.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Strategy 1: Use Cheaper Models for Simple Tasks'
          },
          {
            type: 'list',
            items: [
              'Expensive models (GPT-4, Claude Opus): Complex analysis, nuanced writing',
              'Cheap models (GPT-3.5, Claude Haiku): Categorization, simple extraction',
              'Example: Research Agent uses cheap model to gather data, Analysis Agent uses expensive model for insights'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Strategy 2: Cache Agent Outputs'
          },
          {
            type: 'list',
            items: [
              'If web monitoring finds no changes, reuse yesterday\'s analysis',
              'Don\'t regenerate reports if underlying data hasn\'t changed',
              'Cache expensive API calls (news searches, web scrapes)'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Strategy 3: Batch Processing'
          },
          {
            type: 'list',
            items: [
              'Instead of: Run full pipeline for each item (expensive)',
              'Do: Collect 100 items, run pipeline once for batch (cheaper)',
              'Example: Process all daily leads together instead of one-by-one'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Strategy 4: Incremental Updates'
          },
          {
            type: 'list',
            items: [
              'Don\'t regenerate entire report weekly',
              'Generate once, then only update changed sections',
              'Example: Monday full report, Tuesday-Sunday just highlight changes'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Strategy 5: Smart Orchestration'
          },
          {
            type: 'list',
            items: [
              'Don\'t always run all agents',
              'Orchestrator decides: "No news this week? Skip News Agent"',
              'Conditional execution based on triggers and thresholds'
            ]
          },
          {
            type: 'highlight',
            variant: 'warning',
            title: 'Track Your Costs',
            text: 'Log every AI API call with its cost. Create weekly reports: total spend, cost per agent, cost per output. Set budgets and alerts when costs exceed thresholds.'
          }
        ]
      },
      {
        id: 'section-13-7',
        title: 'When to Build vs Buy Agent Networks',
        estimatedTime: '8 min',
        content: [
          {
            type: 'heading',
            level: 3,
            text: 'Build Your Own When:'
          },
          {
            type: 'list',
            items: [
              'Unique workflow specific to your business',
              'Need full control over logic and data',
              'Have technical resources available',
              'Cost-sensitive (avoid platform fees)',
              'Security requirements demand self-hosting'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Use a Platform (Relevance AI, etc.) When:'
          },
          {
            type: 'list',
            items: [
              'Standard use cases (research, content, data processing)',
              'Want faster setup and iteration',
              'Team is non-technical',
              'Value support and maintenance',
              'Need enterprise features out of box'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Hybrid Approach'
          },
          {
            type: 'paragraph',
            text: 'Use platforms for most agents, build custom for specialized needs. Best of both worlds.'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Recommended Progression'
          },
          {
            type: 'numbered-list',
            items: [
              'Month 1: Single agentic workflow (n8n + Claude API) - Learn the basics, prove value',
              'Month 2: Simple agent network (3-4 agents, sequential) - Add specialization',
              'Month 3: Complex orchestration (parallel agents, feedback loops) - Production-grade with monitoring'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'Key Principle',
            text: 'Don\'t build complex networks on day 1. Evolve into them as needs grow. Start with single agents, graduate to simple networks, add complexity only when justified by real requirements.'
          }
        ]
      }
    ]
  },
  {
    id: 'appendix',
    title: 'APPENDIX',
    description: 'Quick reference guides and cheat sheets for common commands and workflows.',
    sections: [
      {
        id: 'section-appendix-1',
        title: 'Essential Terminal Commands',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'A quick reference guide to the most common terminal commands you\'ll use. Bookmark this page for easy access!'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Navigation Commands'
          },
          {
            type: 'list',
            items: [
              'pwd - Shows your current location (which folder you\'re in)',
              'ls - Lists all files and folders in your current location',
              'cd folder-name - Moves you into a folder called "folder-name"',
              'cd .. - Goes back up one level (to the parent folder)',
              'cd ~ - Takes you to your home directory',
              'cd - - Toggles between your last two locations'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'File Operations'
          },
          {
            type: 'list',
            items: [
              'mkdir new-folder - Creates a new folder',
              'touch newfile.txt - Creates a new empty file',
              'cp file.txt backup.txt - Copies a file (makes a duplicate)',
              'mv file.txt newname.txt - Renames or moves a file',
              'rm file.txt - Deletes a file (be careful - no recycle bin!)',
              'rm -r folder-name - Deletes a folder and everything in it (use with caution!)'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Running Your Projects'
          },
          {
            type: 'list',
            items: [
              'npm install - Installs all the packages your project needs (run once when you first download a project)',
              'npm run dev - Starts your development server so you can see your app in the browser',
              'npm run build - Builds your app for production (makes it ready to deploy)',
              'Ctrl+C - Stops the currently running process (like your dev server)'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Stopping and Closing'
          },
          {
            type: 'list',
            items: [
              'Ctrl+C - Stops whatever is currently running (like npm run dev). Always do this before closing Terminal.',
              'exit - Closes the current Terminal window/tab (only works if nothing is running - use Ctrl+C first)',
              'Cmd+Q (Mac) or Alt+F4 (Windows) - Closes Terminal application completely'
            ]
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'What happens if you just close Terminal or shut your computer?',
            text: 'If you have a dev server running and just close Terminal or shut down, the process stops automatically. Your files are safe - nothing gets deleted. Next time, just open Terminal, navigate to your project folder, and run npm run dev again. Best practice: Press Ctrl+C first, but if you forget, it\'s not a disaster!'
          },
          {
            type: 'heading',
            level: 3,
            text: 'Git Commands'
          },
          {
            type: 'list',
            items: [
              'git status - Shows what files have changed',
              'git add . - Stages all your changes (gets them ready to save)',
              'git commit -m "message" - Saves your changes with a description',
              'git push - Uploads your changes to GitHub',
              'git pull - Downloads the latest changes from GitHub',
              'git checkout -b branch-name - Creates a new branch and switches to it'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Quick Tips'
          },
          {
            type: 'list',
            items: [
              'Tab key - Autocompletes folder/file names (type first few letters, press Tab)',
              'Up arrow - Shows your previous command (press repeatedly to go back through history)',
              'clear or Ctrl+L - Clears the terminal screen (makes it less cluttered)',
              'history - Shows all your recent commands'
            ]
          }
        ]
      },
      {
        id: 'section-appendix-2',
        title: 'Typical Workflows',
        estimatedTime: '8 min',
        content: [
          {
            type: 'heading',
            level: 3,
            text: 'When You\'re Done Working'
          },
          {
            type: 'numbered-list',
            items: [
              'Stop the dev server: Press Ctrl+C',
              'Save your work to Git (if you made changes): git add . then git commit -m "Describe what you changed" then git push',
              'Close Terminal: Cmd+Q (Mac) or just close the window',
              'Shut down your computer - Everything is saved and safe!'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Starting Work Again Later'
          },
          {
            type: 'numbered-list',
            items: [
              'Open Terminal',
              'Navigate to your project: cd ~/Documents/Projects/your-project-name',
              'Start the dev server: npm run dev',
              'Open browser: Go to localhost:5173 (or whatever port it shows)',
              'Continue working!'
            ]
          },
          {
            type: 'heading',
            level: 3,
            text: 'Starting a New Feature'
          },
          {
            type: 'numbered-list',
            items: [
              'Make sure you\'re on the main branch: git checkout main',
              'Get the latest code: git pull',
              'Create a new branch: git checkout -b feature-name',
              'Build your feature with Claude Code',
              'Test it works',
              'Commit your changes: git add . then git commit -m "Add feature-name"',
              'Push to GitHub: git push -u origin feature-name',
              'Create a pull request on GitHub'
            ]
          },
          {
            type: 'highlight',
            variant: 'concept',
            title: 'The Daily Rhythm',
            text: 'Open Terminal → Navigate to project → git pull → npm run dev → Work on features → Test → Commit → Push → Stop server → Close Terminal. This rhythm keeps your code safe and your workflow smooth.'
          }
        ]
      },
      {
        id: 'section-appendix-3',
        title: 'Common Error Solutions',
        estimatedTime: '10 min',
        content: [
          {
            type: 'paragraph',
            text: 'Quick fixes for the most common errors you\'ll encounter.'
          },
          {
            type: 'heading',
            level: 3,
            text: '"command not found"'
          },
          {
            type: 'paragraph',
            text: 'This means the program isn\'t installed or Terminal can\'t find it. Try: 1) Check spelling, 2) Install the program (e.g., npm install -g package-name), 3) Restart Terminal.'
          },
          {
            type: 'heading',
            level: 3,
            text: '"permission denied"'
          },
          {
            type: 'paragraph',
            text: 'You don\'t have access to that file or folder. Try: 1) Check if the file exists, 2) Run with sudo (only if you know what you\'re doing), 3) Check file permissions with ls -la.'
          },
          {
            type: 'heading',
            level: 3,
            text: '"port already in use"'
          },
          {
            type: 'paragraph',
            text: 'Another process is using that port. Try: 1) Stop other dev servers (Ctrl+C), 2) Close other Terminal windows running servers, 3) Use a different port (most tools let you specify with --port).'
          },
          {
            type: 'heading',
            level: 3,
            text: '"node_modules not found" or "Cannot find module"'
          },
          {
            type: 'paragraph',
            text: 'Dependencies aren\'t installed. Run: npm install in your project folder. This downloads all required packages.'
          },
          {
            type: 'heading',
            level: 3,
            text: '"git: not a repository"'
          },
          {
            type: 'paragraph',
            text: 'You\'re not in a Git repository folder. Navigate to your project folder with cd, or initialize Git with git init.'
          },
          {
            type: 'highlight',
            variant: 'tip',
            title: 'When in Doubt',
            text: 'Copy the exact error message and paste it to Claude or Google. Error messages are usually very specific about what went wrong!'
          }
        ]
      }
    ]
  }
];

export const finalQuiz = {
  id: 'final-quiz',
  title: 'Course Completion Quiz',
  description: 'Test your knowledge across all modules',
  passingScore: 70
};

export default courseContent;
