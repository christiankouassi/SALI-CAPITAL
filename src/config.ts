import { Language, translations } from './translations';
export type PageKey = 'main' | 'commodities' | 'dassouli' | 'digicom';

export const PAGES_CONFIG: Record<PageKey, { sections: string[] }> = {
  main: {
    sections: ['hero', 'about', 'expertise', 'contact']
  },
  commodities: {
    sections: [
      'commodities-presentation'
    ]
  },
  dassouli: {
    sections: ['dassouli-accueil', 'dassouli-biens', 'dassouli-contact']
  },
  digicom: {
    sections: [
      'digicom-presentation'
    ]
  }
};
