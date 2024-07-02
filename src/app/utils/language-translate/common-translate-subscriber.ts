import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LangTranslateService } from "src/app/shared/services/lang-translate/lang-translate.service";
import { LocalStorageService } from "src/app/shared/services/local-storage/local-storage.service";

@Injectable({
    providedIn:'any'
})
export class CommonTranslateSubscriber{
    constructor(
        private langTranslateService:LangTranslateService,
        private localStorageService: LocalStorageService,
        private translateService: TranslateService
    ) {
        console.log("inside common translate subscriber");
        this.langTranslateService.currentLang$.pipe().subscribe((res: any) => {
            this.translateService.currentLang = '';
            this.localStorageService.setLanguageKey(res);
            this.translateService.use(res);
        });
    }

}