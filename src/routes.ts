import { Router } from "express";
import { ensureClientAuthenticated } from "./middlewares/ensureClientAuthenticated";
import { ensureDeliverymanAuthenticated } from "./middlewares/ensureDeliverymanAuthenticated";
import { AuthenticateClientController } from "./modules/account/useCases/AuthenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/AuthenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/CreateClient/CreateClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableDeliveriesController } from "./modules/deliveries/useCases/findAllAvailableDeliveries/FindAllAvailableDeliveriesController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliverymanDeliveriesController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliverymanDeliveriesController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableDeliveries = new FindAllAvailableDeliveriesController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllClientDeliveriesController = new FindAllDeliveriesController();
const findAllDeliverymanController =
  new FindAllDeliverymanDeliveriesController();

routes.post("/client", createClientController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);
routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);

routes.post(
  "/delivery",
  ensureClientAuthenticated,
  createDeliveryController.handle
);
routes.put(
  "/delivery/updateDeliveryman/:id",
  ensureDeliverymanAuthenticated,
  updateDeliverymanController.handle
);
routes.get(
  "/deliveries",
  ensureDeliverymanAuthenticated,
  findAllAvailableDeliveries.handle
);
routes.get(
  "/client/deliveries",
  ensureClientAuthenticated,
  findAllClientDeliveriesController.handle
);
routes.get(
  "/deliveryman/deliveries",
  ensureDeliverymanAuthenticated,
  findAllDeliverymanController.handle
);

export { routes };
