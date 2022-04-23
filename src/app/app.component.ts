import { Component, OnInit } from '@angular/core';;
import { AppThemeSwitchService } from './core/services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private unsubscribe!: () => void;

    constructor(
        private appThemeSwitchService: AppThemeSwitchService
    ) {}

    ngOnInit(): void {
        this.appThemeSwitchService.isSystemPreferenceOn$
            .subscribe(
                (isSystemPreferenceOn) => {
                    if (isSystemPreferenceOn) {
                        this.unsubscribe = this.appThemeSwitchService.sync();
                    } else {
                        this.unsubscribe?.();
                    }
                }
            )
    }
}