import { Github, Linkedin, Mail } from "lucide-react";
import Button from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-black/10 h-200 w-full border-green-500/30 border-t mt-20">
      <div className="container mx-auto">
        <div>
          <div>
            <span>Hyalin</span>
            <span className="block text-md">Développeur React.js</span>

            <p className="text-zinc-100/80">
              Création d&paos;applications web modernes et performantes avec
              React.js, Next.js et les technologies JavaScript.
            </p>

            <div className="flex gap-4">
              <a href="">
                <Github />
              </a>
              <a href="">
                <Linkedin />
              </a>
              <a href="">
                {" "}
                <Mail />
              </a>
            </div>
          </div>

          <div>
            <ul>
              <li>Accueil</li>
              <li>Projets</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Liens externes vers les vraies site */}
          <div>
            <ul>
              <li>
                <a
                  href="https://react.dev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  React.js
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://nodejs.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Node.js
                </a>
              </li>
              <li>
                <a
                  href="https://medusajs.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Medusa.js
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span>Travaillons ensemble</span>

            <p>Un projet en tête ? Discutons-en et donnons vie à vos idées.</p>

            <Button variant="secondary">Contactez-moi</Button>
          </div>
        </div>

        {/* Copyright */}
        <div></div>
      </div>
    </footer>
  );
}
