pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "Estacionamiento",
        "sceneFadeDuration": 1000
    },
    "autoLoad": true,
    "hotSpotDebug": false,
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
            "title": "Entrada Principal",
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
                    "text": "Entrada Principal",
                    "sceneId": "Entrada_Principal"
                },
                {
                    "pitch": -1.9,
                    "yaw":  5.3,
                    "type": "scene",
                    "text": "Pasillo Principal(Cafetin)",
                    "sceneId": "Pasillo_Principal(Cafetin)"
                },
            ]
        },
        "Pasillo_Principal(Cafetin)": {
            "title": "Pasillo Principal(Cafetin)",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010046_20220505113141.JPG",
            "hotSpots": [
                {
                    "pitch": -7.3,
                    "yaw": 17.3,
                    "type": "scene",
                    "text": "Pasillo oficinas administrativas",
                    "sceneId": "Pasillo_oficinas_administrativas"
                },
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Pasillo Principal",
                    "sceneId": "Pasillo_Principal"
                },
                
            ]
        },
        "Pasillo_oficinas_administrativas": {
            "title": "Pasillo oficinas administrativas",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010047_20220505113227.JPG",
            "hotSpots": [
                {
                    "pitch": -4.9,
                    "yaw": -2.1,
                    "type": "scene",
                    "text": "Pasillo oficinas administrativas",
                    "sceneId": "Pasillo_oficinas_administrativas2"
                },
                {
                    "pitch": -2.9,
                    "yaw": -271.8,
                    "type": "scene",
                    "text": "Pasillo Principal(Cafetin)",
                    "sceneId": "Pasillo_Principal(Cafetin)"
                },
                
            ]
        },
        "Pasillo_oficinas_administrativas2": {
            "title": "Pasillo oficinas administrativas",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010048_20220505113431.JPG",
            "hotSpots": [
                {
                    "pitch": -11.5,
                    "yaw": 27.3,
                    "type": "scene",
                    "text": "Entrada oficinas administrativas",
                    "sceneId": "Entrada_oficinas_administrativas"
                },
                {
                    "pitch": -4.1,
                    "yaw": 268.5,
                    "type": "scene",
                    "text": "Pasillo oficinas administrativas",
                    "sceneId": "Pasillo_oficinas_administrativas"
                },
                
            ]
        },
        "Entrada_oficinas_administrativas": {
            "title": "Entrada oficinas administrativas",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010049_20220505113613.JPG",
            "hotSpots": [
                {
                    "pitch": -9.0,
                    "yaw": -4.0,
                    "type": "scene",
                    "text": "oficinas administrativas",
                    "sceneId": "oficinas_administrativas"
                },
                {
                    "pitch": -19.0,
                    "yaw": 108.7,
                    "type": "scene",
                    "text": "Pasillo oficinas administrativas",
                    "sceneId": "Pasillo_oficinas_administrativas2"
                },
                
            ]
        },
        "oficinas_administrativas": {
            "title": "Oficinas administrativas",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010051_20220505113933.JPG",
            "hotSpots": [
                {
                    "pitch": -6.7,
                    "yaw": -34.9,
                    "type": "scene",
                    "text": "salon de conferencias",
                    "sceneId": "salon_de_conferencias"
                },
                {
                    "pitch": -12.1,
                    "yaw": 140.0,
                    "type": "scene",
                    "text": "Entrada oficinas administrativas",
                    "sceneId": "Entrada_oficinas_administrativas"
                },
                
            ]
        },
        "salon_de_conferencias": {
            "title": "Salon de conferencias",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010054_20220505114225.JPG",
            "hotSpots": [
                {
                    "pitch": -9.2,
                    "yaw": -6.7,
                    "type": "scene",
                    "text": "salon A1",
                    "sceneId": "salonA1"
                },
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Oficinas Administrativas",
                    "sceneId": "oficinas_administrativas"
                },
                
            ]
        },
        "salonA1": {
            "title": "Salon A1",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010055_20220505114507.JPG",
            "hotSpots": [
                {
                    "pitch": -4.1,
                    "yaw": -14.2,
                    "type": "scene",
                    "text": "Coordinación Fisc",
                    "sceneId": "coordinacion_fisc"
                },
                {
                    "pitch": -8.0,
                    "yaw": 165.8,
                    "type": "scene",
                    "text": "Salon de Conferencias",
                    "sceneId": "salon_de_conferencias"
                },
                
            ]
        },
        "coordinacion_fisc": {
            "title": "coordinación_fisc",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010056_20220505114648.JPG",
            "hotSpots": [
                {
                    "pitch": -4.7,
                    "yaw": -15.9,
                    "type": "scene",
                    "text": "salones A2 y A3",
                    "sceneId": "salonesA2yA3"
                },
                {
                    "pitch": -5.9,
                    "yaw":  163.2,
                    "type": "scene",
                    "text": "Salon A1",
                    "sceneId": "salonA1"
                },
                
            ]
        },
        "salonesA2yA3": {
            "title": "Salones A2y A3",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010058_20220505114855.JPG",
            "hotSpots": [
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "laboratorio cisco",
                    "sceneId": "laboratorio_cisco"
                },
                {
                    "pitch": -7.3,
                    "yaw": 351.4,
                    "type": "scene",
                    "text": "Coordinacion Fisc",
                    "sceneId": "coordinacion_fisc"
                },
                
            ]
        },
        "laboratorio_cisco": {
            "title": "Laboratorio Cisco",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010059_20220505115104.JPG",
            "hotSpots": [
                {
                    "pitch": -12.9,
                    "yaw": -11.5,
                    "type": "scene",
                    "text": "Laboratorio A",
                    "sceneId": "laboratorioA"
                },
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "salones A2 y A3",
                    "sceneId": "salonesA2yA3"
                },
                
            ]
        },
        "laboratorioA": {
            "title": "Laboratorio A",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010060_20220505115226.JPG",
            "hotSpots": [
                {
                    "pitch": -13.8,
                    "yaw": -130.2,
                    "type": "scene",
                    "text": "Laboratorio A",
                    "sceneId": "laboratorioAa"
                },
                {
                    "pitch": -7.1,
                    "yaw":  355.2,
                    "type": "scene",
                    "text": "Coordinacion Laboratorios Computo",
                    "sceneId": "coordinacion_laboratorios_computo"
                },
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Laboratorio Cisco",
                    "sceneId": "laboratorio_cisco"
                },
                
            ]
        },
        "laboratorioAa": {
            "title": "Laboratorio A",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010066_20220506091833.JPG",
            "hotSpots": [
                {
                    "pitch": -13.8,
                    "yaw": -18.5,
                    "type": "scene",
                    "text": "salida",
                    "sceneId": "laboratorioA"
                },
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "laboratorio A",
                    "sceneId": "laboratorioA"
                },
                
            ]
        },
        "coordinacion_laboratorios_computo": {
            "title": "Coordinacion Laboratorios Computo",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010061_20220505115345.JPG",
            "hotSpots": [
                {
                    "pitch": -9.2,
                    "yaw": -27.9,
                    "type": "scene",
                    "text": "Laboratorio B",
                    "sceneId": "laboratorioB"
                },    
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Laboratorio A",
                    "sceneId": "laboratorioA"
                },         
            ]
        },
        "laboratorioB": {
            "title": "Laboratorio B",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010067_20220506091947.JPG",
            "hotSpots": [
                {
                    "pitch": -8.7,
                    "yaw": -7.2,
                    "type": "scene",
                    "text": "Salida",
                    "sceneId": "coordinacion_internet"
                },         
            ]
        },
        "coordinacion_internet": {
            "title": "Coordinacion Internet",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010062_20220505115428.JPG",
            "hotSpots": [
                {
                    "pitch": -8.1,
                    "yaw": -16.1,
                    "type": "scene",
                    "text": "Laboratorio Vipe",
                    "sceneId": "laboratorioVipe"
                },
                {
                    "pitch": -12.5,
                    "yaw": -275.1,
                    "type": "info",
                    "text": "Coordinación de Internet"
                }, 
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Coordinacion Laboratorios Computo",
                    "sceneId": "coordinacion_laboratorios_computo"
                },
                
                
            ]
        },
        "laboratorioVipe": {
            "title": "Laboratorio Vipe",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010063_20220505115513.JPG",
            "hotSpots": [
                {
                    "pitch": -9.7,
                    "yaw": -97.6,
                    "type": "scene",
                    "text": "laboratorio_VIPE",
                    "sceneId": "laboratorio_VIPE"
                },    
                {
                    "pitch":  -3.3,
                    "yaw": -5.4,
                    "type": "scene",
                    "text": "Zona Externa",
                    "sceneId": "Zona_Externa"
                },    
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Coordinacion Internet",
                    "sceneId": "coordinacion_internet"
                },        
            ]
        },
        "laboratorio_VIPE": {
            "title": "Laboratorio VIPE",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010041_20220505111018.JPG",
            "hotSpots": [
                {
                    "pitch": -6.4,
                    "yaw": -41.5,
                    "type": "scene",
                    "text": "pasillo",
                    "sceneId": "laboratorioVipe"
                },
            ]
        },
        "Zona_Externa": {
            "title": "Zona Externa",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "fotos360/R0010064_20220505115726.JPG",
            "hotSpots": [
                {
                    "pitch": -4.6,
                    "yaw": 174.7,
                    "type": "scene",
                    "text": "Pasillo",
                    "sceneId": "laboratorioVipe"
                },
                
            ]
        },
    }
});