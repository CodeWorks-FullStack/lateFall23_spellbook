import { AccountController } from "./controllers/AccountController.js";
import { DndSpellsController } from "./controllers/DndSpellsController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [DndSpellsController],
    view: 'app/views/ExploreView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




