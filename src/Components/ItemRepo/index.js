import React from "react";

import { ItemContainer } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  console.log('aqui', repo)
  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.description}</h3>
      <p>{repo.full_nam}</p>
      <a href={repo.clone_url} rel="noreferrer" target="_blank">
        Ver repositório
      </a>
      <br />
      <a href="() => false}" rel="noreferrer" className="remover">
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
