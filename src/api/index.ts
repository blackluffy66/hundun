import { Router } from 'express';
import yiYan from './routes/yiYan';
import ddXw from './routes/ddXw';
import ddFactory from './routes/ddFactory';
import jxFactory from './routes/jxFactory';
import jxStory from './routes/jxStory';
import jxFactoryTuan from './routes/jxFactoryTuan';
import shiCi from './routes/shiCi';
import jxCfd from './routes/jxCfd';
import agendash from './routes/agendash';

export default () => {
	const app = Router();
	ddXw(app);
	ddFactory(app);
	jxFactory(app);
	yiYan(app);
	jxFactoryTuan(app);
  shiCi(app);
  jxCfd(app);
	jxStory(app);
	agendash(app);

	return app
}
