db.createCollection(
    "pacientes",
    { validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["nombre", "apellidos", "fechaNac", "direccion"],
                properties: {
                    nombre: {
                      bsonType: "string",
                      description: "debe ser un string y es obligatorio" 
                    },
                    apellidos: {
                      bsonType: "string",
                      description: "debe ser un string y es obligatorio" 
                    },
                    fechaNac: {
                      bsonType: "date",
                      description: "debe ser un date y es obligatorio" 
                    },
                    direccion: {
                        bsonType: "object",
                        required: ["calle","cp","localidad"],
                        properties: {
                            calle: {
                                bsonType: "string",
                                description: "debe ser un string y es obligatorio"
                            },
                            cp: {
                                bsonType: "string",
                                description: "debe ser un string y es obligatorio"
                            },
                            localidad: {
                                bsonType: "string",
                                description: "debe ser un string y es obligatorio"
                            }
                        }
                    }
                }
            }
        }
    }
)