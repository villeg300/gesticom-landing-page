import { Container } from "./Container";
import { branding } from "../constants";

export const Branding = () => {
  return (
    <Container>
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-8">
        <h2 className="h3 font-semibold text-white">
          Connecté avec vos outils préférés
        </h2>
        <p className="text-n-5">
          GestiCom s’intègre facilement avec les plateformes et services que
          vous utilisez déjà.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between lg:gap-1 max-w-5xl w-full mx-auto py-5 lg:py-10">
        {branding.map((brand, idx) => (
          <div
            key={brand.id}
            className={` w-1/2 flex justify-center sm:w-1/2 md:w-1/4 lg:w-1/6 lg:p-1
              ${
                branding.length % 2 !== 0 && idx === branding.length - 1
                  ? "hidden lg:flex"
                  : ""
              }
              `}
          >
            <img src={brand.image} alt={brand.alt} width={180} height={96} />
          </div>
        ))}
      </div>
    </Container>
  );
};
