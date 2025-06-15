import { uiInterface } from "../assets";
import { Button } from "./Button";
import { Container } from "./Container";
import { Grid } from "./theme/Hero";

export const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative z-10 pt-10 lg:py-16 space-y-16">
        <div className="text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7">
          <h1 className="hero">
            Gérez votre{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
              stock
            </span>{" "}
            et boostez vos{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2">
              ventes
            </span>{" "}
            avec GestiCom
          </h1>
          <p className="body-1 text-n-5">
            Simplifiez la gestion de vos stocks et augmentez vos ventes grâce à
            une plateforme intuitive pensée pour les commerçants et
            e-commerçants.
          </p>
          <Button theme="primary" href="/#pricing">
            Découvrir nos offres
          </Button>
        </div>
        <img src={uiInterface} alt="Illustration interface GestiCom" />
      </Container>
      <Grid />
    </div>
  );
};
