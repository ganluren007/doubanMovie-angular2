import { httpService } from "./jsonp.service";
import { carousels } from "./carousels.service";

export { httpService, carousels };

export const providers = [httpService, carousels];
