'use strict';

const { simplifySpelling } = require('../js/app')

test('LaLetra_v SeConvierteEn_b', () => {
  return simplifySpelling('venta VENTA') === 'benta BENTA'
})

test('LaLetra_z SeConvierteEn_s', () => {
  return simplifySpelling('zapato ZAPATO') === 'sapato SAPATO'
})

test('SeEliminaLa_h_Muda', () => {
  return simplifySpelling('hora HORA') === 'ora ORA'
})

test('PalabrasQueEmpiezanCon_Ha_He_Hi_Ho_Hu SeConvierteEn_A_E_I_O_U', () => {
  return simplifySpelling('Haber Helado Higo Hongo Hugo') === 'Aber Elado Igo Ongo Ugo'
})

test('EnPalabrasQueContienen_ch_SeConservaLa_h', () => {
  return simplifySpelling('chita CHITA Chita') === 'chita CHITA Chita'
})

test('LaCombinacion_gue SeConvierteEn_ge', () => {
  return simplifySpelling('guerra GUERRA Guerra') === 'gerra GERRA Gerra'
})

test('LaCombinacion_gué SeConvierteEn_gé', () => {
  return simplifySpelling('llegué LLEGUÉ Gué...') === 'llegé LLEGÉ Gé...'
})

test('LaCombinacion_gui SeConvierteEn_gi', () => {
  return simplifySpelling('guitarra GUITARRA Guitarra') === 'gitarra GITARRA Gitarra'
})

test('LaCombinacion_guí SeConvierteEn_gí', () => {
  return simplifySpelling('guía GUÍA Guí...') === 'gía GÍA Gí...'
})

test('LaCombinacion_ge SeConvierteEn_je', () => {
  return simplifySpelling('ingeniería INGENIERÍA Gemelo') === 'injeniería INJENIERÍA Jemelo'
})

test('LaCombinacion_gé SeConvierteEn_jé', () => {
  return simplifySpelling('género GÉNERO Génesis') === 'jénero JÉNERO Jénesis'
})

test('LaCombinacion_gi SeConvierteEn_ji', () => {
  return simplifySpelling('agitar AGITAR Ginete') === 'ajitar AJITAR Jinete'
})

test('LaCombinacion_gí SeConvierteEn_jí', () => {
  return simplifySpelling('logística LOGÍSTICA Gíralo') === 'lojística LOJÍSTICA Jíralo'
})

function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
}

