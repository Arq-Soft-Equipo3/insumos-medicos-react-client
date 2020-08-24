import withRedirectLogic from './withRedirectLogic';
import { isAuthenticated } from '../../services/auth';

export default withRedirectLogic(isAuthenticated, '/mis-solicitudes');
