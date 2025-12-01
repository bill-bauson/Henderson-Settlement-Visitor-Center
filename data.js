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
        "pitch": 0.0,
        "fov": 1.0
      },
	  "cam_x": 611,
	  "cam_y": 168,
	  "yaw_offset": 0,
      "linkHotspots": [
        {
          "yaw": -3.0612224965393207,
          "pitch": 0.0,
          "rotation": 0,
          "target": "2-lobby",
		  "nextViewParameters": {
			"yaw": 1.57,
			"pitch": 0.0,
			"fov": 1.0
		  }
        },
        {
          "yaw": 0.16423221382155617,
          "pitch": 0.0,
          "rotation": 0,
          "target": "6-public-room",
		  "nextViewParameters": {
			"yaw": 0.0,
			"pitch": 0.0,
			"fov": 1.0
		  }
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
        "pitch": 0.0,
        "fov": 1.0
      },
	  "cam_x": 297,
	  "cam_y": 98,
	  "yaw_offset": 1.57,	  
      "linkHotspots": [
        {
          "yaw": -0.8114410359540276,
          "pitch": 0.0,
          "rotation": 0,
          "target": "2-lobby",
		  "nextViewParameters": {
			"yaw": 0.0,
			"pitch": 0.0,
			"fov": 1.0
		  }
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
        "pitch": 0.0,
        "fov": 1.0
      },
	  "cam_x": 483,
	  "cam_y": 251,
	  "yaw_offset": 1.57,	  
      "linkHotspots": [
        {
          "yaw": -2.307108227562381,
          "pitch": 0.0,
          "rotation": 0.7853981633974483,
          "target": "0-hall",
		  "nextViewParameters": {
			"yaw": 0.5,
			"pitch": 0.0,
			"fov": 1.0
		  }
        },
        {
          "yaw": -2.633628080535381,
          "pitch": 0.0,
          "rotation": 0,
          "target": "4-organ-room",
		  "nextViewParameters": {
			"yaw": 3.14,
			"pitch": 0.0,
			"fov": 1.0
		  }
        },
        {
          "yaw": 2.4538310197285975,
          "pitch": 0.0,
          "rotation": 0,
          "target": "1-library",
		  "nextViewParameters": {
			"yaw": 3.14,
			"pitch": 0.0,
			"fov": 1.0
		  }
        },
        {
          "yaw": 1.9347168954129197,
          "pitch": 0.0,
          "rotation": 0,
          "target": "3-media-room",
		  "nextViewParameters": {
			"yaw": 0.7,
			"pitch": 0.0,
			"fov": 1.0
		  }
        },
        {
          "yaw": 0.4911942494741943,
          "pitch": 0.0,
          "rotation": 0,
          "target": "5-porch",
		  "nextViewParameters": {
			"yaw": 1.4,
			"pitch": 0.0,
			"fov": 1.0
		  }
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
        "pitch": 0.0,
        "fov": 1.0
      },
	  "cam_x": 50,
	  "cam_y": 163,
	  "yaw_offset": 2.0,	  
      "linkHotspots": [
        {
          "yaw": -1.7188813807116965,
          "pitch": 0.0,
          "rotation": 0,
          "target": "2-lobby",
		  "nextViewParameters": {
			"yaw": -1.57,
			"pitch": 0.0,
			"fov": 1.0
		  }
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
        "pitch": 0.0,
        "fov": 1.0
      },
	  "cam_x": 508,
	  "cam_y": 94,
	  "yaw_offset": 1.57,	  
      "linkHotspots": [
        {
          "yaw": -0.2788803439045804,
          "pitch": 0.0,
          "rotation": 0,
          "target": "2-lobby",
		  "nextViewParameters": {
			"yaw": 0.0,
			"pitch": 0.0,
			"fov": 1.0
		  }		  
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
        "pitch": 0.0,
        "fov": 1.0
      },
	  "cam_x": 592,
	  "cam_y": 360,
	  "yaw_offset": 0,	  
      "linkHotspots": [
        {
          "yaw": -1.0408709168509347,
          "pitch": 0.0,
          "rotation": 0,
          "target": "6-public-room",
		  "nextViewParameters": {
			"yaw": -1.57,
			"pitch": 0.0,
			"fov": 1.0
		  }		  
        },
        {
          "yaw": -2.558192612796674,
          "pitch": 0.0,
          "rotation": 0,
          "target": "2-lobby",
		  "nextViewParameters": {
			"yaw": 3.14,
			"pitch": 0.0,
			"fov": 1.0
		  }
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
        "pitch": 0.0,
        "fov": 1.0
      },
	  "cam_x": 705,
	  "cam_y": 263,
	  "yaw_offset": 0,	  
      "linkHotspots": [
        {
          "yaw": -2.589880864223776,
          "pitch": 0.0,
          "rotation": 0,
          "target": "0-hall",
		  "nextViewParameters": {
			"yaw": 3.0,
			"pitch": 0.0,
			"fov": 1.0
		  }		  
        },
        {
          "yaw": 1.625114565318972,
          "pitch": 0.0,
          "rotation": 0,
          "target": "5-porch",
		  "nextViewParameters": {
			"yaw": 1.2,
			"pitch": 0.0,
			"fov": 1.0
		  }
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
