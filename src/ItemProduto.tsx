import React from 'react';


export type Produto = {
    nome: string;
    preco: number;
    descricao: string;
    imagem: string;
    alt: string;
};

type ItemProdutoProps = {
    produto: Produto;
};

const ItemProduto: React.FC<ItemProdutoProps> = ({ produto }) => {
    return (
        <li style={{ border: "1px solid #ccc", padding: "16px", margin: "8px", listStyle: "none", maxWidth: "350px" }}>
            <img src={produto.imagem} alt={produto.alt} style={{ width: "100%", height: "auto", marginBottom: "8px" }} />
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <strong>R$ {produto.preco.toFixed(2)}</strong>
        </li>
    );
};

export default ItemProduto;