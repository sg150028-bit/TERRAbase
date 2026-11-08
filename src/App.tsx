import { useMemo, useState } from 'react';
import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/HeroBanner';
import { MissionOverview } from '@/components/MissionOverview';
import { SiteSelector } from '@/components/SiteSelector';
import { ComparisonMatrix } from '@/components/ComparisonMatrix';
import { SiteGrid } from '@/components/SiteGrid';
import { HardwareStressTester, type StressState } from '@/components/HardwareStressTester';
import { ArchiveDecks } from '@/components/ArchiveDecks';
import { Footer } from '@/components/Footer';
import { BootLoader } from '@/components/BootLoader';
import { SiteInspectionModal } from '@/components/SiteInspectionModal';
import { analogueSites, type AnalogueSite, type Body } from '@/data/analogueSites';

const ARCHIVE_LINKS: Record<string, string> = {
  mars: 'https://terrabase-martian-archive.framer.website/',
  lunar: 'https://terrabase-lunar-archive.framer.website/',
  moon: 'https://terrabase-lunar-archive.framer.website/',
};

const initialStress: StressState = {
  payload: {
    id: 'viper-wheel',
    label: 'VIPER Lunar Rover Wheel',
    idealTemperature: -80,
    idealBasalt: 72,
    idealShielding: 3,
    baseRisk: 8,
    vector: 'Thermal fatigue at the wheel hub',
  },
  temperature: -80,
  basalt: 72,
  shielding: 3,
};

export default function App() {
  const [booted, setBooted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBody, setActiveBody] = useState<Body | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string>(() => analogueSites?.[0]?.id ?? '');
  const [stress, setStress] = useState<StressState>(initialStress);
  const [inspectSite, setInspectSite] = useState<AnalogueSite