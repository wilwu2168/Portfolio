// Main portfolio content.
export const INITIALS = 'WW'
export const LOADING_TEXT = "WILSON'S PORTFOLIO"

// Optional: your own logo image files in /public, e.g. '/logo.png'. Leave null to use the drawn logo.
export const LOGO_SRC = '/minecraft-java-edition-logo.png'
export const EDITION_SRC = null
export const RESUME_SRC = '/Wilson_Wu_Resume.pdf'

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/wilsunah',
  github: 'https://github.com/wilwu2168',
}

export const SPLASHES = ['Wilsunah!']

export const EXPERIENCE = [
  {
    title: 'Software Developer',
    org: 'PlanMember Financial Corp',
    when: 'May 2026 – Present · Carpinteria, CA',
    bullets: [
      'Co-leading development of a next-generation code-generation agent built with LangChain deepagents and Qdrant retrieval.',
      'Leading the retrieval and language-context pipeline, including LSP integration for Python, JavaScript, ColdFusion, and MSSQL/T-SQL.',
      'Built a Figma-to-code LangGraph pipeline with an LLM-based context-sufficiency check, reducing estimated manual design-to-code translation time by 40%.',
      'Built a chunk-and-reassemble feedback loop to improve large-file generation and cross-file consistency.',
    ],
    photo: null,
  },
  {
    title: 'Front-End Developer Intern',
    org: 'Hawl Technologies',
    when: 'Apr. 2026 – May 2026 · Remote',
    bullets: [
      'Developed cluster-level analytics for Memory Galaxy to surface patterns, themes, and relationships across related memories.',
      'Validated changes through iterative teammate feedback sessions to improve usability.',
      'Developed and maintained a shared component library with standardized design tokens and reusable interface modules.',
    ],
    photo: null,
  },
]

export const PROJECTS = []

export const ABOUT = {
  photo: '/wilson-profile.png',
  paragraphs: [
    'I am a software developer and UC Berkeley graduate with a B.A. in Computer Science and Applied Mathematics (GPA: 3.67).',
    'My work focuses on AI agents, RAG, and Machine Learning.',
    'Outside of work and academia, I enjoy hiking, cars, volleyball, and many other different things. I grew up in the Bay Area so feel free to hit me up for recommendation on things to do!',
    'Every photo on this site is pixelated from my own life, so wait around and you’ll see a bit of it.',
    'Core tools: Python, Java, C++, R, JavaScript, Next.js, Node.js, PyTorch, LangChain, LangGraph, Qdrant, SQL, AWS, and Vercel.',
    "Contact: wilwu2168@berkeley.edu (Feel free to connect—I don't bite :))",
  ],
}
