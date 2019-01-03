delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  alse,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 7058,
      "end": 7059,
      "loc": {
        "start": {
          "line": 235,
          "column": 38
        },
        "end": {
          "line": 235,
          "column": 39
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "value": "state",
      "start": 7059,
      "end": 7064,
      "loc": {
        "start": {
          "line": 235,
          "column": 39
        },
        "end": {
          "line": 235,
          "column": 44
        }
      }
    },
    {
      "type": {
        "label": ";",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 7064,
      "end": 7065,
      "loc": {
        "start": {
          "line": 235,
          "column": 44
        },
        "end": {
          "line": 235,
          "column": 45
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ull
      },
      "start": 54,
      "end": 55,
      "loc": {
        "start": {
          "line": 1,
          "column": 54
        },
        "end": {
          "line": 1,
          "column": 55
        }
      }
    },
    {
      "type": {
        "label": "import",
        "keyword": "import",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "import",
      "start": 57,
      "end": 63,
      "loc": {
        "start": {
          "line": 2,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 6
        }
      }
    },
    {
      "type": {
        "label": "{",
        "beforeExpr": true,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 64,
      "end": 65,
      "loc": {
        "start": {
          "line": 2,
          "column": 7
        },
        "end": {
          "line": 2,
          "column": 8
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "value": "Form",
      "start": 66,
      "end": 70,
      "loc": {
        "start": {
          "line": 2,
          "column": 9
        },
        "end": {
          "line": 2,
          "column": 13
        }
      }
    },
    {
      "type": {
        "label": ",",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 70,
      "end": 71,
      "loc": {
        "start": {
          "line": 2,
          "column": 13
        },
        "end":                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         },
      "value": "=",
      "start": 10133,
      "end": 10134,
      "loc": {
        "start": {
          "line": 335,
          "column": 60
        },
        "end": {
          "line": 335,
          "column": 61
        }
      }
    },
    {
      "type": {
        "label": "{",
        "beforeExpr": true,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 10134,
      "end": 10135,
      "loc": {
        "start": {
          "line": 335,
          "column": 61
        },
        "end": {
          "line": 335,
          "column": 62
        }
      }
    },
    {
      "type": {
        "label": "this",
        "keyword": "this",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "this",
      "start": 10135,
      "end": 10139,
      "loc": {
        "start": {
          "line": 335,
          "column": 62
        },
        "end": {
          "line": 335,
          "column": 66
        }
      }
    },
    {
      "type": {
        "label": ".",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 10139,
      "end": 10140,
      "loc": {
        "start": {
          "line": 335,
          "column": 66
        },
        "end": {
          "line": 335,
          "column": 67
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "value": "save",
      "start": 10140,
      "end": 10144,
      "loc": {
        "start": {
          "line": 335,
          "column": 67
        },
        "end": {
          "line": 335,
          "column": 71
        }
      }
    },
    {
      "type": {
        "label": ".",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "start": 10144,
      "end": 10145,
      "loc": {
        "start": {
          "line": 335,
          "column": 71
        },
        "end": {
          "line": 335,
          "column": 72
        }
      }
    },
    {
      "type": {
        "label": "name",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "value": "bind",
      "start": 10145,
      "end": 10149,
      "loc": {
        "start": {
          "line": 335,
          "column": 72
        },
        "end": {
          "line": 335,
          "column": 76
        }
      }
    },
    {
      "type": {
        "label": "(",
        "beforeExpr": true,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 10149,
      "end": 10150,
      "loc": {
        "start": {
          "line": 335,
          "column": 76
        },
        "end": {
          "line": 335,
          "column": 77
        }
      }
    },
    {
      "type": {
        "label": "this",
        "keyword": "this",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "this",
      "start": 10150,
      "end": 10154,
      "loc": {
        "start": {
          "line": 335,
          "column": 77
        },
        "end": {
          "line": 335,
          "column": 81
        }
      }
    },
    {
      "type": {
        "label": ")",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 10154,
      "end": 10155,
      "loc": {
        "start": {
          "line": 335,
          "column": 81
        },
        "end": {
          "line": 335,
          "column": 82
        }
      }
    },
    {
      "type": {
        "label": "}",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 10155,
      "end": 10156,
      "loc": {
        "start": {
          "line": 335,
          "column": 82
        },
        "end": {
          "line": 335,
          "column": 83
        }
      }
    },
    {
      "type": {
        "label": "jsxTagEnd",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 10156,
      "end": 10157,
      "loc": {
        "start": {
          "line": 335,
          "column": 83
        },
        "end": {
          "line": 335,
          "column": 84
        }
      }
    },
    {
      "type": {
        "label": "jsxText",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "\n            保存\n          ",
      "start": 10157,
      "end": 10185,
      "loc": {
        "start": {
          "line": 335,
          "column": 84
        },
        "end": {
          "line": 337,
          "column": 10
        }
      }
    },
    {
      "type": {
        "label": "jsxTagStart",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 10185,
      "end": 10186,
      "loc": {
        "start": {
          "line": 337,
          "column": 10
        },
        "end": {
          "line": 337,
          "column": 11
        }
      }
    },
    {
      "type": {
        "label": "/",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": 10,
        "updateContext": null
      },
      "value": "/",
      "start": 10186,
      "end": 10187,
      "loc": {
        "start": {
          "line": 337,
          "column": 11
        },
        "end": {
          "line": 337,
          "column": 12
        }
      }
    },
    {
      "type": {
        "label": "jsxName",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "Button",
      "start": 10187,
      "end": 10193,
      "loc": {
        "start": {
          "line": 337,
          "column": 12
        },
        "end": {
          "line": 337,
          "column": 18
        }
      }
    },
    {
      "type": {
        "label": "jsxTagEnd",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 10193,
      "end": 10194,
      "loc": {
        "start": {
          "line": 337,
          "column": 18
        },
        "end": {
          "line": 337,
          "column": 19
        }
      }
    },
    {
      "type": {
        "label": "jsxText",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "\n        ",
      "start": 10194,
      "end": 10204,
      "loc": {
        "start": {
          "line": 337,
          "column": 19
        },
        "end": {
          "line": 338,
          "column": 8
        }
      }
    },
    {
      "type": {
        "label": "jsxTagStart",
        "beforeExpr": false,
        "startsExpr": true,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null
      },
      "start": 10204,
      "end": 10205,
      "loc": {
        "start": {
          "line": 338,
          "column": 8
        },
        "end": {
          "line": 338,
          "column": 9
        }
      }
    },
    {
      "type": {
        "label": "/",
        "beforeExpr": true,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": 10,
        "updateContext": null
      },
      "value": "/",
      "start": 10205,
      "end": 10206,
      "loc": {
        "start": {
          "line": 338,
          "column": 9
        },
        "end": {
          "line": 338,
          "column": 10
        }
      }
    },
    {
      "type": {
        "label": "jsxName",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative": false,
        "isLoop": false,
        "isAssign": false,
        "prefix": false,
        "postfix": false,
        "binop": null,
        "updateContext": null
      },
      "value": "Fragment",
      "start": 10206,
      "end": 10214,
      "loc": {
        "start": {
          "line": 338,
          "column": 10
        },
        "end": {
          "line": 338,
          "column": 18
        }
      }
    },
    {
      "type": {
        "label": "jsxTagEnd",
        "beforeExpr": false,
        "startsExpr": false,
        "rightAssociative