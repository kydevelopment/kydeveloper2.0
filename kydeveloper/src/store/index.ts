import { IAppState } from './store'
import { rootReducer } from './store'
import { IPortfolioState } from './portfolio/portfolio.reducer';
import { IContactState } from './contact/contact.reducer';
import { IBlogState } from './blog/blog.reducer';
import { ISubscribeState } from './subscribe/subscribe.reducer';

export {
  IAppState,
  IBlogState,
  IContactState,
  IPortfolioState,
  ISubscribeState,
  rootReducer
}