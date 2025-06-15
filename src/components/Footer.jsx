import { social } from "../constants";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <div className="bg-n-7 py-5 lg:py-12 mt-5 lg:mt-16">
      <Container className="flex flex-col gap-3 lg:flex-row lg:gap-1 items-center justify-between body-3 text-n-3">
        <div className="flex items-center gap-4">
          {social.map((link) => (
            <a
              key={link.id}
              title={link.alt}
              href={link.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={link.ico} alt={link.alt} width={20} height={20} />
            </a>
          ))}
        </div>
        <div className="space-x-4">
          <a href="/#" target="_blank" rel="noreferrer">
            Term & conditions
          </a>
          <a href="/#" target="_blank" rel="noreferrer">
            Privacy policy
          </a>
          <a href="/#" target="_blank" rel="noreferrer">
            FaQ
          </a>
        </div>
        <div>
          &copy; 2025 All rights reserved{" "}
          <a href="/#" target="_blank" rel="noreferrer">
            GestiCom
          </a>
        </div>
      </Container>

      {/* LIGNE DE SÉPARATION */}
      <Container>
        <hr className="border-t mt-7 mb-4 lg:mt-16 lg:mb-8 border-n-6" />
      </Container>

      {/* SECTION DU DÉVELOPPEUR */}
      <Container>
        <div className="flex flex-col items-center justify-center text-center text-n-3 space-y-2">
          <p className="body-3">
            Développé apar{" "}
            <span className="font-semibold">Ludovic Moyenga</span>
          </p>
          <div className="flex gap-4">
            {social
              .filter(
                (link) => link.alt === "Facebook" || link.alt === "Linkedin"
              )
              .map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  title={link.alt}
                >
                  <img src={link.ico} alt={link.alt} width={20} height={20} />
                </a>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
