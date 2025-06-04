use("sistema_entregas");

db.entregas.insertOne({
  _id: "entrega_001",
  cliente_id: "cliente_123",
  origem: {
    endereco: "Rua das Flores, 123",
    cidade: "São Paulo",
    estado: "SP"
  },
  destino: {
    endereco: "Av. Brasil, 456",
    cidade: "Rio de Janeiro",
    estado: "RJ"
  },
  status: "em trânsito",
  data_coleta: new Date("2025-06-04T10:00:00Z"),
  data_entrega: null
});
