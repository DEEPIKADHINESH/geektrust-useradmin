import httpService from "./httpService";
import config from "../config.json";
export function getUser(userid){
    return httpService.get(config+"/"+userid)
}