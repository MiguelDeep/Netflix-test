import React from "react";
import Cards from "./Cards";
import ContainerCards from "./ContainerCards";

export default function Sections() {
  return (
    <div className="ml-10 mr-10 p-6 ">
      <h1 className="font-bold mb-2">A minha Lista</h1>
      <ContainerCards>
        {Array.from({ length: 10 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2">Originais Netflix</h1>
      <ContainerCards>
        {Array.from({ length: 6 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2">Tendência geral</h1>
      <ContainerCards>
        {Array.from({ length: 6 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2">Melhores Filmes</h1>
      <ContainerCards>
        {Array.from({ length: 6 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2">Explosivos</h1>
      <ContainerCards>
        {Array.from({ length: 6 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2">Rir é o melhor remédio</h1>
      <ContainerCards>
        {Array.from({ length: 6 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2">Românticos</h1>
      <ContainerCards>
        {Array.from({ length: 6 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2">Educativo, histórico e biográfico</h1>
      <ContainerCards>
        {Array.from({ length: 6 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
    </div>
  );
}
