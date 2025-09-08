import React from 'react';
import ItemProduto, {Produto}from './ItemProduto';

const ListaDeProdutos: React.FC = () => {
    
    
const produto1:Produto= {
    nome: "Bolo de banana",
    preco: 3500.00,
    descricao: "Bolo de banana",
    imagem: "https://s2-receitas.glbimg.com/fpO3o5m1si9lgEZiZCxb5F2q3yA=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2025/0/E/wRmhOFTFSvY3zvHrAYIg/bolo-de-banana-receita.jpg",
    alt: "Bolo de banana alt"
};

const produto2:Produto= {
    nome: "Bolo de cenoura",
    preco: 3500.00,
    descricao: "Bolo de cenoura",
    imagem: "https://guiadacozinha.com.br/wp-content/uploads/2024/05/bolodecenoura-350x230.jpg",
    alt: "Bolo de cenoura alt"
};
const produto3:Produto= {
    nome: "Bolo de coco",
    preco: 3500.00,
    descricao: "Bolo de coco",
    imagem: "https://guiadacozinha.com.br/wp-content/uploads/2019/11/bolo-coco-embrulhado.jpg",
    alt: "Bolo de coco alt"
};

    return (<div>
    <h1>Catálogo de Bolos</h1>
    <ul>
        <ItemProduto produto={produto1}></ItemProduto>
        <ItemProduto produto={produto2}></ItemProduto>
        <ItemProduto produto={produto3}></ItemProduto>
        
    </ul>
    </div>);
};

export default ListaDeProdutos;