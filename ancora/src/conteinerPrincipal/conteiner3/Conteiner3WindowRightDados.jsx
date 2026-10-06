import { useState } from "react";
import "./css/Conteiner3WindowRightDados.css"
import Image from "../../assets/image_card.png"
import { useUserStore } from "../../useUseSotore";
export default function Conteiner3WindowRightDadosPedidos ({dados}) {
    const {urlBancoDeDados} = useUserStore()
    const getUrlVideo = (url) => {
      if (!url) return "";
        // Verifica se a URL já começa com http ou https
        const isUrlCompleta = url.startsWith("http://") || url.startsWith("https://");
        
        return isUrlCompleta ? url : `${urlBancoDeDados}/${url}`;
      };

    return (
                <div className="Conteiner3WindowRightScrollPedidosDados">
                    <div className="Conteiner3WindowRightScrollPedidosDadosBox1">
                        <img src={getUrlVideo(dados.imagem_produto)} alt="" />
                    </div>
                    <div className="Conteiner3WindowRightScrollPedidosDadosBox2">
                        <h4> {dados.nome_produto} </h4>
                        {/* <b className="nameUserProduectPedido">Loja-1</b> */}
                        <h4><b> {dados.preco_produto} </b> <li> {dados.data_envio_produto} </li></h4>
                    </div>
                    <div className="Conteiner3WindowRightScrollPedidosDadosBox3">
                        <button>Cancelar</button>
                        <button> {dados.estado_entrega} </button>
                        <button>conversar</button>
                    </div>
                </div>
    )
}
