// Edit this file to change the catalog. Each product's `colors` drive the generated artwork.
export const categories = [
  { slug: 'camisas', name: 'Camisas', tagline: 'Algodão, linho e tricoline' },
  { slug: 'calcas', name: 'Calças', tagline: 'Alfaiataria e sarja' },
  { slug: 'polos', name: 'Polos', tagline: 'Piquet e malha fina' },
  { slug: 'blazers', name: 'Blazers', tagline: 'Estrutura leve' },
  { slug: 'acessorios', name: 'Acessórios', tagline: 'Cintos, bonés e mais' },
]

export const products = [
  { id: 'camisa-linho-areia', name: 'Camisa Linho Areia', category: 'camisas', price: 289.9, oldPrice: 349.9, colors: ['#d8c7a8', '#b9a27c'], sizes: ['P','M','G','GG'], tag: 'Novo', description: 'Camisa em linho puro com caimento solto e botões de madrepérola. Ideal para dias quentes.' },
  { id: 'camisa-oxford-azul', name: 'Camisa Oxford Azul', category: 'camisas', price: 239.9, colors: ['#9fb4cc', '#6f88a6'], sizes: ['P','M','G','GG'], description: 'Oxford clássico com gola de botão. Versátil do escritório ao fim de semana.' },
  { id: 'camisa-listrada-verde', name: 'Camisa Listrada Oliva', category: 'camisas', price: 259.9, colors: ['#b7bf9a', '#7d8660'], sizes: ['M','G','GG'], tag: 'Mais vendido', description: 'Tricoline com listras finas em tom oliva e modelagem slim.' },
  { id: 'calca-alfaiataria-grafite', name: 'Calça Alfaiataria Grafite', category: 'calcas', price: 399.9, colors: ['#5b5d61', '#3a3b3e'], sizes: ['38','40','42','44','46'], description: 'Alfaiataria com elastano, pences frontais e barra italiana.' },
  { id: 'calca-sarja-caramelo', name: 'Calça Sarja Caramelo', category: 'calcas', price: 279.9, oldPrice: 329.9, colors: ['#c49a6c', '#99714a'], sizes: ['38','40','42','44'], tag: 'Oferta', description: 'Sarja macia com lavagem enzimática e corte chino.' },
  { id: 'polo-piquet-marinho', name: 'Polo Piquet Marinho', category: 'polos', price: 189.9, colors: ['#2f3e5a', '#1d283c'], sizes: ['P','M','G','GG'], description: 'Piquet 100% algodão com acabamento em ribana.' },
  { id: 'polo-tricot-off', name: 'Polo Tricot Off-White', category: 'polos', price: 229.9, colors: ['#ece6da', '#cfc6b4'], sizes: ['P','M','G'], tag: 'Novo', description: 'Tricot leve de fio egípcio com gola italiana.' },
  { id: 'blazer-linho-cru', name: 'Blazer Linho Cru', category: 'blazers', price: 699.9, colors: ['#e2d6bf', '#bfae8c'], sizes: ['48','50','52','54'], description: 'Blazer desestruturado em linho, sem forro, para um visual elegante e leve.' },
  { id: 'blazer-azul-noite', name: 'Blazer Azul Noite', category: 'blazers', price: 749.9, colors: ['#26324a', '#141b29'], sizes: ['48','50','52','54'], tag: 'Mais vendido', description: 'Lã fria com dois botões e lapela entalhada.' },
  { id: 'cinto-couro-cafe', name: 'Cinto Couro Café', category: 'acessorios', price: 149.9, colors: ['#6b4a33', '#45301f'], sizes: ['85','90','95','100'], description: 'Couro legítimo com fivela escovada.' },
  { id: 'bone-sarja-areia', name: 'Boné Sarja Areia', category: 'acessorios', price: 99.9, colors: ['#d2c3a3', '#a9987a'], sizes: ['Único'], description: 'Boné de sarja com fecho ajustável em metal.' },
  { id: 'polo-listrada-vinho', name: 'Polo Listrada Vinho', category: 'polos', price: 199.9, oldPrice: 239.9, colors: ['#7a2f3a', '#4f1d25'], sizes: ['P','M','G','GG'], tag: 'Oferta', description: 'Malha fina listrada com modelagem regular.' },
]

export const formatPrice = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
