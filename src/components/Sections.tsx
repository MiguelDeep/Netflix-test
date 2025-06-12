import React from "react";
import Cards from "./Cards";
import ContainerCards from "./ContainerCards";

export default function Sections() {
  return (
    <div className="ml-10 mr-10 p-6 ">
      <h1 className="font-bold mb-2">A minha Lista</h1>
      <ContainerCards>
        {Array.from({ length: 6 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2">A minha Lista</h1>
      <ContainerCards>
        {Array.from({ length: 6 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2">A minha Lista</h1>
      <ContainerCards>
        {Array.from({ length: 6 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
      <h1 className="font-bold mb-2">A minha Lista</h1>
      <ContainerCards>
        {Array.from({ length: 6 }).map((_, i) => (
          <Cards key={i} />
        ))}
      </ContainerCards>
    </div>
  );
}
