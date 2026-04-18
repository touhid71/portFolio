import './globals.css'

export const metadata = {
  title: 'Md. Touhidul Islam | AI/ML Engineer | LLM & Agentic AI Specialist',
  description: 'AI/ML Engineer with 3.5+ years experience specializing in LLM Fine-tuning, RAG, AI Agents, and Computer Vision. Built production-ready AI systems for government projects. Open for AI Engineer roles.',
  keywords: 'AI Engineer, Machine Learning Engineer, LLM Engineer, Computer Vision, RAG, LangChain, YOLO, Generative AI, Bangladesh, Dhaka',
  authors: [{ name: 'Md. Touhidul Islam' }],
  creator: 'Md. Touhidul Islam',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body className="text-slate-300">
        {children}
      </body>
    </html>
  )
}