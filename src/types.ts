export type Language = 'en' | 'ar';

export interface FleetItem {
  id: number;
  nameEn: string;
  nameAr: string;
  category: 'earthmoving' | 'excavator' | 'trenching' | 'trucks' | 'road' | 'power_telecom';
  quantity: number;
  brand?: string;
  capacity?: string;
  image?: string;
  descriptionEn: string;
  descriptionAr: string;
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleAr: string;
  category: string;
  summaryEn: string;
  summaryAr: string;
  descriptionEn: string;
  descriptionAr: string;
  featuresEn: string[];
  featuresAr: string[];
  image: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'trenching' | 'fiber' | 'asphalt' | 'earthmoving' | 'electrical';
  locationEn: string;
  locationAr: string;
  image: string;
  descriptionEn: string;
  descriptionAr: string;
}

export interface ManpowerItem {
  roleEn: string;
  roleAr: string;
  count: number;
  category: 'operators' | 'technical' | 'supervisory' | 'general';
}

export interface ClientPartner {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  logo: string;
  featured?: boolean;
}
