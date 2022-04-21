import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLangSwitchComponent } from './app-lang-switch.component';

describe('AppLangSwitchComponent', () => {
    let component: AppLangSwitchComponent;
    let fixture: ComponentFixture<AppLangSwitchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppLangSwitchComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppLangSwitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
