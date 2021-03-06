import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-wiki-bridge',
  templateUrl: './wiki-bridge.component.html',
  styleUrls: ['./wiki-bridge.component.scss'],
})
export class WikiBridgeComponent implements OnInit {
  constructor() {}
  filterWiki = '';
  wikiInfo = [
    {
      id: 1,
      title: 'Activo',
      info: 'Es un derecho que se posee generalmente en forma de documentos(bonos) o bienes inmuebles (propiedades).',
    },
    {
      id: 2,
      title: 'Ahorro',
      info: 'Apartar una suma de dinero del total de los ingresos de una persona para cumplir con objetivos futuros. Es lo que guardo hoy, parainvertir mañana.',
    },
    {
      id: 3,
      title: 'Apalancamiento',
      info: 'Es la relación entre crédito y capital propio invertido en una operación financiera. Si invierto más dinero propio que prestado, estoy menos apalancado y por el contrario, si invierto más con dinero prestado que con el propio estoy más apalancado.',
    },
    {
      id: 4,
      title: 'Aversión al Riesgo',
      info: 'Actitud de rechazo que experimenta un inversor ante el riesgo financiero, en concreto, ante la posibilidad de sufrir pérdidas en el valor de sus activos. El grado de aversión al riesgo determina el perfil del inversor (se suele distinguir entre conservador, medio, arriesgado) y debe ser el punto de partida para elegir un producto de inversión.',
    },
    {
      id: 5,
      title: 'Blockchain',
      info: 'Significa “cadena de bloques” : es un sistema digital por el cual se pueden hacer transacciones seguras entre personas en todo el mundo sin necesidad de intermediarios. Es una tecnología que apunta a la descentralización como medida de seguridad. Se trata de bases de registros y datos distribuidos y compartidos con la función de crear un índice global para todas las transacciones que se generan en un determinado mercado. Funciona como un libro-razón, sólo que de forma pública, compartida y universal, que crea consenso y confianza en la comunicación directa entre dos partes, o sea, sin la intermediación de terceros. Su sistema es inviolable',
    },
    {
      id: 6,
      title: 'Capital',
      info: ' Es el total de recursos físicos y financieros que posee una entidad económica, obtenidos mediante aportes de los socios o accionistas, para generar beneficios o ganancias',
    },
    {
      id: 7,
      title: 'Comunidad de inversores',
      info: 'Es un conjunto de personas que conforman un grupo orientado a llevar adelante inversiones de forma comunitaria, es decir, que los intereses individuales estén reforzados por la solidez comunitaria, a manera de sociedad',
    },
    {
      id: 8,
      title: 'Criptodivisas',
      info: 'También llamadas criptomonedas, son dinero digital. Las más conocidas son Bitcoin y Ethereum, pero existen muchas otras disponibles en el mercado, incluso se siguen creando nuevas. Su uso es cada vez más extendido, así como la cantidad de usuarios es cada día mayor en número y en volumen de dinero operado en el mercado global',
    },
    {
      id: 9,
      title: 'Deuda',
      info: 'La deuda es una obligación que tiene una persona física o jurídica para cumplir sus compromisos de pago',
    },
    {
      id: 10,
      title: 'Diversificación financiera',
      info: 'Es el proceso mediante el cual los individuos o sociedades reducen el riesgo de sus inversiones a traves de la colocación de sus recursos en títulos con características diversas',
    },
    {
      id: 11,
      title: 'Estrategias de inversión',
      info: 'Determina en qué activos debe invertir un individuo según sus objetivos, necesidades y capital disponible',
    },
    {
      id: 12,
      title: 'Flipping',
      info: 'Es un término utilizado principalmente en USA para describir la compra de un activo generador de ingresos y revenderlo rapidamente con fines de lucro. Aunque se puede aplicar a cualquier activo, el término se utiliza con mayor frecuencia en el negocio de inmuebles/bienes raíces. Flipping houses se utiliza como sinónimo de fix and flip.',
    },
    {
      id: 13,
      title: 'Flipper',
      info: 'Se refiere a aquel que compra una casa a bajo costo, la remodela y luego la vende. Es quien se dedica al negocio del flipping o fix and flip y lo lleva adelante en todo su proceso.',
    },
    {
      id: 14,
      title: 'Flix & Flip',
      info: ' Se refiere al negocio de comprar casas en USA para su posterior remodelación y reventa, en un corto lapso de tiempo (normalmente entre 4 y 6 meses) para obtener el mayor margen de ganancia posible.',
    },
    {
      id: 15,
      title: 'Ganancia',
      info: 'Es básicamente un mayor grado de ingresos sobre los gastos realizados en una inversión',
    },
    {
      id: 16,
      title: 'Ganancia bruta',
      info: ' Es la diferencia entre los ingresos totales de una compañía o venta de sus productos y servicios, y los costos directos asociados con la venta de esos productos y/o servicios. La ganancia bruta se determina tomando los ingresos de las ventas totales y restando el costo de los artículos.',
    },
    {
      id: 17,
      title: 'Interés',
      info: 'Es el lucro obtenido a partir de un capital, la ganancia o utilidad que se puede sacar sobre una inversión o bien aportado',
    },
    {
      id: 18,
      title: 'Liquidez',
      info: ' Es la capacidad que tiene un individuo, empresa o entidad para obtener dinero para sus obligaciones a corto plazo',
    },
    {
      id: 19,
      title: 'Real Estate',
      info: 'Se refiere a bienes inmuebles o bienes raíces, es decir, invertir en bienes de posición fija, ya sea para construcción o adquisición de inmuebles como para su revalorización y/o obtención de renta',
    },
    {
      id: 20,
      title: 'Renta Fija',
      info: ' Una renta es fija porque el rendimiento obtenido es siempre el mismo, ya sea de forma mensual, semestral, anual, étc. Por ejemplo el arrendamiento de una vivienda o el interés obtenido por un préstamo otorgado',
    },
    {
      id: 21,
      title: 'Renta Variable',
      info: 'Es un tipo de inversión en la que la recuperación del capital y la rentabilidad no están garantizados; puede ser nula o mucho mayor a la renta fija. Un claro ejemplo son las acciones en bolsa.',
    },
    {
      id: 22,
      title: 'Riesgo de inversión',
      info: 'La inversión es más riesgosa cuando más variable es el rendimiento que podemos esperar de la misma. En este sentido, riesgo es sinónimo de volatilidad',
    },
    {
      id: 23,
      title: 'ROI (retorno sobre la inversión, por sus siglas en inglés)',
      info: 'Es un indicador que permite saber cuánto dinero ganó o perdió una empresa en relación a todas las inversiones realizadas (proyectos, anuncios, entrenamientos, étc.) El Roi se obtiene mediante la siguiente fórmula: (Ganancia - Inversión ) / Inversión. Si el resultado es menor a 0, la inversión tiene retorno negativo; caso contrario, el retorno es positivo y por lo tanto hay utilidades',
    },
    {
      id: 24,
      title: 'Stablecoin',
      info: ' Es un tipo de criptomoneda que siempre tiene un precio estable. Este tipo de criptomonedas se crean para enfrentar el escenario inestable del mercado criptográfico y garantizar un terreno estable para todos. Dos ejemplos de stablecoins son Tether y Dai',
    },
    {
      id: 25,
      title: 'Token',
      info: 'Es una unidad de valor que una organización crea para gobernar su modelo de negocio y dar más poder a sus usuarios para interactuar con sus productos, al tiempo que facilita la distribución y reparto de beneficios entre todos sus accionistas. Es, por lo tanto, más que una moneda ya que tiene más usos, además de ser seguro ya que la mayoría de los tokens se asientan sobre el protocolo inviolable de la tecnología blockchain',
    },
  ];
  ngOnInit(): void {}
  setLetter(letter:any) {
    this.filterWiki = letter;
  }
}
