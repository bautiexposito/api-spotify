## API con express creada con NodeJS

Desarrollado por: Matías Uriel Blanco

Descripción
Este proyecto expone dos endpoints para consultar canciones desde un servicio externo (MockAPI). Se pueden realizar búsquedas utilizando distintos parámetros como nombre, nombre_artista, genero, y reproducciones, o bien obtener una canción específica mediante su id.

Endpoints
1. Obtener todas las canciones (GET)
Este endpoint devuelve una lista de canciones, y permite aplicar filtros opcionales utilizando parámetros de consulta.

URL: /api/canciones
Método: GET
    Query Params Opcionales:
    
    nombre	| Filtro por nombre de la canción | /api/canciones?nombre=Rich%20Girl
    nombre_artista | Filtro por nombre del artista | /api/canciones?nombre_artista=John
    genero | Filtro por género de la canción | /api/canciones?genero=Pop
    reproducciones | Filtro por número de reproducciones de la canción | /api/canciones?reproducciones=1000

    Ejemplo de solicitud:
    GET /api/canciones?nombre=Take%20On%20Me&genero=Pop

    Respuestas:
    200 - OK: La solicitud fue exitosa y devuelve la lista de canciones filtradas.
        
        {
            "msg": "Ok",
            "data": [...]
        }
    400 - Bad Request: Hubo un error en la solicitud.

        {
            "msg": "Error",
            "error": {...}
        }

2. Obtener una canción por ID (GET)
Este endpoint devuelve los detalles de una canción específica utilizando su id.

URL: /api/canciones/{id}
Método: GET
Parámetro de ruta:

id | El ID único de la canción a buscar | /api/canciones/1

    Ejemplo de solicitud:
    GET /api/canciones/1
    Respuestas:
    200 - OK: La solicitud fue exitosa y devuelve los detalles de la canción.

        {
            "msg": "Ok",
            "data": {...}
        }
    400 - Bad Request: Hubo un error en la solicitud.

        {
            "msg": "Error",
            "error": {...}
        }