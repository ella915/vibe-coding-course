export const courseContent = [
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
