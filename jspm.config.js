SystemJS.config({
  devConfig: {
    'map': {
      'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.22.0',
      'babel-plugin-angular2-annotations': 'npm:babel-plugin-angular2-annotations@5.1.0',
      'babel-plugin-transform-es2015-typeof-symbol': 'npm:babel-plugin-transform-es2015-typeof-symbol@6.22.0',
      'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
      'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.22.0'
    },
    'packages': {
      'npm:babel-plugin-angular2-annotations@5.1.0': {
        'map': {
          'babel-generator': 'npm:babel-generator@6.22.0'
        }
      },
      'npm:babel-plugin-transform-flow-strip-types@6.22.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.22.0',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.18.0'
        }
      },
      'npm:babel-plugin-transform-class-properties@6.22.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.22.0',
          'babel-template': 'npm:babel-template@6.22.0',
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.22.0',
          'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.13.0'
        }
      },
      'npm:babel-plugin-transform-es2015-typeof-symbol@6.22.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.22.0'
        }
      },
      'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.22.0',
          'babel-template': 'npm:babel-template@6.22.0',
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.13.0'
        }
      },
      'npm:babel-generator@6.22.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.22.0',
          'babel-messages': 'npm:babel-messages@6.22.0',
          'babel-types': 'npm:babel-types@6.22.0',
          'detect-indent': 'npm:detect-indent@4.0.0',
          'jsesc': 'npm:jsesc@1.3.0',
          'lodash': 'npm:lodash@4.17.4',
          'source-map': 'npm:source-map@0.5.6'
        }
      },
      'npm:babel-runtime@6.22.0': {
        'map': {
          'core-js': 'npm:core-js@2.4.1',
          'regenerator-runtime': 'npm:regenerator-runtime@0.10.1'
        }
      },
      'npm:babel-template@6.22.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.22.0',
          'babel-types': 'npm:babel-types@6.22.0',
          'lodash': 'npm:lodash@4.17.4',
          'babel-traverse': 'npm:babel-traverse@6.22.1',
          'babylon': 'npm:babylon@6.15.0'
        }
      },
      'npm:babel-helper-function-name@6.22.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.22.0',
          'babel-template': 'npm:babel-template@6.22.0',
          'babel-types': 'npm:babel-types@6.22.0',
          'babel-helper-get-function-arity': 'npm:babel-helper-get-function-arity@6.22.0',
          'babel-traverse': 'npm:babel-traverse@6.22.1'
        }
      },
      'npm:babel-messages@6.22.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.22.0'
        }
      },
      'npm:babel-types@6.22.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.22.0',
          'lodash': 'npm:lodash@4.17.4',
          'to-fast-properties': 'npm:to-fast-properties@1.0.2',
          'esutils': 'npm:esutils@2.0.2'
        }
      },
      'npm:babel-helper-get-function-arity@6.22.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.22.0',
          'babel-types': 'npm:babel-types@6.22.0'
        }
      },
      'npm:babel-traverse@6.22.1': {
        'map': {
          'babel-messages': 'npm:babel-messages@6.22.0',
          'babel-runtime': 'npm:babel-runtime@6.22.0',
          'babel-types': 'npm:babel-types@6.22.0',
          'lodash': 'npm:lodash@4.17.4',
          'babylon': 'npm:babylon@6.15.0',
          'invariant': 'npm:invariant@2.2.2',
          'babel-code-frame': 'npm:babel-code-frame@6.22.0',
          'debug': 'npm:debug@2.6.0',
          'globals': 'npm:globals@9.14.0'
        }
      },
      'npm:detect-indent@4.0.0': {
        'map': {
          'repeating': 'npm:repeating@2.0.1'
        }
      },
      'npm:repeating@2.0.1': {
        'map': {
          'is-finite': 'npm:is-finite@1.0.2'
        }
      },
      'npm:babel-code-frame@6.22.0': {
        'map': {
          'esutils': 'npm:esutils@2.0.2',
          'js-tokens': 'npm:js-tokens@3.0.0',
          'chalk': 'npm:chalk@1.1.3'
        }
      },
      'npm:invariant@2.2.2': {
        'map': {
          'loose-envify': 'npm:loose-envify@1.3.1'
        }
      },
      'npm:is-finite@1.0.2': {
        'map': {
          'number-is-nan': 'npm:number-is-nan@1.0.1'
        }
      },
      'npm:loose-envify@1.3.1': {
        'map': {
          'js-tokens': 'npm:js-tokens@3.0.0'
        }
      },
      'npm:debug@2.6.0': {
        'map': {
          'ms': 'npm:ms@0.7.2'
        }
      },
      'npm:chalk@1.1.3': {
        'map': {
          'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
          'has-ansi': 'npm:has-ansi@2.0.0',
          'strip-ansi': 'npm:strip-ansi@3.0.1',
          'supports-color': 'npm:supports-color@2.0.0',
          'ansi-styles': 'npm:ansi-styles@2.2.1'
        }
      },
      'npm:has-ansi@2.0.0': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.1.1'
        }
      },
      'npm:strip-ansi@3.0.1': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.1.1'
        }
      }
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'ts'
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    'sourceMap': true,
    'emitDecoratorMetadata': true,
    'experimentalDecorators': true,
    'removeComments': false,
    'noImplicitAny': false
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    '@angular/common': 'npm:@angular/common@2.4.5',
    '@angular/compiler': 'npm:@angular/compiler@2.4.5',
    '@angular/core': 'npm:@angular/core@2.4.5',
    '@angular/http': 'npm:@angular/http@2.4.5',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.4.5',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.4.5',
    '@angular/router': 'npm:@angular/router@3.4.5',
    '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap@1.0.0-alpha.19',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'bootstrap-less': 'github:distros/bootstrap-less@3.3.9',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'core-js': 'npm:core-js@2.4.1',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'net': 'github:jspm/nodelibs-net@0.2.0-alpha',
    'ng2-bootstrap': 'npm:ng2-bootstrap@1.3.1',
    'ng2-table': 'npm:ng2-table@1.3.2',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.9',
    'rxjs': 'npm:rxjs@5.0.3',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'timers': 'github:jspm/nodelibs-timers@0.2.0-alpha',
    'ts': 'github:frankwallis/plugin-typescript@5.1.2',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'zone.js': 'npm:zone.js@0.7.6',
    '@angular/forms': 'npm:@angular/forms@2.4.5'
  },
  packages: {
    'github:frankwallis/plugin-typescript@5.1.2': {
      'map': {
        'typescript': 'npm:typescript@2.1.5'
      }
    },
    'npm:typescript@2.1.5': {
      'map': {
        'source-map-support': 'npm:source-map-support@0.4.10'
      }
    },
    'npm:source-map-support@0.4.10': {
      'map': {
        'source-map': 'npm:source-map@0.5.6'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.2.2'
      }
    },
    'npm:readable-stream@2.2.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'isarray': 'npm:isarray@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'string_decoder': 'npm:string_decoder@0.10.31'
      }
    },
    'github:jspm/nodelibs-timers@0.2.0-alpha': {
      'map': {
        'timers-browserify': 'npm:timers-browserify@1.4.2'
      }
    },
    'npm:timers-browserify@1.4.2': {
      'map': {
        'process': 'npm:process@0.11.9'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'randombytes': 'npm:randombytes@2.0.3',
        'pbkdf2': 'npm:pbkdf2@3.0.9'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'base64-js': 'npm:base64-js@1.2.0',
        'ieee754': 'npm:ieee754@1.1.8'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'sha.js': 'npm:sha.js@2.4.8'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'elliptic': 'npm:elliptic@6.3.2',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:pbkdf2@3.0.9': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'asn1.js': 'npm:asn1.js@4.9.1'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'elliptic': 'npm:elliptic@6.3.2',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:sha.js@2.4.8': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.6'
      }
    },
    'npm:elliptic@6.3.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.6',
        'hash.js': 'npm:hash.js@1.0.3'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:asn1.js@4.9.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'npm:rxjs@5.0.3': {
      'map': {
        'symbol-observable': 'npm:symbol-observable@1.0.4'
      }
    },
    'github:distros/bootstrap-less@3.3.9': {
      'map': {
        'jquery': 'github:components/jquery@3.1.1'
      }
    },
    'npm:ng2-bootstrap@1.3.1': {
      'map': {
        'moment': 'npm:moment@2.17.1'
      }
    }
  }
});
