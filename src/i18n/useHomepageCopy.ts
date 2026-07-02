import { useLanguage } from '../legacy-app';
import { homepageCopy, type HomepageCopy, type HomepageLocale } from './homepage';

export function useHomepageCopy(): HomepageCopy & { locale: HomepageLocale } {
  const { locale } = useLanguage();
  return { ...homepageCopy[locale as HomepageLocale], locale: locale as HomepageLocale };
}
