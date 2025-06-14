import React from "react";
import Cards from "./Cards";
import ContainerCards from "./ContainerCards";

export default function Sections() {
  return (
    <div className="relative inset-0 z-20 ">
      <h1 className="font-bold mb-2 pl-20">A minha Lista</h1>
      <ContainerCards>
        {Array.from({ length: 10 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2 pl-20">Originais Netflix</h1>
      <ContainerCards>
        {Array.from({ length: 10 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2 pl-20">Tendência geral</h1>
      <ContainerCards>
        {Array.from({ length: 10 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2 pl-20">Melhores Filmes</h1>
      <ContainerCards>
        {Array.from({ length: 10 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2 pl-20">Explosivos</h1>
      <ContainerCards>
        {Array.from({ length: 10 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2 pl-20">Rir é o melhor remédio</h1>
      <ContainerCards>
        {Array.from({ length: 10 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2 pl-20">Românticos</h1>
      <ContainerCards>
        {Array.from({ length: 10 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2 pl-20">Educativo, histórico e biográfico</h1>
      <ContainerCards>
        {Array.from({ length: 10 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
    </div>
  );
}
