export const quizzes = [
  {
    moduleId: 'module-0',
    passingScore: 70,
    questions: [
      {
        id: 'q0-1',
        type: 'multiple-choice',
        question: 'What is vibe coding?',
        options: [
          'A new programming language',
          'Building software by describing what you want in plain English, with AI writing the code',
          'Writing code while listening to music',
          'A meditation technique for programmers'
        ],
        correctAnswer: 1,
        explanation: 'Vibe coding is the practice of describing desired functionality in natural language and having AI assistants generate the actual code.'
      },
      {
        id: 'q0-2',
        type: 'multiple-choice',
        question: 'What\'s the difference between an LLM and traditional software?',
        options: [
          'They\'re the same thing',
          'LLMs understand and generate human language, traditional software follows explicit instructions',
          'LLMs are always slower',
          'Traditional software is always better'
        ],
        correctAnswer: 1,
        explanation: 'Large Language Models (LLMs) like Claude can understand context and nuance in natural language, while traditional software requires precise, predefined instructions.'
      },
      {
        id: 'q0-3',
        type: 'multiple-choice',
        question: 'What level of automation uses AI to make intelligent decisions at key points in a workflow?',
        options: [
          'Simple automation',
          'Conditional automation',
          'Agentic automation',
          'Manual processing'
        ],
        correctAnswer: 2,
        explanation: 'Agentic automation combines predefined workflows with AI decision-making at critical points, balancing structure with intelligence.'
      },
      {
        id: 'q0-4',
        type: 'multiple-choice',
        question: 'What do you still need to understand even when using vibe coding?',
        options: [
          'Exact programming syntax',
          'What you\'re trying to build, how it should work, and whether it\'s working correctly',
          'Low-level computer architecture',
          'Nothing, AI does everything'
        ],
        correctAnswer: 1,
        explanation: 'You\'re the architect - you need to know what to build, how it should function, and how to verify it works. AI handles the syntax and implementation details.'
      },
      {
        id: 'q0-5',
        type: 'multiple-choice',
        question: 'When should you use autonomous AI agents instead of simpler automation?',
        options: [
          'Always, they\'re better',
          'Never, they\'re too complex',
          'When the goal is clear but the path to achieve it varies and requires adaptation',
          'Only for entertainment purposes'
        ],
        correctAnswer: 2,
        explanation: 'Autonomous agents excel when you need adaptive, goal-oriented behavior rather than following a fixed process.'
      },
      {
        id: 'q0-6',
        type: 'multiple-choice',
        question: 'What is NOT a requirement to start this course?',
        options: [
          'A computer and internet connection',
          'Prior coding experience',
          'Curiosity and willingness to experiment',
          'A free Claude.ai account'
        ],
        correctAnswer: 1,
        explanation: 'This course is designed for beginners with no coding experience. Curiosity and willingness to learn are all you need.'
      },
      {
        id: 'q0-7',
        type: 'multiple-choice',
        question: 'What\'s the recommended approach when you get stuck?',
        options: [
          'Give up immediately',
          'Re-read the section, check the glossary, search for error messages, break down the problem',
          'Wait for someone to help you',
          'Skip to the next module'
        ],
        correctAnswer: 1,
        explanation: 'Debugging and problem-solving are skills you develop by working through issues systematically.'
      },
      {
        id: 'q0-8',
        type: 'multiple-choice',
        question: 'Which combination creates the most value?',
        options: [
          'Using AI only for chat',
          'Using automation only for simple tasks',
          'Combining AI + Automation + Vibe Coding for intelligent, custom tools',
          'Avoiding all new technology'
        ],
        correctAnswer: 2,
        explanation: 'The superpowers emerge when you combine AI\'s intelligence with automation\'s efficiency and vibe coding\'s accessibility.'
      }
    ]
  },
  {
    moduleId: 'module-1',
    passingScore: 70,
    questions: [
      {
        id: 'q1-1',
        type: 'multiple-choice',
        question: 'What is the best analogy for a computer programme?',
        options: [
          'A recipe that tells the computer step-by-step what to do',
          'A book that the computer reads for entertainment',
          'A random set of instructions',
          'A video that plays automatically'
        ],
        correctAnswer: 0,
        explanation: 'A computer programme is like a recipe - it provides step-by-step instructions that tell the computer exactly what to do.'
      },
      {
        id: 'q1-2',
        type: 'true-false',
        question: 'Computers do exactly what you tell them - nothing more, nothing less.',
        correctAnswer: true,
        explanation: 'Computers are incredibly literal. They follow instructions exactly as written, which is both their strength and the source of most bugs.'
      },
      {
        id: 'q1-3',
        type: 'multiple-choice',
        question: 'What fundamental model do all programmes follow?',
        options: [
          'Start-Stop model',
          'Input-Process-Output model',
          'Read-Write model',
          'Create-Delete model'
        ],
        correctAnswer: 1,
        explanation: 'Every programme takes input, processes it in some way, and produces output. This is the fundamental input-process-output model.'
      },
      {
        id: 'q1-4',
        type: 'multiple-choice',
        question: 'In vibe coding, what becomes your primary role?',
        options: [
          'Writing every line of code manually',
          'Memorizing programming syntax',
          'Problem definition, quality control, and creative direction',
          'Debugging AI systems'
        ],
        correctAnswer: 2,
        explanation: 'Vibe coding shifts your role from "person who writes code" to "person who directs AI to write code." You focus on problem definition, quality control, and creative direction.'
      },
      {
        id: 'q1-5',
        type: 'true-false',
        question: 'With vibe coding, you no longer need to understand programming concepts.',
        correctAnswer: false,
        explanation: 'Understanding how programmes work, what good code looks like, and how to test your creations are more valuable than ever. You need this knowledge to direct AI effectively and verify its output.'
      }
    ]
  },
  {
    moduleId: 'module-2',
    passingScore: 70,
    questions: [
      {
        id: 'q2-1',
        type: 'multiple-choice',
        question: 'What does the pwd command do?',
        options: [
          'Print Working Directory - shows current location',
          'Password - enters secure mode',
          'Power Down - shuts down the terminal',
          'Print Width - shows terminal width'
        ],
        correctAnswer: 0,
        explanation: 'pwd stands for Print Working Directory and shows you the full path to your current location in the file system.'
      },
      {
        id: 'q2-2',
        type: 'multiple-choice',
        question: 'How do you go up one directory level?',
        options: [
          'cd up',
          'cd ..',
          'cd back',
          'cd /'
        ],
        correctAnswer: 1,
        explanation: 'cd .. moves you up one directory level. The two dots (..) represent the parent directory.'
      },
      {
        id: 'q2-3',
        type: 'multiple-choice',
        question: 'What flag shows hidden files with ls?',
        options: [
          'ls -h',
          'ls -s',
          'ls -la',
          'ls -v'
        ],
        correctAnswer: 2,
        explanation: 'ls -la shows all files including hidden ones (starting with .) and provides detailed information about each file.'
      },
      {
        id: 'q2-4',
        type: 'true-false',
        question: 'The rm command moves files to a recycle bin where they can be recovered.',
        correctAnswer: false,
        explanation: 'The rm command permanently deletes files - there\'s no recycle bin! Always double-check before running delete commands.'
      },
      {
        id: 'q2-5',
        type: 'multiple-choice',
        question: 'Which command creates a new directory?',
        options: [
          'create folder',
          'mkdir',
          'newfolder',
          'touch'
        ],
        correctAnswer: 1,
        explanation: 'mkdir (make directory) creates a new folder. touch creates a new empty file, not a directory.'
      },
      {
        id: 'q2-6',
        type: 'multiple-choice',
        question: 'What is the terminal also known as?',
        options: [
          'Only "terminal"',
          'Command line, console, or shell',
          'Only "shell"',
          'Desktop interface'
        ],
        correctAnswer: 1,
        explanation: 'The terminal is also called command line, console, or shell. These terms are often used interchangeably.'
      }
    ]
  },
  {
    moduleId: 'module-3',
    passingScore: 70,
    questions: [
      {
        id: 'q3-1',
        type: 'multiple-choice',
        question: 'What is the best analogy for an API?',
        options: [
          'A security guard that blocks all requests',
          'A waiter that communicates between you and the kitchen',
          'A cookbook with recipes',
          'A database that stores information'
        ],
        correctAnswer: 1,
        explanation: 'An API is like a waiter - it takes your request, communicates with the service (kitchen), and brings back the response (food).'
      },
      {
        id: 'q3-2',
        type: 'multiple-choice',
        question: 'What is an API key used for?',
        options: [
          'Encrypting your data',
          'Identifying you to a service',
          'Speeding up requests',
          'Storing passwords locally'
        ],
        correctAnswer: 1,
        explanation: 'An API key is a unique string that identifies you to a service. It\'s how the service knows who is making requests.'
      },
      {
        id: 'q3-3',
        type: 'true-false',
        question: 'It\'s safe to commit API keys to Git as long as the repository is private.',
        correctAnswer: false,
        explanation: 'Never commit API keys to Git, even in private repositories. Keys can be accidentally exposed, and you should always use environment variables instead.'
      },
      {
        id: 'q3-4',
        type: 'multiple-choice',
        question: 'Where should sensitive data like API keys be stored?',
        options: [
          'Directly in your code',
          'In a README file',
          'In environment variables or .env files',
          'In the package.json'
        ],
        correctAnswer: 2,
        explanation: 'Sensitive data should be stored in environment variables or .env files, which are not committed to Git.'
      },
      {
        id: 'q3-5',
        type: 'multiple-choice',
        question: 'What does a .env.example file contain?',
        options: [
          'Real API keys for production',
          'Template showing what variables are needed (without real values)',
          'Encrypted passwords',
          'Test data for development'
        ],
        correctAnswer: 1,
        explanation: '.env.example shows what environment variables are needed without containing actual secret values. It\'s safe to commit to Git.'
      },
      {
        id: 'q3-6',
        type: 'multiple-choice',
        question: 'What are dependencies in programming?',
        options: [
          'Bugs that depend on other bugs',
          'Pre-built packages/libraries your project uses',
          'Files that depend on each other',
          'Tests that must pass'
        ],
        correctAnswer: 1,
        explanation: 'Dependencies are pre-built packages or libraries that provide functionality so you don\'t have to write everything from scratch.'
      },
      {
        id: 'q3-7',
        type: 'true-false',
        question: 'Relative paths in code are preferred over absolute paths for portability.',
        correctAnswer: true,
        explanation: 'Relative paths (like ./src/file.js) work regardless of where the project is located, making code portable between different computers.'
      }
    ]
  },
  {
    moduleId: 'module-4',
    passingScore: 70,
    questions: [
      {
        id: 'q4-1',
        type: 'multiple-choice',
        question: 'What are the three main categories of AI coding tools?',
        options: [
          'Free, paid, and premium',
          'Chat interfaces, IDE integrations, and CLI tools',
          'Web, mobile, and desktop',
          'Beginner, intermediate, and advanced'
        ],
        correctAnswer: 1,
        explanation: 'AI coding tools generally fall into chat interfaces (Claude.ai, ChatGPT), IDE integrations (Cursor, Copilot), and CLI tools (Claude Code, Aider).'
      },
      {
        id: 'q4-2',
        type: 'multiple-choice',
        question: 'Which tool type is best for learning and getting explanations?',
        options: [
          'IDE integrations',
          'CLI tools',
          'Chat interfaces',
          'Build tools'
        ],
        correctAnswer: 2,
        explanation: 'Chat interfaces like Claude.ai and ChatGPT are best for learning, explanations, and planning because they support conversational interaction.'
      },
      {
        id: 'q4-3',
        type: 'multiple-choice',
        question: 'What is the key shortcut in Cursor to edit selected code?',
        options: [
          'Cmd+E',
          'Cmd+K',
          'Cmd+D',
          'Cmd+R'
        ],
        correctAnswer: 1,
        explanation: 'Cmd+K in Cursor opens the edit interface where you can give instructions to modify selected code.'
      },
      {
        id: 'q4-4',
        type: 'scenario',
        question: 'You need to build a feature that spans 5 files with complex logic. Which tool is best suited?',
        options: [
          'GitHub Copilot for inline completion',
          'ChatGPT web interface',
          'Claude Code or similar CLI tool',
          'v0.dev for UI generation'
        ],
        correctAnswer: 2,
        explanation: 'CLI tools like Claude Code are best for multi-file work and complex features because they can read, write, and navigate your entire project.'
      },
      {
        id: 'q4-5',
        type: 'multiple-choice',
        question: 'Which is an example of a GOOD prompt?',
        options: [
          '"Fix the bug"',
          '"Make it better"',
          '"Add validation to the email field that checks for valid email format"',
          '"Write some code"'
        ],
        correctAnswer: 2,
        explanation: 'Good prompts are specific about what you want. "Add validation to the email field that checks for valid email format" tells the AI exactly what to do.'
      },
      {
        id: 'q4-6',
        type: 'true-false',
        question: 'You need to master all AI coding tools to be effective.',
        correctAnswer: false,
        explanation: 'You don\'t need all these tools. Start with one (like Claude Code), learn it well, then explore others as needed.'
      },
      {
        id: 'q4-7',
        type: 'multiple-choice',
        question: 'What is v0.dev best used for?',
        options: [
          'Backend API development',
          'UI component generation',
          'Database management',
          'Terminal automation'
        ],
        correctAnswer: 1,
        explanation: 'v0.dev specializes in generating UI components visually, particularly React components.'
      },
      {
        id: 'q4-8',
        type: 'multiple-choice',
        question: 'When should you use web-based chat interfaces?',
        options: [
          'Only when other tools are unavailable',
          'For direct code editing in files',
          'For learning concepts, debugging errors, and planning',
          'For real-time collaboration'
        ],
        correctAnswer: 2,
        explanation: 'Chat interfaces excel at explaining code, learning concepts, debugging error messages, planning architecture, and code reviews.'
      },
      {
        id: 'q4-9',
        type: 'multiple-choice',
        question: 'What does GitHub Copilot excel at?',
        options: [
          'Multi-file refactoring',
          'Code completion based on names and comments',
          'Creating entire applications',
          'Debugging complex issues'
        ],
        correctAnswer: 1,
        explanation: 'Copilot excels at completing functions based on names and comments, writing tests, and suggesting boilerplate code.'
      },
      {
        id: 'q4-10',
        type: 'scenario',
        question: 'You\'re trying to understand an error message you\'ve never seen before. What\'s the best approach?',
        options: [
          'Ask Copilot for inline suggestions',
          'Copy the error to a chat interface for explanation',
          'Use v0.dev to generate new UI',
          'Start a new project'
        ],
        correctAnswer: 1,
        explanation: 'Chat interfaces are ideal for explaining errors. Copy-paste the error message and your code for a detailed explanation.'
      },
      {
        id: 'q4-11',
        type: 'multiple-choice',
        question: 'What\'s the main difference between an IDE and an AI tool?',
        options: [
          'They\'re the same thing',
          'IDE is where you write code; AI tool generates code or answers questions',
          'IDEs are always better',
          'AI tools replace IDEs'
        ],
        correctAnswer: 1,
        explanation: 'IDEs are software for writing and managing code. AI tools are intelligence that can generate code, answer questions, or make decisions. You might use AI tools WITHIN an IDE (like Cursor).'
      },
      {
        id: 'q4-12',
        type: 'multiple-choice',
        question: 'What can Claude Cowork do that Claude Code cannot?',
        options: [
          'Build applications from scratch',
          'Execute ongoing tasks on your computer autonomously (file management, running scripts)',
          'Deploy to the internet',
          'Chat casually about any topic'
        ],
        correctAnswer: 1,
        explanation: 'Cowork can execute tasks and manage your computer\'s files/processes. Claude Code builds projects but you run them yourself.'
      },
      {
        id: 'q4-13',
        type: 'multiple-choice',
        question: 'When should you prototype in Claude Code and then use n8n?',
        options: [
          'Never, pick one tool only',
          'When you need fast idea validation (Claude Code) then production monitoring/reliability (n8n)',
          'Always, for every project',
          'Only if you have unlimited budget'
        ],
        correctAnswer: 1,
        explanation: 'Claude Code is fastest for prototyping (test idea in hours). n8n provides visibility, monitoring, and reliability for production systems.'
      },
      {
        id: 'q4-14',
        type: 'multiple-choice',
        question: 'Which platform provides the best visual monitoring of agent execution?',
        options: [
          'Claude Code (no monitoring)',
          'n8n (visual workflow, execution logs, data inspection)',
          'Relevance AI (agent dashboard but less granular)',
          'Cursor (IDE, not agent platform)'
        ],
        correctAnswer: 1,
        explanation: 'n8n shows every step visually, lets you inspect data at each node, and makes debugging straightforward. Essential for complex agent networks.'
      }
    ]
  },
  {
    moduleId: 'module-5',
    passingScore: 70,
    questions: [
      {
        id: 'q5-1',
        type: 'multiple-choice',
        question: 'What is the biggest mistake beginners make with AI coding?',
        options: [
          'Using the wrong programming language',
          'Jumping into prompting without planning',
          'Writing too much documentation',
          'Testing too often'
        ],
        correctAnswer: 1,
        explanation: 'Taking a few minutes to think through what you\'re building saves hours of rework. Planning before prompting is essential.'
      },
      {
        id: 'q5-2',
        type: 'multiple-choice',
        question: 'What questions should you answer before any AI interaction?',
        options: [
          'What language to use and what framework',
          'What am I building, inputs, outputs, and how to test',
          'Who will use it and when',
          'How much it will cost and how long it takes'
        ],
        correctAnswer: 1,
        explanation: 'Before prompting, answer: What am I building? What inputs does it need? What outputs should it produce? How will I test it works?'
      },
      {
        id: 'q5-3',
        type: 'true-false',
        question: 'Each prompt should accomplish multiple things at once for efficiency.',
        correctAnswer: false,
        explanation: 'Each prompt should accomplish ONE clear thing. This makes debugging easier and keeps AI responses focused.'
      },
      {
        id: 'q5-4',
        type: 'multiple-choice',
        question: 'What is the iterative development approach?',
        options: [
          'Build everything at once, then test',
          'Build smallest version, test, add feature, test, repeat',
          'Write all tests first, then code',
          'Plan everything in detail before writing any code'
        ],
        correctAnswer: 1,
        explanation: 'Build the smallest working version first, test it works, add one feature, test again, and repeat until complete.'
      },
      {
        id: 'q5-5',
        type: 'multiple-choice',
        question: 'How should you treat AI-generated code?',
        options: [
          'Trust it completely since AI is accurate',
          'Like code from a junior developer - review and test it',
          'Rewrite it all yourself',
          'Only use it for documentation'
        ],
        correctAnswer: 1,
        explanation: 'Treat AI output like code from a junior developer - review it, test it, and don\'t assume it works just because it looks right.'
      },
      {
        id: 'q5-6',
        type: 'multiple-select',
        question: 'What should you test in a web app? (Select all that apply)',
        options: [
          'The happy path (normal usage)',
          'Empty inputs',
          'Invalid inputs',
          'All programming languages'
        ],
        correctAnswer: [0, 1, 2],
        explanation: 'Always test: the happy path, empty inputs, invalid inputs, and rapid clicking/submitting. This catches most bugs.'
      }
    ]
  },
  {
    moduleId: 'module-6',
    passingScore: 70,
    questions: [
      {
        id: 'q6-1',
        type: 'multiple-choice',
        question: 'What problem type involves fixing something that worked before?',
        options: [
          'Greenfield',
          'Bug Fix',
          'New Feature',
          'Refactoring'
        ],
        correctAnswer: 1,
        explanation: 'A bug fix addresses something that\'s broken that worked before. The best approach is to describe the bug and share error messages.'
      },
      {
        id: 'q6-2',
        type: 'multiple-choice',
        question: 'What is "greenfield" development?',
        options: [
          'Fixing bugs in existing code',
          'Building something from scratch',
          'Adding features to existing code',
          'Refactoring old code'
        ],
        correctAnswer: 1,
        explanation: 'Greenfield development means building something from scratch. Start with structure and build incrementally.'
      },
      {
        id: 'q6-3',
        type: 'multiple-choice',
        question: 'At what scope should you start most requests?',
        options: [
          'Full application',
          'Multiple features',
          'The smallest scope that makes sense',
          'Always start with single functions'
        ],
        correctAnswer: 2,
        explanation: 'Start at the smallest scope that makes sense. Small, focused requests get better results than large, vague ones.'
      },
      {
        id: 'q6-4',
        type: 'multiple-choice',
        question: 'What is "scope creep" in AI prompting?',
        options: [
          'When your project grows over time',
          'Adding "while you\'re at it, also..." to prompts',
          'When the AI generates too much code',
          'When you change programming languages'
        ],
        correctAnswer: 1,
        explanation: 'Scope creep happens when you keep adding to a request. Complete the current task first, then start a new one.'
      },
      {
        id: 'q6-5',
        type: 'true-false',
        question: 'If AI keeps making the same mistake after 3-4 prompt variations, you should try a different approach.',
        correctAnswer: true,
        explanation: 'If you\'ve tried 3-4 variations of a prompt and still aren\'t getting good results, it\'s time to try a different approach.'
      },
      {
        id: 'q6-6',
        type: 'multiple-select',
        question: 'When might AI NOT be the right solution? (Select all that apply)',
        options: [
          'You\'re not sure what you\'re trying to build',
          'You can\'t verify if the output is correct',
          'You need simple code completion',
          'You need guaranteed correctness for financial data'
        ],
        correctAnswer: [0, 1, 3],
        explanation: 'AI may not be ideal when you\'re unsure what to build, can\'t verify output, or need guaranteed correctness for sensitive applications.'
      },
      {
        id: 'q6-7',
        type: 'multiple-choice',
        question: 'What alternative should you try when AI isn\'t working?',
        options: [
          'Keep trying the same prompts',
          'Give up on the project',
          'Search for existing solutions, read docs, or simplify requirements',
          'Switch to a different AI tool'
        ],
        correctAnswer: 2,
        explanation: 'When AI isn\'t working, try: searching for existing solutions, reading documentation, asking in communities, or simplifying requirements.'
      },
      {
        id: 'q6-8',
        type: 'scenario',
        question: 'You want to add a contact form to your existing website. What scope level is this?',
        options: [
          'Single function',
          'Single file',
          'Feature (multiple files)',
          'Full application'
        ],
        correctAnswer: 2,
        explanation: 'A contact form typically involves multiple files (form component, validation, API endpoint, possibly email service integration).'
      },
      {
        id: 'q6-9',
        type: 'multiple-choice',
        question: 'What does refactoring mean?',
        options: [
          'Adding new features',
          'Fixing bugs',
          'Improving code without changing its behavior',
          'Deleting old code'
        ],
        correctAnswer: 2,
        explanation: 'Refactoring means improving existing code structure or quality without changing what it does.'
      },
      {
        id: 'q6-10',
        type: 'multiple-choice',
        question: 'What\'s the main difference between an agentic workflow and an AI agent?',
        options: [
          'Agentic workflows are more expensive to run',
          'Agentic workflow follows predefined steps with AI decisions; AI agent determines its own steps to reach a goal',
          'AI agents are always faster than agentic workflows',
          'There is no meaningful difference between them'
        ],
        correctAnswer: 1,
        explanation: 'Agentic workflows follow predefined steps where AI makes decisions at each step. AI agents autonomously determine their own steps to reach a goal.'
      },
      {
        id: 'q6-11',
        type: 'multiple-choice',
        question: 'When should you use Google AI Studio vs n8n?',
        options: [
          'Google AI Studio for production; n8n for testing',
          'Google AI Studio for testing/prototyping AI capabilities; n8n for deploying production workflows',
          'They serve the same purpose and are interchangeable',
          'Google AI Studio for automation; n8n for code generation'
        ],
        correctAnswer: 1,
        explanation: 'Google AI Studio is best for testing and prototyping AI capabilities, while n8n is better for deploying production workflows with reliable execution.'
      },
      {
        id: 'q6-12',
        type: 'multiple-choice',
        question: 'What\'s the pragmatic approach to using multiple AI platforms?',
        options: [
          'Learn all platforms equally before starting any project',
          'Start with one platform that fits 80% of use cases, add others only when hitting clear limitations',
          'Use a different platform for each project',
          'Always use at least three platforms simultaneously'
        ],
        correctAnswer: 1,
        explanation: 'Start with one platform that handles most of your needs. Add others only when you hit clear limitations that another platform solves.'
      }
    ]
  },
  {
    moduleId: 'module-7',
    passingScore: 70,
    questions: [
      {
        id: 'q7-1',
        type: 'multiple-choice',
        question: 'What data type would you use to store a person\'s age?',
        options: [
          'String',
          'Number',
          'Boolean',
          'Array'
        ],
        correctAnswer: 1,
        explanation: 'Age is a numerical value, so it should be stored as a Number type.'
      },
      {
        id: 'q7-2',
        type: 'multiple-choice',
        question: 'What is a function in programming?',
        options: [
          'A variable that stores data',
          'A reusable block of code that does a specific thing',
          'A type of loop',
          'A way to display output'
        ],
        correctAnswer: 1,
        explanation: 'Functions are reusable blocks of code that take inputs (parameters), process them, and return outputs.'
      },
      {
        id: 'q7-3',
        type: 'multiple-choice',
        question: 'What do if/else statements allow code to do?',
        options: [
          'Repeat actions',
          'Store data',
          'Make decisions',
          'Connect to APIs'
        ],
        correctAnswer: 2,
        explanation: 'If/else statements are conditional logic that lets code make decisions based on conditions.'
      },
      {
        id: 'q7-4',
        type: 'multiple-choice',
        question: 'What is "state" in an application?',
        options: [
          'The location of a file',
          'Data that changes over time (current situation)',
          'The programming language used',
          'Error messages'
        ],
        correctAnswer: 1,
        explanation: 'State is the "current situation" of your app - is the user logged in? What items are in the cart? These are all state.'
      },
      {
        id: 'q7-5',
        type: 'true-false',
        question: 'Specifying data types in prompts helps AI write better code.',
        correctAnswer: true,
        explanation: '"Store the user\'s age as a number" is clearer than just "store the age" and helps AI generate more accurate code.'
      }
    ]
  },
  {
    moduleId: 'module-8',
    passingScore: 70,
    questions: [
      {
        id: 'q8-1',
        type: 'multiple-choice',
        question: 'What are error messages?',
        options: [
          'Signs of failure that should be ignored',
          'Information telling you exactly what went wrong',
          'Random computer problems',
          'Proof that your code is bad'
        ],
        correctAnswer: 1,
        explanation: 'Error messages are not failures - they\'re information. Every error tells you what went wrong, where, and often suggests a fix.'
      },
      {
        id: 'q8-2',
        type: 'multiple-choice',
        question: 'What information does a typical error message contain?',
        options: [
          'Just "Error"',
          'Type of error, what went wrong, file and line number',
          'Only the file name',
          'Random numbers'
        ],
        correctAnswer: 1,
        explanation: 'Most errors tell you: what went wrong (error type), where it happened (file and line number), and often suggest a fix.'
      },
      {
        id: 'q8-3',
        type: 'multiple-choice',
        question: 'What\'s an effective pattern for asking AI about errors?',
        options: [
          '"There\'s a bug"',
          '"I got this error: [paste]. Here\'s my code: [paste]. What\'s wrong?"',
          '"Help"',
          '"Fix my code"'
        ],
        correctAnswer: 1,
        explanation: 'Copy-paste the full error message to AI with your code. This gives AI the context needed to help effectively.'
      },
      {
        id: 'q8-4',
        type: 'multiple-choice',
        question: 'What improves search results when looking for coding help?',
        options: [
          'Keep queries vague',
          'Include technology name, specific problem, and error messages',
          'Only search on one website',
          'Use single words'
        ],
        correctAnswer: 1,
        explanation: 'Include the technology name, be specific about the problem, and include error messages. "React useState not updating" beats "state doesn\'t work".'
      },
      {
        id: 'q8-5',
        type: 'multiple-choice',
        question: 'The "20% Rule" suggests you should:',
        options: [
          'Only use AI 20% of the time',
          'Spend 20% of time learning fundamentals without AI',
          'Write 20% of code yourself',
          'Test 20% of your code'
        ],
        correctAnswer: 1,
        explanation: 'Spend 20% of your time learning fundamentals without AI. This builds the foundation that makes your AI-assisted 80% more effective.'
      }
    ]
  },
  {
    moduleId: 'module-9',
    passingScore: 70,
    questions: [
      {
        id: 'q9-1',
        type: 'multiple-choice',
        question: 'What is Day 1 of the first week focused on?',
        options: [
          'Building a complex application',
          'Setting up your development environment',
          'Learning advanced algorithms',
          'Deploying to production'
        ],
        correctAnswer: 1,
        explanation: 'Day 1 is about getting your environment ready - installing tools, verifying everything works, and completing your first AI interaction.'
      },
      {
        id: 'q9-2',
        type: 'multiple-choice',
        question: 'What project do you build on Day 3?',
        options: [
          'A weather app',
          'A to-do list',
          'A blog',
          'A chat application'
        ],
        correctAnswer: 1,
        explanation: 'Day 3 focuses on building a to-do list, which teaches essential concepts: state, events, and user interaction.'
      },
      {
        id: 'q9-3',
        type: 'true-false',
        question: 'Day 4 is about intentionally breaking code to learn debugging.',
        correctAnswer: true,
        explanation: 'Day 4 involves intentionally breaking things and fixing them to build debugging skills essential for real development.'
      },
      {
        id: 'q9-4',
        type: 'multiple-choice',
        question: 'What is the focus of Day 5?',
        options: [
          'Styling and CSS',
          'API integration and fetching data',
          'Terminal commands',
          'Project review'
        ],
        correctAnswer: 1,
        explanation: 'Day 5 is about connecting to external APIs - learning to fetch data, handle loading and error states.'
      },
      {
        id: 'q9-5',
        type: 'multiple-choice',
        question: 'What should you do on Day 7?',
        options: [
          'Start a completely new project',
          'Review work, identify gaps, and plan continued learning',
          'Delete all your projects',
          'Take a break from coding'
        ],
        correctAnswer: 1,
        explanation: 'Day 7 is for consolidation - review what you\'ve learned, identify what needs more practice, and set goals for the next month.'
      },
      {
        id: 'q9-6',
        type: 'multiple-choice',
        question: 'Which day focuses on making things look good?',
        options: [
          'Day 2',
          'Day 4',
          'Day 6',
          'Day 7'
        ],
        correctAnswer: 2,
        explanation: 'Day 6 focuses on styling and polish - learning CSS, using Tailwind, and adding responsive design and animations.'
      },
      {
        id: 'q9-7',
        type: 'multiple-choice',
        question: 'What is a key question to answer during Day 7 reflection?',
        options: [
          'How much money did I save?',
          'What do I want to build next?',
          'How many errors did I make?',
          'Which AI tool is the best?'
        ],
        correctAnswer: 1,
        explanation: 'Day 7 reflection includes identifying what you want to build next to maintain momentum and continue learning.'
      }
    ]
  },
  {
    moduleId: 'module-10',
    passingScore: 70,
    questions: [
      {
        id: 'q10-1',
        type: 'multiple-choice',
        question: 'What is the best way to learn programming?',
        options: [
          'Only reading documentation',
          'By building projects',
          'Memorizing syntax',
          'Watching videos without practicing'
        ],
        correctAnswer: 1,
        explanation: 'The best way to learn is by building. Projects reinforce concepts and give you practical experience.'
      },
      {
        id: 'q10-2',
        type: 'multiple-choice',
        question: 'What kind of projects should you prioritize?',
        options: [
          'The most complex ones possible',
          'Projects you\'d actually use',
          'Projects that look impressive',
          'Only tutorial projects'
        ],
        correctAnswer: 1,
        explanation: 'Choose projects you\'d actually use. Personal motivation keeps you going when things get difficult.'
      },
      {
        id: 'q10-3',
        type: 'true-false',
        question: 'You need to follow every new AI tool that launches to stay relevant.',
        correctAnswer: false,
        explanation: 'You don\'t need every new tool. Master your core tools first. Add new ones only when they solve a real problem you have.'
      },
      {
        id: 'q10-4',
        type: 'multiple-choice',
        question: 'What is the recommended learning strategy?',
        options: [
          'Only use AI tools',
          'Only use traditional resources',
          'Use AI for building, traditional resources for understanding',
          'Avoid all documentation'
        ],
        correctAnswer: 2,
        explanation: 'Use AI for building, traditional resources for understanding. Both together are more powerful than either alone.'
      },
      {
        id: 'q10-5',
        type: 'multiple-choice',
        question: 'Which is a beginner-level project?',
        options: [
          'E-commerce store with payments',
          'SaaS dashboard',
          'Personal portfolio',
          'Chat application with WebSockets'
        ],
        correctAnswer: 2,
        explanation: 'A personal portfolio is a beginner-level project focused on HTML, CSS, and responsive design.'
      }
    ]
  },
  {
    moduleId: 'module-11',
    passingScore: 70,
    questions: [
      {
        id: 'q11-1',
        type: 'multiple-choice',
        question: 'Why does a well-organized repository structure matter for AI tools?',
        options: [
          'It doesn\'t matter',
          'AI reads folder structure to understand context',
          'It makes the project smaller',
          'AI requires specific folder names'
        ],
        correctAnswer: 1,
        explanation: 'AI reads your folder structure to understand context. "components/Button.jsx" tells AI it\'s a UI component.'
      },
      {
        id: 'q11-2',
        type: 'multiple-choice',
        question: 'What should ALWAYS be in .gitignore?',
        options: [
          'package.json',
          'README.md',
          '.env and node_modules',
          'src folder'
        ],
        correctAnswer: 2,
        explanation: 'Always add .env and node_modules to .gitignore before your first commit. Never commit secrets or dependencies to Git.'
      },
      {
        id: 'q11-3',
        type: 'true-false',
        question: 'A .env.example file should contain real API keys.',
        correctAnswer: false,
        explanation: '.env.example shows what environment variables are needed without containing actual secret values. It\'s safe to commit to Git.'
      },
      {
        id: 'q11-4',
        type: 'multiple-choice',
        question: 'What does a README file help with?',
        options: [
          'Nothing useful',
          'Both AI and future-you understand the project',
          'Only looks professional',
          'Slows down AI tools'
        ],
        correctAnswer: 1,
        explanation: 'Good documentation helps both AI and future-you understand the project. Even a simple README improves AI assistance quality.'
      },
      {
        id: 'q11-5',
        type: 'multiple-choice',
        question: 'Where should helper functions typically go?',
        options: [
          'In the root folder',
          'In src/utils/',
          'In package.json',
          'In .gitignore'
        ],
        correctAnswer: 1,
        explanation: 'Helper functions typically go in src/utils/. This organization helps both you and AI tools find and understand code.'
      },
      {
        id: 'q11-6',
        type: 'multiple-choice',
        question: 'What should package.json contain?',
        options: [
          'Your API keys',
          'Dependencies and scripts',
          'Your code files',
          'Database passwords'
        ],
        correctAnswer: 1,
        explanation: 'package.json contains your project\'s dependencies and npm scripts for running, building, and testing your code.'
      },
      {
        id: 'q11-7',
        type: 'scenario',
        question: 'You\'re starting a new React project. What should you do FIRST?',
        options: [
          'Write all the code',
          'Set up the folder structure and configuration files',
          'Deploy to production',
          'Add all possible features'
        ],
        correctAnswer: 1,
        explanation: 'Setting up proper folder structure and configuration first provides a solid foundation for development.'
      }
    ]
  },
  {
    moduleId: 'module-12',
    passingScore: 70,
    questions: [
      {
        id: 'q12-1',
        type: 'multiple-choice',
        question: 'What is Git used for?',
        options: [
          'Running code',
          'Version control - tracking changes to code over time',
          'Styling websites',
          'Connecting to databases'
        ],
        correctAnswer: 1,
        explanation: 'Git is version control - it tracks changes to your code over time, lets you undo mistakes, and enables collaboration.'
      },
      {
        id: 'q12-2',
        type: 'multiple-choice',
        question: 'What does "git commit" do?',
        options: [
          'Deletes files',
          'Saves a snapshot of your changes',
          'Uploads to the internet',
          'Starts a new project'
        ],
        correctAnswer: 1,
        explanation: 'git commit saves a snapshot of your staged changes with a message describing what changed.'
      },
      {
        id: 'q12-3',
        type: 'multiple-choice',
        question: 'How often should you commit?',
        options: [
          'Only at the end of a project',
          'Once a week',
          'After each working change',
          'Never'
        ],
        correctAnswer: 2,
        explanation: 'Commit after each working change. Small, frequent commits make it easier to track changes and undo mistakes.'
      },
      {
        id: 'q12-4',
        type: 'multiple-choice',
        question: 'What command creates a new Git branch?',
        options: [
          'git new branch-name',
          'git checkout -b branch-name',
          'git create branch-name',
          'git start branch-name'
        ],
        correctAnswer: 1,
        explanation: 'git checkout -b branch-name creates a new branch and switches to it.'
      },
      {
        id: 'q12-5',
        type: 'true-false',
        question: 'You should commit working code before asking Claude to make big changes.',
        correctAnswer: true,
        explanation: 'Always commit working code before major AI-assisted changes. This lets you easily undo if something goes wrong.'
      },
      {
        id: 'q12-6',
        type: 'multiple-choice',
        question: 'What is GitHub?',
        options: [
          'A programming language',
          'A place to host Git repositories online',
          'A code editor',
          'An AI tool'
        ],
        correctAnswer: 1,
        explanation: 'GitHub hosts your Git repositories online, allowing backup, sharing, and collaboration.'
      },
      {
        id: 'q12-7',
        type: 'multiple-select',
        question: 'Which VS Code extensions are recommended? (Select all that apply)',
        options: [
          'ESLint',
          'Prettier',
          'GitLens',
          'None of these'
        ],
        correctAnswer: [0, 1, 2],
        explanation: 'ESLint catches errors, Prettier auto-formats code, and GitLens shows Git history inline. All are recommended.'
      },
      {
        id: 'q12-8',
        type: 'multiple-choice',
        question: 'What is the typical development workflow rhythm?',
        options: [
          'Code → Deploy → Test → Plan',
          'Plan → Branch → Build → Test → Commit → Repeat',
          'Test → Code → Delete → Restart',
          'Commit → Plan → Build → Test'
        ],
        correctAnswer: 1,
        explanation: 'The rhythm is: Plan → Branch → Build → Test → Commit → Repeat. This keeps you moving forward with clean history.'
      }
    ]
  },
  {
    moduleId: 'module-13',
    passingScore: 70,
    questions: [
      {
        id: 'q13-1',
        type: 'multiple-choice',
        question: 'What\'s the main benefit of using multiple specialized agents instead of one general agent?',
        options: [
          'It\'s always cheaper',
          'Specialization allows optimization per task, better quality, and fault isolation',
          'It\'s required by law',
          'Single agents don\'t work'
        ],
        correctAnswer: 1,
        explanation: 'Specialized agents can use different models, prompts, and strategies optimized for their specific task, leading to better overall quality and easier debugging.'
      },
      {
        id: 'q13-2',
        type: 'multiple-choice',
        question: 'Which agent network pattern is best when subtasks can run independently and simultaneously?',
        options: [
          'Sequential Pipeline',
          'Parallel Execution with Aggregator',
          'Feedback Loop',
          'Hierarchical'
        ],
        correctAnswer: 1,
        explanation: 'Parallel execution lets independent agents work at the same time, saving time compared to sequential processing.'
      },
      {
        id: 'q13-3',
        type: 'multiple-choice',
        question: 'In an agent network, what does the Orchestrator agent do?',
        options: [
          'It does all the work itself',
          'It coordinates other agents, manages the workflow, and handles errors',
          'It only monitors but never takes action',
          'It replaces all other agents'
        ],
        correctAnswer: 1,
        explanation: 'The orchestrator coordinates the network, determining execution order, handling failures, and ensuring the overall goal is achieved.'
      },
      {
        id: 'q13-4',
        type: 'multiple-choice',
        question: 'What\'s the simplest way for agents to share data with each other?',
        options: [
          'Telepathy',
          'Shared file system where each agent reads/writes files',
          'Email',
          'Verbal communication'
        ],
        correctAnswer: 1,
        explanation: 'A shared file system is the simplest method - agents write outputs to files and other agents read those files as inputs.'
      },
      {
        id: 'q13-5',
        type: 'multiple-choice',
        question: 'What should you do when an agent in your network repeatedly fails?',
        options: [
          'Delete the entire network',
          'Implement retry logic, fallback behavior, and alert for human intervention',
          'Ignore it',
          'Run it faster'
        ],
        correctAnswer: 1,
        explanation: 'Proper error handling includes retrying with backoff, using fallback data when available, and alerting humans when issues persist.'
      },
      {
        id: 'q13-6',
        type: 'multiple-choice',
        question: 'How can you reduce costs in an agent network?',
        options: [
          'Use cheaper models for simple tasks, cache outputs, batch processing',
          'Run agents more frequently',
          'Use the most expensive models for everything',
          'Disable monitoring'
        ],
        correctAnswer: 0,
        explanation: 'Cost optimization includes using appropriately-sized models, caching to avoid redundant work, and batching to reduce API calls.'
      },
      {
        id: 'q13-7',
        type: 'multiple-choice',
        question: 'What\'s the difference between an agentic workflow and an agent network?',
        options: [
          'They\'re exactly the same',
          'Agentic workflow is structured with AI at decision points; agent network has multiple autonomous agents coordinating',
          'Agent networks are always simpler',
          'Agentic workflows can\'t use AI'
        ],
        correctAnswer: 1,
        explanation: 'Agentic workflows follow predetermined paths with AI making decisions, while agent networks involve multiple autonomous agents working together.'
      },
      {
        id: 'q13-8',
        type: 'multiple-choice',
        question: 'When should you build your own agent network vs using a platform like Relevance AI?',
        options: [
          'Always build your own',
          'Build for unique workflows and control; use platforms for standard use cases and faster setup',
          'Never build your own',
          'It doesn\'t matter'
        ],
        correctAnswer: 1,
        explanation: 'Custom building gives control and handles unique needs, while platforms offer faster setup for common use cases with less technical expertise needed.'
      },
      {
        id: 'q13-9',
        type: 'multiple-choice',
        question: 'In a feedback loop pattern, what determines when the loop stops?',
        options: [
          'It never stops',
          'Quality criteria met, maximum iterations reached, or human intervention',
          'Random chance',
          'When it gets tired'
        ],
        correctAnswer: 1,
        explanation: 'Feedback loops need termination conditions: success criteria, iteration limits, or manual override to prevent infinite loops.'
      },
      {
        id: 'q13-10',
        type: 'multiple-choice',
        question: 'What\'s the recommended progression for learning agent networks?',
        options: [
          'Start with the most complex multi-agent system',
          'Begin with simple agentic workflow, then simple sequential agents, then complex orchestration',
          'Jump directly to production systems',
          'Skip the basics'
        ],
        correctAnswer: 1,
        explanation: 'Start simple to learn fundamentals, prove value, then gradually add complexity as needs and skills grow.'
      }
    ]
  },
  {
    moduleId: 'module-14',
    passingScore: 70,
    questions: [
      {
        id: 'q14-1',
        type: 'multiple-choice',
        question: 'What are tokens in the context of AI models?',
        options: [
          'Currency for buying API access',
          'Small pieces of text (roughly 4 characters or 0.75 words) that models process',
          'Authentication codes',
          'File types for AI projects'
        ],
        correctAnswer: 1,
        explanation: 'Tokens are how AI models "see" text. Each token is roughly 4 characters or about 0.75 words. Both input and output are measured in tokens.'
      },
      {
        id: 'q14-2',
        type: 'multiple-choice',
        question: 'If Claude Sonnet costs $3/$15 per million tokens (input/output), what would a prompt with 1000 input tokens and 500 output tokens cost?',
        options: [
          '$0.0105',
          '$18.00',
          '$0.18',
          'Free'
        ],
        correctAnswer: 0,
        explanation: 'Input: 1000/1M × $3 = $0.003. Output: 500/1M × $15 = $0.0075. Total = $0.0105 (about 1 cent).'
      },
      {
        id: 'q14-3',
        type: 'multiple-choice',
        question: 'What is a context window?',
        options: [
          'The screen where you see responses',
          'How much text the model can "see" at once (input + output combined)',
          'A debugging feature',
          'The chat interface'
        ],
        correctAnswer: 1,
        explanation: 'Context window is the model\'s memory - how much total text it can process in one conversation, including both your messages and its responses.'
      },
      {
        id: 'q14-4',
        type: 'multiple-choice',
        question: 'Why does output cost more than input for most AI models?',
        options: [
          'Marketing strategy',
          'Output is fancier',
          'Generation is computationally harder than processing input',
          'It\'s actually cheaper'
        ],
        correctAnswer: 2,
        explanation: 'Generating text requires more computational work than reading it. Output tokens typically cost 3-5x more than input tokens.'
      },
      {
        id: 'q14-5',
        type: 'multiple-choice',
        question: 'What\'s the main trade-off between open source and closed source LLMs?',
        options: [
          'Open source is always better',
          'Open source: control/privacy but more complexity; Closed source: easier but less control',
          'Closed source is always cheaper',
          'There\'s no difference'
        ],
        correctAnswer: 1,
        explanation: 'Open source gives you control and privacy (run on your hardware) but requires more technical expertise. Closed source is easier but you pay per use.'
      },
      {
        id: 'q14-6',
        type: 'multiple-choice',
        question: 'Which is a valid reason to consider self-hosting an LLM?',
        options: [
          'It\'s always cheaper',
          'Privacy requirements, high volume usage, or need for offline operation',
          'Self-hosting is easier than APIs',
          'You dislike cloud services'
        ],
        correctAnswer: 1,
        explanation: 'Self-hosting makes sense for: strict privacy needs, volume high enough to offset infrastructure costs, or scenarios requiring offline/air-gapped operation.'
      },
      {
        id: 'q14-7',
        type: 'multiple-choice',
        question: 'What is model tiering as a cost optimization strategy?',
        options: [
          'Using only the cheapest model',
          'Using different model sizes for different task complexities',
          'Ranking models by quality',
          'Paying for premium tiers'
        ],
        correctAnswer: 1,
        explanation: 'Model tiering means using fast/cheap models (Haiku) for simple tasks and powerful/expensive models (Opus) only for complex tasks.'
      },
      {
        id: 'q14-8',
        type: 'multiple-choice',
        question: 'What does API caching help you avoid?',
        options: [
          'Security breaches',
          'Paying for identical requests multiple times',
          'Slow internet',
          'Model updates'
        ],
        correctAnswer: 1,
        explanation: 'Caching stores responses so identical (or similar) requests don\'t need to call the API again, saving both time and money.'
      },
      {
        id: 'q14-9',
        type: 'multiple-choice',
        question: 'What are rate limits?',
        options: [
          'Speed of the model\'s responses',
          'Maximum requests per time period imposed by the API provider',
          'Cost limits on your account',
          'Bandwidth restrictions'
        ],
        correctAnswer: 1,
        explanation: 'Rate limits restrict how many API calls you can make in a given time period. Exceeding them returns 429 errors.'
      },
      {
        id: 'q14-10',
        type: 'scenario',
        question: 'You\'re building a chatbot that handles 10,000 conversations daily. What cost strategy makes most sense?',
        options: [
          'Use the most expensive model for quality',
          'Use model tiering: cheap model for simple queries, expensive for complex ones',
          'Self-host everything immediately',
          'Avoid AI entirely due to cost'
        ],
        correctAnswer: 1,
        explanation: 'At high volume, model tiering dramatically reduces costs. Most queries are simple and don\'t need expensive models.'
      }
    ]
  },
  {
    moduleId: 'final-quiz',
    passingScore: 70,
    questions: [
      {
        id: 'qf-1',
        type: 'multiple-choice',
        question: 'In vibe coding, your primary role becomes:',
        options: [
          'Writing every line of code',
          'Problem definition, quality control, and creative direction',
          'Memorizing programming syntax',
          'Debugging AI systems'
        ],
        correctAnswer: 1,
        explanation: 'Vibe coding shifts you from writing code to directing AI, focusing on problem definition, quality control, and creative direction.'
      },
      {
        id: 'qf-2',
        type: 'multiple-choice',
        question: 'What command permanently deletes files without recovery?',
        options: [
          'delete',
          'rm',
          'trash',
          'remove'
        ],
        correctAnswer: 1,
        explanation: 'The rm command permanently deletes files - there\'s no recycle bin. Always double-check before using it.'
      },
      {
        id: 'qf-3',
        type: 'true-false',
        question: 'API keys should be stored in environment variables, not in code.',
        correctAnswer: true,
        explanation: 'Never commit API keys to code. Store them in environment variables or .env files that are excluded from Git.'
      },
      {
        id: 'qf-4',
        type: 'multiple-choice',
        question: 'Which tool type is best for multi-file feature development?',
        options: [
          'Chat interfaces',
          'IDE completions',
          'CLI tools like Claude Code',
          'Web-based editors'
        ],
        correctAnswer: 2,
        explanation: 'CLI tools like Claude Code are best for features spanning multiple files because they can read, write, and navigate entire projects.'
      },
      {
        id: 'qf-5',
        type: 'multiple-choice',
        question: 'What should each AI prompt accomplish?',
        options: [
          'As many things as possible',
          'ONE clear thing',
          'The entire project',
          'Nothing specific'
        ],
        correctAnswer: 1,
        explanation: 'Each prompt should accomplish ONE clear thing. This makes debugging easier and keeps AI responses focused.'
      },
      {
        id: 'qf-6',
        type: 'scenario',
        question: 'AI has made the same mistake 4 times. What should you do?',
        options: [
          'Keep trying the same prompt',
          'Give up entirely',
          'Try a different approach (search docs, simplify requirements)',
          'Complain to the AI provider'
        ],
        correctAnswer: 2,
        explanation: 'After 3-4 failed attempts, try a different approach: search for solutions, read documentation, or simplify requirements.'
      },
      {
        id: 'qf-7',
        type: 'multiple-choice',
        question: 'What is "state" in an application?',
        options: [
          'The programming language',
          'Data that changes over time',
          'The file structure',
          'Error messages'
        ],
        correctAnswer: 1,
        explanation: 'State is the current situation of your app - data that changes over time like login status or cart contents.'
      },
      {
        id: 'qf-8',
        type: 'multiple-choice',
        question: 'Error messages are:',
        options: [
          'Signs of failure to hide',
          'Random computer problems',
          'Valuable information about what went wrong',
          'Proof your code is bad'
        ],
        correctAnswer: 2,
        explanation: 'Errors are not failures - they\'re information telling you exactly what went wrong and often how to fix it.'
      },
      {
        id: 'qf-9',
        type: 'true-false',
        question: 'You should commit working code before asking AI to make major changes.',
        correctAnswer: true,
        explanation: 'Always commit working code before major changes. This creates a safety net to easily undo if something goes wrong.'
      },
      {
        id: 'qf-10',
        type: 'multiple-choice',
        question: 'What is the recommended learning balance?',
        options: [
          '100% AI tools',
          '100% traditional resources',
          '80% AI-assisted, 20% fundamentals without AI',
          '50/50 split'
        ],
        correctAnswer: 2,
        explanation: 'Spend 20% learning fundamentals without AI. This foundation makes your 80% AI-assisted time more effective.'
      }
    ]
  }
];

export default quizzes;
