export function Footer() {
  return (
    <footer className="py-8 px-4 border-t bg-background/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by Pratyush
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:pratyush.bidare@gmail.com"
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/Pratyush038"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pratyushbidare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
