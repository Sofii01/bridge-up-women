declare const __SHEETS_URL__: string;


export const environment = {
  production: true,
  sheetsUrl: typeof __SHEETS_URL__ !== 'undefined' ? __SHEETS_URL__ : '',
};
