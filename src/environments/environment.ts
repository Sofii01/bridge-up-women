declare const __SHEETS_URL__: string;
declare const __INSCRIPCION_URL__: string;

export const environment = {
  production: false,
  sheetsUrl: typeof __SHEETS_URL__ !== 'undefined' ? __SHEETS_URL__ : '',
  inscripcionUrl: typeof __INSCRIPCION_URL__ !== 'undefined' ? __INSCRIPCION_URL__ : '',
};
