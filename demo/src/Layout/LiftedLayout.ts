import createMount from 'uplay/Mount';
import TabbedLayout from './TabbedLayout';

const {
  Mount,
  Ported,
} = createMount();

export { Mount };
export default Ported(TabbedLayout);
