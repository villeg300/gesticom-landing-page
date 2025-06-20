import { icoArrowRight } from "../assets";
import { Button } from "./Button";
import { Container } from "./Container";

export const CallToAction = ({ minify = false }) => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-5 lg:py-10">
        <div
          className={`
          rounded-xl lg:rounded-3xl bg-gradient-to-tl from-p-3 to-p-4 p-6 lg:p-16 gap-8
          ${
            !minify
              ? "flex flex-col items-center"
              : "flex flex-col items-center justify-between lg:flex lg:flex-row lg:items-center"
          }
          `}
        >
          <div
            className={
              minify
                ? "scroll-py-1 text-center lg:text-start"
                : "space-y-4 text-center"
            }
          >
            <div className="caption-1 text-n-1/50">
              Prêt à simplifier votre gestion ?
            </div>
            <h3 className="h3">
              Essayez gratuitement GestiCom dès aujourd’hui
            </h3>
          </div>
          <Button
            theme="primary"
            className="flex items-center justify-center gap-1"
          >
            <span>Commencer maintenant</span>
            <img
              src={icoArrowRight}
              alt="Flèche vers la droite"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </Container>
  );
};
