var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.968418088041485,
        "pitch": 0.13599687419040762,
        "fov": 1.5091423593016802
      },
      "linkHotspots": [
        {
          "yaw": -3.0612224965393207,
          "pitch": -0.07406533417657002,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": 0.16423221382155617,
          "pitch": 0.0004767360393262976,
          "rotation": 0,
          "target": "6-public-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-library",
      "name": "Library",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.1341026042663245,
        "pitch": 0.18360533740346874,
        "fov": 1.5091423593016802
      },
      "linkHotspots": [
        {
          "yaw": -0.8114410359540276,
          "pitch": 0.016409519147620344,
          "rotation": 0,
          "target": "2-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.381144819305895,
        "pitch": 0.17632795700854764,
        "fov": 1.5091423593016802
      },
      "linkHotspots": [
        {
          "yaw": -2.307108227562381,
          "pitch": 0.03242665570628667,
          "rotation": 0.7853981633974483,
          "target": "0-hall"
        },
        {
          "yaw": -2.633628080535381,
          "pitch": 0.027512043237589268,
          "rotation": 0,
          "target": "4-organ-room"
        },
        {
          "yaw": 2.4538310197285975,
          "pitch": 0.06525919719579854,
          "rotation": 0,
          "target": "1-library"
        },
        {
          "yaw": 1.9347168954129197,
          "pitch": -0.020363492599127397,
          "rotation": 0,
          "target": "3-media-room"
        },
        {
          "yaw": 0.4911942494741943,
          "pitch": -0.0008889235165145948,
          "rotation": 0,
          "target": "5-porch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-media-room",
      "name": "Media Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.0262285071458255,
        "pitch": 0.06890806586275744,
        "fov": 1.5091423593016802
      },
      "linkHotspots": [
        {
          "yaw": -1.7188813807116965,
          "pitch": -0.021581126302613995,
          "rotation": 0,
          "target": "2-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-organ-room",
      "name": "Organ Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.0238650361647785,
        "pitch": -0.042230668841906294,
        "fov": 1.5091423593016802
      },
      "linkHotspots": [
        {
          "yaw": -0.2788803439045804,
          "pitch": 0.00855050111842992,
          "rotation": 0,
          "target": "2-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-porch",
      "name": "Porch",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.7864639280811936,
        "pitch": -0.052063128284411064,
        "fov": 1.5091423593016802
      },
      "linkHotspots": [
        {
          "yaw": -1.0408709168509347,
          "pitch": -0.1255595807794876,
          "rotation": 0,
          "target": "6-public-room"
        },
        {
          "yaw": -2.558192612796674,
          "pitch": -0.14798917660837674,
          "rotation": 0,
          "target": "2-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-public-room",
      "name": "Public Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.7173828269434956,
        "pitch": 0.0031168636754799195,
        "fov": 1.5091423593016802
      },
      "linkHotspots": [
        {
          "yaw": -2.589880864223776,
          "pitch": -0.0013824338069685638,
          "rotation": 0,
          "target": "0-hall"
        },
        {
          "yaw": 1.625114565318972,
          "pitch": 0.028335081915621174,
          "rotation": 0,
          "target": "5-porch"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Visitor Center",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
