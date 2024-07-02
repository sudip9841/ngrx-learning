import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export class TranslateLoaderFactor{
    static forModule(module:string='',path:string='../../assets/i18n/',extension:string='.json'):any{
        return function httpTranslateLoader(http:HttpClient){
            let modulePath = path;
            if(module){
                modulePath = `${modulePath}${module}/`;
            }
            console.log("module path",modulePath)
            return new TranslateHttpLoader(http,modulePath,extension);
        }
    }
}