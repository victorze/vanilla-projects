'use strict';

function simplifySpelling(text) {
  return text.replace(
      /([vV]|[zZ]|H[aeiou]|[hH]|(ch|CH|Ch)|(gu[eé]|GU[EÉ]|Gu[eé])|(gu[ií]|GU[IÍ]|Gu[ií])|(g[eé]|G[EÉ]|G[eé])|(g[ií]|G[IÍ]|G[ií]))/g, str => {
    if (str == 'v') return 'b'
    else if (str == 'V') return 'B'
    else if (str == 'z') return 's'
    else if (str == 'Z') return 'S'
    else if (str == 'h') return ''
    else if (str == 'H') return ''
    else if (str == 'Ha') return 'A'
    else if (str == 'He') return 'E'
    else if (str == 'Hi') return 'I'
    else if (str == 'Ho') return 'O'
    else if (str == 'Hu') return 'U'
    else if (str == 'ch') return 'ch'
    else if (str == 'CH') return 'CH'
    else if (str == 'Ch') return 'Ch'
    else if (str == 'gue') return 'ge'
    else if (str == 'gué') return 'gé'
    else if (str == 'GUE') return 'GE'
    else if (str == 'GUÉ') return 'GÉ'
    else if (str == 'Gue') return 'Ge'
    else if (str == 'Gué') return 'Gé'
    else if (str == 'gui') return 'gi'
    else if (str == 'guí') return 'gí'
    else if (str == 'GUI') return 'GI'
    else if (str == 'GUÍ') return 'GÍ'
    else if (str == 'Gui') return 'Gi'
    else if (str == 'Guí') return 'Gí'
    else if (str == 'ge') return 'je'
    else if (str == 'gé') return 'jé'
    else if (str == 'Ge') return 'Je'
    else if (str == 'Gé') return 'Jé'
    else if (str == 'GE') return 'JE'
    else if (str == 'GÉ') return 'JÉ'
    else if (str == 'gi') return 'ji'
    else if (str == 'gí') return 'jí'
    else if (str == 'Gi') return 'Ji'
    else if (str == 'Gí') return 'Jí'
    else if (str == 'GI') return 'JI'
    else if (str == 'GÍ') return 'JÍ'
  })
}

if (typeof module !== 'undefined') {
  module.exports = {
    simplifySpelling
  }
}

