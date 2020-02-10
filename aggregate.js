// Agregacion

db.resultados.aggregate([
    {
        $addFields: {
            tiempo: {
                $subtract: ["$llegada", new Date("2020-01-30T12:00:00")]
            }
        }
    },
    {
        $addFields: {
            segundos: {
                $mod: [{$divide: ["$tiempo",1000]}, 60]
            }
        }
    },
    {
        $addFields: {
            minutos: {
                $floor: {
                    $mod: [{$divide: ["$tiempo", 1000 * 60]}, 60]
                }
            }
        }
    },
    {
        $addFields: {
            horas: {
                $floor: {
                    $mod: [{$divide: ["$tiempo", 1000*60*60]}, 24]
                }
            }
        }
    },
    {
        $project: {
            nombre: 1, horas: 1, minutos: 1, segundos: 1, _id: 0
        }
    },
    {$sort: {horas: 1, minutos: 1, segundos: 1}}
])

