pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "Estacionamiento",
        "sceneFadeDuration": 1000
    },
    "autoLoad": true,
    "hotSpotDebug": true,
    "scenes": {
        "Estacionamiento": {
            "title": "Estacionamiento",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010042_20220505112732.JPG",
            "hotSpots": [
                {
                    "pitch": -3.7,
                    "yaw": -358.8,
                    "type": "scene",
                    "text": "Entrada Principal",
                    "sceneId": "Entrada_Principal"
                }
            ]
        },

        "Entrada_Principal": {
            "title": "Lobby",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "fotos360/R0010043_20220505112828.JPG",
            "hotSpots": [
                {
                    "pitch": -2.4,
                    "yaw": -184.6,
                    "type": "scene",
                    "text": "Estacionamiento",
                    "sceneId": "Estacionamiento",
                },
                {
                    "pitch": -3.4,
                    "yaw": -1.4,
                    "type": "scene",
                    "text": "Pasillo Principal",
                    "sceneId": "Pasillo_Principal",
                },
            ]
        },
        "Pasillo_Principal": {
            "title": "Pasillo Principal",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010045_20220505113000.JPG",
            "hotSpots": [
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Lobby",
                    "sceneId": "Lobby"
                },
                {
                    "pitch": -9.6,
                    "yaw": -62.1,
                    "type": "info",
                    "text": "Ascensor"
                },
                {
                    "pitch": -4.0,
                    "yaw": -20.0,
                    "type": "scene",
                    "text": "Escaleras",
                    "sceneId": "Escaleras_Primer_Piso"
                },
            ]
        },
        "Escaleras_Primer_Piso": {
            "title": "Escaleras Primer Piso",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/foto4.JPG",
            "hotSpots": [
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Lobby",
                    "sceneId": ""
                },
                {
                    "pitch": -9.6,
                    "yaw": -62.1,
                    "type": "info",
                    "text": "NADA"
                },
                
            ]
        },
        "foto1": {
            "title": "Escaleras Primer Piso",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/foto4.JPG",
            "hotSpots": [
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Lobby",
                    "sceneId": ""
                },
                {
                    "pitch": -9.6,
                    "yaw": -62.1,
                    "type": "info",
                    "text": "NADA"
                },
                
            ]
        },
        "foto2": {
            "title": "Escaleras Primer Piso",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/foto4.JPG",
            "hotSpots": [
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Lobby",
                    "sceneId": ""
                },
                {
                    "pitch": -9.6,
                    "yaw": -62.1,
                    "type": "info",
                    "text": "NADA"
                },
                
            ]
        },
        "foto3": {
            "title": "Escaleras Primer Piso",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/foto4.JPG",
            "hotSpots": [
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Lobby",
                    "sceneId": ""
                },
                {
                    "pitch": -9.6,
                    "yaw": -62.1,
                    "type": "info",
                    "text": "NADA"
                },
                
            ]
        },
        "foto4": {
            "title": "Escaleras Primer Piso",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/foto4.JPG",
            "hotSpots": [
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Lobby",
                    "sceneId": ""
                },
                {
                    "pitch": -9.6,
                    "yaw": -62.1,
                    "type": "info",
                    "text": "NADA"
                },
                
            ]
        },
    }
});