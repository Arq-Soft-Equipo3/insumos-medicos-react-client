import negate from 'lodash.negate';
import withRedirectLogic from './withRedirectLogic';
import { isAuthenticated } from '../../services/auth';

export default withRedirectLogic(negate(isAuthenticated), '/login');
