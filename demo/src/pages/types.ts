import { PageName } from '../constants/PageName';

export interface PageProps {
  setPage: (pageName: PageName) => void;
}
