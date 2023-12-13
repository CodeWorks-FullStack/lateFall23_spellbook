import { AccountController } from "./controllers/AccountController.js";
import { DndSpellsController } from "./controllers/DndSpellsController.js";
import { SandboxSpellsController } from "./controllers/SandboxSpellsController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    // NOTE when working with multiple controllers, try to keep one controller as the 'primary controller', that handles as much of the drawing as possible
    controllers: [DndSpellsController, SandboxSpellsController],
    view: 'app/views/ExploreView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController, SandboxSpellsController],
    view: 'app/views/AccountView.html',
  }
])




