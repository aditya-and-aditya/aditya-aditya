import React from 'react';
import AuthorityStrategy from './hexadon/Authority';
import PersonaInfrastructure from './hexadon/Persona';
import PresenceLayer from './hexadon/Presense';
import StrategicInsights from './hexadon/Insights';
import BrandingPhilosophy from './hexadon/Branding';
import EmergentUX from './hexadon/ux-xc';

// 1. Types for type safety
export type PillarMeta = {
  id: number;
  slug: string;
  title: string;
  short: string;
};

export type PillarContent = {
  title: string;
  heroDescription: string;
  fullJSX: React.ReactNode; 
};

// 2. The lightweight array for your Main Page Hexagon & Grid
export const PILLARS_META: PillarMeta[] = [
  { id: 0, slug: 'authority', title: 'Authority', short: 'Making Customers Experience Both the Art and the Craft of Your Product.' },
  { id: 1, slug: 'persona', title: 'Persona', short: 'Removing Cluelessness from Intelligent Systems.' },
  { id: 2, slug: 'presence', title: 'Presence', short: 'How Clienting Tech Meets the World.' },
  { id: 3, slug: 'insights', title: 'Insights', short: 'The Intelligence of the Entire Customer Base.' },
  { id: 4, slug: 'branding', title: 'Branding', short: 'Why an Unbranded System Is Garbage.' },
  { id: 5, slug: 'ux-cx', title: 'UX / Customer Experience', short: 'The Emergent Property of an Intelligent Clienting System.' },
];

export const PILLARS_CONTENT: Record<string, PillarContent> = {
  'authority': {
    title: 'Authority',
    heroDescription: 'Making your platform the definitive place where customers can fully experience both the art and the craft of your product before they buy.',
    fullJSX: <AuthorityStrategy />
  },

  'persona': {
    title: 'Persona',
    heroDescription: 'A living, testable model of an individual customer’s context, intent, and constraints, continuously refined through interaction.',
    fullJSX: <PersonaInfrastructure />
  },

  'presence': {
    title: 'Presence',
    heroDescription: 'How your clienting technology exists outside itself—how it shows up, adapts, and interacts across every customer entry point.',
    fullJSX: <PresenceLayer />
  },

  'insights': {
    title: 'Insights',
    heroDescription: 'Scaling Persona to the population level to detect patterns, cultural shifts, and latent needs before they are articulated.',
    fullJSX: <StrategicInsights />
  },

  'branding': {
    title: 'Branding',
    heroDescription: 'The coherent philosophy and moral stance implicitly embedded into the defaults, constraints, and tone of the clienting experience.',
    fullJSX: <BrandingPhilosophy />
  },

  'ux-cx': {
    title: 'UX / Customer Experience',
    heroDescription: 'The behavioral surface that naturally emerges when friction is removed through Authority, Persona, Presence, Insights, and Branding working together.',
    fullJSX: <EmergentUX />
  }
};